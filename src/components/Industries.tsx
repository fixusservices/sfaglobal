import { useState } from "react";
import { 
  Heart, 
  Building2, 
  Factory, 
  ShoppingCart, 
  GraduationCap, 
  Landmark,
  Phone,
  Home
} from "lucide-react";

const industries = [
  { icon: Heart, name: "Healthcare", color: "from-red-500 to-pink-500" },
  { icon: Building2, name: "Finance & Banking", color: "from-blue-500 to-indigo-500" },
  { icon: Factory, name: "Manufacturing", color: "from-gray-500 to-slate-500" },
  { icon: ShoppingCart, name: "Retail & E-commerce", color: "from-purple-500 to-pink-500" },
  { icon: GraduationCap, name: "Education", color: "from-green-500 to-emerald-500" },
  { icon: Landmark, name: "Government", color: "from-indigo-500 to-blue-500" },
  { icon: Phone, name: "Telecommunications", color: "from-orange-500 to-red-500" },
  { icon: Home, name: "Real Estate", color: "from-teal-500 to-cyan-500" },
];

const Industries = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-10" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Industries We Serve
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We deliver specialized IT solutions across diverse industry verticals, understanding the unique challenges and opportunities in each sector.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative overflow-hidden rounded-xl bg-card border border-border p-8 transition-all duration-300 hover:scale-105 hover:shadow-card cursor-pointer">
                  {/* Ripple effect on hover */}
                  {hoveredIndex === index && (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 animate-ripple" />
                  )}
                  
                  {/* Icon with gradient background */}
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${industry.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  
                  {/* Industry name */}
                  <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                    {industry.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;