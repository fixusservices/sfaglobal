import { Zap, Users, Trophy, HeadphonesIcon } from "lucide-react";

const WhyChoose = () => {
  const features = [
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising quality",
      stat: "2x Faster",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled professionals with years of industry experience",
      stat: "50+ Experts",
    },
    {
      icon: Trophy,
      title: "Proven Results",
      description: "100+ successful projects delivered on time",
      stat: "100% Success",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your needs",
      stat: "24/7 Available",
    },
  ];

  return (
    <section id="why-choose" className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-4">
            Why Choose SFA Global
          </h2>
          <p className="text-lg text-white/90">
            We deliver excellence through innovation and dedication
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
                <div className="inline-flex p-4 rounded-full bg-white/20 mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {feature.stat}
                </div>
                <h3 className="font-montserrat font-semibold text-xl text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/80">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 flex-wrap justify-center gap-y-4">
            <div className="text-white">
              <span className="font-bold text-2xl">10+</span>
              <span className="ml-2 text-white/80">Years Experience</span>
            </div>
            <div className="w-px h-8 bg-white/30 hidden sm:block"></div>
            <div className="text-white">
              <span className="font-bold text-2xl">500+</span>
              <span className="ml-2 text-white/80">Happy Clients</span>
            </div>
            <div className="w-px h-8 bg-white/30 hidden sm:block"></div>
            <div className="text-white">
              <span className="font-bold text-2xl">15+</span>
              <span className="ml-2 text-white/80">Countries Served</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;