import Link from "next/link";
import { site } from "../data/site";

const menu = [
  { label: "A trilogia", href: "/#trilogia" },
  { label: "Livros", href: "/#livros" },
  { label: "Autor", href: "/#autor" },
  { label: "Ensaios", href: "/#ensaios" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-900/80 bg-black/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-8 px-6 py-4">
        <Link href="/" className="min-w-0">
          <div className="text-[11px] uppercase tracking-editorial text-stone-500">
            {site.author.name}
          </div>
          <div className="font-display text-xl tracking-[0.03em] text-stone-100 md:text-2xl">
            O Deus Necessário
          </div>
        </Link>

        <nav className="hidden gap-8 text-sm text-stone-300 md:flex">
          {menu.map((item) => (
            <Link key={item.label} href={item.href} className="transition-colors hover:text-stone-100">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-stone-900">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-4 px-6 py-8 text-sm text-stone-500 md:flex-row md:items-center">
        <div>{`© 2026 ${site.author.name} • O Deus Necessário`}</div>
        <div className="flex gap-5">
          <a
            href={site.links.trilogy}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-stone-300"
          >
            Amazon
          </a>
          <a
            href={site.links.substack}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-stone-300"
          >
            Substack
          </a>
          <a
            href="https://medium.com/@spioli"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-stone-300"
          >
            Medium
          </a>
        </div>
      </div>
    </footer>
  );
}
