"use client";
import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const tickVariants = {
  checked: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: 0.1,
    },
  },
  unchecked: {
    pathLength: 0,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

export function CheckBoxWithLabel({
  defaultCheck = false,
  children,
}: {
  defaultCheck?: boolean;
  children: React.ReactNode;
}) {
  const [isChecked, setIsChecked] = React.useState(defaultCheck);
  const id = React.useId();

  const toggleChecked = () => setIsChecked((prev) => !prev);

  return (
    <div className="flex items-center gap-2">
      <div className="relative flex items-center">
        <input
          type="checkbox"
          className={cn(
            "relative h-4 w-4 cursor-pointer appearance-none rounded-[4px] border transition-all duration-200",
            isChecked
              ? "border-accentBlue bg-accentBlue"
              : "border-borderNeutralPrimary bg-transparent"
          )}
          checked={isChecked}
          onChange={toggleChecked}
          id={id}
        />
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 12 12"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-3 w-3"
            initial={false}
            animate={isChecked ? "checked" : "unchecked"}
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.5 6.5L4.5 8.5L9.5 3.5"
              variants={tickVariants}
            />
          </motion.svg>
        </div>
      </div>
      <button onClick={toggleChecked}>{children}</button>
    </div>
  );
}
