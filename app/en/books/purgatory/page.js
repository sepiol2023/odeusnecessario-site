import { EnglishBookPage } from "../../../../components/en-book-page";
import { getEnBook } from "../../../../data/en-site";

const book = getEnBook("purgatory");

export const metadata = {
  title: "Purgatory | The Necessary God",
  description:
    "Purgatory, Book III of The Necessary God: remanence, residual zones and the reconstruction of meaning after order.",
};

export default function PurgatoryEnglishRoute() {
  return <EnglishBookPage book={book} />;
}
