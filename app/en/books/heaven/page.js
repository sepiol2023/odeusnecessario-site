import { EnglishBookPage } from "../../../../components/en-book-page";
import { getEnBook } from "../../../../data/en-site";

const book = getEnBook("heaven");

export const metadata = {
  title: "Heaven | The Necessary God",
  description:
    "Heaven, Book II of The Necessary God: algorithmic coordination, administered stability and systemic dependence.",
};

export default function HeavenEnglishRoute() {
  return <EnglishBookPage book={book} />;
}
