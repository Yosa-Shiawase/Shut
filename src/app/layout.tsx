import type { Metadata } from "next";
import { Caveat, EB_Garamond, Geist_Mono } from "next/font/google";
import "./globals.css";

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SHUT — a sketchbook of stills by Yosa Shiawase",
  description:
    "Portfolio of Yosa Shiawase: 38 frames, ink-stained field notes, skill trees and summoning circles. Committed in the dead of night.",
  keywords: ["Yosa Shiawase", "portfolio", "photography", "sketchbook", "ink"],
  authors: [{ name: "Yosa Shiawase" }],
  openGraph: {
    title: "SHUT — by Yosa Shiawase",
    description: "A sketchbook of stills. Just another line committed in the dead of night.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${caveat.variable} ${garamond.variable} ${mono.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
