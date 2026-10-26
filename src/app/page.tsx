import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutTicker from "@/components/AboutTicker";
import FeaturedWorks from "@/components/FeaturedWorks";
import Services from "@/components/Services";
import Philosophy from "@/components/Philosophy";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Awards from "@/components/Awards";
import Pricing from "@/components/Pricing";
import Articles from "@/components/Articles";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <AboutTicker />
        <FeaturedWorks />
        <Services />
        <Philosophy />
        <Experience />
        <Testimonials />
        <Awards />
        <Pricing />
        <Articles />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
