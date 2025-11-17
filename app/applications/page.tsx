"use client";

import { useEffect, useState } from "react";
import { useUser } from "@/contexts/UserContext";
import { JobService, JobApplication } from "@/services/jobService";
import {
  Briefcase,
  Calendar,
  Search,
  Filter,
  RefreshCw,
  Clock,
  CheckCircle,
  XCircle,
  HelpCircle,
} from "lucide-react";

// Status configuration with colors and icons
const statusConfig = {
  applied: {
    label: "Applied",
    color: "bg-blue-100 text-blue-800 border-blue-200",
    icon: Clock,
    description: "Application submitted",
  },
  interviewing: {
    label: "Interviewing",
    color: "bg-purple-100 text-purple-800 border-purple-200",
    icon: Calendar,
    description: "In interview process",
  },
  offered: {
    label: "Offered",
    color: "bg-green-100 text-green-800 border-green-200",
    icon: CheckCircle,
    description: "Received job offer",
  },
  rejected: {
    label: "Rejected",
    color: "bg-red-100 text-red-800 border-red-200",
    icon: XCircle,
    description: "Application rejected",
  },
  accepted: {
    label: "Accepted",
    color: "bg-emerald-100 text-emerald-800 border-emerald-200",
    icon: CheckCircle,
    description: "Offer accepted",
  },
};

export default function ApplicationsPage() {
  const { user } = useUser();
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  useEffect(() => {
    if (user) {
      loadApplications();
    }
  }, [user]);

  const loadApplications = async () => {
    if (!user) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      console.log("🔄 Loading applications for user:", user.id);
      const apps = await JobService.getApplications(user.id);
      console.log("✅ Applications loaded:", apps);
      setApplications(apps);
    } catch (error: any) {
      console.error("❌ Error loading applications:", error);
      setError("Failed to load applications. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const updateApplicationStatus = async (
    applicationId: string,
    newStatus: string
  ) => {
    if (!user) return;

    try {
      const success = await JobService.updateApplicationStatus(
        applicationId,
        newStatus as any
      );
      if (success) {
        // Update local state
        setApplications((prev) =>
          prev.map((app) =>
            app.id === applicationId
              ? { ...app, status: newStatus as any }
              : app
          )
        );
      }
    } catch (error) {
      console.error("Error updating application status:", error);
      alert("Failed to update status. Please try again.");
    }
  };

  // Filter applications based on search and status
  const filteredApplications = applications.filter((app) => {
    const matchesSearch =
      app.jobs.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.jobs.companies.name.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === "all" || app.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Calculate application statistics
  const stats = {
    total: applications.length,
    applied: applications.filter((app) => app.status === "applied").length,
    interviewing: applications.filter((app) => app.status === "interviewing")
      .length,
    offered: applications.filter((app) => app.status === "offered").length,
    rejected: applications.filter((app) => app.status === "rejected").length,
    accepted: applications.filter((app) => app.status === "accepted").length,
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Briefcase className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Sign In Required
          </h2>
          <p className="text-gray-600">
            Please sign in to view your job applications.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Briefcase className="w-8 h-8 text-blue-600" />
              <h1 className="text-3xl font-bold text-gray-900">
                My Applications
              </h1>
            </div>
            <button
              onClick={loadApplications}
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
            Track and manage your job applications
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-300 rounded-lg">
            <p className="text-red-800">{error}</p>
            <button
              onClick={loadApplications}
              className="mt-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Statistics */}
        {applications.length > 0 && (
          <div className="mb-6 grid grid-cols-2 md:grid-cols-6 gap-4">
            <div className="bg-white p-4 rounded-lg border text-center">
              <div className="text-2xl font-bold text-gray-900">
                {stats.total}
              </div>
              <div className="text-sm text-gray-600">Total</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border text-center">
              <div className="text-2xl font-bold text-blue-800">
                {stats.applied}
              </div>
              <div className="text-sm text-blue-600">Applied</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border text-center">
              <div className="text-2xl font-bold text-purple-800">
                {stats.interviewing}
              </div>
              <div className="text-sm text-purple-600">Interviewing</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border text-center">
              <div className="text-2xl font-bold text-green-800">
                {stats.offered}
              </div>
              <div className="text-sm text-green-600">Offered</div>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border text-center">
              <div className="text-2xl font-bold text-red-800">
                {stats.rejected}
              </div>
              <div className="text-sm text-red-600">Rejected</div>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg border text-center">
              <div className="text-2xl font-bold text-emerald-800">
                {stats.accepted}
              </div>
              <div className="text-sm text-emerald-600">Accepted</div>
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search applications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
            >
              <option value="all">All Statuses</option>
              <option value="applied">Applied</option>
              <option value="interviewing">Interviewing</option>
              <option value="offered">Offered</option>
              <option value="rejected">Rejected</option>
              <option value="accepted">Accepted</option>
            </select>
          </div>
        </div>

        {/* Applications List */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading your applications...</p>
          </div>
        ) : filteredApplications.length > 0 ? (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-gray-600">
                {filteredApplications.length}{" "}
                {filteredApplications.length === 1
                  ? "application"
                  : "applications"}
                {searchQuery && ` matching "${searchQuery}"`}
                {statusFilter !== "all" && ` with status "${statusFilter}"`}
              </p>
            </div>

            <div className="grid gap-4">
              {filteredApplications.map((application) => {
                const statusInfo = statusConfig[application.status];
                const StatusIcon = statusInfo.icon;

                return (
                  <div
                    key={application.id}
                    className="bg-white rounded-lg border border-gray-200 p-6"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          {application.jobs.companies.logo_url ? (
                            <img
                              src={application.jobs.companies.logo_url}
                              alt={application.jobs.companies.name}
                              className="w-10 h-10 object-contain rounded"
                            />
                          ) : (
                            <div className="text-lg font-bold text-gray-400">
                              {application.jobs.companies.name
                                .charAt(0)
                                .toUpperCase()}
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-gray-900">
                            {application.jobs.title}
                          </h3>
                          <p className="text-gray-600">
                            {application.jobs.companies.name}
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            {application.jobs.location}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col items-end space-y-2">
                        <span
                          className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium border ${statusInfo.color}`}
                        >
                          <StatusIcon className="w-4 h-4" />
                          <span>{statusInfo.label}</span>
                        </span>
                        <p className="text-sm text-gray-500">
                          Applied{" "}
                          {new Date(
                            application.applied_at
                          ).toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    {/* Status Update Options */}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-sm font-medium text-gray-700 mb-2">
                        Update Status:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {Object.entries(statusConfig).map(
                          ([status, config]) => (
                            <button
                              key={status}
                              onClick={() =>
                                updateApplicationStatus(application.id, status)
                              }
                              disabled={application.status === status}
                              className={`px-3 py-1 rounded-full text-sm font-medium border transition-colors ${
                                application.status === status
                                  ? config.color
                                  : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                              } disabled:opacity-50`}
                            >
                              {config.label}
                            </button>
                          )
                        )}
                      </div>
                    </div>

                    {/* Application Notes */}
                    {application.notes && (
                      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-800">
                          <strong>Your notes:</strong> {application.notes}
                        </p>
                      </div>
                    )}

                    {/* Interview/Follow-up Dates */}
                    {(application.interview_date ||
                      application.follow_up_date) && (
                      <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                        {application.interview_date && (
                          <div className="flex items-center space-x-2 text-sm text-purple-700">
                            <Calendar className="w-4 h-4" />
                            <span>
                              Interview:{" "}
                              {new Date(
                                application.interview_date
                              ).toLocaleDateString()}
                            </span>
                          </div>
                        )}
                        {application.follow_up_date && (
                          <div className="flex items-center space-x-2 text-sm text-blue-700">
                            <Clock className="w-4 h-4" />
                            <span>
                              Follow up:{" "}
                              {new Date(
                                application.follow_up_date
                              ).toLocaleDateString()}
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <Briefcase className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {applications.length === 0
                ? "No applications yet"
                : "No matching applications"}
            </h3>
            <p className="text-gray-600 mb-6">
              {applications.length === 0
                ? "Start applying to jobs to track your progress here!"
                : "Try adjusting your search or filter criteria"}
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
