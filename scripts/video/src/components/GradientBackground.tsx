import React from "react";
import { AbsoluteFill } from "remotion";
import { colors } from "../lib/colors";

export const GradientBackground: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(180deg, ${colors.nightDive} 0%, ${colors.oceanNavy} 50%, ${colors.mantaBlack} 100%)`,
      }}
    />
  );
};
