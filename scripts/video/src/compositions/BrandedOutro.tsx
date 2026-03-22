import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
  Img,
  staticFile,
} from "remotion";
import { GradientBackground } from "../components/GradientBackground";
import { CausticOverlay } from "../components/CausticOverlay";
import { colors } from "../lib/colors";
import { fonts } from "../lib/fonts";
import { seconds } from "../lib/timing";

export const BrandedOutro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Fade in from footage (0-1s)
  const fadeIn = interpolate(frame, [0, seconds(1)], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Logo fade (1-2.5s)
  const logoOpacity = interpolate(
    frame,
    [seconds(1), seconds(1.5)],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  const logoScale = spring({
    frame: Math.max(0, frame - seconds(1)),
    fps,
    config: { damping: 80, stiffness: 100, mass: 0.8 },
  });

  // CTA text (1.5-3s)
  const ctaOpacity = interpolate(
    frame,
    [seconds(1.5), seconds(2)],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // Website URL (2-3s)
  const urlOpacity = interpolate(
    frame,
    [seconds(2), seconds(2.5)],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // WhatsApp (2.5-3.5s)
  const whatsappOpacity = interpolate(
    frame,
    [seconds(2.5), seconds(3)],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      <AbsoluteFill style={{ opacity: fadeIn }}>
        <GradientBackground />
        <CausticOverlay opacity={0.04} />

        <AbsoluteFill
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 50,
          }}
        >
          {/* Logo (smaller) */}
          <div
            style={{
              opacity: logoOpacity,
              transform: `scale(${logoScale})`,
            }}
          >
            <Img
              src={staticFile("logo-white.png")}
              style={{ width: 500, height: "auto" }}
            />
          </div>

          {/* CTA */}
          <div
            style={{
              opacity: ctaOpacity,
              fontFamily: fonts.display,
              fontSize: 80,
              fontWeight: 700,
              color: colors.saltWhite,
              letterSpacing: "0.02em",
            }}
          >
            Book Your Dive
          </div>

          {/* Website */}
          <div
            style={{
              opacity: urlOpacity,
              fontFamily: fonts.body,
              fontSize: 40,
              fontWeight: 300,
              color: colors.cyan,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            liquidsaltdivers.com
          </div>

          {/* WhatsApp */}
          <div
            style={{
              opacity: whatsappOpacity,
              fontFamily: fonts.body,
              fontSize: 32,
              color: `${colors.saltWhite}BB`,
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <span style={{ fontSize: 40 }}>📱</span>
            WhatsApp: +960 777 0043
          </div>
        </AbsoluteFill>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
