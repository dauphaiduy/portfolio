"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type MotionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  hover?: boolean;
};

export function MotionReveal({
  children,
  className,
  delay = 0,
  y = 24,
  hover = false,
}: MotionRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={hover && !reduceMotion ? { y: -6, scale: 1.01 } : undefined}
      whileTap={hover && !reduceMotion ? { scale: 0.995 } : undefined}
    >
      {children}
    </motion.div>
  );
}
