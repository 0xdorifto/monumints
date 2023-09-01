import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MonuMint",
  description: "Collectible NFT album for UNESCO world heritage sites.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Navbar />
        <main className="p-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
