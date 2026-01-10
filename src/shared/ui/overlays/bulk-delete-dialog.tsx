"use client";

import { Button } from "@/shared/ui";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/shared/ui/";
import { OTPInput } from "@/shared/ui/";
import { AnimatePresence, motion } from "framer-motion";
import { AlertTriangle, CheckCircle, Trash2 } from "lucide-react";
import { useState } from "react";

interface BulkDeleteDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => Promise<void>;
  title: string;
  description: string;
  itemCount: number;
  itemType: string;
  isDeleting?: boolean;
}

export function BulkDeleteDialog({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  itemCount,
  itemType,
  isDeleting = false,
}: BulkDeleteDialogProps) {
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
    setStep("otp");
    setError("");
  };

  const handleOTPComplete = async (otp: string) => {
    try {
      setStep("deleting");
      await onConfirm();
      setStep("success");

      // Auto-close after success
      setTimeout(() => {
        handleClose();
      }, 2000);
    } catch (error) {
      setError("Failed to delete items. Please try again.");
      setStep("otp");
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
              <div className="rounded-full bg-red-100 p-3">
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-lg font-semibold text-[var(--card-headline)]">
                {title}
              </h3>
              <p className="text-[var(--card-paragraph)]">{description}</p>
              <div className="bg-red-50 border border-red-200 rounded-[12px] p-4 mt-4">
                <p className="text-sm text-red-800">
                  <strong>Warning:</strong> You are about to permanently delete{" "}
                  <span className="font-bold">{itemCount}</span> {itemType}
                  {itemCount !== 1 ? "s" : ""}. This action cannot be undone.
                </p>
              </div>
            </div>

            <div className="flex gap-3 justify-center">
              <Button
                variant="outline"
                onClick={handleClose}
                disabled={isDeleting}
              >
                Cancel
              </Button>
              <Button
                variant="destructive"
                onClick={handleProceedToOTP}
                disabled={isDeleting}
                className="bg-red-600 hover:bg-red-700"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Continue to Delete
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
            <OTPInput
              length={4}
              onComplete={handleOTPComplete}
              onCancel={handleOTPCancel}
              expectedOTP="2132"
              title="Security Confirmation"
              description={`Enter the confirmation code to delete ${itemCount} ${itemType}${itemCount !== 1 ? "s" : ""}`}
              disabled={isDeleting}
            />

            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <p className="text-sm text-red-500">{error}</p>
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
              <div className="rounded-full bg-blue-100 p-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Trash2 className="h-8 w-8 text-blue-600" />
                </motion.div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-[var(--card-headline)]">
                Deleting {itemType}s...
              </h3>
              <p className="text-[var(--card-paragraph)]">
                Please wait while we delete {itemCount} {itemType}
                {itemCount !== 1 ? "s" : ""}
              </p>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                className="bg-blue-600 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
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
                className="rounded-full bg-green-100 p-3"
              >
                <CheckCircle className="h-8 w-8 text-green-600" />
              </motion.div>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-green-600">
                Successfully Deleted!
              </h3>
              <p className="text-[var(--card-paragraph)]">
                {itemCount} {itemType}
                {itemCount !== 1 ? "s" : ""} have been permanently deleted.
              </p>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="sr-only">
          <DialogTitle>Bulk Delete Confirmation</DialogTitle>
          <DialogDescription>
            Confirm bulk deletion with security verification
          </DialogDescription>
        </DialogHeader>

        <AnimatePresence mode="wait">{getStepContent()}</AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
