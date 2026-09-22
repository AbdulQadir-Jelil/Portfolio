import { nav, siteUrl } from "@/data/site";

export default function sitemap() {
  const lastModified = new Date();

  return [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...nav.map((item) => ({
      url: `${siteUrl}${item.href}`,
      lastModified,
      changeFrequency: "monthly",
      priority: item.href === "/contact" || item.href === "/projects" ? 0.9 : 0.7,
    })),
  ];
}
