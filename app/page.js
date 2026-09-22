import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight, Code, GraduationCap, Wrench } from "@/components/icons";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { contact, availability } from "@/data/site";
import { coreStack } from "@/data/skills";

export const metadata = {
  title: "React, Next.js and React Native developer",
  description:
    "Jelili Abdulqadir Alagunfon is a frontend developer building responsive web interfaces with React, Next.js, TypeScript, and Tailwind CSS, plus cross-platform mobile apps with React Native.",
  alternates: { canonical: "/" },
};

const featured = projects
  .filter((project) => project.categories.includes("featured"))
  .slice(0, 3);

export default function HomePage() {
  return (
    <>
      {/* Hero ------------------------------------------------------------ */}
      <section aria-labelledby="intro">
        <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-[0.8rem] font-medium text-muted-strong">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent"
          />
          {availability}
        </p>

        <h1
          id="intro"
          className="mt-6 max-w-[22ch] font-display text-[clamp(2.15rem,5vw,3.35rem)] font-bold leading-[1.06] tracking-[-0.035em] text-ink"
        >
          Frontend developer building responsive web and mobile interfaces.
        </h1>

        <p className="body-copy mt-6 max-w-prose">
          I&rsquo;m {contact.name}, a frontend developer and Year 4 Information
          Systems student at Osun State University. I build real interfaces with
          React, Next.js, TypeScript, and Tailwind CSS, and cross-platform apps
          with React Native.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/projects" iconAfter={<ArrowRight size={17} />}>
            View my work
          </Button>
          <Button href="/contact" variant="outline">
            Get in touch
          </Button>
        </div>

        <ul className="mt-10 flex flex-wrap gap-2" aria-label="Core stack">
          {coreStack.map((item) => (
            <li key={item} className="chip">
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Selected work --------------------------------------------------- */}
      <section
        aria-labelledby="selected-work"
        className="mt-14 border-t border-line pt-12"
      >
        <SectionHeading
          id="selected-work"
          eyebrow="Selected work"
          title="Projects I have built"
          description="Team builds, training projects, and personal tools — each one is live and clickable. Everything, including the earlier practice work, is on the projects page."
          action={
            <Button
              href="/projects"
              variant="outline"
              size="sm"
              iconAfter={<ArrowRight size={16} />}
            >
              All projects
            </Button>
          }
        />

        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Services -------------------------------------------------------- */}
      <section
        aria-labelledby="services"
        className="mt-14 border-t border-line pt-12"
      >
        <SectionHeading
          id="services"
          eyebrow="Services"
          title="What I can build for you"
          description="A quick summary — the services page covers each one in detail."
          action={
            <Button
              href="/services"
              variant="outline"
              size="sm"
              iconAfter={<ArrowRight size={16} />}
            >
              Services
            </Button>
          }
        />

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <li key={service.id} className="card p-5">
              <span className="icon-frame">
                <service.Icon size={19} />
              </span>
              <h3 className="mt-4 font-display text-[1.05rem] font-bold tracking-[-0.01em] text-ink">
                {service.title}
              </h3>
              <p className="mt-1.5 text-[0.92rem] leading-[1.65] text-muted">
                {service.summary}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Right now ------------------------------------------------------- */}
      <section
        aria-labelledby="right-now"
        className="mt-14 border-t border-line pt-12"
      >
        <SectionHeading
          id="right-now"
          eyebrow="Right now"
          title="Where I am today"
        />

        <dl className="rows mt-6">
          <div>
            <dt className="flex items-center gap-2">
              <Wrench size={16} className="text-accent" />
              Building
            </dt>
            <dd>
              Blue Africa, a React Native mobile app, and Eduflex, a school
              management platform in Next.js.
            </dd>
          </div>
          <div>
            <dt className="flex items-center gap-2">
              <Code size={16} className="text-accent" />
              Training at
            </dt>
            <dd>
              Gigs Tech Solutions and Consults — frontend development,
              responsive interfaces, and real-world project tasks.
            </dd>
          </div>
          <div>
            <dt className="flex items-center gap-2">
              <GraduationCap size={16} className="text-accent" />
              Studying
            </dt>
            <dd>B.Sc. Information Systems, Osun State University (Year 4).</dd>
          </div>
        </dl>
      </section>

      {/* Closing call to action ------------------------------------------ */}
      <section
        aria-labelledby="cta"
        className="mt-14 border-t border-line pt-12"
      >
        <div className="card flex flex-col items-start gap-6 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-prose">
            <h2
              id="cta"
              className="font-display text-[1.4rem] font-bold tracking-[-0.02em] text-ink"
            >
              Have a project or a role in mind?
            </h2>
            <p className="body-copy mt-2 text-[0.98rem]">
              I&rsquo;m open to frontend roles, freelance work, and
              collaborations. Tell me what you&rsquo;re building and I&rsquo;ll
              tell you how I&rsquo;d approach it.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/contact" iconAfter={<ArrowRight size={17} />}>
              Start a conversation
            </Button>
            <Button as="a" href={`mailto:${contact.email}`} variant="subtle">
              Email me
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
