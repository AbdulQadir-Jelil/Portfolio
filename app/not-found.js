import Button from "@/components/Button";
import { ArrowRight, Mail } from "@/components/icons";
import { contact } from "@/data/site";

export default function NotFound() {
  return (
    <section className="flex flex-col items-start py-8">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-3 max-w-prose font-display text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.14] tracking-[-0.025em] text-ink">
        That page does not exist
      </h1>
      <p className="body-copy mt-4 max-w-prose">
        The link may be out of date, or the address may have a typo in it. The
        pages below are all one click away.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button href="/" iconAfter={<ArrowRight size={17} />}>
          Back to home
        </Button>
        <Button href="/projects" variant="outline">
          See the projects
        </Button>
        <Button
          as="a"
          href={`mailto:${contact.email}`}
          variant="ghost"
          icon={<Mail size={17} />}
        >
          Email me
        </Button>
      </div>
    </section>
  );
}
