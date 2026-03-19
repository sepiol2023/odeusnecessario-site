import { BaseBookPage } from "../../../components/book-page";
import { getBook } from "../../../data/site";

const book = getBook("ceu");

export const metadata = {
  title: "Céu",
  description:
    "Página-base do livro Céu, Livro II de O Deus Necessário, com capa real, introdução e espaço para futura mídia.",
};

export default function CeuRoute() {
  return <BaseBookPage book={book} />;
}
