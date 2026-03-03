import React from "react";

// Using reliable CDN links for logos to avoid 403 Forbidden errors
const logos = [
  { name: "Vodafone", url: "https://cdn.simpleicons.org/vodafone/808080" },
  { name: "Intel", url: "https://cdn.simpleicons.org/intel/808080" },
  { name: "Tesla", url: "https://cdn.simpleicons.org/tesla/808080" },
  { name: "AMD", url: "https://cdn.simpleicons.org/amd/808080" },
  { name: "Talkit", url: "https://cdn.simpleicons.org/twilio/808080" }, // Using Twilio as a placeholder for Talkit
];

const Companies = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <p className="text-gray-400 text-sm font-medium mb-12 text-center md:text-left">
          Companies we helped grow
        </p>
        
        {/* THE WRAPPER: Needs flex-nowrap to keep lists in a single line */}
        <div className="flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          
          {/* FIRST SET */}
          <div className="flex items-center gap-20 animate-infinite-scroll whitespace-nowrap pr-20">
            {logos.map((logo, index) => (
              <div key={`logo-1-${index}`} className="flex items-center gap-3">
                <img 
                  src={logo.url} 
                  alt={logo.name} 
                  className="h-7 md:h-9 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
                />
                <span className="text-xl font-bold text-gray-400 tracking-tighter">{logo.name}</span>
              </div>
            ))}
          </div>

          {/* SECOND SET (Duplicate) */}
          <div className="flex items-center gap-20 animate-infinite-scroll whitespace-nowrap pr-20" aria-hidden="true">
            {logos.map((logo, index) => (
              <div key={`logo-2-${index}`} className="flex items-center gap-3">
                <img 
                  src={logo.url} 
                  alt={logo.name} 
                  className="h-7 md:h-9 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
                />
                <span className="text-xl font-bold text-gray-400 tracking-tighter">{logo.name}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Companies;