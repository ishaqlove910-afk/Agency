import Header from "@/components/Header";
import SeoExpert from "@/components/SeoExpert";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ParticleCanvas from "@/components/ParticleCanvas";

export default function Experts() {
  return (
    <div className="min-h-screen bg-background relative">
      <ParticleCanvas />
      <Header />
      <SeoExpert />
      <Footer />
      <ScrollToTop />
    </div>
  );
}