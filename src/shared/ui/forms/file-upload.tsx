"use client";

import { useToast } from "@/shared/hooks/use-toast";
import { Button } from "@/shared/ui";
import { Progress } from "@/shared/ui/";
import { AnimatePresence, motion } from "framer-motion";
import {
    AlertCircle,
    CheckCircle,
    File,
    Loader2,
    Upload,
    X,
} from "lucide-react";
import { useCallback, useRef, useState } from "react";

interface FileUploadProps {
  onUpload: (urls: string[]) => void;
  onRemove?: (url: string) => void;
  existingFiles?: string[];
  accept?: string;
  multiple?: boolean;
  maxFiles?: number;
  maxSize?: number; // in MB
  className?: string;
  disabled?: boolean;
  uploadType?: "profile" | "project" | "document" | "general";
  entityId?: string;
}

interface UploadFile {
  file: File;
  url: string;
  progress: number;
  status: "uploading" | "success" | "error";
  id: string;
}

export function FileUpload({
  onUpload,
  onRemove,
  existingFiles = [],
  accept = "image/*",
  multiple = true,
  maxFiles = 5,
  maxSize = 10, // 10MB default for Cloudinary
  className = "",
  disabled = false,
  uploadType = "general",
  entityId = "default",
}: FileUploadProps) {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadingFiles, setUploadingFiles] = useState<UploadFile[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);

  const uploadFile = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("type", uploadType);
    formData.append("entityId", entityId);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Upload failed");
    }

    const data = await response.json();
    if (!data.success) {
      throw new Error(data.error || "Upload failed");
    }

    return data.url;
  };

  const handleFileSelect = useCallback(
    async (files: FileList | null) => {
      if (!files || disabled) return;

      const fileArray = Array.from(files);
      const totalFiles =
        existingFiles.length + uploadingFiles.length + fileArray.length;

      if (totalFiles > maxFiles) {
        toast({
          title: "Too many files",
          description: `Maximum ${maxFiles} files allowed`,
          variant: "destructive",
        });
        return;
      }

      // Validate file sizes
      const oversizedFiles = fileArray.filter(
        (file) => file.size > maxSize * 1024 * 1024,
      );
      if (oversizedFiles.length > 0) {
        toast({
          title: "File too large",
          description: `Maximum file size is ${maxSize}MB`,
          variant: "destructive",
        });
        return;
      }

      // Create upload file objects
      const newUploadFiles: UploadFile[] = fileArray.map((file) => ({
        file,
        url: URL.createObjectURL(file),
        progress: 0,
        status: "uploading" as const,
        id: Math.random().toString(36).substr(2, 9),
      }));

      setUploadingFiles((prev) => [...prev, ...newUploadFiles]);

      // Upload files
      const uploadPromises = newUploadFiles.map(async (uploadFileItem) => {
        try {
          // Simulate progress
          const progressInterval = setInterval(() => {
            setUploadingFiles((prev) =>
              prev.map((f) =>
                f.id === uploadFileItem.id
                  ? { ...f, progress: Math.min(f.progress + 10, 90) }
                  : f,
              ),
            );
          }, 200);

          const uploadedUrl = await uploadFile(uploadFileItem.file);

          clearInterval(progressInterval);

          setUploadingFiles((prev) =>
            prev.map((f) =>
              f.id === uploadFileItem.id
                ? {
                    ...f,
                    progress: 100,
                    status: "success" as const,
                    url: uploadedUrl,
                  }
                : f,
            ),
          );

          // Clean up object URL
          URL.revokeObjectURL(uploadFileItem.url);

          return uploadedUrl;
        } catch (error) {
          setUploadingFiles((prev) =>
            prev.map((f) =>
              f.id === uploadFileItem.id
                ? { ...f, status: "error" as const }
                : f,
            ),
          );

          toast({
            title: "Upload failed",
            description: `Failed to upload ${uploadFileItem.file.name}`,
            variant: "destructive",
          });

          return null;
        }
      });

      const results = await Promise.all(uploadPromises);
      const successfulUploads = results.filter(Boolean) as string[];

      if (successfulUploads.length > 0) {
        onUpload(successfulUploads);
        toast({
          title: "Upload successful",
          description: `${successfulUploads.length} file(s) uploaded successfully`,
        });
      }

      // Clean up completed uploads after a delay
      setTimeout(() => {
        setUploadingFiles((prev) =>
          prev.filter((f) => f.status === "uploading"),
        );
      }, 2000);
    },
    [
      disabled,
      existingFiles.length,
      uploadingFiles.length,
      maxFiles,
      maxSize,
      onUpload,
      toast,
    ],
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);
      handleFileSelect(e.dataTransfer.files);
    },
    [handleFileSelect],
  );

  const isImage = (url: string) => {
    return /\.(jpg|jpeg|png|gif|webp)$/i.test(url);
  };

  const getFileName = (url: string) => {
    return url.split("/").pop() || "Unknown file";
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Upload Area */}
      <div
        className={`
          border-2 border-dashed rounded-[12px] p-6 text-center transition-colors
          ${
            isDragOver
              ? "border-[var(--link-color)] bg-[var(--link-color)]/5"
              : "border-[var(--input-border-color)] hover:border-[var(--link-color)]"
          }
          ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        `}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => !disabled && fileInputRef.current?.click()}
      >
        <Upload className="h-8 w-8 mx-auto mb-2 text-[var(--paragraph)]" />
        <p className="text-sm text-[var(--paragraph)] mb-1">
          {isDragOver ? "Drop files here" : "Click to upload or drag and drop"}
        </p>
        <p className="text-xs text-[var(--paragraph)]">
          {accept === "image/*" ? "Images" : "Files"} up to {maxSize}MB each
          (max {maxFiles} files)
        </p>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={(e) => handleFileSelect(e.target.files)}
        className="hidden"
        disabled={disabled}
      />

      {/* Uploading Files */}
      <AnimatePresence>
        {uploadingFiles.map((uploadFile) => (
          <motion.div
            key={uploadFile.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex items-center gap-3 p-3 bg-[var(--card-background)] border border-[var(--card-border-color)] rounded-[12px]2px]"
          >
            <div className="flex-shrink-0">
              {uploadFile.status === "uploading" && (
                <Loader2 className="h-5 w-5 animate-spin text-[var(--link-color)]" />
              )}
              {uploadFile.status === "success" && (
                <CheckCircle className="h-5 w-5 text-green-500" />
              )}
              {uploadFile.status === "error" && (
                <AlertCircle className="h-5 w-5 text-red-500" />
              )}
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">
                {uploadFile.file.name}
              </p>
              {uploadFile.status === "uploading" && (
                <Progress value={uploadFile.progress} className="mt-1" />
              )}
              {uploadFile.status === "success" && (
                <p className="text-xs text-green-600">Upload complete</p>
              )}
              {uploadFile.status === "error" && (
                <p className="text-xs text-red-600">Upload failed</p>
              )}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Existing Files */}
      {existingFiles.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence>
            {existingFiles.map((url, index) => (
              <motion.div
                key={url}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="relative group rounded-[12px]2px] overflow-hidden bg-[var(--card-background)] border border-[var(--card-border-color)]"
              >
                {isImage(url) ? (
                  <div className="aspect-video">
                    <img
                      src={url}
                      alt={`Upload ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                ) : (
                  <div className="aspect-video flex items-center justify-center">
                    <File className="h-8 w-8 text-[var(--paragraph)]" />
                  </div>
                )}

                <div className="p-2">
                  <p className="text-xs text-[var(--paragraph)] truncate">
                    {getFileName(url)}
                  </p>
                </div>

                {onRemove && (
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        onRemove(url);
                      }}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
