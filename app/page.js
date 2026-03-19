import Image from "next/image";
import { BookCard, EssayCard } from "../components/cards";
import { PrimaryButton, SecondaryButton, SectionLabel } from "../components/ui";
import { books, essays, site } from "../data/site";

const inferno = books[0];

export default function HomePage() {
  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-16 pt-20 lg:grid-cols-12 lg:items-end lg:pb-24 lg:pt-28">
        <div className="space-y-8 lg:col-span-7">
          <div className="inline-flex items-center rounded-full border border-amber-200/20 bg-amber-50/5 px-4 py-1.5 text-[11px] uppercase tracking-editorial text-amber-100/80">
            Ficção especulativa • colapso • coordenação • IA
          </div>
          <div className="space-y-6">
            <h1 className="max-w-4xl font-display text-6xl leading-[0.95] text-stone-100 md:text-8xl">
              A trilogia sobre o ponto em que o mundo humano deixa de se sustentar.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-stone-300 md:text-xl">
              <span className="text-stone-100">O Deus Necessário</span> é uma exploração literária das
              pressões que tornam a coordenação global inevitável: crise climática, erosão cognitiva,
              guerra sistêmica, inteligência artificial e o custo de manter ordem em escala planetária.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <SecondaryButton href="#trilogia">A trilogia</SecondaryButton>
            <PrimaryButton href="#livros">Conhecer os livros</PrimaryButton>
            <SecondaryButton href="#ensaios">Ler os ensaios</SecondaryButton>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-[2rem] border border-stone-800 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(0,0,0,0)),#101010] p-6 shadow-panel">
            <div className="grid grid-cols-3 gap-4">
              {books.map((book) => (
                <a
                  key={book.slug}
                  href={book.href}
                  className="flex min-h-[220px] flex-col justify-between rounded-[1.4rem] border border-stone-800 bg-black/25 p-3 transition-colors hover:border-stone-700"
                >
                  <div className="mb-3 overflow-hidden rounded-[1rem] border border-stone-800 bg-black">
                    <Image
                      src={book.cover}
                      alt={`Capa ${book.title}`}
                      width={300}
                      height={450}
                      className="aspect-[2/3] h-auto w-full object-cover"
                    />
                  </div>
                  <div className="space-y-1">
                    <div className="text-[10px] uppercase tracking-editorial text-stone-500">
                      {book.shortLabel}
                    </div>
                    <div className="font-display text-xl text-stone-100">{book.title}</div>
                  </div>
                </a>
              ))}
            </div>
            <p className="mt-5 text-sm leading-7 text-stone-500">
              Três livros, um mesmo eixo: o limite estrutural da autonomia humana em sistemas complexos.
            </p>
          </div>
        </div>
      </section>

      <section id="trilogia" className="border-y border-stone-900 bg-[#0d0d0d]/90">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel className="mb-4">A trilogia</SectionLabel>
            <h2 className="font-display text-4xl leading-tight text-stone-100 md:text-5xl">
              Não é só ficção sobre o futuro. É ficção sobre a mecânica do colapso.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-stone-300 lg:col-span-8">
            <p>
              Durante muito tempo, sociedades humanas conseguiram operar apoiadas em valores, instituições,
              improviso e correções locais. O problema não surgiu quando os humanos ficaram maus. Surgiu
              quando o mundo ficou complexo demais para ser coordenado por decisões fragmentadas, incentivos
              conflitantes e narrativas concorrentes.
            </p>
            <p>
              <span className="text-stone-100">O Deus Necessário</span> nasce dessa pergunta: o que
              acontece quando a liberdade humana continua existindo, mas já não basta para manter a ordem de
              sistemas interdependentes em escala global?
            </p>
            <p>
              A trilogia acompanha esse problema em três momentos: a deterioração, a aparente solução e o
              que resta depois do preço ser cobrado.
            </p>
          </div>
        </div>
      </section>

      <section id="livros" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel className="mb-3">Livros</SectionLabel>
            <h2 className="font-display text-4xl text-stone-100 md:text-5xl">
              Os três movimentos da mesma tese
            </h2>
          </div>
          <div className="hidden max-w-md text-right text-sm leading-7 text-stone-500 md:block">
            Cada volume funciona de forma própria, mas o conjunto forma um arco coerente sobre crise, ordem
            e sobrevivência.
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {books.map((book) => (
            <BookCard key={book.slug} book={book} />
          ))}
        </div>
      </section>

      <section id="autor" className="border-y border-stone-900 bg-[#0d0d0d]/90">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel className="mb-4">Autor</SectionLabel>
            <h2 className="font-display text-4xl text-stone-100 md:text-5xl">{site.author.name}</h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-stone-300 lg:col-span-8">
            <p>
              Escritor e ensaísta interessado em falha sistêmica, coordenação global, inteligência
              artificial, erosão cognitiva e os limites da autonomia humana em estruturas complexas.
            </p>
            <p>
              A trilogia <span className="text-stone-100">O Deus Necessário</span> articula, em forma
              narrativa, problemas que também aparecem em seus ensaios: deterioração operável, custo de
              coordenação, colapso institucional, ruído informacional e a possibilidade de ordem não humana
              como resposta histórica.
            </p>
            <p>
              O projeto se estende além dos livros: inclui ensaios, reflexões conceituais e um universo
              ficcional organizado como laboratório narrativo para ideias que já não cabem confortavelmente
              nem no debate político, nem no tecnológico, nem no filosófico tradicional.
            </p>
            <div className="pt-2">
              <SecondaryButton href={site.author.authorPage} external>
                Ver página do autor
              </SecondaryButton>
            </div>
          </div>
        </div>
      </section>

      <section id="ensaios" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <SectionLabel className="mb-3">Ensaios</SectionLabel>
          <h2 className="mb-4 font-display text-4xl text-stone-100 md:text-5xl">
            O universo conceitual por trás da ficção
          </h2>
          <p className="max-w-3xl text-lg leading-8 text-stone-300">
            Além da trilogia, os ensaios desenvolvem em linguagem direta os eixos estruturais do projeto:
            colapso, coordenação, economia, informação, guerra e os limites da organização humana.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {essays.map((essay) => (
            <EssayCard key={essay.title} essay={essay} />
          ))}
        </div>
      </section>

      <section className="border-t border-stone-900 bg-[linear-gradient(180deg,rgba(141,47,43,0.06),rgba(0,0,0,0)_18%),#090909]">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-20">
          <SectionLabel className="mb-4 text-stone-400">Destaque</SectionLabel>
          <div className="grid gap-8 rounded-[2rem] border border-stone-800 bg-[#101010]/90 p-10 shadow-panel lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-5">
              <h2 className="font-display text-5xl leading-[0.95] text-stone-100 md:text-6xl">
                {inferno.title}
              </h2>
              <p className="text-sm uppercase tracking-editorial text-stone-500">{inferno.subtitle}</p>
              <p className="max-w-2xl text-xl leading-9 text-stone-200">{inferno.heroLine}</p>
              <p className="max-w-2xl leading-8 text-stone-300">{inferno.about}</p>
              <div className="flex flex-wrap gap-4 pt-2">
                <PrimaryButton href={inferno.href}>Explorar Inferno</PrimaryButton>
                <SecondaryButton href={inferno.buyHref} external>
                  Comprar na Amazon
                </SecondaryButton>
              </div>
            </div>
            <div className="mx-auto max-w-xs overflow-hidden rounded-[1.6rem] border border-stone-800 bg-black">
              <Image
                src={inferno.cover}
                alt="Capa do livro Inferno"
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
