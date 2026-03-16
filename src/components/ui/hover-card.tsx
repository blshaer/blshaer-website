"use client"

import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"

import { cn } from "@/lib/utils"

/* Root with custom delay (better UX) */
const HoverCard = React.forwardRef<
    React.ElementRef<typeof HoverCardPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Root>
>((props, ref) => (
    <HoverCardPrimitive.Root
        ref={ref}
        openDelay={80}
        closeDelay={120}
        {...props}
    />
))

HoverCard.displayName = "HoverCard"

const HoverCardTrigger = HoverCardPrimitive.Trigger

const HoverCardContent = React.forwardRef<
    React.ElementRef<typeof HoverCardPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", sideOffset = 6, ...props }, ref) => (
    <HoverCardPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={cn(
            /* Layout */
            "z-50 w-64 rounded-lg border p-4 outline-none",

            /* Custom Colors */
            "bg-neutral-900 text-neutral-100 border-neutral-700",

            /* Shadow */
            "shadow-xl",

            /* Animation */
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",

            /* Direction slide */
            "data-[side=bottom]:slide-in-from-top-2",
            "data-[side=left]:slide-in-from-right-2",
            "data-[side=right]:slide-in-from-left-2",
            "data-[side=top]:slide-in-from-bottom-2",

            className
        )}
        {...props}
    />
))

HoverCardContent.displayName = HoverCardPrimitive.Content.displayName

export { HoverCard, HoverCardTrigger, HoverCardContent }