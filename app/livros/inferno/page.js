import { InfernoPage } from "../../../components/book-page";
import { getBook } from "../../../data/site";

const book = getBook("inferno");

export const metadata = {
  title: "Inferno",
  description:
    "Página do livro Inferno, Livro I de O Deus Necessário: colapso sistêmico, deterioração operável e erosão institucional.",
};

export default function InfernoRoute() {
  return <InfernoPage book={book} />;
}
