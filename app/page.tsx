import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Features from "@/components/Features";
import Showcase from "@/components/Showcase";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import UploadModal from "@/components/UploadModal";
import { UploadModalProvider } from "@/lib/upload-modal";

export default function LandingPage() {
  return (
    <UploadModalProvider>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <Showcase />
        <CTA />
      </main>
      <Footer />
      <UploadModal />
    </UploadModalProvider>
  );
}
