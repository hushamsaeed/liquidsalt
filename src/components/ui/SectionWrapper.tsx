"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
  as?: "section" | "div";
  stagger?: number;
}

export function SectionWrapper({
  children,
  className = "",
  id,
  dark = false,
  as: Tag = "section",
  stagger = 0.1,
}: SectionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      id={id}
      className={`
        ${dark ? "bg-night-dive text-salt-white" : ""}
        ${className}
      `}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut", staggerChildren: stagger }}
      >
        {children}
      </motion.div>
    </Tag>
  );
}
