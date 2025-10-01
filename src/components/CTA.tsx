import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("cta");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="cta" className="py-24 bg-background relative overflow-hidden">
      {/* Luxury animated background */}
      <div className="absolute inset-0">
        {/* Moving gradient background */}
        <div className="absolute inset-0 bg-gradient-glow opacity-20 animate-gradient-shift bg-[length:200%_200%]" />
        
        {/* Floating particles */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-glow animation-delay-2000" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,119,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,119,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Luxury Heading with animation */}
          <h2 className={`font-montserrat font-bold text-5xl md:text-6xl mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="bg-gradient-glow bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
              Ready to Transform Your Business?
            </span>
          </h2>
          
          {/* Premium Description */}
          <p className={`text-xl md:text-2xl text-foreground/80 mb-10 leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Let's discuss how SFA Global can help you achieve your goals with cutting-edge 
            technology solutions tailored to your needs
          </p>

          {/* Luxury CTA Buttons with dynamic borders */}
          <div className={`flex flex-col sm:flex-row gap-5 justify-center transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button 
              size="lg" 
              className="group relative overflow-hidden bg-gradient-primary hover:shadow-glow transition-all duration-300 text-white font-semibold px-10 py-7 text-lg"
            >
              <span className="relative z-10">Get Started Today</span>
              <ArrowRight className="relative z-10 ml-2 h-5 w-5 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110" />
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="group relative border-2 border-primary/50 hover:border-primary hover:bg-primary/10 backdrop-blur-sm font-semibold px-10 py-7 text-lg overflow-hidden"
            >
              <Calendar className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>Schedule a Consultation</span>
              {/* Ripple effect on hover */}
              <div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-shimmer" />
              </div>
            </Button>
          </div>

          {/* Luxury Contact Info with glow effect */}
          <div className={`mt-14 flex flex-col sm:flex-row items-center justify-center gap-8 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a 
              href="tel:+919629463964" 
              className="group flex items-center gap-2 text-foreground/70 hover:text-primary transition-all duration-300"
            >
              <span className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                📞
              </span>
              <span className="font-medium">+91 96294 63964</span>
            </a>
            
            <div className="hidden sm:block w-1 h-1 bg-primary rounded-full" />
            
            <a 
              href="mailto:info@sfaglobal.com" 
              className="group flex items-center gap-2 text-foreground/70 hover:text-primary transition-all duration-300"
            >
              <span className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                ✉️
              </span>
              <span className="font-medium">info@sfaglobal.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;