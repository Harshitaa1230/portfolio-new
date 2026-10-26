import type { Metadata } from "next";
import Script from "next/script";
import { Inter_Tight, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Background from "@/components/Background";

const matrixType = localFont({
  src: "../../public/matrixtype.bold.ttf",
  weight: "700",
  style: "normal",
  variable: "--font-matrix-type",
  display: "swap",
});

const mileast = localFont({
  src: "../../public/mileast.regular.otf",
  variable: "--font-mileast-type",
  display: "swap",
});

const nevera = localFont({
  src: "../../public/Nevera-Regular.otf",
  variable: "--font-nevera-type",
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harshita Upadhyay | Product Designer | UI/UX Designer",
  description:
    "A digital practice working at the intersection of brand identity and web.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${interTight.variable} ${geistMono.variable} ${matrixType.variable} ${nevera.variable} ${mileast.variable} h-full antialiased`}
    >
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem("theme");var d=t==="dark"||(t===null&&window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.toggle("dark",d);}catch(e){}})();`}
        </Script>
      </head>
      <body className="bg-background text-foreground font-sans flex min-h-full flex-col">
        <Background />
        {children}
      </body>
    </html>
  );
}
