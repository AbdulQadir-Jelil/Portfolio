import SocialCard from "@/components/SocialCard";
import { contact, role, siteName } from "@/data/site";

/**
 * Social preview card (1200x630), served at /og and referenced from the
 * metadata in app/layout.js.
 *
 * This is a route handler rather than the `app/opengraph-image.js` file
 * convention on purpose: @vercel/og resolves its own module URL with
 * `fileURLToPath`, which throws for paths containing a space. Rendering on
 * demand keeps `next build` working in any project folder, and the result is
 * cached at the edge. The try/catch falls back to a flat SVG card so a preview
 * is always returned.
 */
export const dynamic = "force-dynamic";

const width = 1200;
const height = 630;

const escapeXml = (value) =>
  String(value).replace(
    /[<>&'"]/g,
    (character) =>
      ({
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        "'": "&apos;",
        '"': "&quot;",
      })[character],
  );

function fallbackCard() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="${escapeXml(
    `${siteName} — ${role}`,
  )}">
  <rect width="${width}" height="${height}" fill="#0b1220"/>
  <rect x="72" y="72" width="72" height="72" rx="16" fill="#1d4ed8"/>
  <circle cx="108" cy="108" r="16" fill="#ffffff" opacity="0.9"/>
  <path d="M88 126L108 88L128 126" fill="none" stroke="#ffffff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>
  <text x="172" y="106" font-family="sans-serif" font-size="30" font-weight="700" fill="#e8edf6">${escapeXml(
    siteName,
  )}</text>
  <text x="172" y="138" font-family="sans-serif" font-size="24" fill="#939fb4">${escapeXml(
    role,
  )}</text>
  <text x="72" y="366" font-family="sans-serif" font-size="58" font-weight="700" fill="#e8edf6">Responsive web and mobile</text>
  <text x="72" y="434" font-family="sans-serif" font-size="58" font-weight="700" fill="#e8edf6">interfaces built with React.</text>
  <rect x="72" y="516" width="1056" height="2" fill="#1f2734"/>
  <text x="72" y="570" font-family="sans-serif" font-size="24" fill="#939fb4">${escapeXml(
    contact.githubLabel,
  )}</text>
  <text x="1128" y="570" text-anchor="end" font-family="sans-serif" font-size="24" fill="#939fb4">${escapeXml(
    contact.email,
  )}</text>
</svg>`;
}

export async function GET() {
  try {
    const { ImageResponse } = await import("next/og");

    return new ImageResponse(<SocialCard />, {
      width,
      height,
      headers: {
        "cache-control":
          "public, max-age=0, s-maxage=31536000, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    return new Response(fallbackCard(), {
      headers: {
        "content-type": "image/svg+xml; charset=utf-8",
        "cache-control": "public, max-age=0, s-maxage=86400",
      },
    });
  }
}
