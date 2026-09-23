import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight, Check, MapPin } from "@/components/icons";
import { contact, location } from "@/data/site";

export const metadata = {
  title: "About",
  description:
    "Frontend developer and Year 4 Information Systems student at Osun State University, focused on React, Next.js, TypeScript, Tailwind CSS, and React Native.",
  alternates: { canonical: "/about" },
};

const facts = [
  { label: "Role", value: "Frontend developer" },
  { label: "Based in", value: location },
  { label: "Focus", value: "Web interfaces and cross-platform mobile apps" },
  { label: "Stack", value: "React, Next.js, TypeScript, Tailwind CSS, React Native" },
  { label: "Education", value: "B.Sc. Information Systems, Osun State University (Year 4)" },
  { label: "Training", value: "Gigs Tech Solutions and Consults" },
  { label: "Currently", value: "Blue Africa (React Native) and Eduflex (Next.js)" },
];

const principles = [
  {
    title: "Clarity over decoration",
    body: "An interface should be readable before it is impressive. Hierarchy, spacing, and plain language do more for a product than effects do.",
  },
  {
    title: "Mobile first",
    body: "I start from the smallest screen and scale up, so the layout is never an afterthought on a phone.",
  },
  {
    title: "Accessible by default",
    body: "Semantic markup, keyboard-reachable controls, visible focus states, and real colour contrast — not extras added at the end.",
  },
  {
    title: "Ship, then improve",
    body: "Working software in front of real users beats a perfect plan. I deliver, gather feedback, and refine the details that matter.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Frontend developer who cares about the logic behind the screen"
        description="I build responsive web interfaces and cross-platform mobile apps — and I like understanding why a feature exists, not only how it should look."
      />

      <section aria-labelledby="story" className="mt-10">
        <h2 id="story" className="sr-only">
          Background
        </h2>
        <div className="grid max-w-prose gap-4">
          <p className="body-copy">
            I work on the frontend: React, Next.js, TypeScript, and Tailwind CSS
            for the web, React Native for mobile. My focus is interfaces that
            stay clear and comfortable to use at any screen size, and code that
            the next developer can read without a map.
          </p>
          <p className="body-copy">
            Most of what I know came from building things that had to work. I
            have contributed to a company portal that is now in active use, built
            multi-role interfaces for a school management platform, and worked in
            a team on a React Native app. Training and real project work taught
            me more than tutorials did.
          </p>
          <p className="body-copy">
            I&rsquo;m also a Year 4 Information Systems student at Osun State
            University. That background is why I ask about the business logic
            behind a screen: who uses it, what they are trying to finish, and
            what has to happen when something goes wrong.
          </p>
        </div>
      </section>

      <section aria-labelledby="facts" className="mt-12">
        <SectionHeading id="facts" eyebrow="At a glance" title="Quick facts" />
        <dl className="rows mt-6">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="principles" className="mt-12">
        <SectionHeading
          id="principles"
          eyebrow="How I work"
          title="Four things I do not compromise on"
        />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {principles.map((principle) => (
            <li key={principle.title} className="card p-5">
              <h3 className="flex items-start gap-2.5 font-display text-[1.05rem] font-bold tracking-[-0.01em] text-ink">
                <Check size={18} className="mt-0.5 flex-shrink-0 text-accent" />
                {principle.title}
              </h3>
              <p className="mt-2 pl-[28px] text-[0.92rem] leading-[1.65] text-muted">
                {principle.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="about-cta" className="mt-12">
        <div className="card flex flex-col items-start gap-6 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-prose">
            <h2
              id="about-cta"
              className="flex items-center gap-2 font-display text-[1.3rem] font-bold tracking-[-0.02em] text-ink"
            >
              <MapPin size={18} className="text-accent" />
              Based in {location}
            </h2>
            <p className="body-copy mt-2 text-[0.98rem]">
              Available remotely, and happy to talk through a project or a role
              in detail.
            </p>
          </div>
          <Button
            href="/contact"
            iconAfter={<ArrowRight size={17} />}
            className="flex-shrink-0"
          >
            Contact {contact.name.split(" ")[0]}
          </Button>
        </div>
      </section>
    </>
  );
}
