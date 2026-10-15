import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Latest from "@/components/Latest";

export const metadata: Metadata = {
  title: "Contact — TITARVL",
  description: "Get in touch with TITARVL — design, brand identity and web.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col pt-24 md:pt-28">
        <Contact />
        <Latest />
      </main>
      <Footer />
    </>
  );
}
