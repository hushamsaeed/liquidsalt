import { loadFont as loadPlayfair } from "@remotion/google-fonts/PlayfairDisplay";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";

const playfair = loadPlayfair();
const inter = loadInter();

export const fonts = {
  display: playfair.fontFamily,
  body: inter.fontFamily,
} as const;
