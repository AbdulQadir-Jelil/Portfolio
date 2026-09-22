import Button from "@/components/Button";
import CopyEmailButton from "@/components/CopyEmailButton";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { ArrowUpRight, Mail } from "@/components/icons";
import { availability, contact, location, socials } from "@/data/site";

export const metadata = {
  title: "Contact",
  description:
    "Contact Jelili Abdulqadir Alagunfon about frontend roles, freelance web projects, or collaborations — by email, WhatsApp, GitHub, or LinkedIn.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's work together"
        description="Send a message about a project, a role, or a collaboration. Email is the fastest way to reach me; WhatsApp works too if you would rather talk it through."
      />

      <section aria-labelledby="email-heading" className="mt-10">
        <h2 id="email-heading" className="sr-only">
          Email
        </h2>

        <div className="card p-6 sm:p-8">
          <p className="text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-muted">
            Email
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="mt-3 block font-display text-[clamp(1.05rem,3vw,1.8rem)] font-bold leading-tight tracking-[-0.02em] text-ink transition-colors duration-200 [overflow-wrap:anywhere] hover:text-accent"
          >
            {contact.email}
          </a>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              as="a"
              href={`mailto:${contact.email}`}
              icon={<Mail size={17} />}
            >
              Send an email
            </Button>
            <CopyEmailButton email={contact.email} />
          </div>
        </div>
      </section>

      <section aria-labelledby="channels" className="mt-12">
        <SectionHeading
          id="channels"
          eyebrow="Channels"
          title="Other places to find me"
          description="Code and work history are public, so you can check the details for yourself."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              {...(item.external
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
              className="card flex items-center gap-4 p-5 transition-colors duration-200 hover:border-line-strong"
            >
              <span className="icon-frame">
                <item.Icon size={19} />
              </span>
              <span className="min-w-0">
                <span className="block text-[0.95rem] font-semibold text-ink">
                  {item.label}
                </span>
                <span className="mt-0.5 block truncate text-[0.88rem] text-muted">
                  {item.handle}
                </span>
              </span>
              <ArrowUpRight
                size={16}
                className="ml-auto flex-shrink-0 text-muted"
              />
              {item.external ? (
                <span className="sr-only">(opens in a new tab)</span>
              ) : null}
            </a>
          ))}
        </div>
      </section>

      <section aria-labelledby="details" className="mt-12">
        <SectionHeading
          id="details"
          eyebrow="Details"
          title="Availability and location"
        />

        <dl className="rows mt-6">
          <div>
            <dt>Status</dt>
            <dd className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent"
              />
              {availability}
            </dd>
          </div>
          <div>
            <dt>Based in</dt>
            <dd>{location}</dd>
          </div>
          <div>
            <dt>Working</dt>
            <dd>Remotely, and on-site in Nigeria.</dd>
          </div>
          <div>
            <dt>Best for</dt>
            <dd>
              Frontend roles, responsive websites and landing pages, and React
              Native mobile app work.
            </dd>
          </div>
        </dl>
      </section>
    </>
  );
}
