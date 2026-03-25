import Image from "next/image";
import { enEssays, enThemes } from "../data/en-site";
import { PrimaryButton, SecondaryButton, SectionLabel } from "./ui";
import { EssayCard, ThemePill } from "./cards";
import { LightboxImage } from "./lightbox-image";

function YouTubeEmbed({ href, title }) {
  const embedHref = href.replace("https://youtu.be/", "https://www.youtube.com/embed/");

  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-stone-800 bg-black">
      <iframe
        src={embedHref}
        title={title}
        className="aspect-video h-auto w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}

export function EnglishBookPage({ book }) {
  const themes = enThemes[book.key];

  return (
    <main
      className="bg-[radial-gradient(circle_at_top,var(--book-glow),rgba(0,0,0,0)_40%),linear-gradient(180deg,var(--book-glow-soft),rgba(0,0,0,0)_22%),linear-gradient(180deg,#0f0f10,#090909_34%,#080808)]"
      style={{
        "--book-glow": `${book.accentHex}2E`,
        "--book-glow-soft": `${book.accentHex}1F`,
      }}
    >
      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-12 pt-16 lg:grid-cols-12 lg:items-center lg:pb-10 lg:pt-24">
        <div className="space-y-7 lg:col-span-7">
          <div
            className="inline-flex items-center rounded-full border px-4 py-1.5 text-[11px] uppercase tracking-editorial text-stone-200"
            style={{ borderColor: `${book.accentHex}66`, backgroundColor: `${book.accentHex}1A` }}
          >
            {book.title} • {book.shortLabel}
          </div>
          <div className="space-y-5">
            <div>
              <SectionLabel className="mb-3">Book</SectionLabel>
              <h1 className="font-display text-6xl leading-[0.95] text-stone-100 md:text-8xl">
                {book.title}
              </h1>
            </div>
            <p className="text-sm uppercase tracking-editorial text-stone-500">{book.subtitle}</p>
            <p className="max-w-2xl text-xl leading-9 text-stone-200 md:text-2xl">{book.heroLine}</p>
            <p className="max-w-2xl text-lg leading-8 text-stone-400">{book.synopsis}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <PrimaryButton href={book.buyHref} external>
              Buy now
            </PrimaryButton>
            <SecondaryButton href="#trailer">Watch trailer</SecondaryButton>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-8 rounded-[2.75rem] blur-3xl" style={{ backgroundColor: `${book.accentHex}20` }} />
            <div className="relative rounded-[2rem] border border-stone-800 bg-[#0d0d0d]/90 p-4 shadow-panel">
              <div className="overflow-hidden rounded-[1.5rem] border bg-black" style={{ borderColor: `${book.accentHex}40` }}>
                <Image
                  src={book.cover}
                  alt={`Book cover of ${book.title}`}
                  width={700}
                  height={1050}
                  className="aspect-[2/3] h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-8">
        <div className="rounded-[2rem] border border-stone-800 bg-black/25 px-8 py-8 text-lg leading-8 text-stone-300">
          <p>{book.intro}</p>
        </div>
      </section>

      <section id="trailer" className="mx-auto max-w-7xl px-6 py-8">
        <div className="rounded-[2rem] border border-stone-800 bg-[#101010]/85 p-6 shadow-panel md:p-8">
          <div className="mb-6">
            <SectionLabel className="mb-2">Official trailer</SectionLabel>
            <h2 className="font-display text-4xl text-stone-100">{book.trailerTitle}</h2>
          </div>
          <YouTubeEmbed href={book.youtube.trailer} title={`Official trailer of ${book.title}`} />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-8 lg:grid-cols-12">
        <div className="rounded-[2rem] border border-stone-800 bg-[#101010]/85 p-8 lg:col-span-7">
          <SectionLabel className="mb-3">About the book</SectionLabel>
          <h2 className="mb-5 font-display text-4xl text-stone-100">{book.aboutTitle}</h2>
          <div className="space-y-5 text-lg leading-8 text-stone-300">
            <p>{book.about}</p>
            <p>{book.aboutExtra1}</p>
            <p>{book.aboutExtra2}</p>
          </div>
        </div>

        <div
          className="flex min-h-[320px] items-end rounded-[2rem] border border-stone-800 p-8 lg:col-span-5"
          style={{
            backgroundImage: `linear-gradient(180deg, ${book.accentHex}24, rgba(0,0,0,0)), linear-gradient(135deg,#121212,#090909)`,
          }}
        >
          <div>
            <SectionLabel className="mb-3 text-stone-400">Around the book</SectionLabel>
            <div className="mb-3 font-display text-3xl text-stone-100">{book.atmosphereTitle}</div>
            <p className="leading-7 text-stone-400">{book.atmosphereBody}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-8 lg:grid-cols-12">
        <div className="rounded-[2rem] border border-stone-800 bg-[#101010]/85 p-8 lg:col-span-5">
          <SectionLabel className="mb-3">In conversation</SectionLabel>
          <h2 className="mb-4 font-display text-4xl text-stone-100">Video summary</h2>
          <p className="mb-6 leading-8 text-stone-300">{book.summaryBody}</p>
          <YouTubeEmbed href={book.youtube.summary} title={`Video summary of ${book.title}`} />
        </div>

        <div className="rounded-[2rem] border border-stone-800 bg-[#101010]/85 p-8 lg:col-span-7">
          <SectionLabel className="mb-3">Core axes</SectionLabel>
          <h2 className="mb-6 font-display text-4xl text-stone-100">What structures the book</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {themes.map((theme) => (
              <ThemePill key={theme}>{theme}</ThemePill>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-8 lg:grid-cols-12">
        <div className="rounded-[2rem] border border-stone-800 bg-[#101010]/85 p-8 lg:col-span-7">
          <SectionLabel className="mb-3">Related essays</SectionLabel>
          <h2 className="mb-6 font-display text-4xl text-stone-100">{book.essayHeading}</h2>
          <div className="space-y-4">
            {enEssays.map((essay) => (
              <EssayCard key={essay.title} essay={essay} ctaLabel="Read essay" />
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-stone-800 bg-[#101010]/85 p-8 lg:col-span-5">
          <SectionLabel className="mb-3">Concept map</SectionLabel>
          <h2 className="mb-4 font-display text-4xl text-stone-100">{book.mapTitle}</h2>
          <p className="mb-6 leading-8 text-stone-300">{book.mapBody}</p>
          <div className="mb-6 overflow-hidden rounded-[1.5rem] border border-stone-800 bg-black/70 p-4 md:p-5">
            <LightboxImage
              src={book.media.map}
              alt={`Concept map of ${book.title}`}
              width={1200}
              height={1200}
              thumbClassName="aspect-[1/1.18] h-auto w-full object-contain transition-opacity hover:opacity-90"
            />
          </div>
          <p className="mb-6 text-sm leading-6 text-stone-500">
            Click the map to enlarge it and read the visual structure more clearly.
          </p>
          <SecondaryButton href={book.media.slides} external>
            View the full visual dossier (PDF)
          </SecondaryButton>
          <div className="pt-4">
            <a
              href={book.media.podcast}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-stone-400 underline decoration-stone-700 underline-offset-4 transition-colors hover:text-stone-200"
            >
              Listen to the commentary podcast
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-8">
        <div
          className="rounded-[2rem] border p-10 md:p-14"
          style={{
            borderColor: `${book.accentHex}40`,
            backgroundImage: `linear-gradient(135deg, ${book.accentHex}1F, rgba(0,0,0,0) 45%), linear-gradient(180deg,#111111,#090909)`,
          }}
        >
          <div className="max-w-3xl space-y-5">
            <SectionLabel className="text-stone-400">Closing</SectionLabel>
            <h2 className="font-display text-4xl leading-tight text-stone-100 md:text-6xl">
              {book.pageTitle}
            </h2>
            <p className="text-lg leading-8 text-stone-300">{book.closingText}</p>
            <div className="flex flex-wrap gap-4 pt-2">
              <PrimaryButton href={book.buyHref} external>
                Buy now
              </PrimaryButton>
              <SecondaryButton href="/en" external={false}>
                Explore the trilogy
              </SecondaryButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
