import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Tools from "@/components/Tools";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import WhyHireMe from "@/components/WhyHireMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Tools />
        <Education />
        <Achievements />
        <WhyHireMe />
        <Contact />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
