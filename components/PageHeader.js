/**
 * Page top: eyebrow, single h1, optional intro copy. Every route renders
 * exactly one of these so each page has a real, descriptive heading.
 */
export default function PageHeader({ eyebrow, title, description, children }) {
  return (
    <header className="border-b border-line pb-8">
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <h1 className="max-w-prose font-display text-[clamp(1.9rem,3.4vw,2.5rem)] font-bold leading-[1.14] tracking-[-0.025em] text-ink">
        {title}
      </h1>
      {description ? (
        <p className="body-copy mt-4 max-w-prose">{description}</p>
      ) : null}
      {children}
    </header>
  );
}
