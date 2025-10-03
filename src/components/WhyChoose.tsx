import { Zap, Users, Trophy, HeadphonesIcon } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WhyChoose = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-4">
            Why Choose SFA Global
          </h2>
          <p className="text-lg text-white/90">
            We deliver excellence through innovation and dedication
          </p>
        </motion.div>

        {/* Features Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.15,
                ease: "easeOut"
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
                <motion.div 
                  className="inline-flex p-4 rounded-full bg-white/20 mb-4"
                  whileHover={{ 
                    rotate: [0, -15, 15, -15, 0],
                    scale: 1.1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </motion.div>
                <motion.div 
                  className="text-3xl font-bold text-white mb-2"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.15 + 0.3,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {feature.stat}
                </motion.div>
                <h3 className="font-montserrat font-semibold text-xl text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/80">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;