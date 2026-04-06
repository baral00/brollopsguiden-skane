"use client";

import React from "react";
import { motion } from "framer-motion";

interface SliderProps {
  min: number;
  max: number;
  step?: number;
  value: [number, number];
  onValueChange: (value: [number, number]) => void;
  className?: string;
}

export function Slider({ min, max, step = 1, value, onValueChange, className = "" }: SliderProps) {
  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>, index: 0 | 1) => {
    let newValue = parseInt(e.target.value);

    // Apply step rounding
    if (step > 0) {
      newValue = Math.round(newValue / step) * step;
    }

    const newValueArray = [...value] as [number, number];

    if (index === 0 && newValue < value[1]) {
      newValueArray[0] = newValue;
    } else if (index === 1 && newValue > value[0]) {
      newValueArray[1] = newValue;
    }

    onValueChange(newValueArray);
  };

  const leftPercent = ((value[0] - min) / (max - min)) * 100;
  const rightPercent = ((value[1] - min) / (max - min)) * 100;

  return (
    <div className={`relative h-2 bg-gray-200 rounded-full ${className}`}>
      {/* Track */}
      <motion.div
        className="absolute top-0 left-0 h-full bg-[#D4A5A5] rounded-full"
        initial={{ left: `${leftPercent}%`, width: `${rightPercent - leftPercent}%` }}
        animate={{ left: `${leftPercent}%`, width: `${rightPercent - leftPercent}%` }}
        transition={{ duration: 0.1 }}
      />

      {/* Range inputs for actual interaction */}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value[0]}
        onChange={(e) => handleRangeChange(e, 0)}
        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10"
      />
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value[1]}
        onChange={(e) => handleRangeChange(e, 1)}
        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-20"
      />

      {/* Thumb Left */}
      <div
        className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-[#D4A5A5] rounded-full shadow-md hover:scale-110 transition-transform cursor-pointer"
        style={{ left: `calc(${leftPercent}% - 10px)` }}
      />

      {/* Thumb Right */}
      <div
        className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-[#D4A5A5] rounded-full shadow-md hover:scale-110 transition-transform cursor-pointer"
        style={{ left: `calc(${rightPercent}% - 10px)` }}
      />
    </div>
  );
}
