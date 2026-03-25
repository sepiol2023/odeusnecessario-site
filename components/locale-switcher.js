"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const oneYear = 60 * 60 * 24 * 365;

function toAlternatePath(pathname, targetLocale) {
  if (targetLocale === "en") {
    if (pathname === "/" || pathname.startsWith("/#")) return "/en";
    if (pathname === "/livros/inferno") return "/en/books/inferno";
    if (pathname === "/livros/ceu") return "/en/books/heaven";
    if (pathname === "/livros/purgatorio") return "/en/books/purgatory";
    return "/en";
  }

  if (pathname === "/en" || pathname.startsWith("/en#")) return "/";
  if (pathname === "/en/books/inferno") return "/livros/inferno";
  if (pathname === "/en/books/heaven") return "/livros/ceu";
  if (pathname === "/en/books/purgatory") return "/livros/purgatorio";
  return "/";
}

export function LocaleSwitcher({ locale }) {
  const pathname = usePathname();

  const setLocale = (nextLocale) => {
    document.cookie = `locale=${nextLocale}; Path=/; Max-Age=${oneYear}; SameSite=Lax`;
  };

  const ptHref = toAlternatePath(pathname, "pt");
  const enHref = toAlternatePath(pathname, "en");

  return (
    <div className="flex items-center gap-1 rounded-full border border-stone-800 bg-black/20 p-1 text-xs uppercase tracking-[0.2em] text-stone-400">
      <Link
        href={ptHref}
        onClick={() => setLocale("pt")}
        className={`rounded-full px-3 py-1.5 transition-colors ${
          locale === "pt" ? "bg-stone-100 text-stone-950" : "hover:text-stone-200"
        }`}
      >
        PT
      </Link>
      <Link
        href={enHref}
        onClick={() => setLocale("en")}
        className={`rounded-full px-3 py-1.5 transition-colors ${
          locale === "en" ? "bg-stone-100 text-stone-950" : "hover:text-stone-200"
        }`}
      >
        EN
      </Link>
    </div>
  );
}
