import { Card } from "@/components/ui/card";

const Partners = () => {
  const industries = [
    "Healthcare",
    "Finance & Banking",
    "Manufacturing",
    "Retail & E-commerce",
    "Education",
    "Government",
    "Telecommunications",
    "Real Estate"
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-foreground mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-muted-foreground">
            We deliver specialized IT solutions across diverse industry verticals, understanding the unique challenges and opportunities in each sector
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-card hover:scale-105"
            >
              <h3 className="font-semibold text-foreground">{industry}</h3>
            </Card>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our expertise spans across multiple sectors, enabling us to deliver tailored solutions that drive digital transformation and business growth for organizations of all sizes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;