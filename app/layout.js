import fs from "node:fs";
import path from "node:path";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeScript from "@/components/ThemeScript";
import { contact, location, role, siteName, siteUrl } from "@/data/site";

const bodyFont = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const displayFont = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

/* Link-preview image. Drop a 1200x630 PNG at public/og.png and it is picked up
   automatically here — no code change needed. (A generated `opengraph-image`
   route is not used because @vercel/og cannot resolve its bundled font when the
   project folder name contains a space, which breaks `next build`.) */
function socialImage() {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", "og.png"))
      ? [
          {
            url: "/og.png",
            width: 1200,
            height: 630,
            alt: `${siteName} — ${role}`,
          },
        ]
      : [];
  } catch (error) {
    return [];
  }
}

const images = socialImage();

const pageTitle = `${siteName} — ${role}`;
const description =
  "Jelili Abdulqadir Alagunfon is a frontend developer working with React, Next.js, TypeScript, Tailwind CSS, and React Native — building responsive web interfaces and cross-platform mobile apps.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: pageTitle,
    template: `%s — ${siteName}`,
  },
  description,
  applicationName: `${siteName} Portfolio`,
  keywords: [
    "Jelili Abdulqadir Alagunfon",
    "frontend developer",
    "React developer",
    "Next.js developer",
    "React Native developer",
    "TypeScript",
    "Tailwind CSS",
    "responsive web design",
    "Nigeria frontend developer",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "technology",
  formatDetection: { telephone: false, address: false, email: false },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: `${siteName} — Portfolio`,
    title: pageTitle,
    description,
    locale: "en_NG",
    ...(images.length > 0 ? { images } : {}),
  },
  twitter: {
    card: images.length > 0 ? "summary_large_image" : "summary",
    title: pageTitle,
    description,
    ...(images.length > 0 ? { images: images.map((image) => image.url) } : {}),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

/* Structured data so search engines and link previews describe the right
   person rather than guessing from page copy. */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: contact.name,
  jobTitle: role,
  description,
  url: siteUrl,
  email: `mailto:${contact.email}`,
  address: { "@type": "PostalAddress", addressLocality: location },
  sameAs: [contact.github, contact.linkedin],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "React Native",
    "Responsive web design",
    "API integration",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col bg-bg font-body text-ink antialiased">
        <ThemeScript />

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2.5 focus:font-semibold focus:text-on-accent"
        >
          Skip to content
        </a>

        <Header />

        <main id="main" className="container-page flex-1 py-12 sm:py-16">
          {children}
        </main>

        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
