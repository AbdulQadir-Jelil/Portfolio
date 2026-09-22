import { Code, Layers, Palette, Wrench } from "@/components/icons";

/**
 * Grouped skills. `note` explains how the tools are actually used — keep it
 * factual, it is read as a claim about experience.
 */
export const skillGroups = [
  {
    id: "frameworks",
    label: "Frameworks and libraries",
    Icon: Layers,
    items: ["React", "Next.js", "React Native"],
    note: "My main build stack for web interfaces, server-rendered pages, and cross-platform mobile apps.",
  },
  {
    id: "languages",
    label: "Languages",
    Icon: Code,
    items: ["TypeScript", "JavaScript", "HTML"],
    note: "Typed component logic and interfaces, with the fundamentals of the web platform underneath.",
  },
  {
    id: "styling",
    label: "Styling and UI",
    Icon: Palette,
    items: ["Tailwind CSS", "CSS", "SCSS", "Responsive design"],
    note: "Utility-first styling, layouts that hold together from small phones to wide desktops, and careful spacing and typography.",
  },
  {
    id: "practice",
    label: "Practice and tooling",
    Icon: Wrench,
    items: ["API integration", "Git and GitHub", "UI/UX principles", "Accessibility"],
    note: "Connecting interfaces to real endpoints, working on shared repositories, and keeping screens usable for everyone.",
  },
];

/** Short list shown under the "Skills" page intro. */
export const coreStack = ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native"];

export const skillNotes = [
  "Semantic markup and keyboard-reachable controls by default.",
  "Mobile-first layouts, tested down to small phone widths.",
  "Clean, component-scoped styles instead of one-off overrides.",
  "Git branches and pull requests on every team project.",
];
