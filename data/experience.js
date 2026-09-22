import { Briefcase, GraduationCap } from "@/components/icons";

/**
 * Reverse-chronological narrative: training and project work first, then
 * education. Every claim here should be something you can defend in an
 * interview — keep it accurate.
 */
export const experience = [
  {
    id: "gigs-tech",
    status: "Ongoing",
    kind: "Training and work",
    title: "Frontend development training",
    org: "Gigs Tech Solutions and Consults",
    Icon: Briefcase,
    body: "Hands-on practical training covering frontend development, responsive interfaces, React, Next.js, Tailwind CSS, API integration, Git, and real-world project tasks.",
    points: [
      "Contributed to the company portal that is now in active use.",
      "Turned designs into responsive interfaces with React, Next.js, and Tailwind CSS.",
      "Integrated APIs and handled loading, empty, and error states.",
      "Used Git and GitHub for everyday development and review.",
    ],
    link: {
      href: "https://www.gigstechsolutions.com.ng/",
      label: "gigstechsolutions.com.ng",
    },
  },
  {
    id: "blue-africa",
    status: "Ongoing",
    kind: "Team project",
    title: "Frontend developer — Blue Africa",
    org: "Mobile app team",
    Icon: Briefcase,
    body: "A React Native mobile app built by a team. I own responsive screens and user-facing features, and work with the team to keep the app consistent and easy to use.",
    points: [
      "Built responsive screens that adapt across phone sizes.",
      "Implemented authentication and other user-facing features.",
      "Kept components consistent so the app reads as one product.",
    ],
  },
  {
    id: "eduflex",
    status: "Ongoing",
    kind: "Training project",
    title: "Frontend developer — Eduflex",
    org: "School management platform",
    Icon: Briefcase,
    body: "A school management platform in Next.js with six distinct user roles, from school owners and principals to bursars and parents.",
    points: [
      "Built multi-role interfaces in Next.js.",
      "Structured pages so each role only reaches what it needs.",
    ],
    link: {
      href: "https://eduflex-frontend-two.vercel.app/",
      label: "eduflex-frontend-two.vercel.app",
    },
  },
  {
    id: "education",
    status: "Ongoing",
    kind: "Education",
    title: "B.Sc. Information Systems",
    org: "Osun State University",
    Icon: GraduationCap,
    body: "Year 4 Information Systems student, studying how systems are designed, built, and used inside organisations — which is why I care about the business logic behind an interface, not only how it looks.",
  },
];
