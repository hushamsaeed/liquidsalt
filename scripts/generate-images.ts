/**
 * Generate all site images using Google Gemini API.
 * Usage: GEMINI_API_KEY=your_key npx tsx scripts/generate-images.ts
 */

import * as fs from "fs";
import * as path from "path";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
  console.error("❌ GEMINI_API_KEY environment variable required");
  process.exit(1);
}

const OUTPUT_DIR = path.join(process.cwd(), "public/images");

interface ImageSpec {
  path: string;
  prompt: string;
}

const IMAGES: ImageSpec[] = [
  // ── Hero Backgrounds ──
  {
    path: "heroes/homepage.webp",
    prompt: "Underwater photograph looking up at the ocean surface from below, sunlight rays penetrating crystal clear tropical water, silhouette of a manta ray gliding overhead, deep blue and turquoise tones, Maldives diving photography style, cinematic wide angle, 1920x1080",
  },
  {
    path: "heroes/packages.webp",
    prompt: "Scuba divers swimming alongside a large manta ray in clear blue tropical water, Maldives reef in background, professional underwater photography, vibrant coral, sunlight from above, cinematic composition, 1920x1080",
  },
  {
    path: "heroes/courses.webp",
    prompt: "PADI scuba diving instructor teaching a student underwater in clear shallow tropical water, coral reef visible below, both wearing full scuba gear, warm sunlight filtering through water, professional diving education photography, 1920x1080",
  },
  {
    path: "heroes/excursions.webp",
    prompt: "Traditional Maldivian dhoni boat on turquoise ocean at golden hour, white sandbank visible in distance, dramatic tropical sky, deep blue water fading to turquoise near sand, aerial perspective, travel photography, 1920x1080",
  },
  {
    path: "heroes/marine-life.webp",
    prompt: "Close-up underwater photograph of a reef manta ray feeding with mouth open, plankton-rich water, other mantas visible in background, dramatic underwater lighting from above, Hanifaru Bay Maldives style, wildlife photography, 1920x1080",
  },
  {
    path: "heroes/gallery.webp",
    prompt: "Split-shot photograph half above half below tropical ocean surface, palm trees and blue sky above, vibrant coral reef with tropical fish below waterline, crystal clear Maldives water, professional split-level photography, 1920x1080",
  },
  {
    path: "heroes/team.webp",
    prompt: "Group of scuba diving professionals on a traditional dive boat in the Maldives, turquoise ocean background, diving equipment visible, warm golden hour light, candid team photo style, professional and welcoming atmosphere, 1920x1080",
  },
  {
    path: "heroes/hanifaru-bay.webp",
    prompt: "Aerial photograph of Hanifaru Bay in Baa Atoll Maldives, turquoise lagoon surrounded by deeper blue ocean, small island visible, UNESCO marine biosphere reserve, dramatic tropical clouds, satellite-view style travel photography, 1920x1080",
  },
  {
    path: "heroes/about.webp",
    prompt: "Local Maldivian island with palm trees, white sandy beach, crystal clear turquoise water, traditional fishing boats, small dive centre building visible, warm afternoon light, authentic island life photography, 1920x1080",
  },
  {
    path: "heroes/accommodation.webp",
    prompt: "Beachfront guesthouse on a Maldivian local island, white building with tropical garden, turquoise ocean in background, palm trees swaying, golden hour warm light, boutique accommodation photography, welcoming and serene, 1920x1080",
  },

  // ── Package Cards ──
  {
    path: "packages/manta-madness.webp",
    prompt: "Snorkeller swimming directly above a giant manta ray in crystal clear tropical water, the manta is feeding near the surface, plankton visible in water, dramatic underwater photograph taken from above, Maldives Hanifaru Bay style, 800x450",
  },
  {
    path: "packages/dive-dive-dive.webp",
    prompt: "Two scuba divers exploring a colorful coral reef wall in the Maldives, soft corals and sea fans, small tropical fish everywhere, clear blue water, sunbeams from surface, professional reef diving photography, 800x450",
  },
  {
    path: "packages/dive-hanifaru.webp",
    prompt: "Scuba diver at depth watching a manta ray pass overhead in Hanifaru Bay, deep blue water, dramatic perspective looking up, rays of sunlight, silhouette style underwater photography, Maldives diving, 800x450",
  },

  // ── Experience Tiles ──
  {
    path: "experiences/scuba-diving.webp",
    prompt: "Scuba diver hovering over pristine coral reef in clear Maldives water, colorful hard corals, schools of tropical fish, sunlight filtering down, professional underwater photography, vibrant and inviting, 600x450",
  },
  {
    path: "experiences/padi-courses.webp",
    prompt: "Scuba diving student practicing skills in shallow turquoise water with instructor watching, bubbles rising, tropical setting, warm inviting atmosphere, beginner-friendly diving education photography, 600x450",
  },
  {
    path: "experiences/snorkelling.webp",
    prompt: "Snorkeller floating on surface of crystal clear tropical water, manta ray visible below, turquoise Maldives lagoon, viewed from slightly above water surface, inviting and accessible water activity photography, 600x450",
  },
  {
    path: "experiences/sandbank.webp",
    prompt: "Pristine white sandbank in the middle of turquoise Maldives ocean, no people, pure white sand surrounded by shallow crystal clear water fading to deep blue, dramatic clouds, paradise photography, 600x450",
  },
  {
    path: "experiences/night-snorkel.webp",
    prompt: "Underwater night photograph with torch illuminating bioluminescent plankton and coral reef, glowing blue particles in dark water, nocturnal fish visible, magical deep blue and cyan tones, night diving photography, 600x450",
  },
  {
    path: "experiences/big-game-fishing.webp",
    prompt: "Big game fishing from a boat in deep blue Indian Ocean, fishing rod bent with tension, wake of the boat on deep blue water, tropical sky, dramatic action fishing photography, Maldives offshore fishing, 600x450",
  },

  // ── Accommodation Cards ──
  {
    path: "accommodation/aveyla-manta-village.webp",
    prompt: "Beachfront guesthouse with white walls and tropical garden, ocean view terrace, palm trees, turquoise sea visible, Maldivian local island boutique accommodation, warm afternoon light, welcoming exterior photography, 800x450",
  },
  {
    path: "accommodation/kiha-beach.webp",
    prompt: "Modern boutique hotel room with ocean view, white minimalist interior with tropical accents, balcony overlooking turquoise Maldives water, clean and contemporary island accommodation photography, 800x450",
  },
  {
    path: "accommodation/lvis-blancura.webp",
    prompt: "Contemporary guesthouse with small infinity pool overlooking the ocean at sunset, tropical garden, Maldivian island setting, warm golden light reflected in pool water, luxury budget accommodation photography, 800x450",
  },
  {
    path: "accommodation/chakz-beach.webp",
    prompt: "Cozy beachside guesthouse with hammock between palm trees, white sand beach, turquoise water, simple charming Maldivian architecture, warm homestyle atmosphere, budget-friendly island accommodation photography, 800x450",
  },

  // ── Species Cards ──
  {
    path: "species/reef-manta-ray.webp",
    prompt: "Close-up portrait of a reef manta ray (Mobula alfredi) swimming directly toward camera, clear blue water, distinctive cephalic fins visible, white belly markings, professional marine wildlife photography, sharp detail, 400x400",
  },
  {
    path: "species/whale-shark.webp",
    prompt: "Whale shark (Rhincodon typus) swimming near the surface in blue tropical water, distinctive spotted pattern visible, sunlight from above, snorkeller visible for scale in background, marine wildlife photography, 400x400",
  },
  {
    path: "species/eagle-ray.webp",
    prompt: "Spotted eagle ray (Aetobatus narinari) gliding over sandy ocean floor, distinctive spotted pattern on wings, clear tropical water, coral reef edge visible, marine wildlife underwater photography, 400x400",
  },
  {
    path: "species/grey-reef-shark.webp",
    prompt: "Grey reef shark (Carcharhinus amblyrhynchos) cruising along a coral reef wall, sleek profile, clear blue water, reef visible below, professional underwater wildlife photography, Maldives reef shark, 400x400",
  },

  // ── Gallery Images ──
  {
    path: "gallery/underwater-01.webp",
    prompt: "Multiple manta rays feeding in cyclone formation at Hanifaru Bay, plankton-rich water, dramatic underwater wide-angle photograph, dozens of mantas spiralling, sunlight from above, spectacular marine wildlife event, 800x600",
  },
  {
    path: "gallery/underwater-02.webp",
    prompt: "Two scuba divers exploring a vibrant coral garden in the Maldives, colorful soft and hard corals, schools of anthias fish, clear blue water, warm sunlight, professional reef diving photography, 800x600",
  },
  {
    path: "gallery/underwater-03.webp",
    prompt: "Night dive scene with scuba diver's torch illuminating a sleeping sea turtle on coral reef, bioluminescent particles in water, deep blue and cyan tones, nocturnal underwater photography, 800x600",
  },
  {
    path: "gallery/above-water-01.webp",
    prompt: "Traditional Maldivian dhoni boat silhouetted against dramatic sunset sky, calm turquoise ocean, deep orange and purple clouds, Baa Atoll diving boat at dusk, travel photography, 800x600",
  },
  {
    path: "gallery/above-water-02.webp",
    prompt: "Scuba divers preparing equipment on dive boat deck, turquoise Maldives ocean in background, tanks and BCD gear visible, professional and organized dive operation, candid documentary photography, 800x600",
  },
  {
    path: "gallery/above-water-03.webp",
    prompt: "Golden hour at Dharavandhoo harbour, traditional fishing boats, calm water reflecting orange sky, palm trees silhouetted, authentic Maldivian local island atmosphere, travel photography, 800x600",
  },
  {
    path: "gallery/marine-life-01.webp",
    prompt: "Hawksbill sea turtle swimming gracefully over coral reef in clear tropical water, detailed shell pattern visible, colorful reef below, Maldives marine life photography, 800x600",
  },
  {
    path: "gallery/marine-life-02.webp",
    prompt: "Whale shark feeding near surface with mouth open, spots and pattern clearly visible, snorkeller swimming alongside for scale, blue tropical water, Baa Atoll Maldives, wildlife photography, 800x600",
  },
  {
    path: "gallery/marine-life-03.webp",
    prompt: "Pair of clownfish (Amphiprion) nestled in purple anemone on tropical reef, vibrant orange and white fish, detailed macro underwater photography, Maldives reef life, 800x600",
  },
  {
    path: "gallery/island-01.webp",
    prompt: "Aerial drone photograph of Dharavandhoo island Maldives, lush green vegetation surrounded by white beach and turquoise lagoon, coral reef visible through water, atoll landscape, 800x600",
  },
  {
    path: "gallery/island-02.webp",
    prompt: "Pristine white sandbank with single palm tree surrounded by shallow turquoise water in the Maldives, perfect tropical paradise scene, crystal clear water, blue sky with white clouds, 800x600",
  },
  {
    path: "gallery/island-03.webp",
    prompt: "Crystal clear shallow lagoon in the Maldives with white sand bottom visible, turquoise to deep blue gradient, small islands on horizon, calm serene tropical water landscape photography, 800x600",
  },

  // ── Manta Madness Section Feature ──
  {
    path: "sections/manta-madness-feature.webp",
    prompt: "Dramatic cinematic photograph of a single giant manta ray silhouetted against ocean surface light, deep blue water, shaft of sunlight from above illuminating the manta, atmospheric underwater photography, high contrast, dark moody tones, portrait orientation, 600x800",
  },
];

async function generateImage(spec: ImageSpec): Promise<boolean> {
  const outPath = path.join(OUTPUT_DIR, spec.path);
  const dir = path.dirname(outPath);

  // Skip if already exists
  if (fs.existsSync(outPath)) {
    console.log(`⏭  ${spec.path} (exists)`);
    return true;
  }

  fs.mkdirSync(dir, { recursive: true });

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `Generate a photorealistic image: ${spec.prompt}. Style: professional photography, cinematic quality, deep ocean and tropical color palette.`,
                },
              ],
            },
          ],
          generationConfig: {
            responseModalities: ["IMAGE", "TEXT"],
          },
        }),
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      console.error(`❌ ${spec.path} — API ${response.status}: ${errText.slice(0, 200)}`);
      return false;
    }

    const data = await response.json();
    const imagePart = data.candidates?.[0]?.content?.parts?.find(
      (p: { inlineData?: { mimeType: string; data: string } }) =>
        p.inlineData?.mimeType?.startsWith("image/")
    );

    if (!imagePart?.inlineData) {
      console.error(`❌ ${spec.path} — No image in response`);
      return false;
    }

    const buffer = Buffer.from(imagePart.inlineData.data, "base64");
    fs.writeFileSync(outPath, buffer);
    console.log(`✅ ${spec.path} (${(buffer.length / 1024).toFixed(0)}KB)`);
    return true;
  } catch (err) {
    console.error(`❌ ${spec.path} — ${err}`);
    return false;
  }
}

async function main() {
  console.log(`\n🖼  Generating ${IMAGES.length} images via Gemini API...\n`);

  let success = 0;
  let failed = 0;

  // Process sequentially to avoid rate limits
  for (const spec of IMAGES) {
    const ok = await generateImage(spec);
    if (ok) success++;
    else failed++;

    // Small delay between requests to avoid rate limiting
    await new Promise((r) => setTimeout(r, 1500));
  }

  console.log(`\n📊 Done: ${success} generated, ${failed} failed, ${IMAGES.length} total\n`);
}

main();
