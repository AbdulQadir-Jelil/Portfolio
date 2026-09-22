import Link from "next/link";

/**
 * Button/CTA. Renders a next/link by default, an <a> when `as="a"` (external
 * links, mailto, tel) or a <button> when `as="button"`.
 */
const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 text-[0.94rem] font-semibold transition-colors duration-200";

const sizes = {
  md: "min-h-[44px] py-2.5",
  lg: "min-h-[50px] px-6 py-3 text-[1rem]",
  sm: "min-h-[38px] px-4 py-2 text-[0.88rem]",
};

const variants = {
  primary: "bg-accent text-on-accent hover:bg-accent-strong",
  outline:
    "border border-line-strong bg-transparent text-ink hover:border-accent hover:text-accent",
  subtle: "border border-line bg-surface text-ink hover:border-line-strong hover:text-accent",
  ghost: "text-muted hover:text-accent",
};

export default function Button({
  as = "link",
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  icon,
  iconAfter,
  ...rest
}) {
  const classes = [
    base,
    sizes[size] ?? sizes.md,
    variants[variant] ?? variants.primary,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {icon}
      {children}
      {iconAfter}
    </>
  );

  if (as === "button") {
    return (
      <button type="button" className={classes} {...rest}>
        {content}
      </button>
    );
  }

  if (as === "a") {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {content}
    </Link>
  );
}
