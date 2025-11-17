// components/admin/LogoUploadPanel.tsx
"use client";

import { useState, useRef } from "react";
import { Upload, Image, CheckCircle, XCircle, RefreshCw } from "lucide-react";
import { LogoUploadService, UploadResult } from "@/services/logoUploadService";
import { JobService } from "@/services/jobService";

interface UploadProgress {
  [companyName: string]: "uploading" | "success" | "error";
}

export function LogoUploadPanel() {
  const [uploading, setUploading] = useState(false);
  const [results, setResults] = useState<UploadResult[]>([]);
  const [progress, setProgress] = useState<UploadProgress>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = Array.from(event.target.files || []);
    if (files.length === 0) return;

    setUploading(true);
    setResults([]);

    // Extract company names from file names
    const uploadFiles = files.map((file) => {
      const companyName = file.name
        .replace(/\.[^/.]+$/, "") // Remove extension
        .replace(/[-_]/g, " ") // Replace underscores and dashes with spaces
        .replace(/\b\w/g, (l) => l.toUpperCase()); // Capitalize words

      return { file, companyName };
    });

    // Update progress
    const newProgress: UploadProgress = {};
    uploadFiles.forEach(({ companyName }) => {
      newProgress[companyName] = "uploading";
    });
    setProgress(newProgress);

    // Upload files
    const uploadResults = await LogoUploadService.uploadMultipleLogos(
      uploadFiles
    );

    // Update progress with results
    const finalProgress: UploadProgress = {};
    uploadResults.forEach((result) => {
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

  const migrateDatabaseLogos = async () => {
    setUploading(true);
    const result = await JobService.migrateToSupabaseStorage();
    setUploading(false);

    alert(
      `Migration complete: ${result.updated} updated, ${result.failed} failed`
    );
  };

  const successfulUploads = results.filter((r) => r.success).length;
  const failedUploads = results.filter((r) => !r.success).length;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center space-x-3 mb-6">
        <Image className="w-6 h-6 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-900">
          Company Logo Management
        </h3>
      </div>

      {/* File Upload */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Upload Company Logos
        </label>

        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/jpeg,image/jpg,image/png,image/svg+xml"
            onChange={handleFileSelect}
            className="hidden"
            id="logo-upload"
          />

          <label
            htmlFor="logo-upload"
            className="cursor-pointer flex flex-col items-center space-y-3"
          >
            <Upload className="w-8 h-8 text-gray-400" />
            <div>
              <span className="text-blue-600 font-medium">Click to upload</span>
              <span className="text-gray-500"> or drag and drop</span>
            </div>
            <p className="text-sm text-gray-500">
              PNG, JPG, SVG up to 5MB. File name will be used as company name.
            </p>
          </label>
        </div>
      </div>

      {/* Upload Results */}
      {results.length > 0 && (
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-medium text-gray-900">Upload Results</h4>
            <span className="text-sm text-gray-500">
              {successfulUploads} successful, {failedUploads} failed
            </span>
          </div>

          <div className="space-y-2 max-h-60 overflow-y-auto">
            {results.map((result, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-3 rounded-lg ${
                  result.success
                    ? "bg-green-50 border border-green-200"
                    : "bg-red-50 border border-red-200"
                }`}
              >
                <span className="font-medium">{result.companyName}</span>
                <div className="flex items-center space-x-2">
                  {result.success ? (
                    <>
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-green-600">Uploaded</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-4 h-4 text-red-600" />
                      <span className="text-sm text-red-600">
                        {result.error}
                      </span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Migration Button */}
      <div className="border-t pt-4">
        <button
          onClick={migrateDatabaseLogos}
          disabled={uploading}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {uploading ? (
            <RefreshCw className="w-4 h-4 animate-spin" />
          ) : (
            <RefreshCw className="w-4 h-4" />
          )}
          <span>Migrate Database to Use New Logos</span>
        </button>
        <p className="text-sm text-gray-500 mt-2">
          This will update all company records to use the uploaded logos from
          Supabase Storage.
        </p>
      </div>
    </div>
  );
}
