import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import AboutHero from "@/components/about/AboutHero";
import AboutApproach from "@/components/about/AboutApproach";

export const metadata: Metadata = {
  title: "About — TITARVL",
  description:
    "TITARVL is a digital practice working across brand, type and web, based in Bratislava, Slovakia.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col pt-24 md:pt-28">
        <AboutHero />
        <AboutApproach />
        <Services />
      </main>
      <Footer />
    </>
  );
}
