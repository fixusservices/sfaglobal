import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Target, Award, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {

  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Innovation",
      description: "We embrace cutting-edge technologies to deliver innovative solutions that drive business growth.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Collaboration",
      description: "We work closely with our clients, fostering partnerships that ensure successful outcomes.",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Excellence",
      description: "We maintain the highest standards of quality in everything we do.",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Global Reach",
      description: "Based in Coimbatore, we serve clients across the globe with equal dedication.",
    },
  ];

  const team = [
    {
      name: "Fazil",
      role: "CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    },
    {
      name: "Sathish",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    },
    {
      name: "Aravind",
      role: "CFO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
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
              About SFA Global
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Leading the digital transformation journey with innovative technology solutions.
              Based in Coimbatore, we serve clients globally with excellence and dedication.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                20+
              </div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                30+
              </div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                2+
              </div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                24/7
              </div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-8 hover-scale">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                To empower businesses worldwide with innovative IT solutions that drive growth, 
                efficiency, and digital transformation. We strive to be the trusted technology 
                partner that helps our clients navigate the complexities of the digital age.
              </p>
            </Card>
            <Card className="p-8 hover-scale">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                To be the global leader in providing cutting-edge IT solutions and consulting 
                services, recognized for our innovation, expertise, and commitment to client 
                success across all industries.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover-scale">
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Meet Our Leadership Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover-scale">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to Start Your Journey With Us?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their businesses with our solutions.
          </p>
          <Button size="lg" className="animate-pulse">
            Get in Touch
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;