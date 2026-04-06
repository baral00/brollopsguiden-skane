"use client";

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-[#D4A5A5]/20 text-[#D4A5A5] hover:bg-[#D4A5A5]/30",
        secondary: "bg-[#C9A96E]/20 text-[#C9A96E] hover:bg-[#C9A96E]/30",
        outline: "border border-gray-300 text-gray-700 hover:border-gray-400",
        ghost: "text-gray-600 hover:text-gray-800 hover:bg-gray-100",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props}>
      {children}
    </span>
  );
}