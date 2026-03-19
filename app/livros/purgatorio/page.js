import { BaseBookPage } from "../../../components/book-page";
import { getBook } from "../../../data/site";

const book = getBook("purgatorio");

export const metadata = {
  title: "Purgatório",
  description:
    "Página-base do livro Purgatório, Livro III de O Deus Necessário, com capa real, introdução e espaço para futura mídia.",
};

export default function PurgatorioRoute() {
  return <BaseBookPage book={book} />;
}
