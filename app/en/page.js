import Image from "next/image";
import { BookCard, EssayCard } from "../../components/cards";
import { LightboxImage } from "../../components/lightbox-image";
import { PrimaryButton, SecondaryButton, SectionLabel } from "../../components/ui";
import { enBooks, enEssays, enHome, enSite } from "../../data/en-site";
import { youtube } from "../../data/site";

const inferno = enBooks[0];

function toEmbed(url) {
  return url.replace("https://youtu.be/", "https://www.youtube.com/embed/");
}

export const metadata = {
  title: "The Necessary God",
  description:
    "Official website of The Necessary God trilogy, by Sergio Pioli: speculative fiction about collapse, coordination, order and survival.",
};

export default function EnglishHomePage() {
  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-16 pt-20 lg:grid-cols-12 lg:items-stretch lg:pb-24 lg:pt-28">
        <div className="space-y-8 lg:col-span-6">
          <div className="inline-flex items-center rounded-full border border-amber-200/20 bg-amber-50/5 px-4 py-1.5 text-[11px] uppercase tracking-editorial text-amber-100/80">
            {enHome.heroBadge}
          </div>
          <div className="space-y-6">
            <h1 className="max-w-4xl font-display text-6xl leading-[0.95] text-stone-100 md:text-8xl">
              {enHome.heroTitle}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-stone-300 md:text-xl">
              <span className="text-stone-100">{enSite.title}</span> is a literary exploration of the
              pressures that make global coordination increasingly unavoidable: climate crisis, cognitive
              erosion, systemic conflict, artificial intelligence and the cost of maintaining order at
              planetary scale.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <SecondaryButton href="#trilogy">The trilogy</SecondaryButton>
            <PrimaryButton href="#books">Explore the books</PrimaryButton>
            <SecondaryButton href="#essays">Read the essays</SecondaryButton>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="flex h-full flex-col rounded-[2rem] border border-stone-800 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(0,0,0,0)),#101010] p-6 shadow-panel">
            <div className="mb-5">
              <SectionLabel className="mb-2">Official trailer</SectionLabel>
              <h2 className="font-display text-3xl text-stone-100 md:text-4xl">{enHome.heroTrailerTitle}</h2>
            </div>
            <div className="overflow-hidden rounded-[1.5rem] border border-stone-800 bg-black">
              <iframe
                src={toEmbed(youtube.trilogy.en.trailer)}
                title="Official trailer of The Necessary God trilogy"
                className="aspect-video h-auto w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <p className="mt-5 text-sm leading-7 text-stone-500">{enHome.heroTrailerBody}</p>
          </div>
        </div>
      </section>

      <section id="trilogy" className="border-y border-stone-900 bg-[#0d0d0d]/90">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel className="mb-4">The trilogy</SectionLabel>
            <h2 className="font-display text-4xl leading-tight text-stone-100 md:text-5xl">{enHome.trilogyTitle}</h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-stone-300 lg:col-span-8">
            {enHome.trilogyBody.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <SectionLabel className="mb-3">Trilogy media</SectionLabel>
          <h2 className="mb-4 font-display text-4xl text-stone-100 md:text-5xl">{enHome.mediaTitle}</h2>
          <p className="max-w-3xl text-lg leading-8 text-stone-300">{enHome.mediaBody}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-8 lg:grid-cols-12">
        <div className="rounded-[2rem] border border-stone-800 bg-[#101010]/85 p-8 lg:col-span-5">
          <SectionLabel className="mb-3">Video summary</SectionLabel>
          <h2 className="mb-4 font-display text-4xl text-stone-100">{enHome.summaryTitle}</h2>
          <p className="mb-6 leading-8 text-stone-300">{enHome.summaryBody}</p>
          <div className="overflow-hidden rounded-[1.5rem] border border-stone-800 bg-black">
            <iframe
              src={toEmbed(youtube.trilogy.en.summary)}
              title="Video summary of The Necessary God trilogy"
              className="aspect-video h-auto w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        <div className="rounded-[2rem] border border-stone-800 bg-[#101010]/85 p-8 lg:col-span-7">
          <SectionLabel className="mb-3">Concept map</SectionLabel>
          <h2 className="mb-4 font-display text-4xl text-stone-100">{enHome.mapTitle}</h2>
          <p className="mb-6 leading-8 text-stone-300">{enHome.mapBody}</p>
          <div className="mb-6 overflow-hidden rounded-[1.5rem] border border-stone-800 bg-black/70 p-4 md:p-5">
            <LightboxImage
              src="/media/[EN] Trilogia - Infográfico.png"
              alt="Concept map of The Necessary God trilogy"
              width={1200}
              height={1200}
              thumbClassName="aspect-[1/1.18] h-auto w-full object-contain transition-opacity hover:opacity-90"
            />
          </div>
          <p className="mb-6 text-sm leading-6 text-stone-500">
            Click the map to enlarge it and read the visual structure more clearly.
          </p>
          <SecondaryButton href="/media/[EN] Trilogia - Slides.pdf" external>
            View the full visual dossier (PDF)
          </SecondaryButton>
          <div className="pt-4">
            <a
              href={youtube.trilogy.en.podcast}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-stone-400 underline decoration-stone-700 underline-offset-4 transition-colors hover:text-stone-200"
            >
              Listen to the podcast on YouTube
            </a>
          </div>
        </div>
      </section>

      <section id="books" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel className="mb-3">Books</SectionLabel>
            <h2 className="font-display text-4xl text-stone-100 md:text-5xl">{enHome.booksTitle}</h2>
          </div>
          <div className="hidden max-w-md text-right text-sm leading-7 text-stone-500 md:block">{enHome.booksBody}</div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {enBooks.map((book) => (
            <BookCard key={book.slug} book={book} buyLabel="Buy" moreLabel="Learn more" />
          ))}
        </div>
      </section>

      <section id="author" className="border-y border-stone-900 bg-[#0d0d0d]/90">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel className="mb-4">{enHome.authorTitle}</SectionLabel>
            <h2 className="font-display text-4xl text-stone-100 md:text-5xl">{enSite.author.name}</h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-stone-300 lg:col-span-8">
            {enHome.authorBody.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="pt-2">
              <SecondaryButton href="https://www.amazon.com/stores/Sergio-Pioli/author/B0GMKN77DY" external>
                View author page
              </SecondaryButton>
            </div>
          </div>
        </div>
      </section>

      <section id="essays" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <SectionLabel className="mb-3">Essays</SectionLabel>
          <h2 className="mb-4 font-display text-4xl text-stone-100 md:text-5xl">{enHome.essaysTitle}</h2>
          <p className="max-w-3xl text-lg leading-8 text-stone-300">{enHome.essaysBody}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {enEssays.map((essay) => (
            <EssayCard key={essay.title} essay={essay} ctaLabel="Read essay" />
          ))}
        </div>
      </section>

      <section className="border-t border-stone-900 bg-[linear-gradient(180deg,rgba(141,47,43,0.06),rgba(0,0,0,0)_18%),#090909]">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-20">
          <SectionLabel className="mb-4 text-stone-400">{enHome.featuredTitle}</SectionLabel>
          <div className="grid gap-8 rounded-[2rem] border border-stone-800 bg-[#101010]/90 p-10 shadow-panel lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-5">
              <h2 className="font-display text-5xl leading-[0.95] text-stone-100 md:text-6xl">{inferno.title}</h2>
              <p className="text-sm uppercase tracking-editorial text-stone-500">{inferno.subtitle}</p>
              <p className="max-w-2xl text-xl leading-9 text-stone-200">{inferno.heroLine}</p>
              <p className="max-w-2xl leading-8 text-stone-300">{inferno.about}</p>
              <div className="flex flex-wrap gap-4 pt-2">
                <PrimaryButton href={inferno.href}>Explore Inferno</PrimaryButton>
                <SecondaryButton href={inferno.buyHref} external>
                  Buy on Amazon
                </SecondaryButton>
              </div>
            </div>
            <div className="mx-auto max-w-xs overflow-hidden rounded-[1.6rem] border border-stone-800 bg-black">
              <Image
                src={inferno.cover}
                alt="Book cover of Inferno"
                width={700}
                height={1050}
                className="aspect-[2/3] h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
