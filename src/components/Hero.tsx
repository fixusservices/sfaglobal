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
      {/* Luxury animated background */}
      <div className="absolute inset-0">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        
        {/* Digital data streams */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-20 bg-gradient-to-b from-transparent via-primary/30 to-transparent"
              style={{
                left: `${20 + i * 20}%`,
                animation: `data-stream ${10 + i * 2}s linear infinite`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>
        
        {/* Glowing orbs with luxury effect */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow animation-delay-2000" />
        
        {/* Shimmering digital grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,119,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,119,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] opacity-50" />
      </div>

      <div className="container relative z-10 px-4 mx-auto text-center">
        <div className="max-w-5xl mx-auto">
          {/* Premium badge with luxury glow */}
          <div className={`inline-flex items-center px-6 py-3 mb-10 text-sm font-semibold bg-gradient-to-r from-primary/10 to-accent/10 text-primary rounded-full backdrop-blur-sm border border-primary/20 shadow-glow transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="mr-2 animate-light-flash">⚡</span>
            Leading IT Solutions Provider
          </div>

          {/* Main headline with digital dissolve effect */}
          <h1 className={`text-5xl md:text-7xl font-bold mb-8 transition-all duration-1500 ${isVisible ? 'animate-digital-dissolve' : 'opacity-0'}`}>
            <span className="bg-gradient-glow bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
              Transform Your Business with Cutting-Edge IT Solutions
            </span>
          </h1>

          {/* Luxury subheadline with shimmer */}
          <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              We are a premier IT consulting and software development company based in Coimbatore, serving clients globally with innovative technology solutions.
            </p>
            <div className="absolute inset-0 animate-shimmer pointer-events-none" />
          </div>

          {/* Luxury CTA Buttons with dynamic borders */}
          <div className={`flex flex-col sm:flex-row gap-5 justify-center mb-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button size="lg" className="group relative overflow-hidden bg-gradient-primary hover:shadow-glow transition-all duration-300 text-white font-semibold px-10 py-6 text-lg border-0">
              <span className="relative z-10">Get Started Today</span>
              <ArrowRight className="relative z-10 ml-2 h-5 w-5 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-border-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            <Button size="lg" variant="outline" className="group luxury-glow border-2 border-primary/50 hover:border-primary hover:bg-primary/10 backdrop-blur-sm font-semibold px-10 py-6 text-lg">
              <Play className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Watch Demo
              <div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-shimmer" />
            </Button>
          </div>

          {/* Luxury Stats with count animation and light flash */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "20+", label: "Projects Delivered", delay: 1000 },
              { number: "30+", label: "Happy Clients", delay: 1200 },
              { number: "2+", label: "Years Experience", delay: 1400 },
              { number: "24/7", label: "Support Available", delay: 1600 }
            ].map((stat, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-1000 ${isVisible ? 'animate-count-up' : 'opacity-0'}`}
                style={{ animationDelay: `${stat.delay}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Luxury scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="relative group cursor-pointer">
            <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl animate-pulse-glow" />
            <ChevronDown className="h-8 w-8 text-primary animate-bounce relative z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;