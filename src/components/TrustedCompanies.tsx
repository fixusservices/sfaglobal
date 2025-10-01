import { useState } from "react";

const TrustedCompanies = () => {
  const [isPaused, setIsPaused] = useState(false);
  
  const companies = [
    "Microsoft", "Google", "Amazon", "IBM", "Oracle",
    "Salesforce", "SAP", "Adobe", "Intel", "Cisco"
  ];

  // Duplicate for seamless loop
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="py-16 bg-background relative overflow-hidden">
      {/* Luxury background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-muted-foreground mb-2">
            Trusted by Leading Companies Worldwide
          </h2>
        </div>

        {/* Luxury Marquee Container */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient masks for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* Animated marquee */}
          <div className={`flex gap-16 ${isPaused ? '' : 'animate-liquid-flow'} whitespace-nowrap`}>
            {duplicatedCompanies.map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 group cursor-pointer"
              >
                <div className="text-3xl font-bold text-muted-foreground/40 hover:text-primary transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-glow">
                  {company}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ambient glow effect on hover */}
        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 transition-opacity duration-1000 pointer-events-none ${isPaused ? 'opacity-100' : ''}`} />
      </div>
    </section>
  );
};

export default TrustedCompanies;