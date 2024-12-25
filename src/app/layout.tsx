import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import { Header } from "@/components/header/Header";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taken Coders",
  description: "A melhor plataforma de cursos GRATUITOS de todos os tempos.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-Br">
      <body className={nunito.className}>
        <Header />

        {children}
        </body>
    </html>
  );
}
