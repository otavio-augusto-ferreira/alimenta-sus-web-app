import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import { Layout } from "main/src/components/ui/Layout";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-montserrat",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Alimenta SUS",
  description: "Aplicacao de orientacao alimentar para o SUS",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${montserrat.variable} ${openSans.variable} font-body bg-brand-neutral text-occa-brown`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
