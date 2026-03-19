import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "../components/site-chrome";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

export const metadata = {
  metadataBase: new URL("https://odeusnecessario.netlify.app"),
  title: {
    default: "O Deus Necessário",
    template: "%s | O Deus Necessário",
  },
  description:
    "Site oficial da trilogia O Deus Necessário, de Sergio Pioli: ficção especulativa sobre colapso, coordenação, ordem e sobrevivência.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${display.variable} ${body.variable} bg-canvas font-body text-stone-100 antialiased`}>
        <div className="min-h-screen bg-page-noise">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
