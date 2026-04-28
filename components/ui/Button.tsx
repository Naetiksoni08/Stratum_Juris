"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { ComponentProps } from "react";

interface ButtonProps {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-inter font-medium tracking-wide transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-accent-gold text-white hover:bg-hover-gold shadow-sm hover:shadow-md",
    outline:
      "border border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-white",
    ghost:
      "text-accent-gold hover:text-hover-gold underline-offset-4 hover:underline",
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-sm",
    lg: "px-9 py-4 text-base",
  };

  const classes = cn(base, variants[variant], sizes[size], className, {
    "opacity-50 cursor-not-allowed": disabled,
  });

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
