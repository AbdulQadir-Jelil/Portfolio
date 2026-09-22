import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight, ExternalLink } from "@/components/icons";
import { experience } from "@/data/experience";

export const metadata = {
  title: "Experience",
  description:
    "Frontend development training at Gigs Tech Solutions and Consults, project work on Eduflex and Blue Africa, and Year 4 Information Systems study at Osun State University.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Training, project work, and study"
        description="Everything below is ongoing in the same period: practical training, real product work, and a degree. Each entry lists what I actually did on it."
      />

      <section aria-labelledby="timeline" className="mt-10">
        <h2 id="timeline" className="sr-only">
          Timeline
        </h2>

        <ol className="border-l border-line">
          {experience.map((entry) => (
            <li key={entry.id} className="relative pb-10 pl-6 last:pb-0 sm:pl-8">
              <span
                aria-hidden="true"
                className="absolute left-[-5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-bg bg-accent"
              />

              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="chip">{entry.kind}</span>
                <span className="inline-flex items-center gap-1.5 text-[0.78rem] font-medium text-muted">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent"
                  />
                  {entry.status}
                </span>
              </div>

              <h3 className="mt-3 flex items-start gap-2.5 font-display text-[1.2rem] font-bold leading-snug tracking-[-0.015em] text-ink">
                <entry.Icon size={18} className="mt-1 flex-shrink-0 text-accent" />
                {entry.title}
              </h3>

              <p className="mt-1.5 pl-[28px] text-[0.95rem] font-medium text-muted-strong">
                {entry.org}
              </p>

              <p className="mt-3 max-w-prose text-[0.96rem] leading-[1.7] text-muted">
                {entry.body}
              </p>

              {entry.points ? (
                <ul className="mt-3 grid max-w-prose gap-2">
                  {entry.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-[0.94rem] leading-[1.65] text-muted"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[9px] h-1 w-1 flex-shrink-0 rounded-full bg-line-strong"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              ) : null}

              {entry.link ? (
                <a
                  href={entry.link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-[0.9rem] font-semibold text-accent transition-colors duration-200 hover:text-accent-strong"
                >
                  {entry.link.label}
                  <ExternalLink size={15} />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              ) : null}
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="experience-cta" className="mt-12">
        <div className="card flex flex-col items-start gap-6 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-prose">
            <h2
              id="experience-cta"
              className="font-display text-[1.3rem] font-bold tracking-[-0.02em] text-ink"
            >
              Want the details behind any of these?
            </h2>
            <p className="body-copy mt-2 text-[0.98rem]">
              I am happy to walk through the code, the decisions, and the parts
              that were hard.
            </p>
          </div>
          <Button
            href="/contact"
            iconAfter={<ArrowRight size={17} />}
            className="flex-shrink-0"
          >
            Ask me about it
          </Button>
        </div>
      </section>
    </>
  );
}
