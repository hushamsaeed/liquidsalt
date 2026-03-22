import React from "react";
import {
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
  Img,
  staticFile,
} from "remotion";

interface LogoProps {
  /** Delay in frames before the logo starts animating */
  delay?: number;
  /** Scale factor (1 = original size relative to composition) */
  maxScale?: number;
  /** Max width in pixels */
  width?: number;
}

export const Logo: React.FC<LogoProps> = ({
  delay = 0,
  maxScale = 1,
  width = 600,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const adjustedFrame = Math.max(0, frame - delay);

  const scale =
    spring({
      frame: adjustedFrame,
      fps,
      config: { damping: 80, stiffness: 100, mass: 0.8 },
    }) * maxScale;

  const opacity = interpolate(adjustedFrame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        opacity,
        transform: `scale(${scale})`,
      }}
    >
      <Img
        src={staticFile("logo-white.png")}
        style={{ width, height: "auto" }}
      />
    </div>
  );
};
