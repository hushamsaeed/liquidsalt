import { client } from "./client";

/**
 * Fetch from Sanity with fallback to static data.
 * If Sanity returns empty/null, use the provided fallback.
 */
export async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
  fallback: T
): Promise<T> {
  try {
    const data = await client.fetch<T>(query, params);
    // If array, return only if non-empty
    if (Array.isArray(data) && data.length === 0) return fallback;
    // If null/undefined, return fallback
    if (data == null) return fallback;
    return data;
  } catch (error) {
    console.warn("[Sanity] Fetch failed, using static fallback:", error);
    return fallback;
  }
}
