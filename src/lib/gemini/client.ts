const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

interface GenerateImageOptions {
  prompt: string;
  width?: number;
  height?: number;
}

/**
 * Generate an image using Google Gemini API.
 * Returns a base64 data URL or null on failure.
 */
export async function generateImage({
  prompt,
  width = 1024,
  height = 768,
}: GenerateImageOptions): Promise<string | null> {
  if (!GEMINI_API_KEY) {
    console.warn("[Gemini] No API key configured — skipping image generation");
    return null;
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `Generate a photorealistic image: ${prompt}. Dimensions: ${width}x${height}. Style: cinematic underwater photography, deep ocean tones, professional dive photography aesthetic.`,
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
      console.error(`[Gemini] API error: ${response.status}`);
      return null;
    }

    const data = await response.json();
    const imagePart = data.candidates?.[0]?.content?.parts?.find(
      (p: { inlineData?: { mimeType: string; data: string } }) => p.inlineData?.mimeType?.startsWith("image/")
    );

    if (imagePart?.inlineData) {
      return `data:${imagePart.inlineData.mimeType};base64,${imagePart.inlineData.data}`;
    }

    return null;
  } catch (error) {
    console.error("[Gemini] Image generation failed:", error);
    return null;
  }
}
