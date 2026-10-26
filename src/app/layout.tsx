import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Background from "@/components/Background";

const interDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/InterDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/InterDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/InterDisplay-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/InterDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-inter-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harshita Upadhyay | Product Designer | UI/UX Designer",
  description:
    "A digital practice working at the intersection of brand identity and web.",
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#000000",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${interDisplay.variable} h-full antialiased`}
    >
      <body className="bg-background text-foreground font-sans flex min-h-full flex-col">
        <Background />
        <div className="container-page flex flex-1 flex-col">{children}</div>
      </body>
    </html>
  );
}
