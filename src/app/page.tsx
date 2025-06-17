import Image from "next/image";
import Header from "@/components/home/Header";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#f5f7fa] to-[#e0e6ed] dark:from-[#0a0a0a] dark:to-[#131313]">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </div>
  );
}
