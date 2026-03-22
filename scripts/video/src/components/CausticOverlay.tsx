import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { colors } from "../lib/colors";

export const CausticOverlay: React.FC<{ opacity?: number }> = ({
  opacity = 0.08,
}) => {
  const frame = useCurrentFrame();

  // Simulate caustic light patterns with moving radial gradients
  const x1 = interpolate(frame, [0, 360], [20, 80], {
    extrapolateRight: "wrap",
  });
  const y1 = interpolate(frame, [0, 240], [30, 70], {
    extrapolateRight: "wrap",
  });
  const x2 = interpolate(frame, [0, 300], [70, 20], {
    extrapolateRight: "wrap",
  });
  const y2 = interpolate(frame, [0, 200], [60, 30], {
    extrapolateRight: "wrap",
  });

  return (
    <AbsoluteFill
      style={{
        opacity,
        background: `
          radial-gradient(ellipse 40% 30% at ${x1}% ${y1}%, ${colors.cyan}44 0%, transparent 70%),
          radial-gradient(ellipse 35% 25% at ${x2}% ${y2}%, ${colors.reefTeal}33 0%, transparent 60%)
        `,
        mixBlendMode: "screen",
      }}
    />
  );
};
