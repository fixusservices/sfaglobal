import { Code2, Database, Cloud, Cpu, Layers, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Software Development",
      description: "Custom applications and solutions tailored to your business needs with modern technologies",
      color: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: Database,
      title: "ERP Implementation",
      description: "Enterprise resource planning systems to streamline your business operations",
      color: "bg-accent/10",
      iconColor: "text-accent",
    },
    {
      icon: Cloud,
      title: "SaaS Solutions",
      description: "Cloud-based software services that scale with your business growth",
      color: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: Cpu,
      title: "IoT Solutions",
      description: "Internet of Things implementations for smart business operations",
      color: "bg-accent/10",
      iconColor: "text-accent",
    },
    {
      icon: Layers,
      title: "SAP Services",
      description: "SAP consulting and implementation for enterprise-level solutions",
      color: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Online marketing and content strategies to boost your digital presence",
      color: "bg-accent/10",
      iconColor: "text-accent",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-foreground mb-4">
            Our Expert Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive IT solutions designed to accelerate your business growth and digital transformation
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 overflow-hidden"
            >
              <CardContent className="p-6">
                <div className={`inline-flex p-3 rounded-lg ${service.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`h-6 w-6 ${service.iconColor}`} />
                </div>
                <h3 className="font-montserrat font-semibold text-xl text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <Button variant="link" className="p-0 h-auto font-semibold group-hover:translate-x-2 transition-transform">
                  Learn More →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="default" size="lg">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;