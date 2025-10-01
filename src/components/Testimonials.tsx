import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("testimonials");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "TechVision Solutions",
      role: "CEO",
      content: "SFA Global transformed our entire IT infrastructure. Their expertise in SAP implementation saved us months of work and significantly improved our operational efficiency.",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=Rajesh+Kumar&background=0077FF&color=fff",
    },
    {
      name: "Priya Sharma",
      company: "Innovate Corp",
      role: "CTO",
      content: "The team at SFA Global delivered our custom software solution ahead of schedule. Their attention to detail and commitment to quality is unmatched in the industry.",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=Priya+Sharma&background=33CC66&color=fff",
    },
    {
      name: "Michael Chen",
      company: "Global Dynamics",
      role: "Operations Director",
      content: "Working with SFA Global on our IoT implementation was a game-changer. They brought innovative solutions that we hadn't even considered. Highly recommended!",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=Michael+Chen&background=0077FF&color=fff",
    },
    {
      name: "Anita Desai",
      company: "FutureTech Ltd",
      role: "Product Manager",
      content: "SFA Global's digital marketing strategies helped us increase our online presence by 300%. Their data-driven approach and creative solutions exceeded our expectations.",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=Anita+Desai&background=33CC66&color=fff",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-background relative overflow-hidden">
      {/* Luxury background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Premium Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`font-montserrat font-bold text-4xl md:text-5xl mb-4 bg-gradient-primary bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            What Our Clients Say
          </h2>
          <p className={`text-lg text-muted-foreground transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        {/* Luxury Testimonials Carousel */}
        <Carousel className="max-w-6xl mx-auto">
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2">
                <Card className={`h-full bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-card transition-all duration-500 ${isVisible ? 'animate-cinematic' : 'opacity-0'}`} style={{ animationDelay: `${index * 200}ms` }}>
                  <CardContent className="p-8 relative">
                    {/* Luxury gradient overlay */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 blur-3xl" />
                    
                    {/* Quote Icon with glow */}
                    <Quote className="h-10 w-10 text-primary/30 mb-4 relative z-10" />
                    
                    {/* Animated Rating */}
                    <div className="flex mb-6 relative z-10">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="h-5 w-5 fill-accent text-accent animate-light-flash" 
                          style={{ animationDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </div>

                    {/* Premium Content */}
                    <p className="text-foreground/80 mb-8 italic leading-relaxed text-lg relative z-10">
                      "{testimonial.content}"
                    </p>

                    {/* Luxury Author Section */}
                    <div className="flex items-center relative z-10">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-primary blur-md opacity-50" />
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full relative z-10 border-2 border-primary/30"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="font-semibold text-foreground text-lg">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex bg-primary/10 hover:bg-primary/20 border-primary/30 hover:border-primary transition-all duration-300" />
          <CarouselNext className="hidden md:flex bg-primary/10 hover:bg-primary/20 border-primary/30 hover:border-primary transition-all duration-300" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;