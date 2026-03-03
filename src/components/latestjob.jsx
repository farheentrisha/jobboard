import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import bgPattern from "../assets/Pattern.png";
import { latestJobs } from "../data/jobsData";

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
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Latest <span className="text-blue-500">jobs open</span>
          </h2>
          <Link to="/jobs" className="flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all">
            Show all jobs <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {latestJobs.map((job) => (
            <Link
              to={`/jobs/${job.id}?source=latest`}
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestJobs;
