import React from 'react';
// Importing the asset
import dashboardPreview from '../assets/dashboard.png';

const PostJobBanner = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Main Blue Container */}
        <div 
          className="relative bg-[#4640DE] flex flex-col md:flex-row items-center min-h-[450px]"
          style={{
            // Creates the specific geometric slant from your image
            clipPath: "polygon(0 20%, 100% 0, 100% 80%, 0% 100%)"
          }}
        >
          {/* Left Text Content */}
          <div className="z-10 w-full md:w-1/2 p-12 md:pl-20 md:pr-10 text-white flex flex-col justify-center">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              Start posting <br /> jobs today
            </h2>
            <p className="text-lg text-indigo-100 mb-8">
              Start posting jobs for only $10.
            </p>
            <div>
              <button className="bg-white text-[#4640DE] px-10 py-4 font-bold text-lg rounded-sm hover:bg-gray-100 transition-colors shadow-lg">
                Sign Up For Free
              </button>
            </div>
          </div>

          {/* Right Dashboard Image */}
          <div className="w-full md:w-1/2 h-full flex items-end justify-center md:justify-end relative pr-0 md:pr-10">
            <div className="w-full max-w-[550px] transform translate-y-12 md:translate-y-20 shadow-2xl">
              <img 
                src={dashboardPreview} 
                alt="Dashboard Preview" 
                className="w-full h-auto rounded-t-lg border-l-8 border-t-8 border-white/10"
              />
            </div>
          </div>

          {/* Optional: Subtle background accent for the right side slant */}
          <div className="absolute top-0 right-0 w-1/4 h-full bg-white/5 pointer-events-none" 
               style={{ clipPath: "polygon(100% 0, 0% 0, 100% 100%)" }} 
          />
        </div>

      </div>
    </section>
  );
};

export default PostJobBanner;