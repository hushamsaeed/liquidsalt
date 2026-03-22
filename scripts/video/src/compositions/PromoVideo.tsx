import React from "react";
import { Series, OffthreadVideo, staticFile } from "remotion";
import { BrandedIntro } from "./BrandedIntro";
import { BrandedOutro } from "./BrandedOutro";
import { INTRO_DURATION, OUTRO_DURATION, SOURCE_DURATION } from "../lib/timing";

export const PromoVideo: React.FC = () => {
  return (
    <Series>
      <Series.Sequence durationInFrames={INTRO_DURATION}>
        <BrandedIntro />
      </Series.Sequence>
      <Series.Sequence durationInFrames={SOURCE_DURATION}>
        <OffthreadVideo
          src={staticFile("source-4k.mp4")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Series.Sequence>
      <Series.Sequence durationInFrames={OUTRO_DURATION}>
        <BrandedOutro />
      </Series.Sequence>
    </Series>
  );
};
