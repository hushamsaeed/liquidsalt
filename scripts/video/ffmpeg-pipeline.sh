#!/bin/bash
set -euo pipefail

FFMPEG="/opt/homebrew/bin/ffmpeg"
DIST="$(dirname "$0")/dist"
OUTPUT="$(dirname "$0")/../../public/videos"

mkdir -p "$OUTPUT"

echo "🎬 Post-processing rendered videos..."

# Hero loop — WebM VP9 (primary, smaller)
if [ -f "$DIST/HeroLoop.mp4" ]; then
  echo "→ Hero loop (WebM VP9)..."
  $FFMPEG -y -i "$DIST/HeroLoop.mp4" \
    -c:v libvpx-vp9 -crf 35 -b:v 1500k -an \
    -movflags +faststart \
    "$OUTPUT/hero-loop.webm"

  echo "→ Hero loop (MP4 H.264)..."
  $FFMPEG -y -i "$DIST/HeroLoop.mp4" \
    -c:v libx264 -crf 28 -preset veryslow -an \
    -movflags +faststart \
    "$OUTPUT/hero-loop.mp4"

  echo "→ Hero poster frame..."
  $FFMPEG -y -i "$DIST/HeroLoop.mp4" \
    -frames:v 1 -q:v 2 \
    "$OUTPUT/hero-poster.jpg"
fi

# Promo video — 1080p web version
if [ -f "$DIST/PromoVideo.mp4" ]; then
  echo "→ Promo video (1080p web)..."
  $FFMPEG -y -i "$DIST/PromoVideo.mp4" \
    -vf "scale=1920:1080:flags=lanczos" \
    -c:v libx264 -crf 23 -preset slow \
    -c:a aac -b:a 128k \
    -movflags +faststart \
    "$OUTPUT/promo-full.mp4"
fi

# Social square
if [ -f "$DIST/SocialSquare.mp4" ]; then
  echo "→ Social square..."
  $FFMPEG -y -i "$DIST/SocialSquare.mp4" \
    -c:v libx264 -crf 23 -preset slow \
    -c:a aac -b:a 128k \
    -movflags +faststart \
    "$OUTPUT/social-square.mp4"
fi

# Social vertical
if [ -f "$DIST/SocialVertical.mp4" ]; then
  echo "→ Social vertical..."
  $FFMPEG -y -i "$DIST/SocialVertical.mp4" \
    -c:v libx264 -crf 23 -preset slow \
    -c:a aac -b:a 128k \
    -movflags +faststart \
    "$OUTPUT/social-vertical.mp4"
fi

echo ""
echo "✅ All outputs in $OUTPUT:"
ls -lh "$OUTPUT"
