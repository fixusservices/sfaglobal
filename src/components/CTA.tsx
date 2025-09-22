import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-accent relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          
          {/* Description */}
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how SFA Global can help you achieve your goals with cutting-edge 
            technology solutions tailored to your needs
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="group bg-white text-primary hover:bg-white/90">
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="lg">
              Schedule a Consultation
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80">
            <a href="tel:+919876543210" className="hover:text-white transition-colors">
              📞 +91 98765 43210
            </a>
            <span className="hidden sm:block">•</span>
            <a href="mailto:info@sfaglobal.com" className="hover:text-white transition-colors">
              ✉️ info@sfaglobal.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;