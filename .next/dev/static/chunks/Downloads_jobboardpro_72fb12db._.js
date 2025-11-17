(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/jobboardpro/services/logoUploadService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// services/logoUploadService.ts
__turbopack_context__.s([
    "LogoUploadService",
    ()=>LogoUploadService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/lib/supabase.ts [app-client] (ecmascript)");
;
class LogoUploadService {
    static BUCKET_NAME = 'logos';
    // Upload a single logo
    static async uploadLogo(file, companyName) {
        try {
            console.log(`📤 Uploading logo for ${companyName}...`);
            // Validate file
            if (!this.isValidImageFile(file)) {
                return {
                    success: false,
                    error: 'Invalid file type. Please use PNG, JPG, or SVG.',
                    companyName
                };
            }
            // Generate safe file name
            const fileName = this.generateFileName(companyName, file.name);
            const filePath = `${fileName}`;
            // Upload to Supabase Storage
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from(this.BUCKET_NAME).upload(filePath, file, {
                cacheControl: '3600',
                upsert: true // Overwrite if exists
            });
            if (error) {
                console.error(`❌ Upload failed for ${companyName}:`, error);
                return {
                    success: false,
                    error: error.message,
                    companyName
                };
            }
            // Get public URL
            const { data: { publicUrl } } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from(this.BUCKET_NAME).getPublicUrl(filePath);
            console.log(`✅ Logo uploaded for ${companyName}: ${publicUrl}`);
            return {
                success: true,
                url: publicUrl,
                companyName
            };
        } catch (error) {
            console.error(`❌ Unexpected error uploading logo for ${companyName}:`, error);
            return {
                success: false,
                error: error.message,
                companyName
            };
        }
    }
    // Batch upload multiple logos
    static async uploadMultipleLogos(files) {
        console.log(`🔄 Starting batch upload of ${files.length} logos...`);
        const results = [];
        // Upload files sequentially to avoid rate limiting
        for (const { file, companyName } of files){
            const result = await this.uploadLogo(file, companyName);
            results.push(result);
            // Small delay between uploads
            await new Promise((resolve)=>setTimeout(resolve, 500));
        }
        const successful = results.filter((r)=>r.success).length;
        console.log(`🎉 Batch upload complete: ${successful}/${files.length} successful`);
        return results;
    }
    // Get all uploaded logos
    static async listUploadedLogos() {
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from(this.BUCKET_NAME).list();
            if (error) {
                console.error('Error listing logos:', error);
                return [];
            }
            return data.map((item)=>item.name);
        } catch (error) {
            console.error('Error listing logos:', error);
            return [];
        }
    }
    // Delete a logo
    static async deleteLogo(fileName) {
        try {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from(this.BUCKET_NAME).remove([
                fileName
            ]);
            if (error) {
                console.error('Error deleting logo:', error);
                return false;
            }
            console.log(`✅ Logo deleted: ${fileName}`);
            return true;
        } catch (error) {
            console.error('Error deleting logo:', error);
            return false;
        }
    }
    // Generate consistent file names
    static generateFileName(companyName, originalFileName) {
        const cleanCompanyName = companyName.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
        const fileExtension = originalFileName.split('.').pop()?.toLowerCase() || 'png';
        return `${cleanCompanyName}.${fileExtension}`;
    }
    // Validate file type
    static isValidImageFile(file) {
        const allowedTypes = [
            'image/jpeg',
            'image/jpg',
            'image/png',
            'image/svg+xml'
        ];
        const maxSize = 5 * 1024 * 1024; // 5MB
        if (!allowedTypes.includes(file.type)) {
            return false;
        }
        if (file.size > maxSize) {
            return false;
        }
        return true;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/jobboardpro/services/jobService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JobService",
    ()=>JobService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/lib/supabase.ts [app-client] (ecmascript)");
;
class JobService {
    // NEW: Logo URL validation and storage methods
    static isValidLogoUrl(url) {
        if (!url || url.trim() === '') return false;
        // Check if it's a real image URL or just an example
        const invalidDomains = [
            'placeholder.example.com',
            'example.com',
            'your-domain.com',
            'placeholder.com',
            'via.placeholder.com' // We'll use our own fallback instead
        ];
        return !invalidDomains.some((domain)=>url.includes(domain));
    }
    static getFallbackLogoUrl(companyName) {
        const initial = companyName.charAt(0).toUpperCase();
        const colors = [
            '3B82F6',
            'EF4444',
            '10B981',
            'F59E0B',
            '8B5CF6',
            'EC4899',
            '06B6D4',
            '84CC16',
            'F97316',
            '6366F1'
        ];
        const color = colors[companyName.charCodeAt(0) % colors.length];
        return `https://via.placeholder.com/100x100/${color}/FFFFFF?text=${initial}`;
    }
    // NEW: Get logo URL with Supabase Storage fallback
    static async getLogoUrl(companyName, currentLogoUrl) {
        // If current URL is valid, use it
        if (this.isValidLogoUrl(currentLogoUrl)) {
            return currentLogoUrl;
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
    static async findLogoInStorage(companyName) {
        try {
            const fileName = this.generateStorageFileName(companyName);
            // Check if file exists by trying to get its URL
            const { data: { publicUrl } } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from('logos').getPublicUrl(fileName);
            // Test if the URL is accessible (with timeout)
            const controller = new AbortController();
            const timeoutId = setTimeout(()=>controller.abort(), 3000);
            try {
                const response = await fetch(publicUrl, {
                    method: 'HEAD',
                    signal: controller.signal
                });
                clearTimeout(timeoutId);
                if (response.ok) {
                    return publicUrl;
                }
            } catch  {
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
    static generateStorageFileName(companyName) {
        return companyName.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '') + '.png';
    }
    // UPDATED: getJobs with async logo URL resolution
    static async getJobs(filters) {
        let query = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('jobs').select(`
        *,
        companies (
          name,
          logo_url,
          headquarters_location
        )
      `).eq('status', 'active');
        // Apply filters if provided
        if (filters?.searchQuery) {
            query = query.textSearch('title', filters.searchQuery);
        }
        if (filters?.remoteOptions?.length) {
            query = query.in('remote_level', filters.remoteOptions);
        }
        if (filters?.jobTypes?.length) {
            query = query.in('job_type', filters.jobTypes);
        }
        if (filters?.techStack?.length) {
            query = query.overlaps('required_tech_stack', filters.techStack);
        }
        // LOCATION FILTER
        if (filters?.locations?.length) {
            const locationConditions = filters.locations.map((location)=>`location.ilike.%${location}%,companies.headquarters_location.ilike.%${location}%`).join(',');
            query = query.or(locationConditions);
        }
        const { data, error } = await query;
        if (error) {
            console.error('Error fetching jobs:', error);
            return [];
        }
        // Use Promise.all to handle async logo URL resolution
        const jobsWithLogos = await Promise.all((data || []).map(async (job)=>{
            const finalLogoUrl = await this.getLogoUrl(job.companies?.name || 'Company', job.companies?.logo_url);
            console.log('🔍 Job logo debug:', {
                company: job.companies?.name,
                originalLogo: job.companies?.logo_url,
                finalLogo: finalLogoUrl
            });
            return {
                ...job,
                companies: {
                    ...job.companies,
                    logo_url: finalLogoUrl
                }
            };
        }));
        return jobsWithLogos;
    }
    // UPDATED: SEARCH JOBS METHOD with async logo URLs
    static async searchJobs(searchQuery) {
        if (!searchQuery.trim()) {
            return this.getJobs();
        }
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('jobs').select(`
        *,
        companies (
          name,
          logo_url,
          headquarters_location
        )
      `).eq('status', 'active').or(`title.ilike.%${searchQuery}%,description.ilike.%${searchQuery}%,companies.name.ilike.%${searchQuery}%`);
        if (error) {
            console.error('Error searching jobs:', error);
            return [];
        }
        // Use Promise.all to handle async logo URL resolution
        const jobsWithLogos = await Promise.all((data || []).map(async (job)=>{
            const finalLogoUrl = await this.getLogoUrl(job.companies?.name || 'Company', job.companies?.logo_url);
            return {
                ...job,
                companies: {
                    ...job.companies,
                    logo_url: finalLogoUrl
                }
            };
        }));
        return jobsWithLogos;
    }
    // SAVE JOB FUNCTIONALITY (unchanged)
    static async saveJob(userId, jobId, notes = '') {
        console.log('💾 Saving job:', {
            userId,
            jobId,
            notes
        });
        try {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('user_saved_jobs').insert([
                {
                    user_id: userId,
                    job_id: jobId,
                    notes
                }
            ]);
            if (error) {
                console.error('❌ Error saving job:', error);
                return false;
            }
            console.log('✅ Job saved successfully');
            return true;
        } catch (error) {
            console.error('❌ Unexpected error saving job:', error);
            return false;
        }
    }
    static async unsaveJob(userId, jobId) {
        console.log('🗑️ Unsaving job:', {
            userId,
            jobId
        });
        try {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('user_saved_jobs').delete().eq('user_id', userId).eq('job_id', jobId);
            if (error) {
                console.error('❌ Error unsaving job:', error);
                return false;
            }
            console.log('✅ Job unsaved successfully');
            return true;
        } catch (error) {
            console.error('❌ Unexpected error unsaving job:', error);
            return false;
        }
    }
    // UPDATED: GET SAVED JOBS with async logo URLs
    static async getSavedJobs(userId) {
        try {
            console.log('🔄 Fetching saved jobs for user:', userId);
            // First, get the saved job IDs
            const { data: savedData, error: savedError } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('user_saved_jobs').select('*').eq('user_id', userId).order('saved_at', {
                ascending: false
            });
            if (savedError) {
                console.error('❌ Error fetching saved job records:', savedError);
                return [];
            }
            console.log('📋 Saved job records:', savedData);
            if (!savedData || savedData.length === 0) {
                console.log('ℹ️ No saved jobs found for user');
                return [];
            }
            // Then, get the actual job details for each saved job
            const jobIds = savedData.map((item)=>item.job_id);
            const { data: jobsData, error: jobsError } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('jobs').select(`
          *,
          companies (
            name,
            logo_url,
            headquarters_location
          )
        `).in('id', jobIds);
            if (jobsError) {
                console.error('❌ Error fetching job details:', jobsError);
                return [];
            }
            console.log('💼 Job details found:', jobsData?.length || 0);
            // Combine the data with proper logo handling
            const combinedData = await Promise.all(savedData.map(async (savedItem)=>{
                const job = jobsData?.find((j)=>j.id === savedItem.job_id);
                if (!job) return null;
                const finalLogoUrl = await this.getLogoUrl(job.companies?.name || 'Company', job.companies?.logo_url);
                return {
                    ...savedItem,
                    jobs: {
                        ...job,
                        companies: {
                            ...job.companies,
                            logo_url: finalLogoUrl
                        }
                    }
                };
            }));
            const filteredData = combinedData.filter((item)=>item !== null);
            console.log('🎯 Combined saved jobs:', filteredData);
            return filteredData;
        } catch (error) {
            console.error('❌ Unexpected error in getSavedJobs:', error);
            return [];
        }
    }
    // UPDATED: APPLICATION TRACKING WITH COMPREHENSIVE DEBUGGING
    static async applyToJob(userId, jobId, coverLetter = '', notes = '') {
        console.log('🔍 DEBUG applyToJob - Starting:', {
            userId,
            jobId,
            coverLetter,
            notes
        });
        try {
            // Validate inputs
            if (!userId || !jobId) {
                console.error('❌ Missing required fields:', {
                    userId,
                    jobId
                });
                return false;
            }
            // Check if application already exists
            console.log('🔍 Checking for existing application...');
            const { data: existingApp, error: checkError } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('user_applications').select('id').eq('user_id', userId).eq('job_id', jobId).maybeSingle(); // Use maybeSingle instead of single
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
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('user_applications').insert([
                {
                    user_id: userId,
                    job_id: jobId,
                    cover_letter: coverLetter,
                    notes: notes,
                    status: 'applied'
                }
            ]).select().single();
            if (error) {
                console.error('❌ Supabase error:', {
                    code: error.code,
                    message: error.message,
                    details: error.details,
                    hint: error.hint
                });
                // Handle specific error cases
                if (error.code === '23503') {
                    console.error('❌ Foreign key violation - user or job does not exist');
                    return false;
                }
                if (error.code === '23505') {
                    console.error('❌ Unique violation - application already exists');
                    return true; // Application already exists
                }
                return false;
            }
            console.log('✅ Application created successfully:', data);
            return true;
        } catch (error) {
            console.error('❌ Unexpected error:', {
                message: error.message,
                stack: error.stack,
                name: error.name
            });
            return false;
        }
    }
    // TEMPORARY DEBUG FUNCTION - Use this for testing
    static async testApplication(userId, jobId) {
        console.log('🧪 TEST: Starting application test');
        console.log('👤 User ID:', userId);
        console.log('💼 Job ID:', jobId);
        const success = await this.applyToJob(userId, jobId);
        console.log('🧪 TEST Result:', success);
        return success;
    }
    static async updateApplicationStatus(applicationId, status, notes) {
        console.log('🔄 Updating application status:', {
            applicationId,
            status,
            notes
        });
        const updates = {
            status
        };
        if (notes) updates.notes = notes;
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('user_applications').update(updates).eq('id', applicationId);
        if (error) {
            console.error('❌ Error updating application:', error);
            return false;
        }
        console.log('✅ Application status updated successfully');
        return true;
    }
    // UPDATED: GET APPLICATIONS with async logo URLs
    static async getApplications(userId) {
        console.log('🔄 Fetching applications for user:', userId);
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('user_applications').select(`
        *,
        jobs (
          *,
          companies (
            name,
            logo_url,
            headquarters_location
          )
        )
      `).eq('user_id', userId).order('applied_at', {
            ascending: false
        });
        if (error) {
            console.error('❌ Error fetching applications:', error);
            return [];
        }
        // Use Promise.all to handle async logo URL resolution
        const applicationsWithLogos = await Promise.all((data || []).map(async (application)=>{
            if (!application.jobs) return application;
            const finalLogoUrl = await this.getLogoUrl(application.jobs.companies?.name || 'Company', application.jobs.companies?.logo_url);
            return {
                ...application,
                jobs: {
                    ...application.jobs,
                    companies: {
                        ...application.jobs.companies,
                        logo_url: finalLogoUrl
                    }
                }
            };
        }));
        console.log('✅ Applications fetched:', applicationsWithLogos?.length || 0);
        return applicationsWithLogos;
    }
    static async getApplicationStats(userId) {
        console.log('📊 Fetching application stats for user:', userId);
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('user_applications').select('status').eq('user_id', userId);
        if (error) {
            console.error('❌ Error fetching stats:', error);
            return null;
        }
        const stats = {
            total: data.length,
            applied: data.filter((app)=>app.status === 'applied').length,
            interviewing: data.filter((app)=>app.status === 'interviewing').length,
            rejected: data.filter((app)=>app.status === 'rejected').length,
            offered: data.filter((app)=>app.status === 'offered').length,
            accepted: data.filter((app)=>app.status === 'accepted').length
        };
        console.log('📊 Application stats:', stats);
        return stats;
    }
    // NEW: Batch update all companies with storage logos
    static async migrateToSupabaseStorage() {
        try {
            console.log('🔄 Migrating company logos to Supabase Storage...');
            const { data: companies, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('companies').select('id, name, logo_url');
            if (error) throw error;
            let updated = 0;
            let failed = 0;
            for (const company of companies){
                try {
                    const newLogoUrl = await this.getLogoUrl(company.name, company.logo_url);
                    // Only update if the URL changed
                    if (newLogoUrl !== company.logo_url) {
                        const { error: updateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('companies').update({
                            logo_url: newLogoUrl
                        }).eq('id', company.id);
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
            return {
                updated,
                failed
            };
        } catch (error) {
            console.error('❌ Migration failed:', error);
            return {
                updated: 0,
                failed: 0
            };
        }
    }
    // NEW: Get logo status report
    static async getLogoStatus() {
        try {
            const { data: companies, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('companies').select('logo_url');
            if (error) {
                console.error('❌ Error fetching logo status:', error);
                return {
                    withLogos: 0,
                    withoutLogos: 0,
                    total: 0
                };
            }
            const withLogos = companies.filter((company)=>this.isValidLogoUrl(company.logo_url)).length;
            const withoutLogos = companies.length - withLogos;
            console.log(`📊 Logo status: ${withLogos} with logos, ${withoutLogos} without logos`);
            return {
                withLogos,
                withoutLogos,
                total: companies.length
            };
        } catch (error) {
            console.error('❌ Unexpected error in getLogoStatus:', error);
            return {
                withLogos: 0,
                withoutLogos: 0,
                total: 0
            };
        }
    }
    // NEW: Check storage bucket status
    static async getStorageStatus() {
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from('logos').list();
            if (error) {
                console.error('❌ Storage bucket error:', error);
                return {
                    exists: false
                };
            }
            return {
                exists: true,
                fileCount: data.length
            };
        } catch (error) {
            console.error('❌ Storage check failed:', error);
            return {
                exists: false
            };
        }
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/jobboardpro/components/admin/LogoUploadPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/admin/LogoUploadPanel.tsx
__turbopack_context__.s([
    "LogoUploadPanel",
    ()=>LogoUploadPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$services$2f$logoUploadService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/services/logoUploadService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$services$2f$jobService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/services/jobService.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function LogoUploadPanel() {
    _s();
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleFileSelect = async (event)=>{
        const files = Array.from(event.target.files || []);
        if (files.length === 0) return;
        setUploading(true);
        setResults([]);
        // Extract company names from file names
        const uploadFiles = files.map((file)=>{
            const companyName = file.name.replace(/\.[^/.]+$/, "") // Remove extension
            .replace(/[-_]/g, " ") // Replace underscores and dashes with spaces
            .replace(/\b\w/g, (l)=>l.toUpperCase()); // Capitalize words
            return {
                file,
                companyName
            };
        });
        // Update progress
        const newProgress = {};
        uploadFiles.forEach(({ companyName })=>{
            newProgress[companyName] = "uploading";
        });
        setProgress(newProgress);
        // Upload files
        const uploadResults = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$services$2f$logoUploadService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogoUploadService"].uploadMultipleLogos(uploadFiles);
        // Update progress with results
        const finalProgress = {};
        uploadResults.forEach((result)=>{
            finalProgress[result.companyName] = result.success ? "success" : "error";
        });
        setProgress(finalProgress);
        setResults(uploadResults);
        setUploading(false);
        // Clear file input
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };
    const migrateDatabaseLogos = async ()=>{
        setUploading(true);
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$services$2f$jobService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JobService"].migrateToSupabaseStorage();
        setUploading(false);
        alert(`Migration complete: ${result.updated} updated, ${result.failed} failed`);
    };
    const successfulUploads = results.filter((r)=>r.success).length;
    const failedUploads = results.filter((r)=>!r.success).length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-lg border border-gray-200 p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-3 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                        className: "w-6 h-6 text-blue-600"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/jobboardpro/components/admin/LogoUploadPanel.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-gray-900",
                        children: "Company Logo Management"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/jobboardpro/components/admin/LogoUploadPanel.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/jobboardpro/components/admin/LogoUploadPanel.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-medium text-gray-700 mb-3",
                        children: "Upload Company Logos"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/jobboardpro/components/admin/LogoUploadPanel.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-2 border-dashed border-gray-300 rounded-lg p-6 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ref: fileInputRef,
                                type: "file",
                                multiple: true,
                                accept: "image/jpeg,image/jpg,image/png,image/svg+xml",
                                onChange: handleFileSelect,
                                className: "hidden",
                                id: "logo-upload"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/jobboardpro/components/admin/LogoUploadPanel.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "logo-upload",
                                className: "cursor-pointer flex flex-col items-center space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                        className: "w-8 h-8 text-gray-400"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/jobboardpro/components/admin/LogoUploadPanel.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-blue-600 font-medium",
                                                children: "Click to upload"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jobboardpro/components/admin/LogoUploadPanel.tsx",
                                                lineNumber: 111,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-500",
                                                children: " or drag and drop"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jobboardpro/components/admin/LogoUploadPanel.tsx",
                                                lineNumber: 112,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/jobboardpro/components/admin/LogoUploadPanel.tsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-500",
                                        children: "PNG, JPG, SVG up to 5MB. File name will be used as company name."
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/jobboardpro/components/admin/LogoUploadPanel.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/jobboardpro/components/admin/LogoUploadPanel.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/jobboardpro/components/admin/LogoUploadPanel.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/jobboardpro/components/admin/LogoUploadPanel.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            results.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-medium text-gray-900",
                                children: "Upload Results"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/jobboardpro/components/admin/LogoUploadPanel.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-gray-500",
                                children: [
                                    successfulUploads,
                                    " successful, ",
                                    failedUploads,
                                    " failed"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/jobboardpro/components/admin/LogoUploadPanel.tsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/jobboardpro/components/admin/LogoUploadPanel.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 max-h-60 overflow-y-auto",
                        children: results.map((result, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex items-center justify-between p-3 rounded-lg ${result.success ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: result.companyName
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/jobboardpro/components/admin/LogoUploadPanel.tsx",
                                        lineNumber: 141,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-2",
                                        children: result.success ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                    className: "w-4 h-4 text-green-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/jobboardpro/components/admin/LogoUploadPanel.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-green-600",
                                                    children: "Uploaded"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/jobboardpro/components/admin/LogoUploadPanel.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                    className: "w-4 h-4 text-red-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/jobboardpro/components/admin/LogoUploadPanel.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-red-600",
                                                    children: result.error
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/jobboardpro/components/admin/LogoUploadPanel.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/jobboardpro/components/admin/LogoUploadPanel.tsx",
                                        lineNumber: 142,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/Downloads/jobboardpro/components/admin/LogoUploadPanel.tsx",
                                lineNumber: 133,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/jobboardpro/components/admin/LogoUploadPanel.tsx",
                        lineNumber: 131,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/jobboardpro/components/admin/LogoUploadPanel.tsx",
                lineNumber: 123,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t pt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: migrateDatabaseLogos,
                        disabled: uploading,
                        className: "flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50",
                        children: [
                            uploading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                className: "w-4 h-4 animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/jobboardpro/components/admin/LogoUploadPanel.tsx",
                                lineNumber: 171,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/jobboardpro/components/admin/LogoUploadPanel.tsx",
                                lineNumber: 173,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Migrate Database to Use New Logos"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/jobboardpro/components/admin/LogoUploadPanel.tsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/jobboardpro/components/admin/LogoUploadPanel.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-500 mt-2",
                        children: "This will update all company records to use the uploaded logos from Supabase Storage."
                    }, void 0, false, {
                        fileName: "[project]/Downloads/jobboardpro/components/admin/LogoUploadPanel.tsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/jobboardpro/components/admin/LogoUploadPanel.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/jobboardpro/components/admin/LogoUploadPanel.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_s(LogoUploadPanel, "6O3UrJVmoAlZTQzCqHgbWnAbmoM=");
_c = LogoUploadPanel;
var _c;
__turbopack_context__.k.register(_c, "LogoUploadPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/jobboardpro/app/admin/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/admin/page.tsx
__turbopack_context__.s([
    "default",
    ()=>AdminPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$components$2f$admin$2f$LogoUploadPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/components/admin/LogoUploadPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$services$2f$jobService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/services/jobService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function AdminPage() {
    _s();
    const [logoStatus, setLogoStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [storageStatus, setStorageStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const loadStatus = async ()=>{
        setLoading(true);
        try {
            const [logoStatusResult, storageStatusResult] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$services$2f$jobService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JobService"].getLogoStatus(),
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$services$2f$jobService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JobService"].getStorageStatus()
            ]);
            setLogoStatus(logoStatusResult);
            setStorageStatus(storageStatusResult);
        } catch (error) {
            console.error("Error loading status:", error);
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminPage.useEffect": ()=>{
            loadStatus();
        }
    }["AdminPage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 py-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-3 mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                    className: "w-8 h-8 text-blue-600"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl font-bold text-gray-900",
                                    children: "Admin Panel"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600",
                            children: "Manage company logos and system settings"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-lg border border-gray-200 p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-gray-900",
                                            children: "Logo Status"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                            className: "w-5 h-5 text-blue-600"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                                            lineNumber: 63,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this),
                                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "animate-pulse",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-4 bg-gray-200 rounded w-3/4 mb-2"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                                            lineNumber: 68,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-4 bg-gray-200 rounded w-1/2"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                                            lineNumber: 69,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, this) : logoStatus ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-600",
                                                    children: "Total Companies:"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: logoStatus.total
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                                            lineNumber: 73,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-green-600",
                                                    children: "With Logos:"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-green-600",
                                                    children: logoStatus.withLogos
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                                            lineNumber: 77,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-600",
                                                    children: "Without Logos:"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-red-600",
                                                    children: logoStatus.withoutLogos
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full bg-gray-200 rounded-full h-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-green-600 h-2 rounded-full transition-all",
                                                style: {
                                                    width: `${logoStatus.total > 0 ? logoStatus.withLogos / logoStatus.total * 100 : 0}%`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                                                lineNumber: 90,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                                            lineNumber: 89,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-500",
                                    children: "Unable to load logo status"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                                    lineNumber: 103,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-lg border border-gray-200 p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-gray-900",
                                            children: "Storage Status"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                                            lineNumber: 110,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
                                            className: "w-5 h-5 text-blue-600"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                                            lineNumber: 113,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this),
                                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "animate-pulse",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-4 bg-gray-200 rounded w-3/4 mb-2"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                                            lineNumber: 118,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-4 bg-gray-200 rounded w-1/2"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                                            lineNumber: 119,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                                    lineNumber: 117,
                                    columnNumber: 15
                                }, this) : storageStatus ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-600",
                                                    children: "Bucket Status:"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `font-semibold ${storageStatus.exists ? "text-green-600" : "text-red-600"}`,
                                                    children: storageStatus.exists ? "Active" : "Not Found"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                                            lineNumber: 123,
                                            columnNumber: 17
                                        }, this),
                                        storageStatus.exists && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-600",
                                                            children: "Files Uploaded:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                                                            lineNumber: 136,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold",
                                                            children: storageStatus.fileCount || 0
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                                                            lineNumber: 137,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 21
                                                }, this),
                                                storageStatus.fileCount === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-yellow-600",
                                                    children: "No logos uploaded yet. Use the upload panel below."
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true),
                                        !storageStatus.exists && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-red-600",
                                            children: "Storage bucket not configured. Run the SQL setup commands."
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                                            lineNumber: 149,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                                    lineNumber: 122,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-500",
                                    children: "Unable to load storage status"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                                    lineNumber: 155,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: loadStatus,
                        disabled: loading,
                        className: "flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 disabled:opacity-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                className: `w-4 h-4 ${loading ? "animate-spin" : ""}`
                            }, void 0, false, {
                                fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                                lineNumber: 167,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Refresh Status"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                        lineNumber: 162,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                    lineNumber: 161,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$components$2f$admin$2f$LogoUploadPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogoUploadPanel"], {}, void 0, false, {
                    fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                    lineNumber: 173,
                    columnNumber: 9
                }, this),
                storageStatus && !storageStatus.exists && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold text-yellow-800 mb-3",
                            children: "Setup Required"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                            lineNumber: 178,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-yellow-700 mb-4",
                            children: "The Supabase storage bucket is not configured. Please run these SQL commands in your Supabase dashboard:"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                            lineNumber: 181,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-black text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto",
                            children: `-- Create the logos bucket\nINSERT INTO storage.buckets (id, name, public) \nVALUES ('logos', 'company-logos', true)\nON CONFLICT (id) DO NOTHING;\n\n-- Allow public read access to logos\nCREATE POLICY "Public can view logos" ON storage.objects\nFOR SELECT USING (bucket_id = 'logos');\n\n-- Allow authenticated users to upload logos\nCREATE POLICY "Users can upload logos" ON storage.objects\nFOR INSERT WITH CHECK (\n  bucket_id = 'logos' \n  AND auth.role() = 'authenticated'\n);`
                        }, void 0, false, {
                            fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                            lineNumber: 185,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
                    lineNumber: 177,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/jobboardpro/app/admin/page.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(AdminPage, "6RG8ngfGipmxcJxbnDRJpEbCEhQ=");
_c = AdminPage;
var _c;
__turbopack_context__.k.register(_c, "AdminPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/jobboardpro/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Upload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Upload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Upload", [
    [
        "path",
        {
            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
            key: "ih7n3h"
        }
    ],
    [
        "polyline",
        {
            points: "17 8 12 3 7 8",
            key: "t8dd8p"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "3",
            y2: "15",
            key: "widbto"
        }
    ]
]);
;
 //# sourceMappingURL=upload.js.map
}),
"[project]/Downloads/jobboardpro/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Upload",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript)");
}),
"[project]/Downloads/jobboardpro/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Image
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Image = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Image", [
    [
        "rect",
        {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            ry: "2",
            key: "1m3agn"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "9",
            r: "2",
            key: "af1f0g"
        }
    ],
    [
        "path",
        {
            d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
            key: "1xmnt7"
        }
    ]
]);
;
 //# sourceMappingURL=image.js.map
}),
"[project]/Downloads/jobboardpro/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Image",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript)");
}),
"[project]/Downloads/jobboardpro/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>CircleCheckBig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const CircleCheckBig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("CircleCheckBig", [
    [
        "path",
        {
            d: "M21.801 10A10 10 0 1 1 17 3.335",
            key: "yps3ct"
        }
    ],
    [
        "path",
        {
            d: "m9 11 3 3L22 4",
            key: "1pflzl"
        }
    ]
]);
;
 //# sourceMappingURL=circle-check-big.js.map
}),
"[project]/Downloads/jobboardpro/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript)");
}),
"[project]/Downloads/jobboardpro/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>CircleX
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const CircleX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("CircleX", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "m15 9-6 6",
            key: "1uzhvr"
        }
    ],
    [
        "path",
        {
            d: "m9 9 6 6",
            key: "z0biqf"
        }
    ]
]);
;
 //# sourceMappingURL=circle-x.js.map
}),
"[project]/Downloads/jobboardpro/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "XCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript)");
}),
"[project]/Downloads/jobboardpro/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>RefreshCw
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const RefreshCw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("RefreshCw", [
    [
        "path",
        {
            d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
            key: "v9h5vc"
        }
    ],
    [
        "path",
        {
            d: "M21 3v5h-5",
            key: "1q7to0"
        }
    ],
    [
        "path",
        {
            d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
            key: "3uifl3"
        }
    ],
    [
        "path",
        {
            d: "M8 16H3v5",
            key: "1cv678"
        }
    ]
]);
;
 //# sourceMappingURL=refresh-cw.js.map
}),
"[project]/Downloads/jobboardpro/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RefreshCw",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript)");
}),
"[project]/Downloads/jobboardpro/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Shield
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Shield = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Shield", [
    [
        "path",
        {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y"
        }
    ]
]);
;
 //# sourceMappingURL=shield.js.map
}),
"[project]/Downloads/jobboardpro/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Shield",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript)");
}),
"[project]/Downloads/jobboardpro/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Database
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Database = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Database", [
    [
        "ellipse",
        {
            cx: "12",
            cy: "5",
            rx: "9",
            ry: "3",
            key: "msslwz"
        }
    ],
    [
        "path",
        {
            d: "M3 5V19A9 3 0 0 0 21 19V5",
            key: "1wlel7"
        }
    ],
    [
        "path",
        {
            d: "M3 12A9 3 0 0 0 21 12",
            key: "mv7ke4"
        }
    ]
]);
;
 //# sourceMappingURL=database.js.map
}),
"[project]/Downloads/jobboardpro/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as Database>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Database",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Downloads_jobboardpro_72fb12db._.js.map