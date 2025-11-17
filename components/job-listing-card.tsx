"use client";

import { useState, useEffect } from "react";
import { useUser } from "@/contexts/UserContext";
import { JobService } from "@/services/jobService";
import {
  Bookmark,
  BookmarkCheck,
  Briefcase,
  MapPin,
  Calendar,
  DollarSign,
  CheckCircle,
} from "lucide-react";

interface JobListingCardProps {
  id: string;
  companyName: string;
  companyLogo: string;
  jobTitle: string;
  jobType: "full-time" | "part-time" | "contract";
  remoteLevel: "remote" | "hybrid" | "onsite";
  location: string;
  salaryMin: number;
  salaryMax: number;
  salaryPeriod: "year" | "month" | "hour";
  techStack: string[];
  postedDate: Date;
  source: string;
  sourceUrl: string;
  isSaved?: boolean;
  isApplied?: boolean;
  onSave?: (id: string, saved: boolean) => void;
  onApply?: (id: string) => void;
}

export function JobListingCard({
  id,
  companyName,
  companyLogo,
  jobTitle,
  jobType,
  remoteLevel,
  location,
  salaryMin,
  salaryMax,
  salaryPeriod,
  techStack,
  postedDate,
  source,
  sourceUrl,
  isSaved = false,
  isApplied = false,
  onSave,
  onApply,
}: JobListingCardProps) {
  const { user } = useUser();
  const [saved, setSaved] = useState(isSaved);
  const [applied, setApplied] = useState(isApplied);
  const [applying, setApplying] = useState(false);
  const [saving, setSaving] = useState(false);

  // Update local state when props change
  useEffect(() => {
    setSaved(isSaved);
  }, [isSaved]);

  useEffect(() => {
    setApplied(isApplied);
  }, [isApplied]);

  const formatSalary = () => {
    const format = (amount: number) => {
      if (salaryPeriod === "year") return `$${(amount / 1000).toFixed(0)}k`;
      if (salaryPeriod === "month") return `$${amount}/mo`;
      return `$${amount}/hr`;
    };

    if (salaryMin && salaryMax) {
      return `${format(salaryMin)} - ${format(salaryMax)}`;
    } else if (salaryMin) {
      return `From ${format(salaryMin)}`;
    } else if (salaryMax) {
      return `Up to ${format(salaryMax)}`;
    }
    return "Salary not specified";
  };

  const handleSave = async () => {
    console.log("🔄 Save button clicked for job:", id);
    console.log("👤 User:", user);

    if (!user) {
      console.log("❌ No user - showing alert");
      alert("Please sign in to save jobs");
      return;
    }

    setSaving(true);
    console.log("💾 Starting save process...");

    try {
      if (saved) {
        console.log("🗑️ Unsaving job:", id);
        const success = await JobService.unsaveJob(user.id, id);
        console.log("✅ Unsave result:", success);

        if (success) {
          setSaved(false);
          onSave?.(id, false);
          console.log("✅ Job unsaved successfully");
        } else {
          console.log("❌ Failed to unsave job");
          alert("Failed to unsave job. Please try again.");
        }
      } else {
        console.log("💾 Saving job:", id);
        const success = await JobService.saveJob(user.id, id);
        console.log("✅ Save result:", success);

        if (success) {
          setSaved(true);
          onSave?.(id, true);
          console.log("✅ Job saved successfully");
        } else {
          console.log("❌ Failed to save job");
          alert("Failed to save job. Please try again.");
        }
      }
    } catch (error) {
      console.error("❌ Error in handleSave:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setSaving(false);
      console.log("🏁 Save process completed");
    }
  };

  const handleApply = async () => {
    console.log("🚀 Apply button clicked for job:", id);
    console.log("👤 User:", user);

    if (!user) {
      console.log("❌ No user - showing alert");
      alert("Please sign in to apply for jobs");
      return;
    }

    if (applied) {
      console.log("ℹ️ Already applied to this job");
      alert("You have already applied to this job!");
      return;
    }

    setApplying(true);
    console.log("📝 Starting apply process...");

    try {
      const success = await JobService.applyToJob(user.id, id);
      console.log("✅ Apply result:", success);

      if (success) {
        console.log("🎉 Application recorded successfully");
        setApplied(true);

        // Open the actual job application page if available
        if (sourceUrl && sourceUrl !== "#") {
          console.log("🌐 Opening application URL:", sourceUrl);
          window.open(sourceUrl, "_blank", "noopener,noreferrer");
        }

        // Notify parent component
        onApply?.(id);

        // Show success message
        alert("🎉 Application recorded successfully! Good luck! 🚀");
        console.log("✅ Apply process completed successfully");
      } else {
        console.log("❌ Failed to record application");
        alert("❌ Failed to record your application. Please try again.");
      }
    } catch (error: any) {
      console.error("❌ Error applying to job:", error);
      alert(
        `❌ Error: ${error.message || "Failed to apply. Please try again."}`
      );
    } finally {
      setApplying(false);
      console.log("🏁 Apply process finished");
    }
  };

  const getRemoteBadgeColor = (level: string) => {
    switch (level) {
      case "remote":
        return "bg-green-100 text-green-800";
      case "hybrid":
        return "bg-blue-100 text-blue-800";
      case "onsite":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getJobTypeColor = (type: string) => {
    switch (type) {
      case "full-time":
        return "bg-purple-100 text-purple-800";
      case "part-time":
        return "bg-orange-100 text-orange-800";
      case "contract":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
            {companyLogo ? (
              <img
                src={companyLogo}
                alt={companyName}
                className="w-10 h-10 object-contain rounded"
              />
            ) : (
              <div className="text-lg font-bold text-gray-400">
                {companyName.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-900">{jobTitle}</h3>
            <p className="text-gray-600">{companyName}</p>
          </div>
        </div>

        <button
          onClick={handleSave}
          disabled={saving}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50"
          title={saved ? "Remove from saved" : "Save job"}
        >
          {saved ? (
            <BookmarkCheck className="w-5 h-5 text-blue-600" />
          ) : (
            <Bookmark className="w-5 h-5 text-gray-400 hover:text-blue-600" />
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Briefcase className="w-4 h-4" />
            <span>{jobType}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <DollarSign className="w-4 h-4" />
            <span>{formatSalary()}</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex flex-wrap gap-2">
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${getRemoteBadgeColor(
                remoteLevel
              )}`}
            >
              {remoteLevel}
            </span>
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${getJobTypeColor(
                jobType
              )}`}
            >
              {jobType}
            </span>
            {applied && (
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Applied ✓
              </span>
            )}
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Calendar className="w-4 h-4" />
            <span>Posted {postedDate.toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      {techStack.length > 0 && (
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {techStack.slice(0, 4).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs"
              >
                {tech}
              </span>
            ))}
            {techStack.length > 4 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded-md text-xs">
                +{techStack.length - 4} more
              </span>
            )}
          </div>
        </div>
      )}

      <div className="flex justify-between items-center">
        
        <button
          onClick={handleApply}
          disabled={applying || applied}
          className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors ${
            applied
              ? "bg-green-600 text-white cursor-default"
              : applying
              ? "bg-blue-400 text-white cursor-wait"
              : "bg-blue-600 text-white hover:bg-blue-700"
          } disabled:opacity-50`}
        >
          {applied ? (
            <CheckCircle className="w-4 h-4" />
          ) : (
            <Briefcase className="w-4 h-4" />
          )}
          <span>
            {applied ? "Applied ✓" : applying ? "Applying..." : "Apply Now"}
          </span>
        </button>
      </div>
    </div>
  );
}
