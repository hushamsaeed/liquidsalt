#!/bin/bash
# Copy logo and favicon assets from _intake to public/
set -e

mkdir -p public/logos public/favicons

# Copy logo files (01-13)
for i in $(seq -w 1 13); do
  src=$(ls _intake/logos/${i}_*.png 2>/dev/null)
  if [ -n "$src" ]; then
    cp "$src" public/logos/
    echo "Copied: $(basename "$src")"
  fi
done

# Copy favicon files (14-19)
cp _intake/logos/14_favicon_16x16.png public/favicons/favicon-16x16.png
cp _intake/logos/15_favicon_32x32.png public/favicons/favicon-32x32.png
cp _intake/logos/16_favicon_48x48.png public/favicons/favicon-48x48.png
cp _intake/logos/17_apple_touch_icon_180x180.png public/favicons/apple-touch-icon.png
cp _intake/logos/18_android_chrome_192x192.png public/favicons/android-chrome-192x192.png
cp _intake/logos/19_pwa_splash_512x512.png public/favicons/android-chrome-512x512.png

# Copy OG image
cp _intake/logos/20_OpenGraph_SocialCard_1200x630.png public/og/og-default.png 2>/dev/null || true

echo "Done! All assets copied."
