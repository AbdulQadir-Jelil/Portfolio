/**
 * Section heading used inside a page. Keeps eyebrow + h2 + description and an
 * optional right-hand action aligned the same way everywhere.
 */
export default function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  action,
  className = "",
}) {
  return (
    <div
      className={`flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between ${className}`}
    >
      <div className="max-w-prose">
        {eyebrow ? <p className="eyebrow mb-2">{eyebrow}</p> : null}
        <h2
          id={id}
          className="font-display text-[clamp(1.35rem,2.4vw,1.7rem)] font-bold leading-tight tracking-[-0.02em] text-ink"
        >
          {title}
        </h2>
        {description ? (
          <p className="body-copy mt-3 text-[0.98rem]">{description}</p>
        ) : null}
      </div>
      {action ? <div className="flex-shrink-0">{action}</div> : null}
    </div>
  );
}
