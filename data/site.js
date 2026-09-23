import { Github, Linkedin, Mail, MessageCircle } from "@/components/icons";

/**
 * Canonical origin for metadata, sitemap and Open Graph URLs.
 * Set NEXT_PUBLIC_SITE_URL in your host's env vars once the real domain is
 * live (e.g. https://jelilabdulqadir.com) — otherwise this fallback is used.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://jelil-abdulqadir.vercel.app"
).replace(/\/+$/, "");

export const siteName = "Jelili Abdulqadir Alagunfon";
export const role = "Frontend Developer";

/** Short status line shown on the home page and the contact page. */
export const availability = "Open to frontend roles and freelance work";

export const location = "Ibadan, Oyo State, Nigeria";

export const nav = [
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export const contact = {
  name: "Jelili Abdulqadir Alagunfon",
  email: "jeliliabdulqadiralagunfon@gmail.com",
  whatsapp: "+234 911 436 8937",
  whatsappHref: "https://wa.me/2349114368937",
  github: "https://github.com/AbdulQadir-Jelil",
  githubLabel: "github.com/AbdulQadir-Jelil",
  linkedin: "https://www.linkedin.com/in/jelili-abdulqadir-a2595b293",
  linkedinLabel: "linkedin.com/in/jelili-abdulqadir",
};

export const socials = [
  {
    label: "GitHub",
    handle: contact.githubLabel,
    href: contact.github,
    Icon: Github,
    external: true,
  },
  {
    label: "LinkedIn",
    handle: contact.linkedinLabel,
    href: contact.linkedin,
    Icon: Linkedin,
    external: true,
  },
  {
    label: "Email",
    handle: contact.email,
    href: `mailto:${contact.email}`,
    Icon: Mail,
    external: false,
  },
  {
    label: "WhatsApp",
    handle: contact.whatsapp,
    href: contact.whatsappHref,
    Icon: MessageCircle,
    external: true,
  },
];
