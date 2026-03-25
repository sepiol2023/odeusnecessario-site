import { EnglishBookPage } from "../../../../components/en-book-page";
import { getEnBook } from "../../../../data/en-site";

const book = getEnBook("inferno");

export const metadata = {
  title: "Inferno | The Necessary God",
  description:
    "Inferno, Book I of The Necessary God: systemic collapse, operable deterioration and institutional erosion.",
};

export default function InfernoEnglishRoute() {
  return <EnglishBookPage book={book} />;
}
