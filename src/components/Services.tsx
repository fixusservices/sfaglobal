import { Code2, Database, Cloud, Cpu, Layers, TrendingUp, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const services = [
    {
      icon: Code2,
      title: "Software Development",
      description: "Custom applications and solutions tailored to your business needs with modern technologies",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      icon: Database,
      title: "ERP Implementation",
      description: "Enterprise resource planning systems to streamline your business operations",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: Cloud,
      title: "SaaS Solutions",
      description: "Cloud-based software services that scale with your business growth",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Cpu,
      title: "IoT Solutions",
      description: "Internet of Things implementations for smart business operations",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Layers,
      title: "SAP Services",
      description: "SAP consulting and implementation for enterprise-level solutions",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Online marketing and content strategies to boost your digital presence",
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      {/* Luxury background elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Premium Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Our Expert Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive IT solutions designed to accelerate your business growth and digital transformation
          </p>
        </div>

        {/* Luxury Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Glowing background effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500 scale-95 group-hover:scale-100`} />
              
              <Card className="relative h-full bg-card/50 backdrop-blur-sm border-border/50 group-hover:border-primary/50 transition-all duration-500 hover:shadow-card overflow-hidden">
                {/* Ripple effect on hover */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 animate-ripple-light pointer-events-none" />
                )}
                
                <CardContent className="p-8">
                  {/* Icon with luxury glow effect */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />
                    <div className={`relative inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} group-hover:scale-110 transition-all duration-500`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Title with hover effect */}
                  <h3 className="font-montserrat font-semibold text-xl text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Luxury Learn More button */}
                  <Button variant="link" className="p-0 h-auto font-semibold text-primary group-hover:text-accent transition-all duration-300">
                    <span className="mr-2">Learn More</span>
                    <ArrowRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-2 animate-glide" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Premium CTA */}
        <div className="text-center mt-16">
          <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-white font-semibold px-8 py-6">
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;