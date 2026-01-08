"use client";

import { Button } from "@/shared/ui";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/shared/ui/";
import { Input } from "@/shared/ui/";
import { Label } from "@/shared/ui/";
import { AlertTriangle, CheckCircle, Info } from "lucide-react";
import { useEffect, useState } from "react";

interface DialogOptions {
  title: string;
  message: string;
  type?: "alert" | "confirm" | "prompt";
  variant?: "default" | "destructive" | "success" | "warning";
  confirmText?: string;
  cancelText?: string;
  placeholder?: string;
  defaultValue?: string;
}

interface DialogState extends DialogOptions {
  isOpen: boolean;
  resolve?: (value: boolean | string | null) => void;
}

let dialogState: DialogState = {
  title: "",
  message: "",
  type: "alert",
  variant: "default",
  isOpen: false,
};

let setDialogState: React.Dispatch<React.SetStateAction<DialogState>> | null =
  null;

// Global dialog functions
export const showAlert = (
  title: string,
  message: string,
  variant: DialogOptions["variant"] = "default",
): Promise<boolean> => {
  return new Promise((resolve) => {
    if (setDialogState) {
      setDialogState({
        title,
        message,
        type: "alert",
        variant,
        isOpen: true,
        confirmText: "OK",
        resolve: () => {
          resolve(true);
          if (setDialogState) {
            setDialogState((prev) => ({ ...prev, isOpen: false }));
          }
        },
      });
    }
  });
};

export const showConfirm = (
  title: string,
  message: string,
  options: {
    variant?: DialogOptions["variant"];
    confirmText?: string;
    cancelText?: string;
  } = {},
): Promise<boolean> => {
  return new Promise((resolve) => {
    if (setDialogState) {
      setDialogState({
        title,
        message,
        type: "confirm",
        variant: options.variant || "default",
        confirmText: options.confirmText || "Confirm",
        cancelText: options.cancelText || "Cancel",
        isOpen: true,
        resolve: (value) => {
          resolve(value as boolean);
          if (setDialogState) {
            setDialogState((prev) => ({ ...prev, isOpen: false }));
          }
        },
      });
    }
  });
};

export const showPrompt = (
  title: string,
  message: string,
  options: {
    placeholder?: string;
    defaultValue?: string;
    confirmText?: string;
    cancelText?: string;
  } = {},
): Promise<string | null> => {
  return new Promise((resolve) => {
    if (setDialogState) {
      setDialogState({
        title,
        message,
        type: "prompt",
        variant: "default",
        placeholder: options.placeholder,
        defaultValue: options.defaultValue,
        confirmText: options.confirmText || "OK",
        cancelText: options.cancelText || "Cancel",
        isOpen: true,
        resolve: (value) => {
          resolve(value as string | null);
          if (setDialogState) {
            setDialogState((prev) => ({ ...prev, isOpen: false }));
          }
        },
      });
    }
  });
};

export function CustomDialogProvider() {
  const [state, setState] = useState<DialogState>(dialogState);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setDialogState = setState;
    return () => {
      setDialogState = null;
    };
  }, []);

  useEffect(() => {
    if (state.isOpen && state.type === "prompt") {
      setInputValue(state.defaultValue || "");
    }
  }, [state.isOpen, state.type, state.defaultValue]);

  const handleConfirm = () => {
    if (state.resolve) {
      if (state.type === "prompt") {
        state.resolve(inputValue);
      } else {
        state.resolve(true);
      }
    }
  };

  const handleCancel = () => {
    if (state.resolve) {
      if (state.type === "prompt") {
        state.resolve(null);
      } else {
        state.resolve(false);
      }
    }
  };

  const getIcon = () => {
    switch (state.variant) {
      case "destructive":
        return <AlertTriangle className="h-6 w-6 text-red-500" />;
      case "success":
        return <CheckCircle className="h-6 w-6 text-green-500" />;
      case "warning":
        return <AlertTriangle className="h-6 w-6 text-yellow-500" />;
      default:
        return <Info className="h-6 w-6 text-blue-500" />;
    }
  };

  const getButtonVariant = () => {
    switch (state.variant) {
      case "destructive":
        return "destructive";
      default:
        return "default";
    }
  };

  return (
    <Dialog
      open={state.isOpen}
      onOpenChange={(open) => {
        if (!open && state.resolve) {
          handleCancel();
        }
      }}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            {getIcon()}
            {state.title}
          </DialogTitle>
          <DialogDescription className="text-left">
            {state.message}
          </DialogDescription>
        </DialogHeader>

        {state.type === "prompt" && (
          <div className="space-y-2">
            <Label htmlFor="prompt-input">Enter value:</Label>
            <Input
              id="prompt-input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={state.placeholder}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleConfirm();
                } else if (e.key === "Escape") {
                  handleCancel();
                }
              }}
              autoFocus
            />
          </div>
        )}

        <DialogFooter className="flex gap-2">
          {state.type !== "alert" && (
            <Button variant="outline" onClick={handleCancel}>
              {state.cancelText}
            </Button>
          )}
          <Button variant={getButtonVariant()} onClick={handleConfirm}>
            {state.confirmText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// Hook for using dialogs in components
export function useDialog() {
  return {
    showAlert,
    showConfirm,
    showPrompt,
  };
}

// Simple CustomDialog component for direct use
interface CustomDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  confirmVariant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  isLoading?: boolean;
  showHeader?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function CustomDialog({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  confirmText = "Confirm",
  cancelText = "Cancel",
  confirmVariant = "default",
  isLoading = false,
  showHeader = true,
  className = "",
  children,
}: CustomDialogProps) {
  const handleConfirm = () => {
    if (onConfirm && !isLoading) {
      onConfirm();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={`sm:max-w-md ${className}`}>
        {showHeader && (
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
        )}

        {children}

        {onConfirm && (
          <DialogFooter className="flex gap-2">
            <Button variant="outline" onClick={onClose} disabled={isLoading}>
              {cancelText}
            </Button>
            <Button
              variant={confirmVariant}
              onClick={handleConfirm}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : confirmText}
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}
