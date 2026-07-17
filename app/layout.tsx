import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsFloat from "@/components/layout/WhatsFloat";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz"],
  style: ["normal", "italic"],
  weight: "variable",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Clínica Alento — Cuidar bem começa em responder rápido",
    template: "%s · Clínica Alento",
  },
  description:
    "Clínica multiespecialidade em Goiânia. Agende pelo WhatsApp em menos de um minuto, a qualquer hora. 14 especialidades, resposta em até 40 segundos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${fraunces.variable} ${inter.variable} ${plexMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsFloat />
      </body>
    </html>
  );
}
