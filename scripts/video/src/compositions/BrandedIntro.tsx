import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { GradientBackground } from "../components/GradientBackground";
import { CausticOverlay } from "../components/CausticOverlay";
import { Logo } from "../components/Logo";
import { TextReveal } from "../components/TextReveal";
import { seconds } from "../lib/timing";

export const BrandedIntro: React.FC = () => {
  const frame = useCurrentFrame();

  // Background fade in (0-1s)
  const bgOpacity = interpolate(frame, [0, seconds(1)], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Everything fades out (4-5s)
  const fadeOut = interpolate(
    frame,
    [seconds(4), seconds(5)],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      <AbsoluteFill style={{ opacity: bgOpacity * fadeOut }}>
        <GradientBackground />
        <CausticOverlay opacity={0.06} />

        {/* Centered content */}
        <AbsoluteFill
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 40,
          }}
        >
          {/* Logo appears at 1s */}
          <Logo delay={seconds(1)} width={800} />

          {/* Tagline appears at 2.5s */}
          <TextReveal
            text="Deeply Addictive."
            delay={seconds(2.5)}
            speed={3}
            fontSize={96}
            fontFamily="display"
            fontWeight={400}
            letterSpacing="0.04em"
          />
        </AbsoluteFill>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
