// app/admin/page.tsx
"use client";

import { LogoUploadPanel } from "@/components/admin/LogoUploadPanel";
import { JobService } from "@/services/jobService";
import { useState, useEffect } from "react";
import { Shield, Image, Database, RefreshCw } from "lucide-react";

export default function AdminPage() {
  const [logoStatus, setLogoStatus] = useState<{
    withLogos: number;
    withoutLogos: number;
    total: number;
  } | null>(null);
  const [storageStatus, setStorageStatus] = useState<{
    exists: boolean;
    fileCount?: number;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  const loadStatus = async () => {
    setLoading(true);
    try {
      const [logoStatusResult, storageStatusResult] = await Promise.all([
        JobService.getLogoStatus(),
        JobService.getStorageStatus(),
      ]);
      setLogoStatus(logoStatusResult);
      setStorageStatus(storageStatusResult);
    } catch (error) {
      console.error("Error loading status:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStatus();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <Shield className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
          </div>
          <p className="text-gray-600">
            Manage company logos and system settings
          </p>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Logo Status */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Logo Status
              </h3>
              <Image className="w-5 h-5 text-blue-600" />
            </div>

            {loading ? (
              <div className="animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ) : logoStatus ? (
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Companies:</span>
                  <span className="font-semibold">{logoStatus.total}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-600">With Logos:</span>
                  <span className="font-semibold text-green-600">
                    {logoStatus.withLogos}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-red-600">Without Logos:</span>
                  <span className="font-semibold text-red-600">
                    {logoStatus.withoutLogos}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full transition-all"
                    style={{
                      width: `${
                        logoStatus.total > 0
                          ? (logoStatus.withLogos / logoStatus.total) * 100
                          : 0
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
            ) : (
              <p className="text-gray-500">Unable to load logo status</p>
            )}
          </div>

          {/* Storage Status */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Storage Status
              </h3>
              <Database className="w-5 h-5 text-blue-600" />
            </div>

            {loading ? (
              <div className="animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ) : storageStatus ? (
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Bucket Status:</span>
                  <span
                    className={`font-semibold ${
                      storageStatus.exists ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {storageStatus.exists ? "Active" : "Not Found"}
                  </span>
                </div>
                {storageStatus.exists && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Files Uploaded:</span>
                      <span className="font-semibold">
                        {storageStatus.fileCount || 0}
                      </span>
                    </div>
                    {storageStatus.fileCount === 0 && (
                      <p className="text-sm text-yellow-600">
                        No logos uploaded yet. Use the upload panel below.
                      </p>
                    )}
                  </>
                )}
                {!storageStatus.exists && (
                  <p className="text-sm text-red-600">
                    Storage bucket not configured. Run the SQL setup commands.
                  </p>
                )}
              </div>
            ) : (
              <p className="text-gray-500">Unable to load storage status</p>
            )}
          </div>
        </div>

        {/* Refresh Button */}
        <div className="flex justify-end mb-6">
          <button
            onClick={loadStatus}
            disabled={loading}
            className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            <span>Refresh Status</span>
          </button>
        </div>

        {/* Logo Upload Panel */}
        <LogoUploadPanel />

        {/* Setup Instructions */}
        {storageStatus && !storageStatus.exists && (
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-800 mb-3">
              Setup Required
            </h3>
            <p className="text-yellow-700 mb-4">
              The Supabase storage bucket is not configured. Please run these
              SQL commands in your Supabase dashboard:
            </p>
            <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              {`-- Create the logos bucket\nINSERT INTO storage.buckets (id, name, public) \nVALUES ('logos', 'company-logos', true)\nON CONFLICT (id) DO NOTHING;\n\n-- Allow public read access to logos\nCREATE POLICY "Public can view logos" ON storage.objects\nFOR SELECT USING (bucket_id = 'logos');\n\n-- Allow authenticated users to upload logos\nCREATE POLICY "Users can upload logos" ON storage.objects\nFOR INSERT WITH CHECK (\n  bucket_id = 'logos' \n  AND auth.role() = 'authenticated'\n);`}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
