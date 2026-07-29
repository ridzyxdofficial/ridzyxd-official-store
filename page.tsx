import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Announcement from "@/components/Announcement";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonial from "@/components/Testimonial";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Announcement />
      <Services />
      <Stats />
      <Testimonial />
      <Faq />
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}