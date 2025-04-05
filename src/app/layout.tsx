import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header/Header";
import { BackgroundImageProvider } from "@/context/BackgroundImageContext";
import TopBackgroundLayer from "@/components/layout/TopBackgroundLayer";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/layout/Footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Midnite Marketing Agency",
  description: "Best Marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased">
        <BackgroundImageProvider>
          <TopBackgroundLayer />
          <Header />
          <main>{children}</main>
          <Footer />
        </BackgroundImageProvider>
      </body>
    </html>
  );
}
