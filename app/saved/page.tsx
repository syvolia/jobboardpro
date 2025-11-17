"use client";

import { useEffect, useState } from "react";
import { useUser } from "@/contexts/UserContext";
import { JobService, SavedJob } from "@/services/jobService";
import { JobListingCard } from "@/components/job-listing-card";
import { Bookmark, Search, RefreshCw } from "lucide-react";

export default function SavedJobsPage() {
  const { user } = useUser();
  const [savedJobs, setSavedJobs] = useState<SavedJob[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Debug logging
  useEffect(() => {
    console.log("🔍 DEBUG: User:", user);
    console.log("🔍 DEBUG: Loading state:", loading);
    console.log("🔍 DEBUG: Saved jobs count:", savedJobs.length);
    console.log("🔍 DEBUG: Error:", error);
  }, [user, loading, savedJobs, error]);

  useEffect(() => {
    if (user) {
      loadSavedJobs();
    } else {
      setLoading(false);
    }
  }, [user]);

  const loadSavedJobs = async () => {
    if (!user) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      console.log("🔄 Loading saved jobs for user:", user.id);
      const jobs = await JobService.getSavedJobs(user.id);
      console.log("✅ Saved jobs loaded:", jobs);
      setSavedJobs(jobs);

      if (jobs.length === 0) {
        console.log("ℹ️ No saved jobs found");
      }
    } catch (error: any) {
      console.error("❌ Error loading saved jobs:", error);
      setError("Failed to load saved jobs. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleUnsave = async (jobId: string) => {
    if (!user) return;

    try {
      await JobService.unsaveJob(user.id, jobId);
      setSavedJobs((prev) => prev.filter((job) => job.job_id !== jobId));
    } catch (error) {
      console.error("Error unsaving job:", error);
      setError("Failed to unsave job. Please try again.");
    }
  };

  // Transform saved job data to match JobListingCard props
  const transformSavedJob = (savedJob: SavedJob) => {
    const job = savedJob.jobs;
    return {
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
      source: "Saved",
      sourceUrl: job.application_url || "#",
      isSaved: true,
      onSave: handleUnsave,
      onApply: () => {}, // Add your apply logic if needed
    };
  };

  const filteredJobs = savedJobs.filter(
    (job) =>
      job.jobs.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.jobs.companies.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Bookmark className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Sign In Required
          </h2>
          <p className="text-gray-600">
            Please sign in to view your saved jobs.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Bookmark className="w-8 h-8 text-blue-600" />
              <h1 className="text-3xl font-bold text-gray-900">Saved Jobs</h1>
            </div>
            <button
              onClick={loadSavedJobs}
              disabled={loading}
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              <RefreshCw
                className={`w-4 h-4 ${loading ? "animate-spin" : ""}`}
              />
              <span>Refresh</span>
            </button>
          </div>
          <p className="text-gray-600">
            Your personalized collection of interesting opportunities
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-300 rounded-lg">
            <p className="text-red-800">{error}</p>
            <button
              onClick={loadSavedJobs}
              className="mt-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search saved jobs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading your saved jobs...</p>
            <p className="text-sm text-gray-500 mt-2">This may take a moment</p>
          </div>
        ) : filteredJobs.length > 0 ? (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-gray-600">
                {filteredJobs.length} saved{" "}
                {filteredJobs.length === 1 ? "job" : "jobs"}
                {searchQuery && ` matching "${searchQuery}"`}
              </p>
            </div>
            <div className="grid gap-4">
              {filteredJobs.map((savedJob) => (
                <div key={savedJob.id} className="relative">
                  <JobListingCard {...transformSavedJob(savedJob)} />
                  {savedJob.notes && (
                    <div className="mt-2 p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>Your notes:</strong> {savedJob.notes}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <Bookmark className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {searchQuery ? "No matching saved jobs" : "No saved jobs yet"}
            </h3>
            <p className="text-gray-600 mb-6">
              {searchQuery
                ? "Try adjusting your search terms"
                : "Start browsing jobs and save the ones you're interested in!"}
            </p>
            <a
              href="/"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Browse Jobs
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
