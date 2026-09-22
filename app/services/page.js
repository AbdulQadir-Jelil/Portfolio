import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight } from "@/components/icons";
import { process, services } from "@/data/services";

export const metadata = {
  title: "Services",
  description:
    "Frontend services: responsive websites, web applications, e-commerce interfaces, React Native mobile apps, and landing pages built with React, Next.js, and Tailwind CSS.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="What I build for clients and teams"
        description="Five kinds of frontend work, each delivered as responsive, accessible, production-ready code. If your project sits between two of these, that is normal — most do."
      />

      <section aria-labelledby="service-list" className="mt-10">
        <h2 id="service-list" className="sr-only">
          Services offered
        </h2>

        <div className="grid gap-5 lg:grid-cols-2">
          {services.map((service) => (
            <article key={service.id} className="card flex flex-col p-6">
              <span className="icon-frame">
                <service.Icon size={19} />
              </span>

              <h3 className="mt-4 font-display text-[1.15rem] font-bold tracking-[-0.015em] text-ink">
                {service.title}
              </h3>

              <p className="mt-2 text-[0.95rem] font-medium text-muted-strong">
                {service.summary}
              </p>

              <p className="mt-3 grow text-[0.94rem] leading-[1.7] text-muted">
                {service.detail}
              </p>

              <ul
                className="mt-4 flex flex-wrap gap-1.5"
                aria-label={`Typical stack for ${service.title}`}
              >
                {service.tech.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="process" className="mt-12">
        <SectionHeading
          id="process"
          eyebrow="Process"
          title="How a project runs, start to finish"
          description="No surprises and no long silence: you see the work as it takes shape and you test it before handover."
        />

        <ol className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {process.map((step) => (
            <li key={step.step} className="card p-5">
              <p className="font-display text-[0.85rem] font-bold tracking-[0.08em] text-accent">
                {step.step}
              </p>
              <h3 className="mt-2 font-display text-[1.02rem] font-bold tracking-[-0.01em] text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-[0.9rem] leading-[1.65] text-muted">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="services-cta" className="mt-12">
        <div className="card flex flex-col items-start gap-6 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-prose">
            <h2
              id="services-cta"
              className="font-display text-[1.3rem] font-bold tracking-[-0.02em] text-ink"
            >
              Not sure which of these you need?
            </h2>
            <p className="body-copy mt-2 text-[0.98rem]">
              Describe the problem in your own words and I will tell you what I
              would build, and what I would leave out.
            </p>
          </div>
          <Button
            href="/contact"
            iconAfter={<ArrowRight size={17} />}
            className="flex-shrink-0"
          >
            Discuss your project
          </Button>
        </div>
      </section>
    </>
  );
}
