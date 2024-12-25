import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Plataforma de curso",
  description: "A melhor plataforma de cursos de todos os tempos.",
};

interface IRootLayout extends Readonly< {children: React.ReactNode } > { }

export default function RootLayout ({ children }: IRootLayout) {
  return (
    <html lang="pt-Br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}