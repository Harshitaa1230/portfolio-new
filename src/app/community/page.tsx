import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Community — Coming Soon",
  description: "The Community page is coming soon.",
};

export default function CommunityPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col pt-[var(--header-height)]">
        <ComingSoon
          label="COMMUNITY"
          description="A place for the design community to connect and share work. I'm building it now — check back soon."
        />
      </main>
      <Footer />
    </>
  );
}
