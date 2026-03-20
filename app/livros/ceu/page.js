import { CeuPage } from "../../../components/book-page";
import { getBook } from "../../../data/site";

const book = getBook("ceu");

export const metadata = {
  title: "Céu",
  description:
    "Página do livro Céu, Livro II de O Deus Necessário, com trailer, apresentação comentada, mapa visual e materiais complementares.",
};

export default function CeuRoute() {
  return <CeuPage book={book} />;
}
