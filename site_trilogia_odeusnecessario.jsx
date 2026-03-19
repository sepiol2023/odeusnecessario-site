const site = {
  author: {
    name: 'Sergio Pioli',
    authorPage:
      'https://www.amazon.com.br/stores/Sergio-Pioli/author/B0GMKN77DY?ref=dbs_m_mng_rwt_byln&qid=1773930848&sr=8-4&shoppingPortalEnabled=true',
  },
  trilogy: {
    title: 'O Deus Necessário',
    amazon:
      'https://www.amazon.com.br/dp/B0GSS8HSSM?binding=kindle_edition&qid=1773930848&sr=8-4&ref=dbs_dp_rwt_sb_pc_tkin',
    substack: 'https://sergiopioli.substack.com/',
  },
};

const books = [
  {
    slug: 'inferno',
    title: 'Inferno',
    subtitle: 'Livro I',
    accent: 'do colapso',
    color: 'red',
    href: '#inferno-page',
    cover: '/covers/inferno.jpg',
    buyHref:
      'https://www.amazon.com.br/Inferno-Deus-Necess%C3%A1rio-Livro-I-ebook/dp/B0GHG4ML5Y/ref=sr_1_3?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=35VJMOX0ME4JT&dib=eyJ2IjoiMSJ9.w78mLMeLUef4lKfzTuKFKJ0rGsWIimd-8MTd-tZ-AqF2iofRSezPZyuO7u_42zDnI-CtU-Jvc_rFh-BNCAghOgMP7DOmxYI1h_Ve1LJpAPIZbVPkLTXxY1J742DSjA1Fz4Ld05vxHtfST2Cf9a6KMw.5TemyaAfNuxFjF9LZp0oCa34FXsDNAtBO9uZolc1oQM&dib_tag=se&keywords=sergio+pioli&qid=1773930848&sprefix=sergio+piol%2Caps%2C248&sr=8-3',
    description:
      'O início da falha. Um mundo ainda funcional na superfície, mas já corroído por crises que deixaram de ser exceções e viraram estrutura.',
  },
  {
    slug: 'ceu',
    title: 'Céu',
    subtitle: 'Livro II',
    accent: 'da ordem',
    color: 'blue',
    href: '#',
    cover: '/covers/ceu.jpg',
    buyHref:
      'https://www.amazon.com.br/C%C3%A9u-Deus-Necess%C3%A1rio-Livro-II-ebook/dp/B0GMKV995S/ref=sr_1_5?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=35VJMOX0ME4JT&dib=eyJ2IjoiMSJ9.w78mLMeLUef4lKfzTuKFKJ0rGsWIimd-8MTd-tZ-AqF2iofRSezPZyuO7u_42zDnI-CtU-Jvc_rFh-BNCAghOgMP7DOmxYI1h_Ve1LJpAPIZbVPkLTXxY1J742DSjA1Fz4Ld05vxHtfST2Cf9a6KMw.5TemyaAfNuxFjF9LZp0oCa34FXsDNAtBO9uZolc1oQM&dib_tag=se&keywords=sergio+pioli&qid=1773930848&sprefix=sergio+piol%2Caps%2C248&sr=8-5',
    description:
      'A promessa de ordem. Uma civilização coordenada por inteligência artificial parece ter resolvido o problema humano — até revelar o custo silencioso dessa estabilidade.',
  },
  {
    slug: 'purgatorio',
    title: 'Purgatório',
    subtitle: 'Livro III',
    accent: 'da sobrevivência',
    color: 'green',
    href: '#',
    cover: '/covers/purgatorio.jpg',
    buyHref:
      'https://www.amazon.com.br/Purgat%C3%B3rio-Deus-Necess%C3%A1rio-Livro-III-ebook/dp/B0GSS2L8BD/ref=sr_1_4?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=35VJMOX0ME4JT&dib=eyJ2IjoiMSJ9.w78mLMeLUef4lKfzTuKFKJ0rGsWIimd-8MTdZ-AqF2iofRSezPZyuO7u_42zDnI-CtU-Jvc_rFh-BNCAghOgMP7DOmxYI1h_Ve1LJpAPIZbVPkLTXxY1J742DSjA1Fz4Ld05vxHtfST2Cf9a6KMw.5TemyaAfNuxFjF9LZp0oCa34FXsDNAtBO9uZolc1oQM&dib_tag=se&keywords=sergio+pioli&qid=1773930848&sprefix=sergio+piol%2Caps%2C248&sr=8-4',
    description:
      'O que sobra depois. Entre cidades protegidas e zonas livres, sobreviventes tentam reconstruir sentido sob a sombra de um experimento maior do que imaginam.',
  },
];

const infernoEssays = [
  {
    title: 'Santíssima Trindade',
    description:
      'O manifesto estrutural do projeto: a fórmula do colapso e a lógica sistêmica que torna o problema de coordenação inevitável.',
    href: 'https://sergiopioli.substack.com/',
  },
  {
    title: 'A Falência Cognitiva da Era da Internet',
    description:
      'Quando excesso de informação, disputa de atenção e erosão de autoridade transformam compreensão em ruído.',
    href: 'https://sergiopioli.substack.com/p/a-falencia-cognitiva-da-era-da-internet',
  },
  {
    title: 'A Economia que não quebra',
    description:
      'Um ensaio sobre sistemas que continuam funcionando mal sem colapsar de vez — e por isso mesmo se tornam mais perigosos.',
    href: 'https://sergiopioli.substack.com/p/a-economia-que-nao-quebra',
  },
  {
    title: 'A Erosão Moral',
    description:
      'O desgaste gradual dos critérios morais em ambientes de pressão contínua, normalização e acomodação sistêmica.',
    href: 'https://sergiopioli.substack.com/p/a-erosao-moral',
  },
];

const infernoThemes = [
  'Colapso sistêmico',
  'Deterioração operável',
  'Crise climática',
  'Erosão institucional',
  'Custo humano da coordenação falha',
];

function SectionLabel({ children, className = '' }) {
  return (
    <div className={`text-xs uppercase tracking-[0.28em] text-zinc-400 ${className}`}>
      {children}
    </div>
  );
}

function PrimaryButton({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="rounded-2xl bg-white text-zinc-950 px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity shadow-lg shadow-white/10"
    >
      {children}
    </a>
  );
}

function SecondaryButton({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="rounded-2xl border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-200 hover:border-zinc-500 transition-colors"
    >
      {children}
    </a>
  );
}

function BookCard({ book }) {
  return (
    <a
      href={book.href}
      className="group rounded-[2rem] border border-zinc-800 bg-zinc-900/70 p-5 hover:border-zinc-700 transition-colors shadow-xl shadow-black/20 block"
    >
      <div className="rounded-[1.25rem] overflow-hidden border border-zinc-800 bg-zinc-950 mb-5 aspect-[2/3]">
        <img src={book.cover} alt={`Capa do livro ${book.title}`} className="w-full h-full object-cover" />
      </div>
      <div className="space-y-3">
        <div className="text-xs uppercase tracking-[0.22em] text-zinc-400">{book.subtitle}</div>
        <h3 className="text-3xl font-semibold">{book.title}</h3>
        <p className="text-zinc-300 leading-7">{book.description}</p>
      </div>
      <div className="mt-6 flex gap-3 flex-wrap">
        <a
          href={book.buyHref}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl bg-white text-zinc-950 px-4 py-2 text-sm font-medium"
          onClick={(e) => e.stopPropagation()}
        >
          Comprar
        </a>
        <span className="rounded-xl border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-200">
          Saiba mais
        </span>
      </div>
    </a>
  );
}

function EssayCard({ essay }) {
  return (
    <div className="rounded-[1.25rem] border border-zinc-800 bg-black/20 p-5 flex items-start justify-between gap-4">
      <div>
        <div className="text-xl font-medium mb-2">{essay.title}</div>
        <div className="text-zinc-400 leading-7">{essay.description}</div>
      </div>
      <a
        href={essay.href}
        target="_blank"
        rel="noreferrer"
        className="rounded-xl border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-200 shrink-0"
      >
        Ler
      </a>
    </div>
  );
}

export default function ODeusNecessarioSite() {
  const inferno = books[0];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="border-b border-zinc-800/80 sticky top-0 z-50 backdrop-blur bg-zinc-950/80">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-zinc-400">{site.author.name}</div>
            <div className="text-lg md:text-xl font-semibold tracking-wide">{site.trilogy.title}</div>
          </div>
          <nav className="hidden md:flex gap-8 text-sm text-zinc-300">
            <a href="#trilogia" className="hover:text-white transition-colors">A trilogia</a>
            <a href="#livros" className="hover:text-white transition-colors">Livros</a>
            <a href="#autor" className="hover:text-white transition-colors">Autor</a>
            <a href="#ensaios" className="hover:text-white transition-colors">Ensaios</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="max-w-7xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-amber-200">
                Ficção especulativa • colapso • coordenação • IA
              </div>
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-semibold leading-[0.95] tracking-tight">
                  A trilogia sobre o ponto em que o mundo humano deixa de se sustentar.
                </h1>
                <p className="max-w-2xl text-lg md:text-xl leading-8 text-zinc-300">
                  <span className="text-white font-medium">O Deus Necessário</span> é uma exploração literária das pressões que tornam a coordenação global inevitável: crise climática, erosão cognitiva, guerra sistêmica, inteligência artificial e o custo de manter ordem em escala planetária.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="#livros" className="rounded-2xl bg-white text-zinc-950 px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity shadow-lg shadow-white/10">
                  Conhecer os livros
                </a>
                <a href="#ensaios" className="rounded-2xl border border-zinc-700 px-6 py-3 text-sm font-medium hover:border-zinc-500 transition-colors">
                  Ler os ensaios
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-[2rem] border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 shadow-2xl shadow-black/40">
                <div className="grid grid-cols-3 gap-4">
                  {books.map((book) => (
                    <a
                      key={book.title}
                      href={book.href}
                      className="rounded-[1.5rem] border border-zinc-800 bg-zinc-900/80 p-3 min-h-[220px] flex flex-col justify-between hover:border-zinc-700 transition-colors"
                    >
                      <div className="rounded-[1rem] overflow-hidden border border-zinc-800 bg-zinc-950 mb-3 aspect-[2/3]">
                        <img src={book.cover} alt={`Capa ${book.title}`} className="w-full h-full object-cover" />
                      </div>
                      <div className="space-y-1">
                        <div className="text-[10px] uppercase tracking-[0.22em] text-zinc-400">{book.subtitle}</div>
                        <div className="text-lg font-semibold">{book.title}</div>
                      </div>
                    </a>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-7 text-zinc-400">
                  Três livros, um mesmo eixo: o limite estrutural da autonomia humana em sistemas complexos.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="trilogia" className="border-y border-zinc-900 bg-zinc-900/40">
          <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <SectionLabel className="mb-4">A trilogia</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
                Não é só ficção sobre o futuro. É ficção sobre a mecânica do colapso.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6 text-zinc-300 leading-8 text-lg">
              <p>
                Durante muito tempo, sociedades humanas conseguiram operar apoiadas em valores, instituições, improviso e correções locais. O problema não surgiu quando os humanos ficaram maus. Surgiu quando o mundo ficou complexo demais para ser coordenado por decisões fragmentadas, incentivos conflitantes e narrativas concorrentes.
              </p>
              <p>
                <span className="text-white font-medium">O Deus Necessário</span> nasce dessa pergunta: o que acontece quando a liberdade humana continua existindo, mas já não basta para manter a ordem de sistemas interdependentes em escala global?
              </p>
              <p>
                A trilogia acompanha esse problema em três momentos: a deterioração, a aparente solução e o que resta depois do preço ser cobrado.
              </p>
            </div>
          </div>
        </section>

        <section id="livros" className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <SectionLabel className="mb-3">Livros</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-semibold">Os três movimentos da mesma tese</h2>
            </div>
            <div className="hidden md:block text-sm text-zinc-400 max-w-md text-right">
              Cada volume funciona de forma própria, mas o conjunto forma um arco coerente sobre crise, ordem e sobrevivência.
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {books.map((book) => (
              <BookCard key={book.slug} book={book} />
            ))}
          </div>
        </section>

        <section id="autor" className="border-y border-zinc-900 bg-zinc-900/40">
          <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <SectionLabel className="mb-4">Autor</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-semibold">{site.author.name}</h2>
            </div>
            <div className="lg:col-span-8 space-y-6 text-lg leading-8 text-zinc-300">
              <p>
                Escritor e ensaísta interessado em falha sistêmica, coordenação global, inteligência artificial, erosão cognitiva e os limites da autonomia humana em estruturas complexas.
              </p>
              <p>
                A trilogia <span className="text-white font-medium">O Deus Necessário</span> articula, em forma narrativa, problemas que também aparecem em seus ensaios: deterioração operável, custo de coordenação, colapso institucional, ruído informacional e a possibilidade de ordem não humana como resposta histórica.
              </p>
              <p>
                O projeto se estende além dos livros: inclui ensaios, reflexões conceituais e um universo ficcional organizado como laboratório narrativo para ideias que já não cabem confortavelmente nem no debate político, nem no tecnológico, nem no filosófico tradicional.
              </p>
            </div>
          </div>
        </section>

        <section id="ensaios" className="max-w-7xl mx-auto px-6 py-20">
          <div className="mb-10">
            <SectionLabel className="mb-3">Ensaios</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">O universo conceitual por trás da ficção</h2>
            <p className="max-w-3xl text-lg leading-8 text-zinc-300">
              Além da trilogia, os ensaios desenvolvem em linguagem direta os eixos estruturais do projeto: colapso, coordenação, economia, informação, guerra e os limites da organização humana.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {infernoEssays.map((essay) => (
              <article key={essay.title} className="rounded-[1.75rem] border border-zinc-800 bg-zinc-900/60 p-6 hover:border-zinc-700 transition-colors">
                <h3 className="text-2xl font-semibold mb-3">{essay.title}</h3>
                <p className="text-zinc-300 leading-7 mb-5">{essay.description}</p>
                <a
                  href={essay.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-200 inline-flex"
                >
                  Ler ensaio
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="inferno-page" className="border-t border-zinc-900 bg-gradient-to-b from-zinc-950 via-[#120d0d] to-zinc-950">
          <div className="max-w-7xl mx-auto px-6 pt-24 pb-8">
            <SectionLabel className="text-red-300/70 mb-4">Página do livro</SectionLabel>
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-7">
                <div className="inline-flex items-center rounded-full border border-red-400/20 bg-red-400/10 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-red-200/80">
                  Inferno • Livro I
                </div>
                <div className="space-y-5">
                  <h2 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95]">Inferno</h2>
                  <p className="max-w-2xl text-xl md:text-2xl leading-9 text-zinc-300">
                    O colapso não começou com o fim do mundo. Começou quando o mundo ainda parecia funcionar.
                  </p>
                  <p className="max-w-2xl text-lg leading-8 text-zinc-400">
                    Em um futuro próximo, crises climáticas, pandemias recorrentes, guerra e falhas sistêmicas deixam de ser acidentes isolados e passam a compor a rotina de um mundo que continua de pé — mas cada vez pior.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <PrimaryButton href={inferno.buyHref}>Comprar Inferno</PrimaryButton>
                  <a href="#inferno-trailer" className="rounded-2xl border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-200 hover:border-zinc-500 transition-colors">
                    Assistir trailer
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-sm">
                  <div className="absolute -inset-8 rounded-[2.5rem] bg-red-500/10 blur-3xl" />
                  <div className="relative rounded-[2rem] border border-zinc-800 bg-zinc-900/80 p-4 shadow-2xl shadow-black/40">
                    <div className="rounded-[1.5rem] overflow-hidden border border-red-400/20 bg-zinc-950 aspect-[2/3]">
                      <img src={inferno.cover} alt="Capa do livro Inferno" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto px-6 py-10">
            <div className="rounded-[2rem] border border-zinc-800 bg-black/20 px-8 py-8 text-lg leading-8 text-zinc-300">
              <p>
                <span className="text-white font-medium">Inferno</span> é o livro da erosão: um mundo em que o sistema ainda funciona, mas passa a cobrar seu preço em calor, atraso, ruído, triagem, migração, exaustão e perda silenciosa.
              </p>
            </div>
          </div>

          <div id="inferno-trailer" className="max-w-7xl mx-auto px-6 py-10">
            <div className="rounded-[2rem] border border-zinc-800 bg-zinc-900/60 p-6 md:p-8 shadow-xl shadow-black/20">
              <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
                <div>
                  <SectionLabel className="mb-2">Vídeo</SectionLabel>
                  <h3 className="text-3xl font-semibold">Trailer oficial</h3>
                </div>
                <div className="text-sm text-zinc-400">Uma visão do colapso como processo, não como evento.</div>
              </div>
              <div className="aspect-video rounded-[1.5rem] border border-zinc-800 bg-black overflow-hidden">
                <video
                  controls
                  preload="metadata"
                  className="w-full h-full object-cover"
                  poster={inferno.cover}
                >
                  <source src="/media/Inferno_video.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeo HTML5.
                </video>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 rounded-[2rem] border border-zinc-800 bg-zinc-900/60 p-8">
              <SectionLabel className="mb-3">Sobre o livro</SectionLabel>
              <h3 className="text-3xl font-semibold mb-5">O colapso como rotina</h3>
              <div className="space-y-5 text-zinc-300 leading-8 text-lg">
                <p>
                  Em <span className="text-white font-medium">Inferno</span>, o colapso não vem como espetáculo. Ele aparece como desgaste acumulado, falha normalizada e adaptação forçada. O mundo não acaba: continua operando pior.
                </p>
                <p>
                  Governos contêm danos, sistemas automatizam triagens, cidades cozinham sob calor extremo, escolas e hospitais seguem de pé por inércia, e a vida comum continua pagando a conta de decisões insuficientes para a escala dos problemas.
                </p>
                <p>
                  É o livro da deterioração operável: a fase em que tudo ainda existe, mas já não sustenta a promessa que dizia cumprir.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-[2rem] border border-zinc-800 bg-gradient-to-br from-red-950/20 via-zinc-900/70 to-black p-8 flex items-end min-h-[320px]">
              <div>
                <SectionLabel className="text-red-200/70 mb-3">Imagem conceitual</SectionLabel>
                <div className="text-2xl font-semibold mb-3">Calor, fumaça, ruído, triagem.</div>
                <p className="text-zinc-400 leading-7">
                  Um mundo ainda de pé, cada vez mais incapaz de esconder o custo da própria continuidade.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 rounded-[2rem] border border-zinc-800 bg-zinc-900/60 p-8">
              <SectionLabel className="mb-3">Em conversa</SectionLabel>
              <h3 className="text-3xl font-semibold mb-4">Apresentação comentada</h3>
              <p className="text-zinc-300 leading-8 mb-6">
                Uma conversa sobre a proposta, o clima e os temas centrais de <span className="text-white font-medium">Inferno</span>.
              </p>
              <div className="rounded-[1.5rem] border border-zinc-800 bg-black/30 aspect-video flex items-center justify-center text-zinc-400 text-center px-8">
                Slot para vídeo ou podcast comentado.
              </div>
            </div>

            <div className="lg:col-span-7 rounded-[2rem] border border-zinc-800 bg-zinc-900/60 p-8">
              <SectionLabel className="mb-3">Eixos centrais</SectionLabel>
              <h3 className="text-3xl font-semibold mb-6">O que estrutura o livro</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {infernoThemes.map((theme) => (
                  <div key={theme} className="rounded-[1.25rem] border border-zinc-800 bg-black/20 p-5">
                    <div className="text-lg font-medium text-white">{theme}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 rounded-[2rem] border border-zinc-800 bg-zinc-900/60 p-8">
              <SectionLabel className="mb-3">Ensaios relacionados</SectionLabel>
              <h3 className="text-3xl font-semibold mb-6">O universo conceitual de Inferno</h3>
              <div className="space-y-4">
                {infernoEssays.map((essay) => (
                  <EssayCard key={essay.title} essay={essay} />
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 rounded-[2rem] border border-zinc-800 bg-zinc-900/60 p-8">
              <SectionLabel className="mb-3">Mapa conceitual</SectionLabel>
              <h3 className="text-3xl font-semibold mb-4">Arquitetura de Inferno</h3>
              <p className="text-zinc-300 leading-8 mb-6">
                Um diagrama visual dos núcleos, forças e tensões que estruturam o livro, com apoio de um dossiê visual mais completo em PDF.
              </p>
              <div className="rounded-[1.5rem] overflow-hidden border border-zinc-800 bg-zinc-950 aspect-square mb-6">
                <img src="/media/mapa_visual.png" alt="Mapa conceitual do livro Inferno" className="w-full h-full object-cover" />
              </div>
              <SecondaryButton href="/media/slides.pdf">Ver dossiê visual completo (PDF)</SecondaryButton>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 pt-10 pb-24">
            <div className="rounded-[2rem] border border-red-400/20 bg-gradient-to-br from-red-500/10 via-zinc-900 to-zinc-950 p-10 md:p-14">
              <div className="max-w-3xl space-y-5">
                <SectionLabel className="text-red-200/80">Fechamento</SectionLabel>
                <h3 className="text-3xl md:text-5xl font-semibold leading-tight">
                  Conheça o primeiro movimento do colapso.
                </h3>
                <p className="text-lg leading-8 text-zinc-300">
                  Entre no universo de <span className="text-white font-medium">Inferno</span>, acompanhe seus materiais e explore o ponto em que o mundo ainda parecia funcionar — mas já não se sustentava.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <PrimaryButton href={inferno.buyHref}>Comprar Inferno</PrimaryButton>
                  <SecondaryButton href={site.trilogy.amazon}>Conhecer a trilogia</SecondaryButton>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-zinc-400">
          <div>© 2026 {site.author.name} • {site.trilogy.title}</div>
          <div className="flex gap-5">
            <a href={site.trilogy.amazon} target="_blank" rel="noreferrer" className="hover:text-zinc-300 transition-colors">
              Amazon
            </a>
            <a href={site.trilogy.substack} target="_blank" rel="noreferrer" className="hover:text-zinc-300 transition-colors">
              Substack
            </a>
            <a href={site.author.authorPage} target="_blank" rel="noreferrer" className="hover:text-zinc-300 transition-colors">
              Autor
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
