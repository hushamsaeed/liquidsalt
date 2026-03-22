/**
 * Extract plain text from PortableTextBlock arrays.
 * Handles both string values (static data) and block arrays (Sanity CMS).
 */
export function toPlainText(value: any): string {
  if (!value) return "";
  if (typeof value === "string") return value;
  if (Array.isArray(value)) {
    return value
      .map((block) => {
        if (block._type !== "block" || !block.children) return "";
        return block.children.map((child: { text?: string }) => child.text || "").join("");
      })
      .join("\n");
  }
  return "";
}
