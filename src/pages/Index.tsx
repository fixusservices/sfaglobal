import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Industries from "@/components/Industries";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <WhyChoose />
      <Industries />
      <Partners />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;