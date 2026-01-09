"use client";

import { Button } from "@/shared/ui";
import { OTPInput } from "@/shared/ui/";
import { AnimatePresence, motion } from "framer-motion";
import { AlertTriangle, CheckCircle, Shield, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { CustomDialog } from "./custom-dialog";

interface SecureBulkDeleteProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => Promise<void>;
  title: string;
  description: string;
  itemCount: number;
  itemType: string;
  isDeleting?: boolean;
  requireOTP?: boolean;
  otpCode?: string;
}

export function SecureBulkDelete({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  itemCount,
  itemType,
  isDeleting = false,
  requireOTP = true,
  otpCode = "2132",
}: SecureBulkDeleteProps) {
  const [step, setStep] = useState<"warning" | "otp" | "deleting" | "success">(
    "warning",
  );
  const [error, setError] = useState("");

  const handleClose = () => {
    if (!isDeleting) {
      setStep("warning");
      setError("");
      onClose();
    }
  };

  const handleProceedToOTP = () => {
    if (requireOTP) {
      setStep("otp");
    } else {
      handleConfirmDelete();
    }
    setError("");
  };

  const handleOTPComplete = async (otp: string) => {
    if (otp === otpCode) {
      await handleConfirmDelete();
    } else {
      setError("Invalid confirmation code. Please try again.");
      toast.error("Invalid confirmation code");
    }
  };

  const handleConfirmDelete = async () => {
    try {
      setStep("deleting");
      setError("");
      await onConfirm();
      setStep("success");

      toast.success(
        `Successfully deleted ${itemCount} ${itemType}${itemCount !== 1 ? "s" : ""}`,
      );

      // Auto-close after success
      setTimeout(() => {
        handleClose();
      }, 2000);
    } catch (error) {
      setError("Failed to delete items. Please try again.");
      setStep(requireOTP ? "otp" : "warning");
      toast.error("Failed to delete items");
    }
  };

  const handleOTPCancel = () => {
    setStep("warning");
    setError("");
  };

  const getStepContent = () => {
    switch (step) {
      case "warning":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-center">
              <div className="rounded-full bg-red-100 dark:bg-red-900/20 p-4">
                <AlertTriangle className="h-10 w-10 text-red-600" />
              </div>
            </div>

            <div className="text-center space-y-3">
              <h3 className="text-xl font-semibold text-[var(--card-headline)]">
                {title}
              </h3>
              <p className="text-[var(--card-paragraph)]">{description}</p>

              <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-[12px] p-4 mt-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div className="text-left">
                    <p className="text-sm font-medium text-red-800 dark:text-red-200">
                      Permanent Deletion Warning
                    </p>
                    <p className="text-sm text-red-700 dark:text-red-300 mt-1">
                      You are about to permanently delete{" "}
                      <span className="font-bold">{itemCount}</span> {itemType}
                      {itemCount !== 1 ? "s" : ""}. This action cannot be undone
                      and all data will be lost forever.
                    </p>
                  </div>
                </div>
              </div>

              {requireOTP && (
                <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-[12px]2px] p-4">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div className="text-left">
                      <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
                        Security Verification Required
                      </p>
                      <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                        You will need to enter a confirmation code to proceed
                        with this deletion.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex gap-3 justify-center pt-4">
              <Button
                variant="outline"
                onClick={handleClose}
                disabled={isDeleting}
                className="min-w-[100px]"
              >
                Cancel
              </Button>
              <Button
                variant="destructive"
                onClick={handleProceedToOTP}
                disabled={isDeleting}
                className="bg-red-600 hover:bg-red-700 min-w-[140px]"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                {requireOTP ? "Continue" : "Delete Now"}
              </Button>
            </div>
          </motion.div>
        );

      case "otp":
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center mb-4">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900/20 p-4">
                  <Shield className="h-10 w-10 text-blue-600" />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-[var(--card-headline)]">
                Security Confirmation
              </h3>
              <p className="text-[var(--card-paragraph)]">
                Enter the confirmation code to delete {itemCount} {itemType}
                {itemCount !== 1 ? "s" : ""}
              </p>
            </div>

            <OTPInput
              length={4}
              onComplete={handleOTPComplete}
              onCancel={handleOTPCancel}
              expectedOTP={otpCode}
              title=""
              description="Enter the 4-digit confirmation code"
              disabled={isDeleting}
            />

            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <p className="text-sm text-red-500 flex items-center justify-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  {error}
                </p>
              </motion.div>
            )}
          </motion.div>
        );

      case "deleting":
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6 text-center"
          >
            <div className="flex items-center justify-center">
              <div className="rounded-full bg-blue-100 dark:bg-blue-900/20 p-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Trash2 className="h-10 w-10 text-blue-600" />
                </motion.div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-[var(--card-headline)]">
                Deleting {itemType}s...
              </h3>
              <p className="text-[var(--card-paragraph)]">
                Please wait while we securely delete {itemCount} {itemType}
                {itemCount !== 1 ? "s" : ""}
              </p>
            </div>

            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
              <motion.div
                className="bg-blue-600 h-3 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 3, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        );

      case "success":
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6 text-center"
          >
            <div className="flex items-center justify-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="rounded-full bg-green-100 dark:bg-green-900/20 p-4"
              >
                <CheckCircle className="h-10 w-10 text-green-600" />
              </motion.div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-green-600">
                Successfully Deleted!
              </h3>
              <p className="text-[var(--card-paragraph)]">
                {itemCount} {itemType}
                {itemCount !== 1 ? "s" : ""} have been permanently deleted.
              </p>
              <p className="text-sm text-[var(--card-paragraph)]">
                This dialog will close automatically...
              </p>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <CustomDialog
      isOpen={isOpen}
      onClose={handleClose}
      title="Secure Bulk Delete"
      description="Confirm bulk deletion with security verification"
      showHeader={false}
      className="sm:max-w-lg"
    >
      <AnimatePresence mode="wait">{getStepContent()}</AnimatePresence>
    </CustomDialog>
  );
}
