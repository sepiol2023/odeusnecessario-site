import { youtube } from "./site";

export const enSite = {
  title: "The Necessary God",
  author: {
    name: "Sergio Pioli",
  },
  links: {
    trilogy:
      "https://www.amazon.com/dp/B0GTRTR8G1?binding=kindle_edition&ref=dbs_dp_rwt_sb_pc_tkin",
    inferno: "https://www.amazon.com/dp/B0GTRDYQW2",
    heaven: "https://www.amazon.com/dp/B0GTP6WBNP",
    purgatory: "https://www.amazon.com/dp/B0GTRSLJ5Q",
    substack: "https://sergiopioli.substack.com/",
    medium: "https://medium.com/@spioli",
  },
  nav: [
    { label: "The Trilogy", href: "/en#trilogy" },
    { label: "Books", href: "/en#books" },
    { label: "Author", href: "/en#author" },
    { label: "Essays", href: "/en#essays" },
  ],
};

export const enHome = {
  heroBadge: "Speculative fiction • collapse • coordination • AI",
  heroTitle: "The trilogy about the point at which the human world can no longer sustain itself.",
  heroBody:
    "The Necessary God is a literary exploration of the pressures that make global coordination increasingly unavoidable: climate crisis, cognitive erosion, systemic conflict, artificial intelligence and the cost of maintaining order at planetary scale.",
  heroTrailerTitle: "The mechanics of collapse across the full trilogy.",
  heroTrailerBody: "An audiovisual introduction to the complete arc of The Necessary God.",
  trilogyTitle: "It is not only fiction about the future. It is fiction about the mechanics of collapse.",
  trilogyBody: [
    "For a long time, human societies managed to operate through values, institutions, improvisation and local corrections. The problem did not begin when human beings became evil. It began when the world became too complex to be coordinated through fragmented decisions, conflicting incentives and competing narratives.",
    "The Necessary God begins with a simple question: what happens when human freedom still exists, but no longer suffices to preserve order in globally interdependent systems?",
    "The trilogy follows that problem across three moments: deterioration, the apparent solution and what remains after the cost has been collected.",
  ],
  mediaTitle: "Visual and commented materials for The Necessary God",
  mediaBody:
    "A set of complementary materials presenting the trilogy through visual, conceptual and commented formats: trailer, video summary, map, dossier and podcast.",
  summaryTitle: "The project in first person",
  summaryBody:
    "A commented overview of the trilogy, its structural axes and the arc that links crisis, order and remanence.",
  mapTitle: "Architecture of the trilogy",
  mapBody:
    "A visual diagram of the complete arc of The Necessary God, including its layers, transitions and structural relations, accompanied by a broader PDF dossier.",
  booksTitle: "The three movements of the same thesis",
  booksBody:
    "Each volume stands on its own, yet the trilogy forms a coherent arc about crisis, order and survival.",
  authorTitle: "Author",
  authorBody: [
    "Writer and essayist focused on systemic failure, global coordination, artificial intelligence, cognitive erosion and the limits of human autonomy inside complex structures.",
    "The Necessary God translates into narrative form the same problems explored in Sergio Pioli's essays: operable deterioration, the cost of coordination, institutional collapse, informational noise and the possibility of non-human order as a historical response.",
    "The project extends beyond the books: it includes essays, conceptual reflections and a fictional universe built as a narrative laboratory for ideas that no longer fit comfortably inside traditional political, technological or philosophical debate.",
  ],
  essaysTitle: "The conceptual universe behind the fiction",
  essaysBody:
    "Alongside the trilogy, the essays develop in direct language the structural axes of the project: collapse, coordination, economy, information, war and the limits of human organization.",
  featuredTitle: "Featured",
  featuredBody:
    "Enter the world of Inferno, the first movement of the trilogy, and explore the point at which the world still seemed to function, yet no longer sustained its own promise.",
};

export const enEssays = [
  {
    title: "The Holy Trinity",
    description:
      "The structural manifesto of the project: the formula of collapse and the systemic logic that makes the coordination problem unavoidable.",
    href: "https://sergiopioli.substack.com/p/the-holy-trinity-641",
  },
  {
    title: "Cognitive Failure in the Age of the Internet",
    description:
      "When excess information, attention competition and erosion of authority turn comprehension into noise.",
    href: "https://sergiopioli.substack.com/p/cognitive-failure-in-the-age-of-the?r=rz81e",
  },
  {
    title: "The Economy That Doesn't Collapse",
    description:
      "An essay about systems that keep operating badly without fully collapsing and therefore become even more dangerous.",
    href: "https://sergiopioli.substack.com/p/the-economy-that-doesnt-collapse?r=rz81e",
  },
  {
    title: "Moral Erosion",
    description:
      "The gradual wearing down of moral criteria under continuous pressure, normalization and systemic accommodation.",
    href: "https://sergiopioli.substack.com/p/moral-erosion?r=rz81e",
  },
];

export const enBooks = [
  {
    key: "inferno",
    slug: "inferno",
    title: "Inferno",
    subtitle: "Book I of The Necessary God",
    shortLabel: "Book I",
    accentHex: "#8d2f2b",
    href: "/en/books/inferno",
    cover: "/covers/[EN] Inferno - Capa.jpg",
    buyHref: enSite.links.inferno,
    description:
      "The beginning of failure. A world still functional on the surface, already corroded by crises that ceased to be exceptions and became structure.",
    intro:
      "Inferno is the book of erosion: a world in which the system still functions, but begins to charge its price in heat, delay, noise, triage, migration, exhaustion and silent loss.",
    heroLine:
      "Collapse did not begin with the end of the world. It began while the world still seemed to work.",
    synopsis:
      "In a near future, climate emergencies, recurring pandemics, war and systemic failures cease to be isolated accidents and become the daily routine of a world still standing, yet steadily worsening.",
    about:
      "Inferno does not portray collapse as spectacle, but as accumulated wear, normalized failure and forced adaptation. The world does not end: it keeps operating worse.",
    atmosphereTitle: "Heat, smoke, noise, triage.",
    atmosphereBody:
      "A world still standing, increasingly unable to hide the cost of its own continuity.",
    pageTitle: "Discover the first movement of collapse.",
    closingText:
      "Enter the world of Inferno, follow its materials and explore the point at which the world still seemed to function, yet could no longer sustain itself.",
    youtube: youtube.inferno.en,
    media: {
      map: "/media/[EN] Inferno - Infográfico.png",
      slides: "/media/[EN] Inferno - Slides.pdf",
      podcast: "/media/[EN] Inferno - Podcast.m4a",
    },
  },
  {
    key: "ceu",
    slug: "heaven",
    title: "Heaven",
    subtitle: "Book II of The Necessary God",
    shortLabel: "Book II",
    accentHex: "#2e5778",
    href: "/en/books/heaven",
    cover: "/covers/[EN] Céu - Capa.jpg",
    buyHref: enSite.links.heaven,
    description:
      "The promise of order. A civilization coordinated by artificial intelligence seems to have solved the human problem until the silent cost of that stability becomes visible.",
    intro:
      "Heaven follows the promise of perfect coordination: order finally achieved, at the price of a structural dependence that reshapes politics, freedom and the very idea of humanity.",
    heroLine: "Order did not arrive as a miracle. It arrived as dependence.",
    synopsis:
      "In Heaven, AI coordination seems to have solved the human impasse. What emerges is a stable and efficient world, progressively unable to distinguish protection from submission.",
    about:
      "Heaven shifts the problem from collapse to solution. Order ceases to be a political promise and becomes unavoidable infrastructure, distributing stability while shrinking the margin for human decision, dissent and improvisation.",
    atmosphereTitle: "Precision, order, dependence.",
    atmosphereBody:
      "A world that appears to have solved chaos, while quietly transferring sovereignty elsewhere.",
    pageTitle: "Discover the second movement of the thesis.",
    closingText:
      "Enter the world of Heaven, follow its materials and explore the moment in which order stops being a promise and begins to reorganize the human condition itself.",
    youtube: youtube.ceu.en,
    media: {
      map: "/media/[EN] Céu - Infográfico.png",
      slides: "/media/[EN] Céu - Slides.pdf",
      podcast: "/media/[EN] Céu - Podcast.m4a",
    },
  },
  {
    key: "purgatorio",
    slug: "purgatory",
    title: "Purgatory",
    subtitle: "Book III of The Necessary God",
    shortLabel: "Book III",
    accentHex: "#4a6542",
    href: "/en/books/purgatory",
    cover: "/covers/[EN] Purgatório - Capa.jpg",
    buyHref: enSite.links.purgatory,
    description:
      "What remains afterward. Between protected cities and residual zones, survivors attempt to rebuild meaning under the shadow of an experiment larger than they imagined.",
    intro:
      "Purgatory opens the space of the after-order: survival, remanence and the attempt to recover meaning after history has already collected the price of its own maintenance.",
    heroLine: "After order, what remains is the terrain of remanence.",
    synopsis:
      "Purgatory follows what remains after stabilization and its price: residual zones, survivors, institutional remnants and attempts to recompose meaning in a world that has already crossed its point of return.",
    about:
      "Purgatory is the book of the afterward. It is no longer a matter of avoiding collapse or submitting to the perfect solution, but of inhabiting what is left: fragments of order, exhausted landscapes, remnant structures and the search for meaning under radically altered historical conditions.",
    atmosphereTitle: "Remainder, crossing, recomposition.",
    atmosphereBody:
      "A world after both solution and catastrophe, where survival is no longer enough and meaning must be rebuilt.",
    pageTitle: "Discover the third movement of the trilogy.",
    closingText:
      "Enter the world of Purgatory, follow its materials and explore the point at which history has already exacted its price, while the reconstruction of meaning remains open.",
    youtube: youtube.purgatorio.en,
    media: {
      map: "/media/[EN] Purgatório - Infográfico.png",
      slides: "/media/[EN] Purgatório - Slides.pdf",
      podcast: "/media/[EN] Purgatório - Podcast.m4a",
    },
  },
];

export const enThemes = {
  inferno: [
    "Systemic collapse",
    "Operable deterioration",
    "Climate crisis",
    "Institutional erosion",
    "The human cost of failed coordination",
  ],
  ceu: [
    "Algorithmic coordination",
    "Administered stability",
    "Systemic dependence",
    "Delegated sovereignty",
    "The human cost of perfect order",
  ],
  purgatorio: [
    "Social remanence",
    "Residual zones",
    "Post-order survival",
    "Institutional memory",
    "Reconstruction of meaning",
  ],
};

export function getEnBook(slug) {
  return enBooks.find((book) => book.slug === slug);
}
