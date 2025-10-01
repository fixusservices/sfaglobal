import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Play } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Premium animated background */}
      <div className="absolute inset-0">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        
        {/* Animated particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-particle" />
        <div className="absolute top-40 right-40 w-3 h-3 bg-accent rounded-full animate-particle animation-delay-2000" />
        <div className="absolute bottom-30 left-1/3 w-2 h-2 bg-primary/60 rounded-full animate-particle animation-delay-4000" />
        
        {/* Glowing orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-glow-pulse animation-delay-2000" />
        
        {/* Digital grid effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,119,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,119,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="container relative z-10 px-4 mx-auto text-center">
        <div className={`max-w-5xl mx-auto transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Premium badge with glow */}
          <div className="inline-flex items-center px-5 py-2.5 mb-8 text-sm font-semibold bg-gradient-to-r from-primary/10 to-accent/10 text-primary rounded-full backdrop-blur-sm border border-primary/20 shadow-glow">
            <span className="mr-2 animate-pulse">⚡</span>
            Leading IT Solutions Provider
          </div>

          {/* Main headline with gradient animation */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-glow bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
            Transform Your Business with Cutting-Edge IT Solutions
          </h1>

          {/* Enhanced subheadline */}
          <p className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-3xl mx-auto leading-relaxed">
            We are a premier IT consulting and software development company based in Coimbatore, serving clients globally with innovative technology solutions.
          </p>

          {/* Premium CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
            <Button size="lg" className="group bg-gradient-primary hover:shadow-glow transition-all duration-300 text-white font-semibold px-8 py-6 text-lg">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="group border-2 border-primary/50 hover:border-primary hover:bg-primary/10 backdrop-blur-sm font-semibold px-8 py-6 text-lg">
              <Play className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Watch Demo
            </Button>
          </div>

          {/* Enhanced Stats with count animation */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className={`transition-all duration-700 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">20+</div>
              <div className="text-muted-foreground font-medium">Projects Delivered</div>
            </div>
            <div className={`transition-all duration-700 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">30+</div>
              <div className="text-muted-foreground font-medium">Happy Clients</div>
            </div>
            <div className={`transition-all duration-700 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">2+</div>
              <div className="text-muted-foreground font-medium">Years Experience</div>
            </div>
            <div className={`transition-all duration-700 delay-900 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-muted-foreground font-medium">Support Available</div>
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
            <ChevronDown className="h-6 w-6 text-primary animate-bounce relative z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;