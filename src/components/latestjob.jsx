import React from "react";
import { ArrowRight } from "lucide-react";
import bgPattern from "../assets/Pattern.png";

const latestJobs = [
  { id: 1, role: "Social Media Assistant", company: "Nomad", location: "Paris, France", logo: "https://cdn.simpleicons.org/nomad/2EAD6B" },
  { id: 2, role: "Social Media Assistant", company: "Netlify", location: "Paris, France", logo: "https://cdn.simpleicons.org/netlify/00ADBB" },
  { id: 3, role: "Brand Designer", company: "Dropbox", location: "San Fransisco, USA", logo: "https://cdn.simpleicons.org/dropbox/0061FF" },
  { id: 4, role: "Brand Designer", company: "Maze", location: "San Fransisco, USA", logo: "https://cdn.simpleicons.org/maze/183153" },
  { id: 5, role: "Interactive Developer", company: "Terraform", location: "Hamburg, Germany", logo: "https://cdn.simpleicons.org/terraform/844FBA" },
  { id: 6, role: "Interactive Developer", company: "Udacity", location: "Hamburg, Germany", logo: "https://cdn.simpleicons.org/udacity/01B3E3" },
  { id: 7, role: "HR Manager", company: "Packer", location: "Lucern, Switzerland", logo: "https://cdn.simpleicons.org/packer/000000" },
  { id: 8, role: "HR Manager", company: "Webflow", location: "Lucern, Switzerland", logo: "https://cdn.simpleicons.org/webflow/4353FF" },
];

const LatestJobs = () => {
  return (
    <section 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `url(${bgPattern})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Latest <span className="text-blue-500">jobs open</span>
          </h2>
          <button className="flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all">
            Show all jobs <ArrowRight size={20} />
          </button>
        </div>

        {/* Jobs List Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {latestJobs.map((job) => (
            <div 
              key={job.id} 
              className="bg-white p-6 flex items-start gap-6 hover:shadow-lg transition-shadow border border-gray-50 cursor-pointer"
            >
              <img src={job.logo} alt={job.company} className="w-12 h-12 object-contain" />
              
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{job.role}</h3>
                <p className="text-gray-400 text-sm mb-4">
                  {job.company} <span className="mx-2">•</span> {job.location}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-50 text-green-500 rounded-full text-xs font-bold border border-green-100">
                    Full-Time
                  </span>
                  <span className="px-3 py-1 border border-orange-200 text-orange-400 rounded-full text-xs font-bold">
                    Marketing
                  </span>
                  <span className="px-3 py-1 border border-blue-200 text-blue-400 rounded-full text-xs font-bold">
                    Design
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LatestJobs;