import { cn } from "@/shared/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-[10px] bg-[var(--card-background)]",
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
