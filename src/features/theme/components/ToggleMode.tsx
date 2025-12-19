import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/ui";
import { ThemeToggleButton } from "../../../shared/ui/theme-toggle-button";

export default function ToggleMode() {
  return (
    <div>
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
    </div>
  );
}
