"use client";

import React, { useState, useEffect } from "react";
import { JobSearchFilters } from "@/components/job-search-filters";
import { JobListingCard } from "@/components/job-listing-card";
import { useUser } from "@/contexts/UserContext";
import { JobService, Job } from "@/services/jobService";

interface JobSearchFilters {
  searchQuery: string;
  locations: string[];
  remoteOptions: ("remote" | "hybrid" | "onsite")[];
  jobTypes: ("full-time" | "part-time" | "contract")[];
  salaryRange: { min: number; max: number };
  techStack: string[];
}

export default function Home() {
  const { user } = useUser();
  const [filters, setFilters] = useState<JobSearchFilters | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [savedJobs, setSavedJobs] = useState<Set<string>>(new Set());
  const [appliedJobs, setAppliedJobs] = useState<Set<string>>(new Set());
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [userDataLoading, setUserDataLoading] = useState(false);

  // Load jobs from Supabase on component mount
  useEffect(() => {
    loadJobs();
  }, []);

  // Load user's saved and applied jobs when user changes
  useEffect(() => {
    if (user) {
      loadUserData();
    } else {
      // Reset user data when logged out
      setSavedJobs(new Set());
      setAppliedJobs(new Set());
    }
  }, [user]);

  const loadJobs = async () => {
    setLoading(true);
    try {
      console.log("🔄 Loading jobs from database...");
      const jobsData = await JobService.getJobs();
      console.log("✅ Jobs loaded:", jobsData.length);
      setJobs(jobsData);
    } catch (error) {
      console.error("❌ Failed to load jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadUserData = async () => {
    if (!user) {
      console.log("❌ No user - skipping user data load");
      return;
    }

    setUserDataLoading(true);
    try {
      console.log("🔄 Loading user data (saved jobs and applications)...");

      // Load saved jobs
      const saved = await JobService.getSavedJobs(user.id);
      setSavedJobs(new Set(saved.map((job) => job.job_id)));
      console.log("✅ Saved jobs loaded:", saved.length);

      // Load applied jobs
      const applications = await JobService.getApplications(user.id);
      setAppliedJobs(new Set(applications.map((app) => app.job_id)));
      console.log("✅ Applications loaded:", applications.length);
    } catch (error) {
      console.error("❌ Error loading user data:", error);
    } finally {
      setUserDataLoading(false);
    }
  };

  // Search jobs when search query changes
  useEffect(() => {
    if (searchQuery.trim()) {
      searchJobs(searchQuery);
    } else {
      loadJobs();
    }
  }, [searchQuery]);

  const searchJobs = async (query: string) => {
    setLoading(true);
    try {
      console.log("🔍 Searching jobs for:", query);
      const jobsData = await JobService.searchJobs(query);
      console.log("✅ Search results:", jobsData.length);
      setJobs(jobsData);
    } catch (error) {
      console.error("❌ Failed to search jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (id: string, saved: boolean) => {
    console.log("💾 Main page: Save action for job:", id, "saved:", saved);

    if (!user) {
      console.log("❌ No user in handleSave");
      return;
    }

    // Update local state immediately for better UX
    setSavedJobs((prev) => {
      const newSet = new Set(prev);
      if (saved) {
        newSet.add(id);
      } else {
        newSet.delete(id);
      }
      return newSet;
    });

    // Reload user data to ensure it's fresh
    await loadUserData();

    console.log("✅ Main page: Save state updated");
  };

  const handleApply = async (id: string) => {
    console.log("📝 Main page: Application recorded for job:", id);

    if (!user) {
      console.log("❌ No user in handleApply");
      return;
    }

    try {
      // Update local state immediately for better UX
      setAppliedJobs((prev) => new Set(prev.add(id)));

      // Reload user data to ensure it's fresh
      await loadUserData();

      console.log("✅ Main page: Application state updated");
    } catch (error) {
      console.error("❌ Main page: Error updating application state:", error);
    }
  };

  // Transform Supabase data to match your component props
  const transformJobData = (job: Job) => ({
    id: job.id,
    companyName: job.companies?.name || "Unknown Company",
    companyLogo: job.companies?.logo_url || "",
    jobTitle: job.title,
    jobType: job.job_type as "full-time" | "part-time" | "contract",
    remoteLevel: job.remote_level as "remote" | "hybrid" | "onsite",
    location:
      job.location ||
      job.companies?.headquarters_location ||
      "Location not specified",
    salaryMin: job.salary_min || 0,
    salaryMax: job.salary_max || 0,
    salaryPeriod: "year" as const,
    techStack: job.required_tech_stack || [],
    postedDate: new Date(job.posting_date || job.created_at),
    source: "Database",
    sourceUrl: job.application_url || "#",
    isSaved: savedJobs.has(job.id),
    isApplied: appliedJobs.has(job.id),
  });

  const filteredJobs = jobs.map(transformJobData).filter((job) => {
    if (!filters) return true;

    // Location filter with null checking
    if (filters.locations && filters.locations.length > 0) {
      // Check if job has a location and it's not empty
      if (!job.location || job.location.trim() === "") {
        return false; // Exclude jobs without locations when location filter is active
      }

      const hasLocationMatch = filters.locations.some((filterLocation) => {
        const jobLocation = job.location.toLowerCase().trim();
        const searchLocation = filterLocation.toLowerCase().trim();

        return jobLocation.includes(searchLocation);
      });

      if (!hasLocationMatch) {
        return false;
      }
    }

    // Remote options filter
    if (filters.remoteOptions && filters.remoteOptions.length > 0) {
      if (!filters.remoteOptions.includes(job.remoteLevel)) {
        return false;
      }
    }

    // Job types filter
    if (filters.jobTypes && filters.jobTypes.length > 0) {
      if (!filters.jobTypes.includes(job.jobType)) {
        return false;
      }
    }

    // Salary range filter
    if (filters.salaryRange) {
      const jobSalaryMin =
        job.salaryPeriod === "year"
          ? job.salaryMin
          : (job.salaryMin || 0) * 2000;
      if (
        jobSalaryMin < filters.salaryRange.min ||
        jobSalaryMin > filters.salaryRange.max
      ) {
        return false;
      }
    }

    // Tech stack filter
    if (filters.techStack && filters.techStack.length > 0) {
      const hasMatchingTech = filters.techStack.some((tech) =>
        job.techStack.some((t) => t.toLowerCase() === tech.toLowerCase())
      );
      if (!hasMatchingTech) {
        return false;
      }
    }

    return true;
  });

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground md:text-5xl">
            Find Your Dream Job
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Advanced filtering to help you discover the perfect opportunity
          </p>

          {/* User Status Indicator */}
          {user && (
            <div className="mt-4 flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                  {savedJobs.size} saved
                </span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
                  {appliedJobs.size} applied
                </span>
              </div>
              {(savedJobs.size > 0 || appliedJobs.size > 0) && (
                <div className="flex space-x-2">
                  {savedJobs.size > 0 && (
                    <a
                      href="/saved"
                      className="text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      View saved →
                    </a>
                  )}
                  {appliedJobs.size > 0 && (
                    <a
                      href="/applications"
                      className="text-green-600 hover:text-green-800 hover:underline"
                    >
                      View applications →
                    </a>
                  )}
                </div>
              )}
              {userDataLoading && (
                <span className="text-gray-500 text-xs">Updating...</span>
              )}
            </div>
          )}
        </div>

        {/* Job Search Filters */}
        <JobSearchFilters
          onFilterChange={setFilters}
          onSearch={setSearchQuery}
        />

        {/* Job Listings Grid */}
        <div className="mt-12">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-muted-foreground">Loading jobs...</p>
            </div>
          ) : filteredJobs.length > 0 ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-foreground">
                  {filteredJobs.length}{" "}
                  {filteredJobs.length === 1 ? "Job" : "Jobs"} Found
                </h2>
                {user && (savedJobs.size > 0 || appliedJobs.size > 0) && (
                  <span className="text-sm text-muted-foreground">
                    {savedJobs.size} saved • {appliedJobs.size} applied
                  </span>
                )}
              </div>
              <div className="grid gap-4">
                {filteredJobs.map((job) => (
                  <JobListingCard
                    key={job.id}
                    {...job}
                    onSave={handleSave}
                    onApply={handleApply}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="rounded-lg border border-input bg-card p-12 text-center">
              <p className="text-lg text-muted-foreground">
                No jobs found matching your criteria
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Try adjusting your filters to see more results
              </p>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Clear Search
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
