import React from "react";
import { motion } from "motion/react";
import { KineticText } from "./KineticText";

interface CinematicSplitTextProps {
  prefixText?: string;
  highlightText?: string;
  prefixColor?: string;
  highlightColor?: string;
  className?: string;
  delay?: number;
  subtitle?: string;
  subtitleClassName?: string;
}

export const CinematicSplitText: React.FC<CinematicSplitTextProps> = ({
  prefixText = "HOA-Ready.",
  highlightText = "Spotless Guaranteed.",
  prefixColor = "text-white",
  highlightColor = "#38bdf8",
  className = "",
  delay = 0.1,
  subtitle,
  subtitleClassName = "text-xs text-slate-300 font-medium mt-1"
}) => {
  // Split each segment into individual words
  const prefixWords = prefixText ? prefixText.split(" ") : [];
  const highlightWords = highlightText ? highlightText.split(" ") : [];

  // Luxury bouncy spring cubic-bezier transition
  const springTransition = {
    type: "spring" as const,
    damping: 16,
    stiffness: 110,
    mass: 0.8
  };

  return (
    <div className={`inline-flex flex-col items-start ${className}`}>
      <div 
        className="flex flex-wrap items-center gap-x-2 font-black tracking-wider uppercase font-heading"
        style={{ fontSize: "24px", lineHeight: "1.3" }}
      >
        {/* Prefix Words (e.g. "HOA-Ready.") */}
        {prefixWords.map((word, index) => (
          <motion.span
            key={`prefix-${word}-${index}`}
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              ...springTransition,
              delay: delay + index * 0.08
            }}
            className={`inline-block ${prefixColor} select-none`}
          >
            {word}
          </motion.span>
        ))}

        {/* Highlighted Words with Kinetic Font-Weight Character Animation */}
        {highlightWords.map((word, index) => {
          const totalPrefixLength = prefixWords.length;
          return (
            <motion.span
              key={`highlight-${word}-${index}`}
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                ...springTransition,
                delay: delay + (totalPrefixLength + index) * 0.08
              }}
              className="inline-block select-none"
            >
              <KineticText
                text={word}
                color={highlightColor}
                minWeight={400}
                maxWeight={900}
                duration={2.4}
                className="drop-shadow-[0_2px_14px_rgba(56,189,248,0.5)]"
              />
            </motion.span>
          );
        })}
      </div>

      {/* Subtitle with delayed 0.3s staggered fade-in */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.7,
            delay: delay + (prefixWords.length + highlightWords.length) * 0.08 + 0.3,
            ease: [0.16, 1, 0.3, 1]
          }}
          className={subtitleClassName}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
