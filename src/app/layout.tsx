import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thiago Vasconcelos | Desenvolvedor Fullstack",
  description: "Desenvolvedor web e mobile fullstack",
  openGraph: {
    title: "Thiago Vasconcelos | Desenvolvedor Fullstack",
    description: "Desenvolvedor web e mobile fullstack",
    url: "https://thiagovasconcelos.dev.br/",
    siteName: "Thiago Vasconcelos Desenvolvedor Fullstack",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
