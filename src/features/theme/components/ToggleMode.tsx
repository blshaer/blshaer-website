"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/ui";
import { ThemeToggleButton } from "@/features/theme/components/theme-toggle-button";

export default function ToggleMode() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <ThemeToggleButton variant="circle-blur" start="top-right" />
        </TooltipTrigger>
        <TooltipContent>
          <span>Toggle theme</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
