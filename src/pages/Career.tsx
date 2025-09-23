import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  Users,
  TrendingUp,
  Coffee,
  Heart
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Career = () => {

  const benefits = [
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Health Insurance",
      description: "Comprehensive health coverage for you and your family",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Career Growth",
      description: "Clear career paths and professional development opportunities",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Great Team",
      description: "Work with talented and passionate professionals",
    },
    {
      icon: <Coffee className="h-8 w-8 text-primary" />,
      title: "Work-Life Balance",
      description: "Flexible working hours and remote work options",
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
              Join Our Growing Team
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Build your career with SFA Global and be part of our mission to transform businesses through technology.
            </p>
            <Button size="lg">View Open Positions</Button>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Why Join SFA Global?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center hover-scale">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* No Current Openings */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">
              Career Opportunities
            </h2>
            <Card className="p-12 text-center">
              <div className="mb-6">
                <Briefcase className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  No Current Openings
                </h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  While we don't have any open positions at the moment, we're always interested in connecting with talented professionals who share our passion for innovation and excellence.
                </p>
              </div>
              <div className="bg-muted/30 rounded-lg p-8">
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  Send Us Your Resume
                </h4>
                <p className="text-muted-foreground mb-6">
                  Interested in joining our team? Send your resume to:
                </p>
                <a href="mailto:careers@sfaglobal.com" className="text-primary text-xl font-semibold hover:underline">
                  careers@sfaglobal.com
                </a>
                <p className="text-sm text-muted-foreground mt-4">
                  We'll keep your resume on file and reach out when opportunities arise that match your skills and experience.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Our Culture
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Innovation First</h3>
                <p className="text-muted-foreground">
                  We encourage creative thinking and embrace new technologies to solve complex problems.
                </p>
              </Card>
              <Card className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Continuous Learning</h3>
                <p className="text-muted-foreground">
                  We invest in our employees' growth through training programs and certifications.
                </p>
              </Card>
              <Card className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Inclusive Environment</h3>
                <p className="text-muted-foreground">
                  We celebrate diversity and create an inclusive workplace where everyone thrives.
                </p>
              </Card>
              <Card className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Client Success</h3>
                <p className="text-muted-foreground">
                  We're passionate about delivering exceptional value to our clients.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us in creating innovative solutions that make a difference.
          </p>
          <a href="mailto:careers@sfaglobal.com">
            <Button size="lg">Send Your Resume</Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Career;