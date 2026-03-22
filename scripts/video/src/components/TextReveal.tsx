import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { fonts } from "../lib/fonts";
import { colors } from "../lib/colors";

interface TextRevealProps {
  text: string;
  delay?: number;
  /** Frames per character reveal */
  speed?: number;
  fontSize?: number;
  fontFamily?: "display" | "body";
  color?: string;
  fontWeight?: number;
  letterSpacing?: string;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  delay = 0,
  speed = 2,
  fontSize = 72,
  fontFamily = "display",
  color = colors.saltWhite,
  fontWeight = 400,
  letterSpacing = "0.02em",
}) => {
  const frame = useCurrentFrame();
  const adjustedFrame = Math.max(0, frame - delay);

  const charsToShow = Math.min(
    text.length,
    Math.floor(adjustedFrame / speed)
  );

  const containerOpacity = interpolate(adjustedFrame, [0, 10], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        opacity: containerOpacity,
      }}
    >
      {text.split("").map((char, i) => {
        const charOpacity = i < charsToShow ? 1 : 0;
        return (
          <span
            key={i}
            style={{
              fontFamily: fontFamily === "display" ? fonts.display : fonts.body,
              fontSize,
              fontWeight,
              color,
              letterSpacing,
              opacity: charOpacity,
              transition: "opacity 0.1s",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        );
      })}
    </div>
  );
};
