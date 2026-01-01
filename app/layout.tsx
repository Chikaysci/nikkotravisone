import "./globals.css";
import { Merriweather, Great_Vibes } from "next/font/google";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

const greatVibes = Great_Vibes({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-great-vibes",
});

export const metadata = {
  title: "Nikko & Travis - Wedding Invitation",
  description: "Save the Date - Nikko & Travis Wedding",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${merriweather.className} ${greatVibes.variable} bg-black overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
