import Link from "next/link";

export function SectionLabel({ children, className = "" }) {
  return (
    <div className={`text-[11px] uppercase tracking-editorial text-stone-500 ${className}`}>
      {children}
    </div>
  );
}

export function PrimaryButton({ href, children, external = false }) {
  const className =
    "inline-flex items-center rounded-2xl border border-stone-200 bg-stone-100 px-5 py-3 text-sm font-medium text-stone-950 transition-opacity hover:opacity-90";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function SecondaryButton({ href, children, external = false }) {
  const className =
    "inline-flex items-center rounded-2xl border border-stone-700 px-5 py-3 text-sm font-medium text-stone-200 transition-colors hover:border-stone-500";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
