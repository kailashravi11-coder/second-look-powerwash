import React, { useState, useRef, useId } from "react";

export interface KineticTextProps {
  /** The text string to animate */
  text: string;
  /** Additional CSS class names for the container */
  className?: string;
  /** Minimum font weight in the kinetic cycle (e.g. 300 or 400) */
  minWeight?: number;
  /** Maximum font weight in the kinetic cycle (e.g. 800 or 900) */
  maxWeight?: number;
  /** Total cycle duration in seconds for the wave (default 2.4) */
  duration?: number;
  /** Delay in seconds between adjacent characters (default 0.08) */
  stagger?: number;
  /** HTML tag to render (default "span") */
  as?: "span" | "div" | "h1" | "h2" | "h3" | "p";
  /** Optional custom color or gradient class */
  color?: string;
  /** Whether mouse hover/proximity enhances character weight (default true) */
  interactive?: boolean;
  /** Whether continuous kinetic wave animation is active (default true) */
  autoAnimate?: boolean;
  /** Optional inline styles */
  style?: React.CSSProperties;
}

export const KineticText: React.FC<KineticTextProps> = ({
  text,
  className = "",
  minWeight = 300,
  maxWeight = 900,
  duration = 2.4,
  stagger = 0.08,
  as: Component = "span",
  color,
  interactive = true,
  autoAnimate = true,
  style = {}
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);
  const animationId = useId().replace(/:/g, "_");
  const keyframeName = `kinetic_weight_${animationId}`;

  // Split into words, preserving spaces, so words wrap properly on mobile
  const words = text.split(" ");
  let globalCharIndex = 0;

  // Compute total characters count for timing
  const totalChars = text.replace(/\s+/g, "").length || 1;

  return (
    <Component
      ref={containerRef as any}
      className={`inline-flex flex-wrap items-baseline select-none ${className}`}
      style={{
        ...style,
        ...(color ? { color } : {})
      }}
      onMouseLeave={() => {
        if (interactive) setHoveredIndex(null);
      }}
    >
      {/* Dynamic Keyframe style specifically calibrated to minWeight & maxWeight */}
      {autoAnimate && (
        <style>{`
          @keyframes ${keyframeName} {
            0%, 100% {
              font-weight: ${minWeight};
              opacity: 0.92;
            }
            50% {
              font-weight: ${maxWeight};
              opacity: 1;
            }
          }
        `}</style>
      )}

      {words.map((word, wordIndex) => {
        const chars = word.split("");
        const wordMarkup = (
          <span
            key={`word-${wordIndex}`}
            className="inline-block whitespace-nowrap"
          >
            {chars.map((char) => {
              const charIndex = globalCharIndex++;
              
              // Hover proximity calculation:
              // Hovered letter gets max weight; immediate neighbors get interpolated weight
              let interactiveWeight: number | null = null;
              if (interactive && hoveredIndex !== null) {
                const distance = Math.abs(charIndex - hoveredIndex);
                if (distance === 0) {
                  interactiveWeight = maxWeight;
                } else if (distance === 1) {
                  interactiveWeight = Math.round(minWeight + (maxWeight - minWeight) * 0.65);
                } else if (distance === 2) {
                  interactiveWeight = Math.round(minWeight + (maxWeight - minWeight) * 0.35);
                } else {
                  interactiveWeight = minWeight;
                }
              }

              const isBeingHovered = hoveredIndex !== null;

              return (
                <span
                  key={`char-${charIndex}`}
                  onMouseEnter={() => {
                    if (interactive) setHoveredIndex(charIndex);
                  }}
                  className="inline-block transition-[font-weight,transform,color] duration-200 ease-out cursor-default"
                  style={{
                    fontFamily: "'Outfit', var(--font-display), sans-serif",
                    fontVariationSettings: isBeingHovered && interactiveWeight !== null 
                      ? `'wght' ${interactiveWeight}` 
                      : undefined,
                    fontWeight: isBeingHovered && interactiveWeight !== null
                      ? interactiveWeight
                      : undefined,
                    animationName: (!isBeingHovered && autoAnimate) ? keyframeName : "none",
                    animationDuration: `${duration}s`,
                    animationTimingFunction: "ease-in-out",
                    animationIterationCount: "infinite",
                    animationDelay: (!isBeingHovered && autoAnimate)
                      ? `${(charIndex % totalChars) * stagger}s`
                      : "0s",
                    animationFillMode: "both",
                    transform: isBeingHovered && interactiveWeight === maxWeight
                      ? "translateY(-1.5px) scale(1.05)"
                      : "translateY(0) scale(1)",
                  }}
                >
                  {char}
                </span>
              );
            })}
          </span>
        );

        return (
          <React.Fragment key={`frag-${wordIndex}`}>
            {wordMarkup}
            {wordIndex < words.length - 1 && (
              <span className="inline-block font-normal">&nbsp;</span>
            )}
          </React.Fragment>
        );
      })}
    </Component>
  );
};

export default KineticText;
