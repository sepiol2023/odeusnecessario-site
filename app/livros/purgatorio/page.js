import { PurgatorioPage } from "../../../components/book-page";
import { getBook } from "../../../data/site";

const book = getBook("purgatorio");

export const metadata = {
  title: "Purgatório",
  description:
    "Página do livro Purgatório, Livro III de O Deus Necessário, com trailer, apresentação comentada, mapa visual e materiais complementares.",
};

export default function PurgatorioRoute() {
  return <PurgatorioPage book={book} />;
}
