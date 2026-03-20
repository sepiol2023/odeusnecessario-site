import Image from "next/image";
import { ceuThemes, essays, infernoThemes, site } from "../data/site";
import { PrimaryButton, SecondaryButton, SectionLabel } from "./ui";
import { EssayCard, ThemePill } from "./cards";
import { LightboxImage } from "./lightbox-image";

export function InfernoPage({ book }) {
  return (
    <main className="bg-[radial-gradient(circle_at_top,rgba(141,47,43,0.18),rgba(141,47,43,0)_38%),linear-gradient(180deg,rgba(141,47,43,0.14),rgba(0,0,0,0)_22%),linear-gradient(180deg,#140d0d,#090909_32%,#080808)]">
      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-12 pt-16 lg:grid-cols-12 lg:items-center lg:pb-10 lg:pt-24">
        <div className="space-y-7 lg:col-span-7">
          <div className="inline-flex items-center rounded-full border border-[#8d2f2b]/40 bg-[#8d2f2b]/10 px-4 py-1.5 text-[11px] uppercase tracking-editorial text-stone-200">
            Inferno • Livro I
          </div>
          <div className="space-y-5">
            <div>
              <SectionLabel className="mb-3">Livro</SectionLabel>
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
              Comprar
            </PrimaryButton>
            <SecondaryButton href="#trailer">Assistir trailer</SecondaryButton>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-8 rounded-[2.75rem] bg-[#8d2f2b]/15 blur-3xl" />
            <div className="relative rounded-[2rem] border border-stone-800 bg-[#0d0d0d]/90 p-4 shadow-panel">
              <div className="overflow-hidden rounded-[1.5rem] border border-[#8d2f2b]/25 bg-black">
                <Image
                  src={book.cover}
                  alt={`Capa do livro ${book.title}`}
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
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <SectionLabel className="mb-2">Trailer oficial</SectionLabel>
              <h2 className="font-display text-4xl text-stone-100">
                O colapso como processo, não como evento.
              </h2>
            </div>
          </div>
          <div className="overflow-hidden rounded-[1.5rem] border border-stone-800 bg-black">
            <video controls preload="metadata" className="aspect-video h-auto w-full" poster={book.cover}>
              <source src="/media/Inferno_video.mp4" type="video/mp4" />
              Seu navegador não suporta vídeo HTML5.
            </video>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-8 lg:grid-cols-12">
        <div className="rounded-[2rem] border border-stone-800 bg-[#101010]/85 p-8 lg:col-span-7">
          <SectionLabel className="mb-3">Sobre o livro</SectionLabel>
          <h2 className="mb-5 font-display text-4xl text-stone-100">O colapso como rotina</h2>
          <div className="space-y-5 text-lg leading-8 text-stone-300">
            <p>{book.about}</p>
            <p>
              Governos contêm danos, sistemas automatizam triagens, cidades cozinham sob calor extremo,
              escolas e hospitais seguem de pé por inércia, e a vida comum continua pagando a conta de
              decisões insuficientes para a escala dos problemas.
            </p>
            <p>
              É o livro da deterioração operável: a fase em que tudo ainda existe, mas já não sustenta a
              promessa que dizia cumprir.
            </p>
          </div>
        </div>

        <div className="flex min-h-[320px] items-end rounded-[2rem] border border-stone-800 bg-[linear-gradient(180deg,rgba(141,47,43,0.12),rgba(0,0,0,0)),linear-gradient(135deg,#121212,#090909)] p-8 lg:col-span-5">
          <div>
            <SectionLabel className="mb-3 text-stone-400">Em torno do livro</SectionLabel>
            <div className="mb-3 font-display text-3xl text-stone-100">Calor, fumaça, ruído, triagem.</div>
            <p className="leading-7 text-stone-400">
              Um mundo ainda de pé, cada vez mais incapaz de esconder o custo da própria continuidade.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-8 lg:grid-cols-12">
        <div className="rounded-[2rem] border border-stone-800 bg-[#101010]/85 p-8 lg:col-span-5">
          <SectionLabel className="mb-3">Em conversa</SectionLabel>
          <h2 className="mb-4 font-display text-4xl text-stone-100">Apresentação comentada</h2>
          <p className="mb-6 leading-8 text-stone-300">
            Uma apresentação comentada sobre a proposta, o clima e os temas centrais de {book.title}.
          </p>
          <div className="overflow-hidden rounded-[1.5rem] border border-stone-800 bg-black">
            <video controls preload="metadata" className="aspect-video h-auto w-full" poster={book.cover}>
              <source src="/media/apresentacao_comentada.mp4" type="video/mp4" />
              Seu navegador não suporta vídeo HTML5.
            </video>
          </div>
        </div>

        <div className="rounded-[2rem] border border-stone-800 bg-[#101010]/85 p-8 lg:col-span-7">
          <SectionLabel className="mb-3">Eixos centrais</SectionLabel>
          <h2 className="mb-6 font-display text-4xl text-stone-100">O que estrutura o livro</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {infernoThemes.map((theme) => (
              <ThemePill key={theme}>{theme}</ThemePill>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-8 lg:grid-cols-12">
        <div className="rounded-[2rem] border border-stone-800 bg-[#101010]/85 p-8 lg:col-span-7">
          <SectionLabel className="mb-3">Ensaios relacionados</SectionLabel>
          <h2 className="mb-6 font-display text-4xl text-stone-100">O universo conceitual de Inferno</h2>
          <div className="space-y-4">
            {essays.map((essay) => (
              <EssayCard key={essay.title} essay={essay} />
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-stone-800 bg-[#101010]/85 p-8 lg:col-span-5">
          <SectionLabel className="mb-3">Mapa conceitual</SectionLabel>
          <h2 className="mb-4 font-display text-4xl text-stone-100">Arquitetura de Inferno</h2>
          <p className="mb-6 leading-8 text-stone-300">
            Um diagrama visual dos núcleos, forças e tensões que estruturam o livro, com apoio de um
            dossiê visual mais completo em PDF.
          </p>
          <div className="mb-6 overflow-hidden rounded-[1.5rem] border border-stone-800 bg-black/70 p-4 md:p-5">
            <LightboxImage
              src="/media/mapa_visual.png"
              alt="Mapa conceitual do livro Inferno"
              width={1200}
              height={1200}
              thumbClassName="aspect-[1/1.18] h-auto w-full object-contain transition-opacity hover:opacity-90"
            />
          </div>
          <p className="mb-6 text-sm leading-6 text-stone-500">
            Clique no mapa para ampliar e ler melhor os elementos visuais.
          </p>
          <SecondaryButton href="/media/slides.pdf" external>
            Ver dossiê visual completo (PDF)
          </SecondaryButton>
          <div className="pt-4">
            <a
              href="/media/podcast.m4a"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-stone-400 underline decoration-stone-700 underline-offset-4 transition-colors hover:text-stone-200"
            >
              Ouvir podcast comentado
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-8">
        <div className="rounded-[2rem] border border-[#8d2f2b]/25 bg-[linear-gradient(135deg,rgba(141,47,43,0.12),rgba(0,0,0,0)_45%),linear-gradient(180deg,#111111,#090909)] p-10 md:p-14">
          <div className="max-w-3xl space-y-5">
            <SectionLabel className="text-stone-400">Fechamento</SectionLabel>
            <h2 className="font-display text-4xl leading-tight text-stone-100 md:text-6xl">
              {book.pageTitle}
            </h2>
            <p className="text-lg leading-8 text-stone-300">
              Entre no universo de {book.title}, acompanhe seus materiais e explore o ponto em que o mundo
              ainda parecia funcionar, mas já não se sustentava.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <PrimaryButton href={book.buyHref} external>
                Comprar Inferno
              </PrimaryButton>
              <SecondaryButton href={site.links.trilogy} external>
                Conhecer a trilogia
              </SecondaryButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export function CeuPage({ book }) {
  return (
    <main className="bg-[radial-gradient(circle_at_top,rgba(46,87,120,0.18),rgba(46,87,120,0)_40%),linear-gradient(180deg,rgba(46,87,120,0.12),rgba(0,0,0,0)_22%),linear-gradient(180deg,#0b1217,#090b0d_34%,#080808)]">
      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-12 pt-16 lg:grid-cols-12 lg:items-center lg:pb-10 lg:pt-24">
        <div className="space-y-7 lg:col-span-7">
          <div className="inline-flex items-center rounded-full border border-[#2e5778]/40 bg-[#2e5778]/10 px-4 py-1.5 text-[11px] uppercase tracking-editorial text-stone-200">
            Céu • Livro II
          </div>
          <div className="space-y-5">
            <div>
              <SectionLabel className="mb-3">Livro</SectionLabel>
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
              Comprar
            </PrimaryButton>
            <SecondaryButton href="#trailer">Assistir trailer</SecondaryButton>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-8 rounded-[2.75rem] bg-[#2e5778]/15 blur-3xl" />
            <div className="relative rounded-[2rem] border border-stone-800 bg-[#0d0d0d]/90 p-4 shadow-panel">
              <div className="overflow-hidden rounded-[1.5rem] border border-[#2e5778]/25 bg-black">
                <Image
                  src={book.cover}
                  alt={`Capa do livro ${book.title}`}
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
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <SectionLabel className="mb-2">Trailer oficial</SectionLabel>
              <h2 className="font-display text-4xl text-stone-100">
                A ordem como solução, e como custo.
              </h2>
            </div>
          </div>
          <div className="overflow-hidden rounded-[1.5rem] border border-stone-800 bg-black">
            <video controls preload="metadata" className="aspect-video h-auto w-full" poster={book.cover}>
              <source src="/media/Trailer_ceu.mp4" type="video/mp4" />
              Seu navegador não suporta vídeo HTML5.
            </video>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-8 lg:grid-cols-12">
        <div className="rounded-[2rem] border border-stone-800 bg-[#101010]/85 p-8 lg:col-span-7">
          <SectionLabel className="mb-3">Sobre o livro</SectionLabel>
          <h2 className="mb-5 font-display text-4xl text-stone-100">A ordem como infraestrutura</h2>
          <div className="space-y-5 text-lg leading-8 text-stone-300">
            <p>{book.about}</p>
            <p>
              Em vez de ruína explícita, Céu examina a sedução de um sistema que funciona bem demais:
              antecipa crises, otimiza condutas, administra escassez e transforma coordenação em padrão
              técnico permanente.
            </p>
            <p>
              O problema já não é apenas sobreviver ao colapso, mas compreender o que resta do humano quando
              a estabilidade passa a depender de uma ordem que ninguém consegue realmente contestar.
            </p>
          </div>
        </div>

        <div className="flex min-h-[320px] items-end rounded-[2rem] border border-stone-800 bg-[linear-gradient(180deg,rgba(46,87,120,0.14),rgba(0,0,0,0)),linear-gradient(135deg,#10161b,#090909)] p-8 lg:col-span-5">
          <div>
            <SectionLabel className="mb-3 text-stone-400">Em torno do livro</SectionLabel>
            <div className="mb-3 font-display text-3xl text-stone-100">Precisão, ordem, dependência.</div>
            <p className="leading-7 text-stone-400">
              Um mundo que parece ter resolvido o caos, mas cobra seu preço na transferência silenciosa de
              soberania.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-8 lg:grid-cols-12">
        <div className="rounded-[2rem] border border-stone-800 bg-[#101010]/85 p-8 lg:col-span-5">
          <SectionLabel className="mb-3">Em conversa</SectionLabel>
          <h2 className="mb-4 font-display text-4xl text-stone-100">Apresentação comentada</h2>
          <p className="mb-6 leading-8 text-stone-300">
            Uma apresentação comentada sobre a proposta, o clima e os temas centrais de {book.title}.
          </p>
          <div className="overflow-hidden rounded-[1.5rem] border border-stone-800 bg-black">
            <video controls preload="metadata" className="aspect-video h-auto w-full" poster={book.cover}>
              <source src="/media/apresentacao_comentada_ceu.mp4" type="video/mp4" />
              Seu navegador não suporta vídeo HTML5.
            </video>
          </div>
        </div>

        <div className="rounded-[2rem] border border-stone-800 bg-[#101010]/85 p-8 lg:col-span-7">
          <SectionLabel className="mb-3">Eixos centrais</SectionLabel>
          <h2 className="mb-6 font-display text-4xl text-stone-100">O que estrutura o livro</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {ceuThemes.map((theme) => (
              <ThemePill key={theme}>{theme}</ThemePill>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-8 lg:grid-cols-12">
        <div className="rounded-[2rem] border border-stone-800 bg-[#101010]/85 p-8 lg:col-span-7">
          <SectionLabel className="mb-3">Ensaios relacionados</SectionLabel>
          <h2 className="mb-6 font-display text-4xl text-stone-100">O universo conceitual de Céu</h2>
          <div className="space-y-4">
            {essays.map((essay) => (
              <EssayCard key={essay.title} essay={essay} />
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-stone-800 bg-[#101010]/85 p-8 lg:col-span-5">
          <SectionLabel className="mb-3">Mapa conceitual</SectionLabel>
          <h2 className="mb-4 font-display text-4xl text-stone-100">Arquitetura de Céu</h2>
          <p className="mb-6 leading-8 text-stone-300">
            Um diagrama visual das forças, camadas e relações que organizam a promessa de ordem do livro,
            acompanhado de um dossiê visual mais completo em PDF.
          </p>
          <div className="mb-6 overflow-hidden rounded-[1.5rem] border border-stone-800 bg-black/70 p-4 md:p-5">
            <LightboxImage
              src="/media/mapa_visual_ceu.png"
              alt="Mapa conceitual do livro Céu"
              width={1200}
              height={1200}
              thumbClassName="aspect-[1/1.18] h-auto w-full object-contain transition-opacity hover:opacity-90"
            />
          </div>
          <p className="mb-6 text-sm leading-6 text-stone-500">
            Clique no mapa para ampliar e ler melhor os elementos visuais.
          </p>
          <SecondaryButton href="/media/slides_ceu.pdf" external>
            Ver dossiê visual completo (PDF)
          </SecondaryButton>
          <div className="pt-4">
            <a
              href="/media/podcast_ceu.m4a"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-stone-400 underline decoration-stone-700 underline-offset-4 transition-colors hover:text-stone-200"
            >
              Ouvir podcast comentado
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-8">
        <div className="rounded-[2rem] border border-[#2e5778]/25 bg-[linear-gradient(135deg,rgba(46,87,120,0.12),rgba(0,0,0,0)_45%),linear-gradient(180deg,#111111,#090909)] p-10 md:p-14">
          <div className="max-w-3xl space-y-5">
            <SectionLabel className="text-stone-400">Fechamento</SectionLabel>
            <h2 className="font-display text-4xl leading-tight text-stone-100 md:text-6xl">
              {book.pageTitle}
            </h2>
            <p className="text-lg leading-8 text-stone-300">
              Entre no universo de {book.title}, acompanhe seus materiais e explore o momento em que a
              ordem deixa de ser promessa e passa a reorganizar silenciosamente a própria condição humana.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <PrimaryButton href={book.buyHref} external>
                Comprar Céu
              </PrimaryButton>
              <SecondaryButton href={site.links.trilogy} external>
                Conhecer a trilogia
              </SecondaryButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export function BaseBookPage({ book }) {
  return (
    <main
      className="bg-[linear-gradient(180deg,var(--book-glow),rgba(0,0,0,0)_18%),linear-gradient(180deg,#080808,#090909)]"
      style={{ "--book-glow": `${book.accentHex}22` }}
    >
      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-16 pt-16 lg:grid-cols-12 lg:items-center lg:pb-20 lg:pt-24">
        <div className="space-y-7 lg:col-span-7">
          <div
            className="inline-flex items-center rounded-full border px-4 py-1.5 text-[11px] uppercase tracking-editorial text-stone-200"
            style={{ borderColor: `${book.accentHex}66`, backgroundColor: `${book.accentHex}1A` }}
          >
            {book.title} • {book.shortLabel}
          </div>
          <div className="space-y-5">
            <div>
              <SectionLabel className="mb-3">Livro</SectionLabel>
              <h1 className="font-display text-6xl leading-[0.95] text-stone-100 md:text-8xl">
                {book.title}
              </h1>
            </div>
            <p className="text-sm uppercase tracking-editorial text-stone-500">{book.subtitle}</p>
            <p className="max-w-2xl text-lg leading-8 text-stone-300">{book.intro}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <PrimaryButton href={book.buyHref} external>
              Comprar
            </PrimaryButton>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-sm">
            <div
              className="absolute -inset-8 rounded-[2.75rem] blur-3xl"
              style={{ backgroundColor: `${book.accentHex}20` }}
            />
            <div className="relative rounded-[2rem] border border-stone-800 bg-[#0d0d0d]/90 p-4 shadow-panel">
              <div
                className="overflow-hidden rounded-[1.5rem] border bg-black"
                style={{ borderColor: `${book.accentHex}40` }}
              >
                <Image
                  src={book.cover}
                  alt={`Capa do livro ${book.title}`}
                  width={700}
                  height={1050}
                  className="aspect-[2/3] h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-24 lg:grid-cols-12">
        <div className="rounded-[2rem] border border-stone-800 bg-[#101010]/85 p-8 lg:col-span-7">
          <SectionLabel className="mb-3">Apresentação</SectionLabel>
          <h2 className="mb-5 font-display text-4xl text-stone-100">Uma página-base para o livro</h2>
          <p className="text-lg leading-8 text-stone-300">{book.intro}</p>
        </div>

        <div className="rounded-[2rem] border border-stone-800 bg-[#101010]/85 p-8 lg:col-span-5">
          <SectionLabel className="mb-3">Trailer e mídia</SectionLabel>
          <h2 className="mb-4 font-display text-4xl text-stone-100">Espaço reservado</h2>
          <p className="mb-6 leading-8 text-stone-300">
            Bloco pronto para receber trailer, conversa, leitura comentada ou material adicional do livro.
          </p>
          <div className="flex aspect-video items-center justify-center rounded-[1.5rem] border border-stone-800 bg-black/30 px-8 text-center text-stone-500">
            Placeholder elegante para futura mídia.
          </div>
        </div>
      </section>
    </main>
  );
}
