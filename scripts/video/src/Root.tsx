import React from "react";
import { Composition, registerRoot } from "remotion";
import { BrandedIntro } from "./compositions/BrandedIntro";
import { BrandedOutro } from "./compositions/BrandedOutro";
import { PromoVideo } from "./compositions/PromoVideo";
import { HeroLoop } from "./compositions/HeroLoop";
import { SocialSquare } from "./compositions/SocialSquare";
import { SocialVertical } from "./compositions/SocialVertical";
import {
  FPS,
  INTRO_DURATION,
  OUTRO_DURATION,
  PROMO_DURATION,
  HERO_DURATION,
  SOCIAL_DURATION,
} from "./lib/timing";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="BrandedIntro"
        component={BrandedIntro}
        durationInFrames={INTRO_DURATION}
        fps={FPS}
        width={3840}
        height={2160}
      />
      <Composition
        id="BrandedOutro"
        component={BrandedOutro}
        durationInFrames={OUTRO_DURATION}
        fps={FPS}
        width={3840}
        height={2160}
      />
      <Composition
        id="PromoVideo"
        component={PromoVideo}
        durationInFrames={PROMO_DURATION}
        fps={FPS}
        width={3840}
        height={2160}
      />
      <Composition
        id="HeroLoop"
        component={HeroLoop}
        durationInFrames={HERO_DURATION}
        fps={FPS}
        width={1920}
        height={1080}
      />
      <Composition
        id="SocialSquare"
        component={SocialSquare}
        durationInFrames={SOCIAL_DURATION}
        fps={FPS}
        width={1080}
        height={1080}
      />
      <Composition
        id="SocialVertical"
        component={SocialVertical}
        durationInFrames={SOCIAL_DURATION}
        fps={FPS}
        width={1080}
        height={1920}
      />
    </>
  );
};

registerRoot(RemotionRoot);
