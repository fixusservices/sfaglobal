import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageSquare,
  Send,
  Globe,
  Linkedin,
  Twitter,
  Facebook
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Our Location",
      details: ["Coimbatore, Tamil Nadu", "India"],
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone Numbers",
      details: [
        "Main: +91 9629463964",
        "CEO: +91 9677755055",
        "CTO: +91 9629463964",
        "CFO: +91 8883050283"
      ],
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email Addresses",
      details: ["info@sfaglobal.com", "support@sfaglobal.com", "careers@sfaglobal.com"],
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Closed"],
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
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              We're here to help you transform your business. Reach out to us for any queries or to discuss your project.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                <MessageSquare className="inline-block mr-2 h-6 w-6 text-primary" />
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help you?"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project..."
                    rows={5}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
                <Button 
                  type="button" 
                  variant="secondary" 
                  size="lg"
                  className="w-full"
                  onClick={() => window.open('https://wa.me/919629463964', '_blank')}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Contact on WhatsApp
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h2>
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 hover-scale">
                  <div className="flex items-start">
                    <div className="mr-4">{info.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}

              {/* Social Links */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon">
                    <Globe className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Facebook className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Find Us on the Map
          </h2>
          <Card className="overflow-hidden max-w-6xl mx-auto">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7913.983818126225!2d77.00201948826935!3d11.02375283635192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1758643004940!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="SFA Global Location"
            />
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What services does SFA Global offer?",
                answer: "We offer a comprehensive range of IT services including software development, ERP implementation, SaaS solutions, IoT solutions, SAP services, and digital marketing.",
              },
              {
                question: "How can I request a quote?",
                answer: "You can request a quote by filling out the contact form above or by contacting our team directly through the phone numbers provided.",
              },
              {
                question: "Do you provide support after project completion?",
                answer: "Yes, we provide 24/7 support and maintenance services to ensure your solutions run smoothly.",
              },
              {
                question: "What industries do you serve?",
                answer: "We serve various industries including healthcare, finance, retail, manufacturing, education, and more.",
              },
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;