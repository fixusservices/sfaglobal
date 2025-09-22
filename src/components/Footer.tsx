import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Blog", href: "#blog" },
    { name: "Careers", href: "#careers" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Software Development",
    "Cybersecurity",
    "SAP Services",
    "IoT Solutions",
    "ERP Implementation",
    "Digital Marketing",
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-primary rounded-lg rotate-6"></div>
                <div className="relative bg-white dark:bg-background rounded-lg p-2 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">SFA</span>
                </div>
              </div>
              <span className="font-montserrat font-bold text-xl text-foreground">
                Global
              </span>
            </div>
            <p className="text-muted-foreground mb-4">
              Transform your business with cutting-edge IT solutions and consulting services. 
              Based in Coimbatore, serving clients globally.
            </p>
            {/* Social Links */}
            <div className="flex space-x-3">
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-white transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-white transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-white transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-white transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg text-foreground mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg text-foreground mb-4">
              Stay Connected
            </h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest updates
            </p>
            <div className="flex gap-2 mb-6">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button variant="default" size="icon">
                <Mail className="h-4 w-4" />
              </Button>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-sm">Coimbatore, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">info@sfaglobal.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <div>
              © {currentYear} SFA Global. All rights reserved.
            </div>
            <div className="flex gap-4 mt-2 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;