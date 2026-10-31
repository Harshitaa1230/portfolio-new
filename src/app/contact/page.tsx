import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "Contact — Palmer® Minimal Portfolio & Agency",
  description:
    "Direct inquiry and collaboration with Akihiko. Studio based in Tokyo, Japan.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col pt-24 md:pt-28">
        <Contact standalone />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
