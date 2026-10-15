import type { Metadata } from "next";
import { Inter_Tight, Geist_Mono } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TITARVL — Creative Direction",
  description:
    "A digital practice working at the intersection of brand identity and web.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="bg-background text-foreground font-sans flex min-h-full flex-col">
        <Background />
        {children}
      </body>
    </html>
  );
}
