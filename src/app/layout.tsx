import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { site } from "@/data/site";
import "./globals.css";

const montserrat = localFont({
  src: "./fonts/Montserrat.woff2",
  variable: "--font-montserrat",
  weight: "100 900",
  display: "swap",
});

const unbounded = localFont({
  src: "./fonts/Unbounded.woff2",
  variable: "--font-unbounded",
  weight: "200 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} · ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description:
    "Full stack developer from Bhopal building MERN apps with real auth, payments and data that stays correct.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${montserrat.variable} ${unbounded.variable}`}
    >
      <body className="min-h-dvh bg-bg font-sans text-[0.938rem] text-body antialiased lg:text-base">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:font-semibold focus:text-bg"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="overflow-x-clip">
          {children}
        </main>
        <Footer />
        <CustomCursor />
      </body>
    </html>
  );
}
