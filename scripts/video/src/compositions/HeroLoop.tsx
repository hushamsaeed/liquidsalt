import React from "react";
import { AbsoluteFill, OffthreadVideo, staticFile } from "remotion";
import { colors } from "../lib/colors";

export const HeroLoop: React.FC = () => {
  return (
    <AbsoluteFill>
      <OffthreadVideo
        src={staticFile("hero-clip-4k.mp4")}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        muted
      />
      {/* Bottom gradient overlay matching the site's Hero component */}
      <AbsoluteFill
        style={{
          background: `linear-gradient(to bottom, transparent 0%, transparent 50%, ${colors.mantaBlack}88 100%)`,
        }}
      />
    </AbsoluteFill>
  );
};
