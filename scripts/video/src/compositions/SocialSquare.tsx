import React from "react";
import {
  AbsoluteFill,
  OffthreadVideo,
  staticFile,
  Img,
  useCurrentFrame,
  interpolate,
} from "remotion";
import { colors } from "../lib/colors";
import { fonts } from "../lib/fonts";
import { seconds } from "../lib/timing";

export const SocialSquare: React.FC = () => {
  const frame = useCurrentFrame();

  // Logo bar fade in at start
  const barOpacity = interpolate(frame, [0, seconds(0.5)], [0, 1], {
    extrapolateRight: "clamp",
  });

  // CTA fade in for last 5 seconds
  const ctaOpacity = interpolate(
    frame,
    [seconds(25), seconds(26)],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill style={{ backgroundColor: colors.nightDive }}>
      {/* Center-cropped video (16:9 in 1:1 frame) */}
      <AbsoluteFill
        style={{
          top: -((1080 * (9 / 16) - 1080) / 2),
          height: 1080 * (16 / 9),
        }}
      >
        <OffthreadVideo
          src={staticFile("source-4k.mp4")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </AbsoluteFill>

      {/* Top brand bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 120,
          background: `linear-gradient(to bottom, ${colors.nightDive} 0%, ${colors.nightDive}CC 60%, transparent 100%)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 16,
          opacity: barOpacity,
        }}
      >
        <Img
          src={staticFile("logo-white.png")}
          style={{ height: 60, width: "auto" }}
        />
      </div>

      {/* Bottom CTA bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 140,
          background: `linear-gradient(to top, ${colors.nightDive} 0%, ${colors.nightDive}DD 70%, transparent 100%)`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          paddingBottom: 24,
          gap: 8,
          opacity: ctaOpacity,
        }}
      >
        <span
          style={{
            fontFamily: fonts.display,
            fontSize: 36,
            fontWeight: 700,
            color: colors.saltWhite,
          }}
        >
          Book Your Dive
        </span>
        <span
          style={{
            fontFamily: fonts.body,
            fontSize: 20,
            color: colors.cyan,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          liquidsaltdivers.com
        </span>
      </div>
    </AbsoluteFill>
  );
};
