import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Cloud, Shield, Globe, Database, Smartphone, BrainCircuit, LineChart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      category: "Development",
      items: [
        {
          icon: <Code className="h-12 w-12 text-primary" />,
          title: "Custom Software Development",
          description: "Tailored software solutions designed to meet your specific business needs.",
          features: ["Web Applications", "Mobile Apps", "Desktop Software", "API Development"],
        },
        {
          icon: <Smartphone className="h-12 w-12 text-primary" />,
          title: "Mobile App Development",
          description: "Native and cross-platform mobile applications for iOS and Android.",
          features: ["React Native", "Flutter", "iOS Native", "Android Native"],
        },
      ],
    },
    {
      category: "Enterprise",
      items: [
        {
          icon: <Database className="h-12 w-12 text-primary" />,
          title: "ERP Implementation",
          description: "Complete enterprise resource planning solutions for business optimization.",
          features: ["SAP", "Oracle", "Microsoft Dynamics", "Custom ERP"],
        },
        {
          icon: <Cloud className="h-12 w-12 text-primary" />,
          title: "SaaS Solutions",
          description: "Cloud-based software services that scale with your business.",
          features: ["Multi-tenant Architecture", "Subscription Management", "Analytics", "Integration"],
        },
      ],
    },
    {
      category: "Emerging Tech",
      items: [
        {
          icon: <Globe className="h-12 w-12 text-primary" />,
          title: "IoT Solutions",
          description: "Connected device solutions for smart business operations.",
          features: ["Sensor Integration", "Data Analytics", "Remote Monitoring", "Automation"],
        },
        {
          icon: <BrainCircuit className="h-12 w-12 text-primary" />,
          title: "AI & Machine Learning",
          description: "Intelligent solutions powered by artificial intelligence.",
          features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Automation"],
        },
      ],
    },
    {
      category: "Consulting",
      items: [
        {
          icon: <Shield className="h-12 w-12 text-primary" />,
          title: "Cybersecurity",
          description: "Comprehensive security solutions to protect your digital assets.",
          features: ["Security Audits", "Penetration Testing", "Compliance", "Training"],
        },
        {
          icon: <LineChart className="h-12 w-12 text-primary" />,
          title: "Digital Marketing",
          description: "Strategic digital marketing to grow your online presence.",
          features: ["SEO", "Social Media", "Content Marketing", "PPC Campaigns"],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Comprehensive IT solutions tailored to transform your business and drive growth in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="Development" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 lg:grid-cols-4 mb-12">
              {services.map((category) => (
                <TabsTrigger key={category.category} value={category.category}>
                  {category.category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {services.map((category) => (
              <TabsContent key={category.category} value={category.category}>
                <div className="grid md:grid-cols-2 gap-8">
                  {category.items.map((service, index) => (
                    <Card key={index} className="p-8 hover-scale">
                      <div className="mb-6">{service.icon}</div>
                      <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-muted-foreground">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            {feature}
                          </div>
                        ))}
                      </div>
                      <Button variant="outline">Learn More</Button>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Our Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your needs and goals" },
              { step: "02", title: "Planning", desc: "Creating a roadmap for success" },
              { step: "03", title: "Development", desc: "Building your solution with precision" },
              { step: "04", title: "Delivery", desc: "Deploying and supporting your solution" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your business goals with our tailored IT solutions.
          </p>
          <Button size="lg">Get a Free Consultation</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;