import { bundle } from "@remotion/bundler";
import { renderMedia, selectComposition } from "@remotion/renderer";
import path from "path";

const COMPOSITIONS = [
  "BrandedIntro",
  "BrandedOutro",
  "PromoVideo",
  "HeroLoop",
  "SocialSquare",
  "SocialVertical",
] as const;

type CompositionId = (typeof COMPOSITIONS)[number];

async function renderComposition(
  serveUrl: string,
  compositionId: CompositionId
) {
  console.log(`\n🎬 Rendering ${compositionId}...`);

  const composition = await selectComposition({
    serveUrl,
    id: compositionId,
  });

  const outputPath = path.join(__dirname, "dist", `${compositionId}.mp4`);

  await renderMedia({
    composition,
    serveUrl,
    codec: "h264",
    outputLocation: outputPath,
    chromiumOptions: {
      enableMultiProcessOnLinux: true,
    },
  });

  console.log(`✅ ${compositionId} → ${outputPath}`);
}

async function main() {
  const args = process.argv.slice(2);
  const renderAll = args.includes("--all");
  const specificId = args.find((a) => !a.startsWith("--")) as
    | CompositionId
    | undefined;

  const toRender: CompositionId[] = renderAll
    ? [...COMPOSITIONS]
    : specificId
      ? [specificId]
      : [];

  if (toRender.length === 0) {
    console.log("Usage:");
    console.log("  npx tsx render.ts <CompositionId>");
    console.log("  npx tsx render.ts --all");
    console.log(`\nAvailable: ${COMPOSITIONS.join(", ")}`);
    process.exit(1);
  }

  console.log("📦 Bundling Remotion project...");
  const bundled = await bundle({
    entryPoint: path.join(__dirname, "src/Root.tsx"),
    publicDir: path.join(__dirname, "assets"),
  });
  console.log("✅ Bundle complete");

  for (const id of toRender) {
    await renderComposition(bundled, id);
  }

  console.log("\n🎉 All renders complete!");
}

main().catch((err) => {
  console.error("❌ Render failed:", err);
  process.exit(1);
});
