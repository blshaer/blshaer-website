"use client";

import { Button } from "@/shared/ui";
import { Input } from "@/shared/ui/";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface OTPInputProps {
  length?: number;
  onComplete: (otp: string) => void;
  onCancel?: () => void;
  expectedOTP?: string;
  title?: string;
  description?: string;
  disabled?: boolean;
}

export function OTPInput({
  length = 4,
  onComplete,
  onCancel,
  expectedOTP = "2132",
  title = "Enter Confirmation Code",
  description = "Please enter the confirmation code to proceed",
  disabled = false,
}: OTPInputProps) {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
  const [error, setError] = useState("");
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    // Focus first input on mount
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index: number, value: string) => {
    if (disabled) return;

    // Only allow numbers
    if (value && !/^\d$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError("");

    // Move to next input if value is entered
    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // Check if OTP is complete
    if (newOtp.every((digit) => digit !== "")) {
      const otpString = newOtp.join("");
      if (otpString === expectedOTP) {
        onComplete(otpString);
      } else {
        setError("Invalid confirmation code. Please try again.");
        // Clear OTP after a delay
        setTimeout(() => {
          setOtp(new Array(length).fill(""));
          inputRefs.current[0]?.focus();
        }, 1000);
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (disabled) return;

    if (e.key === "Backspace") {
      if (otp[index]) {
        // Clear current input
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        // Move to previous input and clear it
        const newOtp = [...otp];
        newOtp[index - 1] = "";
        setOtp(newOtp);
        inputRefs.current[index - 1]?.focus();
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    } else if (e.key === "Escape" && onCancel) {
      onCancel();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    if (disabled) return;

    e.preventDefault();
    const pastedData = e.clipboardData.getData("text");
    const pastedDigits = pastedData.replace(/\D/g, "").slice(0, length);

    if (pastedDigits.length === length) {
      const newOtp = pastedDigits.split("");
      setOtp(newOtp);
      setError("");

      // Check if pasted OTP is correct
      if (pastedDigits === expectedOTP) {
        onComplete(pastedDigits);
      } else {
        setError("Invalid confirmation code. Please try again.");
        setTimeout(() => {
          setOtp(new Array(length).fill(""));
          inputRefs.current[0]?.focus();
        }, 1000);
      }
    }
  };

  const clearOTP = () => {
    setOtp(new Array(length).fill(""));
    setError("");
    inputRefs.current[0]?.focus();
  };

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-[var(--card-headline)]">
          {title}
        </h3>
        <p className="text-sm text-[var(--card-paragraph)] mt-1">
          {description}
        </p>
        <p className="text-xs text-[var(--paragraph)] mt-2">
          Expected code:{" "}
          <span className="font-mono font-bold">{expectedOTP}</span>
        </p>
      </div>

      <div className="flex justify-center gap-2">
        {otp.map((digit, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Input
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              disabled={disabled}
              className={`
                w-12 h-12 text-center text-lg font-bold
                bg-[var(--input-background)] border-[var(--input-border-color)]
                focus:border-[var(--link-color)] focus:ring-[var(--link-color)]
                ${error ? "border-red-500" : ""}
                ${disabled ? "opacity-50 cursor-not-allowed" : ""}
              `}
            />
          </motion.div>
        ))}
      </div>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <p className="text-sm text-red-500">{error}</p>
        </motion.div>
      )}

      <div className="flex justify-center gap-2">
        <Button
          type="button"
          variant="outline"
          onClick={clearOTP}
          disabled={disabled || otp.every((digit) => digit === "")}
          className="text-sm"
        >
          Clear
        </Button>
        {onCancel && (
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            disabled={disabled}
            className="text-sm"
          >
            Cancel
          </Button>
        )}
      </div>
    </div>
  );
}
