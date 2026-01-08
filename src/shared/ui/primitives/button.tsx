import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import * as React from "react";

import { cn } from "@/shared/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium whitespace-nowrap outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 transition-colors text-shadow-xs h-8 px-4 border border-[var(--button-border-main)]  hover:shadow-lg hover:border-[var(--button-border-hover)]",
    "bg-gradient-to-b from-[var(--button-bg-from)] to-[var(--button-bg-to)] text-[var(--button-text)] shadow-[var(--button-shadow)] hover:to-[var(--button-hover-to)] dark:from-[var(--button-bg-from)] dark:to-[var(--button-bg-to)] dark:shadow-[var(--button-shadow)] dark:hover:to-[var(--button-hover-to)]",
    "[&_.text-shadow-xs]:text-shadow-xs",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "h-full gap-1   flex max-md:h-[35px] capitalize font-bold items-center justify-center rounded-[12px] cursor-pointer px-6 py-3 transition duration-100 transform bg-[var(--button)]  text-[var(--button-text)] hoverd hover:bg-[var(--button)] ",
        destructive:
          "bg-red-500 text-[var(--button-text)] rounded-[12px] hover:bg-destructive/90",
        outline:
          "h-full gap-1 flex max-md:h-[35px] capitalize font-bold items-center justify-center rounded-[12px] cursor-pointer px-6 py-3 transition duration-100 transform border-[var(--button)] border-2 border-[var(--button-border)] text-[var(--outline-button-text)] hoverd hover:bg-[var(--button-hover)] hover:text-[var(--button-text-hover)]",
        secondary:
          "h-full gap-1 flex max-md:h-[35px] capitalize font-bold items-center justify-center rounded-[12px] cursor-pointer px-6 py-3 transition duration-100 transform bg-[var(--button)] border-2 border-[var(--button-border)] text-[var(--button-text)] hoverd hover:bg-[var(--button-hover)] hover:text-[var(--button-text-hover)]",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        active:
          "transition duration-100 transform bg-[var(--active)] text-[var(--active-text)]",
        icon: "bg-[var(--card-background)] border",
      },
      size: {
        default: "h-8 px-4",
        sm: "h-7 rounded-[12px] px-3",
        lg: "h-10 rounded-[12px] px-8",
        icon: "h-8 w-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: React.ReactNode;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      icon,
      isLoading,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {icon && !isLoading && <span>{icon}</span>}
        {children}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
