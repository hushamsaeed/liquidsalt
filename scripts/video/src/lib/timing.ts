export const FPS = 30;

/** Duration in seconds → frames */
export const seconds = (s: number) => Math.round(s * FPS);

export const INTRO_DURATION = seconds(5);
export const OUTRO_DURATION = seconds(5);
export const HERO_DURATION = seconds(15);
export const SOCIAL_DURATION = seconds(30);

/** Source footage duration in frames (53.5s at 30fps) */
export const SOURCE_DURATION = seconds(53.5);

/** Full promo = intro + source + outro */
export const PROMO_DURATION = INTRO_DURATION + SOURCE_DURATION + OUTRO_DURATION;
