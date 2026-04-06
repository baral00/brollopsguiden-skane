import React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ className, label, id, ...props }: InputProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-[#2C2C2C]">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={cn(
          "w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4A5A5] focus:border-transparent transition-all",
          "bg-white text-[#2C2C2C] placeholder:text-gray-400",
          className
        )}
        {...props}
      />
    </div>
  );
}

export function Textarea({ className, label, id, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label?: string }) {
  const textareaId = id || label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={textareaId} className="text-sm font-medium text-[#2C2C2C]">
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        className={cn(
          "w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4A5A5] focus:border-transparent transition-all",
          "bg-white text-[#2C2C2C] placeholder:text-gray-400 min-h-[120px] resize-y",
          className
        )}
        {...props}
      />
    </div>
  );
}

export function Select({ className, label, children, id, ...props }: React.SelectHTMLAttributes<HTMLSelectElement> & { label?: string }) {
  const selectId = id || label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={selectId} className="text-sm font-medium text-[#2C2C2C]">
          {label}
        </label>
      )}
      <select
        id={selectId}
        className={cn(
          "w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4A5A5] focus:border-transparent transition-all",
          "bg-white text-[#2C2C2C] appearance-none cursor-pointer",
          className
        )}
        {...props}
      >
        {children}
      </select>
    </div>
  );
}
