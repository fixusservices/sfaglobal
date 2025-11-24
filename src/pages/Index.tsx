import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Industries from "@/components/Industries";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import TrustedCompanies from "@/components/TrustedCompanies";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import HorizontalScrollLayout, { HorizontalSection } from "@/components/HorizontalScrollLayout";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HorizontalScrollLayout>
        <HorizontalSection allowScroll={false}>
          <Hero />
        </HorizontalSection>
        <HorizontalSection>
          <Services />
        </HorizontalSection>
        <HorizontalSection>
          <WhyChoose />
        </HorizontalSection>
        <HorizontalSection>
          <Industries />
        </HorizontalSection>
        <HorizontalSection>
          <Testimonials />
        </HorizontalSection>
        <HorizontalSection>
          <TrustedCompanies />
        </HorizontalSection>
        <HorizontalSection>
          <Partners />
        </HorizontalSection>
        <HorizontalSection>
          <CTA />
        </HorizontalSection>
        <HorizontalSection>
          <Footer />
        </HorizontalSection>
      </HorizontalScrollLayout>
    </div>
  );
};

export default Index;