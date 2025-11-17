import { supabase } from '@/lib/supabase'

export interface Job {
  id: string
  title: string
  description: string
  company_id: string
  companies: {
    name: string
    logo_url: string
    headquarters_location: string
  }
  remote_level: 'remote' | 'hybrid' | 'onsite'
  job_type: 'full-time' | 'part-time' | 'contract'
  location: string
  salary_min: number
  salary_max: number
  salary_currency: string
  required_tech_stack: string[]
  experience_level: string
  posting_date: string
  created_at: string
  application_url?: string
}

export interface SavedJob {
  id: string
  job_id: string
  user_id: string
  saved_at: string
  notes: string
  priority: number
  jobs: Job
}

export interface JobApplication {
  id: string
  job_id: string
  user_id: string
  status: 'applied' | 'interviewing' | 'rejected' | 'offered' | 'accepted'
  applied_at: string
  cover_letter: string
  notes: string
  follow_up_date: string
  interview_date: string
  offer_details: any
  jobs: Job
}

export class JobService {
  // NEW: Logo URL validation and storage methods
  private static isValidLogoUrl(url?: string): boolean {
    if (!url || url.trim() === '') return false;
    
    // Check if it's a real image URL or just an example
    const invalidDomains = [
      'placeholder.example.com',
      'example.com',
      'your-domain.com',
      'placeholder.com',
      'via.placeholder.com' // We'll use our own fallback instead
    ];
    
    return !invalidDomains.some(domain => url.includes(domain));
  }

  private static getFallbackLogoUrl(companyName: string): string {
    const initial = companyName.charAt(0).toUpperCase();
    const colors = [
      '3B82F6', 'EF4444', '10B981', 'F59E0B', '8B5CF6', 
      'EC4899', '06B6D4', '84CC16', 'F97316', '6366F1'
    ];
    const color = colors[companyName.charCodeAt(0) % colors.length];
    
    return `https://via.placeholder.com/100x100/${color}/FFFFFF?text=${initial}`;
  }

  // NEW: Get logo URL with Supabase Storage fallback
  private static async getLogoUrl(companyName: string, currentLogoUrl?: string): Promise<string> {
    // If current URL is valid, use it
    if (this.isValidLogoUrl(currentLogoUrl)) {
      return currentLogoUrl!;
    }

    // Try to find in Supabase Storage
    const storageUrl = await this.findLogoInStorage(companyName);
    if (storageUrl) {
      return storageUrl;
    }

    // Fallback to placeholder
    return this.getFallbackLogoUrl(companyName);
  }

  // NEW: Check if logo exists in Supabase Storage
  private static async findLogoInStorage(companyName: string): Promise<string | null> {
    try {
      const fileName = this.generateStorageFileName(companyName);
      
      // Check if file exists by trying to get its URL
      const { data: { publicUrl } } = supabase.storage
        .from('logos')
        .getPublicUrl(fileName);

      // Test if the URL is accessible (with timeout)
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000);
      
      try {
        const response = await fetch(publicUrl, { 
          method: 'HEAD',
          signal: controller.signal 
        });
        clearTimeout(timeoutId);
        
        if (response.ok) {
          return publicUrl;
        }
      } catch {
        // If fetch fails, the logo doesn't exist
        clearTimeout(timeoutId);
      }
      
      return null;
    } catch (error) {
      console.error('Error checking storage for logo:', error);
      return null;
    }
  }

  // NEW: Generate consistent file name for storage lookup
  private static generateStorageFileName(companyName: string): string {
    return companyName
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '') + '.png';
  }

  // UPDATED: getJobs with async logo URL resolution
  static async getJobs(filters?: any): Promise<Job[]> {
    let query = supabase
      .from('jobs')
      .select(`
        *,
        companies (
          name,
          logo_url,
          headquarters_location
        )
      `)
      .eq('status', 'active')

    // Apply filters if provided
    if (filters?.searchQuery) {
      query = query.textSearch('title', filters.searchQuery)
    }

    if (filters?.remoteOptions?.length) {
      query = query.in('remote_level', filters.remoteOptions)
    }

    if (filters?.jobTypes?.length) {
      query = query.in('job_type', filters.jobTypes)
    }

    if (filters?.techStack?.length) {
      query = query.overlaps('required_tech_stack', filters.techStack)
    }

    // LOCATION FILTER
    if (filters?.locations?.length) {
      const locationConditions = filters.locations.map((location: any) => 
        `location.ilike.%${location}%,companies.headquarters_location.ilike.%${location}%`
      ).join(',')
      
      query = query.or(locationConditions)
    }

    const { data, error } = await query

    if (error) {
      console.error('Error fetching jobs:', error)
      return []
    }

    // Use Promise.all to handle async logo URL resolution
    const jobsWithLogos = await Promise.all(
      (data || []).map(async (job) => {
        const finalLogoUrl = await this.getLogoUrl(
          job.companies?.name || 'Company', 
          job.companies?.logo_url
        );
        
        console.log('🔍 Job logo debug:', {
          company: job.companies?.name,
          originalLogo: job.companies?.logo_url,
          finalLogo: finalLogoUrl
        });
        
        return {
          ...job,
          companies: {
            ...job.companies,
            logo_url: finalLogoUrl,
          }
        };
      })
    );

    return jobsWithLogos
  }

  // UPDATED: SEARCH JOBS METHOD with async logo URLs
  static async searchJobs(searchQuery: string): Promise<Job[]> {
    if (!searchQuery.trim()) {
      return this.getJobs()
    }

    const { data, error } = await supabase
      .from('jobs')
      .select(`
        *,
        companies (
          name,
          logo_url,
          headquarters_location
        )
      `)
      .eq('status', 'active')
      .or(`title.ilike.%${searchQuery}%,description.ilike.%${searchQuery}%,companies.name.ilike.%${searchQuery}%`)

    if (error) {
      console.error('Error searching jobs:', error)
      return []
    }

    // Use Promise.all to handle async logo URL resolution
    const jobsWithLogos = await Promise.all(
      (data || []).map(async (job) => {
        const finalLogoUrl = await this.getLogoUrl(
          job.companies?.name || 'Company', 
          job.companies?.logo_url
        );
        
        return {
          ...job,
          companies: {
            ...job.companies,
            logo_url: finalLogoUrl,
          }
        };
      })
    );

    return jobsWithLogos
  }

  // SAVE JOB FUNCTIONALITY (unchanged)
  static async saveJob(userId: string, jobId: string, notes: string = ''): Promise<boolean> {
    console.log('💾 Saving job:', { userId, jobId, notes })
    
    try {
      const { error } = await supabase
        .from('user_saved_jobs')
        .insert([
          {
            user_id: userId,
            job_id: jobId,
            notes,
          },
        ])

      if (error) {
        console.error('❌ Error saving job:', error)
        return false
      }
      
      console.log('✅ Job saved successfully')
      return true
    } catch (error) {
      console.error('❌ Unexpected error saving job:', error)
      return false
    }
  }

  static async unsaveJob(userId: string, jobId: string): Promise<boolean> {
    console.log('🗑️ Unsaving job:', { userId, jobId })
    
    try {
      const { error } = await supabase
        .from('user_saved_jobs')
        .delete()
        .eq('user_id', userId)
        .eq('job_id', jobId)

      if (error) {
        console.error('❌ Error unsaving job:', error)
        return false
      }
      
      console.log('✅ Job unsaved successfully')
      return true
    } catch (error) {
      console.error('❌ Unexpected error unsaving job:', error)
      return false
    }
  }

  // UPDATED: GET SAVED JOBS with async logo URLs
  static async getSavedJobs(userId: string): Promise<SavedJob[]> {
    try {
      console.log('🔄 Fetching saved jobs for user:', userId)
      
      // First, get the saved job IDs
      const { data: savedData, error: savedError } = await supabase
        .from('user_saved_jobs')
        .select('*')
        .eq('user_id', userId)
        .order('saved_at', { ascending: false })

      if (savedError) {
        console.error('❌ Error fetching saved job records:', savedError)
        return []
      }

      console.log('📋 Saved job records:', savedData)

      if (!savedData || savedData.length === 0) {
        console.log('ℹ️ No saved jobs found for user')
        return []
      }

      // Then, get the actual job details for each saved job
      const jobIds = savedData.map(item => item.job_id)
      const { data: jobsData, error: jobsError } = await supabase
        .from('jobs')
        .select(`
          *,
          companies (
            name,
            logo_url,
            headquarters_location
          )
        `)
        .in('id', jobIds)

      if (jobsError) {
        console.error('❌ Error fetching job details:', jobsError)
        return []
      }

      console.log('💼 Job details found:', jobsData?.length || 0)

      // Combine the data with proper logo handling
      const combinedData = await Promise.all(
        savedData.map(async (savedItem) => {
          const job = jobsData?.find(j => j.id === savedItem.job_id)
          if (!job) return null;

          const finalLogoUrl = await this.getLogoUrl(
            job.companies?.name || 'Company',
            job.companies?.logo_url
          );

          return {
            ...savedItem,
            jobs: {
              ...job,
              companies: {
                ...job.companies,
                logo_url: finalLogoUrl,
              }
            }
          };
        })
      );

      const filteredData = combinedData.filter(item => item !== null) as SavedJob[];
      console.log('🎯 Combined saved jobs:', filteredData);
      return filteredData;

    } catch (error) {
      console.error('❌ Unexpected error in getSavedJobs:', error)
      return []
    }
  }

  // UPDATED: APPLICATION TRACKING WITH COMPREHENSIVE DEBUGGING
  static async applyToJob(
    userId: string, 
    jobId: string, 
    coverLetter: string = '', 
    notes: string = ''
  ): Promise<boolean> {
    console.log('🔍 DEBUG applyToJob - Starting:', { userId, jobId, coverLetter, notes });
    
    try {
      // Validate inputs
      if (!userId || !jobId) {
        console.error('❌ Missing required fields:', { userId, jobId });
        return false;
      }

      // Check if application already exists
      console.log('🔍 Checking for existing application...');
      const { data: existingApp, error: checkError } = await supabase
        .from('user_applications')
        .select('id')
        .eq('user_id', userId)
        .eq('job_id', jobId)
        .maybeSingle(); // Use maybeSingle instead of single

      if (checkError) {
        console.error('❌ Error checking existing application:', checkError);
        // Continue anyway, as this might not be critical
      }

      if (existingApp) {
        console.log('ℹ️ Application already exists:', existingApp.id);
        // Return true since the application already exists
        return true;
      }

      // Insert new application
      console.log('📝 Inserting new application...');
      const { data, error } = await supabase
        .from('user_applications')
        .insert([
          {
            user_id: userId,
            job_id: jobId,
            cover_letter: coverLetter,
            notes: notes,
            status: 'applied',
          },
        ])
        .select()
        .single();

      if (error) {
        console.error('❌ Supabase error:', {
          code: error.code,
          message: error.message,
          details: error.details,
          hint: error.hint
        });

        // Handle specific error cases
        if (error.code === '23503') { // Foreign key violation
          console.error('❌ Foreign key violation - user or job does not exist');
          return false;
        }
        if (error.code === '23505') { // Unique violation
          console.error('❌ Unique violation - application already exists');
          return true; // Application already exists
        }

        return false;
      }

      console.log('✅ Application created successfully:', data);
      return true;
      
    } catch (error: any) {
      console.error('❌ Unexpected error:', {
        message: error.message,
        stack: error.stack,
        name: error.name
      });
      return false;
    }
  }

  // TEMPORARY DEBUG FUNCTION - Use this for testing
  static async testApplication(userId: string, jobId: string): Promise<boolean> {
    console.log('🧪 TEST: Starting application test');
    console.log('👤 User ID:', userId);
    console.log('💼 Job ID:', jobId);
    
    const success = await this.applyToJob(userId, jobId);
    console.log('🧪 TEST Result:', success);
    
    return success;
  }

  static async updateApplicationStatus(
    applicationId: string, 
    status: JobApplication['status'],
    notes?: string
  ): Promise<boolean> {
    console.log('🔄 Updating application status:', { applicationId, status, notes });
    
    const updates: any = { status }
    if (notes) updates.notes = notes

    const { error } = await supabase
      .from('user_applications')
      .update(updates)
      .eq('id', applicationId)

    if (error) {
      console.error('❌ Error updating application:', error)
      return false
    }
    
    console.log('✅ Application status updated successfully');
    return true
  }

  // UPDATED: GET APPLICATIONS with async logo URLs
  static async getApplications(userId: string): Promise<JobApplication[]> {
    console.log('🔄 Fetching applications for user:', userId);
    
    const { data, error } = await supabase
      .from('user_applications')
      .select(`
        *,
        jobs (
          *,
          companies (
            name,
            logo_url,
            headquarters_location
          )
        )
      `)
      .eq('user_id', userId)
      .order('applied_at', { ascending: false })

    if (error) {
      console.error('❌ Error fetching applications:', error)
      return []
    }

    // Use Promise.all to handle async logo URL resolution
    const applicationsWithLogos = await Promise.all(
      (data || []).map(async (application) => {
        if (!application.jobs) return application;

        const finalLogoUrl = await this.getLogoUrl(
          application.jobs.companies?.name || 'Company',
          application.jobs.companies?.logo_url
        );

        return {
          ...application,
          jobs: {
            ...application.jobs,
            companies: {
              ...application.jobs.companies,
              logo_url: finalLogoUrl,
            }
          }
        };
      })
    );
    
    console.log('✅ Applications fetched:', applicationsWithLogos?.length || 0);
    return applicationsWithLogos
  }

  static async getApplicationStats(userId: string) {
    console.log('📊 Fetching application stats for user:', userId);
    
    const { data, error } = await supabase
      .from('user_applications')
      .select('status')
      .eq('user_id', userId)

    if (error) {
      console.error('❌ Error fetching stats:', error)
      return null
    }

    const stats = {
      total: data.length,
      applied: data.filter(app => app.status === 'applied').length,
      interviewing: data.filter(app => app.status === 'interviewing').length,
      rejected: data.filter(app => app.status === 'rejected').length,
      offered: data.filter(app => app.status === 'offered').length,
      accepted: data.filter(app => app.status === 'accepted').length,
    }

    console.log('📊 Application stats:', stats);
    return stats
  }

  // NEW: Batch update all companies with storage logos
  static async migrateToSupabaseStorage(): Promise<{ updated: number; failed: number }> {
    try {
      console.log('🔄 Migrating company logos to Supabase Storage...');
      
      const { data: companies, error } = await supabase
        .from('companies')
        .select('id, name, logo_url');

      if (error) throw error;

      let updated = 0;
      let failed = 0;

      for (const company of companies) {
        try {
          const newLogoUrl = await this.getLogoUrl(company.name, company.logo_url);
          
          // Only update if the URL changed
          if (newLogoUrl !== company.logo_url) {
            const { error: updateError } = await supabase
              .from('companies')
              .update({ logo_url: newLogoUrl })
              .eq('id', company.id);

            if (updateError) {
              console.error(`❌ Failed to update ${company.name}:`, updateError);
              failed++;
            } else {
              console.log(`✅ Updated ${company.name}: ${newLogoUrl}`);
              updated++;
            }
          }
        } catch (companyError) {
          console.error(`❌ Error with ${company.name}:`, companyError);
          failed++;
        }
      }

      console.log(`🎉 Migration complete: ${updated} updated, ${failed} failed`);
      return { updated, failed };

    } catch (error) {
      console.error('❌ Migration failed:', error);
      return { updated: 0, failed: 0 };
    }
  }

  // NEW: Get logo status report
  static async getLogoStatus(): Promise<{ withLogos: number; withoutLogos: number; total: number }> {
    try {
      const { data: companies, error } = await supabase
        .from('companies')
        .select('logo_url');

      if (error) {
        console.error('❌ Error fetching logo status:', error);
        return { withLogos: 0, withoutLogos: 0, total: 0 };
      }

      const withLogos = companies.filter(company => 
        this.isValidLogoUrl(company.logo_url)
      ).length;
      
      const withoutLogos = companies.length - withLogos;

      console.log(`📊 Logo status: ${withLogos} with logos, ${withoutLogos} without logos`);
      
      return {
        withLogos,
        withoutLogos,
        total: companies.length
      };

    } catch (error) {
      console.error('❌ Unexpected error in getLogoStatus:', error);
      return { withLogos: 0, withoutLogos: 0, total: 0 };
    }
  }

  // NEW: Check storage bucket status
  static async getStorageStatus(): Promise<{ exists: boolean; fileCount?: number }> {
    try {
      const { data, error } = await supabase.storage
        .from('logos')
        .list();

      if (error) {
        console.error('❌ Storage bucket error:', error);
        return { exists: false };
      }

      return { 
        exists: true, 
        fileCount: data.length 
      };
    } catch (error) {
      console.error('❌ Storage check failed:', error);
      return { exists: false };
    }
  }
}