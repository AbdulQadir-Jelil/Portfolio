import {
  Globe,
  LayoutDashboard,
  Rocket,
  ShoppingBag,
  Smartphone,
} from "@/components/icons";

export const services = [
  {
    id: "websites",
    title: "Websites",
    Icon: Globe,
    summary: "Modern, responsive websites and frontend interfaces.",
    detail:
      "Marketing sites and business pages built as real frontend code — responsive from the first breakpoint, easy to read, and quick to load.",
    tech: ["Next.js", "Tailwind CSS", "Responsive design"],
  },
  {
    id: "web-apps",
    title: "Web applications",
    Icon: LayoutDashboard,
    summary: "Interactive applications built with React and Next.js.",
    detail:
      "Dashboards, portals, and multi-role tools where state, routing, and API data all have to stay in sync.",
    tech: ["React", "Next.js", "API integration"],
  },
  {
    id: "ecommerce",
    title: "E-commerce interfaces",
    Icon: ShoppingBag,
    summary: "Responsive e-commerce interfaces and storefronts.",
    detail:
      "Product listings, carts, and checkout screens designed so the buying path stays obvious on any screen.",
    tech: ["React", "Tailwind CSS", "Forms"],
  },
  {
    id: "mobile",
    title: "Mobile apps",
    Icon: Smartphone,
    summary: "Cross-platform mobile applications using React Native.",
    detail:
      "One codebase for Android and iOS, with native-feeling screens, navigation, and authentication.",
    tech: ["React Native", "Authentication", "Navigation"],
  },
  {
    id: "landing-pages",
    title: "Landing pages",
    Icon: Rocket,
    summary: "Responsive landing pages for businesses, products, and campaigns.",
    detail:
      "Single-purpose pages built around one clear action, with a structure that guides the eye from headline to form.",
    tech: ["Next.js", "Tailwind CSS", "Accessibility"],
  },
];

/** Plain-language description of how a project runs, start to finish. */
export const process = [
  {
    step: "01",
    title: "Scope",
    body: "We agree on the pages, the users, and what has to work before anything is built.",
  },
  {
    step: "02",
    title: "Build",
    body: "Mobile-first implementation in React, Next.js, or React Native, with progress you can review as it happens.",
  },
  {
    step: "03",
    title: "Review",
    body: "You test on real devices; I fix the details and tighten spacing, states, and edge cases.",
  },
  {
    step: "04",
    title: "Handover",
    body: "Clean, commented code pushed to your repository, ready to deploy and extend.",
  },
];
