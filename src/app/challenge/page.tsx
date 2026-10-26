import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Challenge — Coming Soon",
  description: "The Challenge page is coming soon.",
};

export default function ChallengePage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col pt-[var(--header-height)]">
        <ComingSoon
          label="CHALLENGE"
          description="A new space for design challenges and prompts. I'm building it now — check back soon."
        />
      </main>
      <Footer />
    </>
  );
}
