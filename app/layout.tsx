import type { Metadata } from "next";
import { Lora, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Analytics } from '@vercel/analytics/next';

/*
  next/font loads fonts at build time — zero layout shift, no render blocking,
  and no external request to Google's CDN at runtime.
  The CSS variables are injected on <html> and referenced in globals.css.
*/
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "La Tension Électrique",
  description: "Cours interactif de Physique — Classe de 3ème",
  openGraph: {
    title: "La Tension Électrique",
    description: "Cours interactif de Physique — Classe de 3ème",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`h-full ${lora.variable} ${outfit.variable}`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
