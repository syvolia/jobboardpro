// services/logoUploadService.ts
import { supabase } from '@/lib/supabase';

export interface UploadResult {
  success: boolean;
  url?: string;
  error?: string;
  companyName: string;
}

export class LogoUploadService {
  private static BUCKET_NAME = 'logos';

  // Upload a single logo
  static async uploadLogo(file: File, companyName: string): Promise<UploadResult> {
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
      const { data, error } = await supabase.storage
        .from(this.BUCKET_NAME)
        .upload(filePath, file, {
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
      const { data: { publicUrl } } = supabase.storage
        .from(this.BUCKET_NAME)
        .getPublicUrl(filePath);

      console.log(`✅ Logo uploaded for ${companyName}: ${publicUrl}`);
      
      return {
        success: true,
        url: publicUrl,
        companyName
      };

    } catch (error: any) {
      console.error(`❌ Unexpected error uploading logo for ${companyName}:`, error);
      return {
        success: false,
        error: error.message,
        companyName
      };
    }
  }

  // Batch upload multiple logos
  static async uploadMultipleLogos(
    files: { file: File; companyName: string }[]
  ): Promise<UploadResult[]> {
    console.log(`🔄 Starting batch upload of ${files.length} logos...`);
    
    const results: UploadResult[] = [];

    // Upload files sequentially to avoid rate limiting
    for (const { file, companyName } of files) {
      const result = await this.uploadLogo(file, companyName);
      results.push(result);
      
      // Small delay between uploads
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    const successful = results.filter(r => r.success).length;
    console.log(`🎉 Batch upload complete: ${successful}/${files.length} successful`);
    
    return results;
  }

  // Get all uploaded logos
  static async listUploadedLogos(): Promise<string[]> {
    try {
      const { data, error } = await supabase.storage
        .from(this.BUCKET_NAME)
        .list();

      if (error) {
        console.error('Error listing logos:', error);
        return [];
      }

      return data.map(item => item.name);
    } catch (error) {
      console.error('Error listing logos:', error);
      return [];
    }
  }

  // Delete a logo
  static async deleteLogo(fileName: string): Promise<boolean> {
    try {
      const { error } = await supabase.storage
        .from(this.BUCKET_NAME)
        .remove([fileName]);

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
  private static generateFileName(companyName: string, originalFileName: string): string {
    const cleanCompanyName = companyName
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');

    const fileExtension = originalFileName.split('.').pop()?.toLowerCase() || 'png';
    
    return `${cleanCompanyName}.${fileExtension}`;
  }

  // Validate file type
  private static isValidImageFile(file: File): boolean {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/svg+xml'];
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