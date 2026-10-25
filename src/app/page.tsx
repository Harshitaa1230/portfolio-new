import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Latest from "@/components/Latest";
import WhatIDo from "@/components/WhatIDo";
import Advantage from "@/components/Advantage";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getMockupMedia } from "@/lib/mockups";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Latest mockups={getMockupMedia()} />
        <WhatIDo />
        <Advantage />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
