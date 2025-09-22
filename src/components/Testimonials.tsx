import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "TechVision Solutions",
      role: "CEO",
      content: "SFA Global transformed our entire IT infrastructure. Their expertise in SAP implementation saved us months of work and significantly improved our operational efficiency.",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=Rajesh+Kumar&background=2c4875&color=fff",
    },
    {
      name: "Priya Sharma",
      company: "Innovate Corp",
      role: "CTO",
      content: "The team at SFA Global delivered our custom software solution ahead of schedule. Their attention to detail and commitment to quality is unmatched in the industry.",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=Priya+Sharma&background=52a552&color=fff",
    },
    {
      name: "Michael Chen",
      company: "Global Dynamics",
      role: "Operations Director",
      content: "Working with SFA Global on our IoT implementation was a game-changer. They brought innovative solutions that we hadn't even considered. Highly recommended!",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=Michael+Chen&background=2c4875&color=fff",
    },
    {
      name: "Anita Desai",
      company: "FutureTech Ltd",
      role: "Product Manager",
      content: "SFA Global's digital marketing strategies helped us increase our online presence by 300%. Their data-driven approach and creative solutions exceeded our expectations.",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=Anita+Desai&background=52a552&color=fff",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        {/* Testimonials Carousel */}
        <Carousel className="max-w-6xl mx-auto">
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2">
                <Card className="h-full border-border/50 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    {/* Quote Icon */}
                    <Quote className="h-8 w-8 text-primary/20 mb-4" />
                    
                    {/* Rating */}
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-muted-foreground mb-6 italic">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <div className="font-semibold text-foreground">
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
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-8">Trusted by leading companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {["Microsoft", "Google", "Amazon", "IBM", "Oracle"].map((company) => (
              <div key={company} className="text-2xl font-bold text-muted-foreground">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;