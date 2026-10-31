import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutTicker from "@/components/AboutTicker";
import FeaturedWorks from "@/components/FeaturedWorks";
import Philosophy from "@/components/Philosophy";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Articles from "@/components/Articles";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <AboutTicker />
        <FeaturedWorks />
        <Philosophy />
        <Experience />
        <Testimonials />
        <Articles />
      </main>
      <Footer />
    </>
  );
}
