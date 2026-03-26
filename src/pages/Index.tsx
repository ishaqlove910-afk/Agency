import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import TechStack from "@/components/TechStack";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ParticleCanvas from "@/components/ParticleCanvas";

export default function Index() {
  return (
    <div className="min-h-screen bg-background relative">
      <ParticleCanvas />
      <Header />
      <Hero />
      <Services />
      <Stats />
      <TechStack />
      <Portfolio />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
