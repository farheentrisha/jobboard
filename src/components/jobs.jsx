import React from 'react';
import { ArrowRight } from 'lucide-react';

const jobs = [
  {
    id: 1,
    company: "Revolut",
    logo: "https://cdn.simpleicons.org/revolut/000000",
    role: "Email Marketing",
    location: "Madrid, Spain",
    description: "Revolut is looking for Email Marketing to help team ma ...",
    type: "Full Time",
    tags: [{ name: "Marketing", color: "bg-orange-50 text-orange-400" }, { name: "Design", color: "bg-green-50 text-green-400" }]
  },
  {
    id: 2,
    company: "Dropbox",
    logo: "https://cdn.simpleicons.org/dropbox/0061FF",
    role: "Brand Designer",
    location: "San Fransisco, US",
    description: "Dropbox is looking for Brand Designer to help the team t ...",
    type: "Full Time",
    tags: [{ name: "Design", color: "bg-green-50 text-green-400" }, { name: "Business", color: "bg-blue-50 text-blue-400" }]
  },
  {
    id: 3,
    company: "Pitch",
    logo: "https://cdn.simpleicons.org/pitch/000000",
    role: "Email Marketing",
    location: "Berlin, Germany",
    description: "Pitch is looking for Customer Manager to join marketing t ...",
    type: "Full Time",
    tags: [{ name: "Marketing", color: "bg-orange-50 text-orange-400" }]
  },
  {
    id: 4,
    company: "Blinklist",
    logo: "https://cdn.simpleicons.org/blinkist/00D791",
    role: "Visual Designer",
    location: "Granada, Spain",
    description: "Blinkist is looking for Visual Designer to help team desi ...",
    type: "Full Time",
    tags: [{ name: "Design", color: "bg-green-50 text-green-400" }]
  },
  {
    id: 5,
    company: "ClassPass",
    logo: "https://cdn.simpleicons.org/classpass/000000",
    role: "Product Designer",
    location: "Manchester, UK",
    description: "ClassPass is looking for Product Designer to help us...",
    type: "Full Time",
    tags: [{ name: "Marketing", color: "bg-orange-50 text-orange-400" }, { name: "Design", color: "bg-green-50 text-green-400" }]
  },
  {
    id: 6,
    company: "Canva",
    logo: "https://cdn.simpleicons.org/canva/00C4CC",
    role: "Lead Designer",
    location: "Ontario, Canada",
    description: "Canva is looking for Lead Engineer to help develop n ...",
    type: "Full Time",
    tags: [{ name: "Design", color: "bg-green-50 text-green-400" }, { name: "Business", color: "bg-blue-50 text-blue-400" }]
  },
  {
    id: 7,
    company: "GoDaddy",
    logo: "https://cdn.simpleicons.org/godaddy/1BDBE4",
    role: "Brand Strategist",
    location: "Marseille, France",
    description: "GoDaddy is looking for Brand Strategist to join the team...",
    type: "Full Time",
    tags: [{ name: "Marketing", color: "bg-orange-50 text-orange-400" }]
  },
  {
    id: 8,
    company: "Twitter",
    logo: "https://cdn.simpleicons.org/twitter/1DA1F2",
    role: "Data Analyst",
    location: "San Diego, US",
    description: "Twitter is looking for Data Analyst to help team desi ...",
    type: "Full Time",
    tags: [{ name: "Technology", color: "bg-red-50 text-red-400" }]
  }
];

const FeaturedJobs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Featured <span className="text-blue-500">jobs</span>
          </h2>
          <button className="flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all">
            Show all jobs <ArrowRight size={20} />
          </button>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobs.map((job) => (
            <div key={job.id} className="p-6 border border-gray-100 bg-white hover:shadow-xl transition-all duration-300 group">
              <div className="flex justify-between items-start mb-4">
                <img src={job.logo} alt={job.company} className="w-10 h-10 object-contain" />
                <span className="px-3 py-1 border border-blue-600 text-blue-600 text-xs font-semibold">
                  {job.type}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {job.role}
              </h3>
              
              <p className="text-sm text-gray-400 mb-4">
                {job.company} • {job.location}
              </p>
              
              <p className="text-sm text-gray-500 mb-6 line-clamp-2">
                {job.description}
              </p>
              
              <div className="flex gap-2">
                {job.tags.map((tag, i) => (
                  <span key={i} className={`px-4 py-1 rounded-full text-xs font-bold ${tag.color}`}>
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedJobs;