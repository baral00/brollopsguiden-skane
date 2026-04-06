"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
  prefetch?: boolean;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  disabled,
  href,
  target,
  rel,
  prefetch,
  type,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-[#D4A5A5] text-white hover:bg-[#C49494] shadow-md hover:shadow-lg focus:ring-[#D4A5A5]",
    secondary:
      "bg-[#9CAF88] text-white hover:bg-[#8B9F76] shadow-md hover:shadow-lg focus:ring-[#9CAF88]",
    outline:
      "border-2 border-[#D4A5A5] text-[#D4A5A5] hover:bg-[#D4A5A5]/10 focus:ring-[#D4A5A5]",
    ghost:
      "text-[#2C2C2C] hover:bg-[#D4A5A5]/10 focus:ring-[#D4A5A5]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const buttonClasses = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    const disabledClasses = disabled ? "pointer-events-none opacity-50" : undefined;
    const linkRel = target === "_blank" ? rel ?? "noopener noreferrer" : rel;

    if (href.startsWith("/")) {
      return (
        <Link
          href={href}
          prefetch={prefetch}
          className={cn(buttonClasses, disabledClasses)}
          aria-disabled={disabled || undefined}
        >
          {children}
        </Link>
      );
    }

    return (
      <a
        href={href}
        target={target}
        rel={linkRel}
        className={cn(buttonClasses, disabledClasses)}
        aria-disabled={disabled || undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      type={type ?? "button"}
      {...props}
    >
      {children}
    </button>
  );
}
