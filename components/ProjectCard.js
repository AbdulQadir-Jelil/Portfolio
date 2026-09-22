import Image from "next/image";
import { ArrowUpRight } from "@/components/icons";

/**
 * Project card. Set `image` on a project in data/projects.js to show a
 * screenshot; without one the card stays fully typographic, so nothing breaks.
 */
export default function ProjectCard({ project }) {
  const { title, kind, status, desc, role, tech = [], link, image } = project;

  return (
    <article className="card flex h-full flex-col p-6 transition-shadow duration-200 hover:shadow-lift">
      {image ? (
        <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-lg border border-line bg-surface">
          <Image
            src={image}
            alt={`${title} interface preview`}
            fill
            sizes="(min-width: 1024px) 340px, (min-width: 768px) 45vw, 90vw"
            className="object-cover"
          />
        </div>
      ) : null}

      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <span className="chip">{kind}</span>
        {status ? (
          <span className="inline-flex items-center gap-1.5 text-[0.78rem] font-medium text-muted">
            <span
              className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent"
              aria-hidden="true"
            />
            {status}
          </span>
        ) : null}
      </div>

      <h3 className="mt-4 font-display text-[1.16rem] font-bold leading-snug tracking-[-0.015em] text-ink">
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="transition-colors duration-200 hover:text-accent"
          >
            {title}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ) : (
          title
        )}
      </h3>

      <p className="mt-2.5 grow text-[0.94rem] leading-[1.7] text-muted">{desc}</p>

      {role ? (
        <p className="mt-4 text-[0.86rem] text-muted-strong">
          <span className="font-semibold text-ink">Role:</span> {role}
        </p>
      ) : null}

      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`Technologies used in ${title}`}>
        {tech.map((item) => (
          <li key={item} className="chip">
            {item}
          </li>
        ))}
      </ul>

      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 text-[0.9rem] font-semibold text-accent transition-colors duration-200 hover:text-accent-strong"
        >
          View live site
          <ArrowUpRight size={16} />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      ) : (
        <p className="mt-5 text-[0.86rem] font-medium text-muted">In development</p>
      )}
    </article>
  );
}
