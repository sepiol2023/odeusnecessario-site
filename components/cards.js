import Image from "next/image";
import Link from "next/link";
import { PrimaryButton, SecondaryButton } from "./ui";

export function BookCard({ book }) {
  return (
    <article className="group rounded-[2rem] border border-stone-900 bg-[#101010]/90 p-5 shadow-panel transition-colors hover:border-stone-700">
      <Link href={book.href} className="block">
        <div className="mb-5 overflow-hidden rounded-[1.35rem] border border-stone-800 bg-black">
          <Image
            src={book.cover}
            alt={`Capa do livro ${book.title}`}
            width={700}
            height={1050}
            className="aspect-[2/3] h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
          />
        </div>
        <div className="space-y-3">
          <div className="text-[11px] uppercase tracking-editorial text-stone-500">
            {book.shortLabel}
          </div>
          <h3 className="font-display text-4xl leading-none text-stone-100">{book.title}</h3>
          <p className="leading-7 text-stone-300">{book.description}</p>
        </div>
      </Link>
      <div className="mt-6 flex flex-wrap gap-3">
        <PrimaryButton href={book.buyHref} external>
          Comprar
        </PrimaryButton>
        <SecondaryButton href={book.href}>Saiba mais</SecondaryButton>
      </div>
    </article>
  );
}

export function EssayCard({ essay }) {
  return (
    <article className="rounded-[1.75rem] border border-stone-800 bg-[#111111]/80 p-6 transition-colors hover:border-stone-700">
      <h3 className="mb-3 font-display text-3xl text-stone-100">{essay.title}</h3>
      <p className="mb-5 leading-7 text-stone-300">{essay.description}</p>
      <SecondaryButton href={essay.href} external>
        Ler ensaio
      </SecondaryButton>
    </article>
  );
}

export function ThemePill({ children }) {
  return (
    <div className="rounded-[1.25rem] border border-stone-800 bg-black/30 p-5 text-lg font-medium text-stone-100">
      {children}
    </div>
  );
}
