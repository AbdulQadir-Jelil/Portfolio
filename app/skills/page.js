import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight, Check } from "@/components/icons";
import { coreStack, skillGroups, skillNotes } from "@/data/skills";

export const metadata = {
  title: "Skills",
  description:
    "Frontend skills across React, Next.js, React Native, TypeScript, JavaScript, Tailwind CSS, API integration, responsive design, and accessibility.",
  alternates: { canonical: "/skills" },
};

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Skills"
        title="The tools I use, and what I use them for"
        description="Every item below has been used on a real project, a training task, or a team build — nothing here is a list I have only read about."
      >
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Core stack">
          {coreStack.map((item) => (
            <li key={item} className="chip">
              {item}
            </li>
          ))}
        </ul>
      </PageHeader>

      <section aria-labelledby="groups" className="mt-10">
        <h2 id="groups" className="sr-only">
          Skills by category
        </h2>

        <div className="grid gap-5 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <article key={group.id} className="card p-6">
              <div className="flex items-center gap-3">
                <span className="icon-frame h-9 w-9">
                  <group.Icon size={18} />
                </span>
                <h3 className="font-display text-[1.08rem] font-bold tracking-[-0.01em] text-ink">
                  {group.label}
                </h3>
              </div>

              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-[0.92rem] leading-[1.7] text-muted">
                {group.note}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="habits" className="mt-12">
        <SectionHeading
          id="habits"
          eyebrow="Day to day"
          title="How those skills show up in my work"
          description="The same habits on every project, whether it is a client page or an internal platform."
        />

        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {skillNotes.map((note) => (
            <li key={note} className="flex items-start gap-3 text-[0.96rem] text-muted">
              <Check size={18} className="mt-0.5 flex-shrink-0 text-accent" />
              {note}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="skills-cta" className="mt-12">
        <div className="card flex flex-col items-start gap-6 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-prose">
            <h2
              id="skills-cta"
              className="font-display text-[1.3rem] font-bold tracking-[-0.02em] text-ink"
            >
              See these skills in practice
            </h2>
            <p className="body-copy mt-2 text-[0.98rem]">
              The projects page links straight to the live builds so you can
              judge the work itself.
            </p>
          </div>
          <Button
            href="/projects"
            iconAfter={<ArrowRight size={17} />}
            className="flex-shrink-0"
          >
            View projects
          </Button>
        </div>
      </section>
    </>
  );
}
