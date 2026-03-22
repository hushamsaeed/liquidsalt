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

export const SocialVertical: React.FC = () => {
  const frame = useCurrentFrame();

  // Branding fades in
  const brandOpacity = interpolate(frame, [0, seconds(0.5)], [0, 1], {
    extrapolateRight: "clamp",
  });

  // CTA at end
  const ctaOpacity = interpolate(
    frame,
    [seconds(25), seconds(26)],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // 16:9 video area in 9:16 frame: 1080 wide, height = 1080 * 9/16 = 607.5
  const videoHeight = Math.round(1080 * (9 / 16));
  const videoTop = Math.round((1920 - videoHeight) / 2);

  return (
    <AbsoluteFill style={{ backgroundColor: colors.nightDive }}>
      {/* Video in center band */}
      <div
        style={{
          position: "absolute",
          top: videoTop,
          left: 0,
          width: 1080,
          height: videoHeight,
          overflow: "hidden",
        }}
      >
        <OffthreadVideo
          src={staticFile("source-4k.mp4")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Gradient bleed from bars into video */}
      <div
        style={{
          position: "absolute",
          top: videoTop - 60,
          left: 0,
          right: 0,
          height: 120,
          background: `linear-gradient(to bottom, ${colors.nightDive} 0%, transparent 100%)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: videoTop + videoHeight - 60,
          left: 0,
          right: 0,
          height: 120,
          background: `linear-gradient(to top, ${colors.nightDive} 0%, transparent 100%)`,
        }}
      />

      {/* Top brand area */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: videoTop,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
          opacity: brandOpacity,
        }}
      >
        <Img
          src={staticFile("logo-white.png")}
          style={{ width: 400, height: "auto" }}
        />
        <span
          style={{
            fontFamily: fonts.display,
            fontSize: 36,
            fontWeight: 400,
            color: `${colors.saltWhite}CC`,
            fontStyle: "italic",
          }}
        >
          Deeply Addictive.
        </span>
      </div>

      {/* Bottom CTA area */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 1920 - videoTop - videoHeight,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
          opacity: ctaOpacity,
        }}
      >
        <span
          style={{
            fontFamily: fonts.display,
            fontSize: 48,
            fontWeight: 700,
            color: colors.saltWhite,
          }}
        >
          Book Your Dive
        </span>
        <span
          style={{
            fontFamily: fonts.body,
            fontSize: 24,
            color: colors.cyan,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          liquidsaltdivers.com
        </span>
        <span
          style={{
            fontFamily: fonts.body,
            fontSize: 22,
            color: `${colors.saltWhite}99`,
            marginTop: 8,
          }}
        >
          WhatsApp: +960 777 0043
        </span>
      </div>
    </AbsoluteFill>
  );
};
