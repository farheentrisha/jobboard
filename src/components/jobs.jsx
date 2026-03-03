import React, { useEffect, useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { jobs } from "../data/jobsData";
import { fetchJobs } from "../lib/jobsApi";

const toUiJob = (job) => ({
  id: job.id,
  company: job.company || "Unknown Company",
  logo: job.logo || "https://cdn.simpleicons.org/briefcase/6B7280",
  role: job.role || job.title || "Untitled Role",
  location: job.location || "Remote",
  description: job.description || "",
  type: job.type || "Full Time",
  tags: job.tags || [],
});

const FeaturedJobs = () => {
  const [adminJobs, setAdminJobs] = useState([]);

  useEffect(() => {
    fetchJobs()
      .then((data) => setAdminJobs(data.map(toUiJob)))
      .catch(() => setAdminJobs([]));
  }, []);

  const featuredJobs = useMemo(() => {
    const fromAdmin = adminJobs.map((job) => ({ ...job, source: "admin" }));
    const fromDummy = jobs.map((job) => ({ ...job, source: "featured" }));
    return [...fromAdmin, ...fromDummy].slice(0, 8);
  }, [adminJobs]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Featured <span className="text-blue-500">jobs</span>
          </h2>
          <Link to="/jobs" className="flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all">
            Show all jobs <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredJobs.map((job) => (
            <Link
              to={`/jobs/${job.id}?source=${job.source}`}
              key={`${job.source}-${job.id}`}
              className="p-6 border border-gray-100 bg-white hover:shadow-xl transition-all duration-300 group block"
            >
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
                {job.company} | {job.location}
              </p>

              <p className="text-sm text-gray-500 mb-6 line-clamp-2">
                {job.description}
              </p>

              <div className="flex gap-2 flex-wrap">
                {job.tags?.map((tag, i) => (
                  <span key={i} className={`px-4 py-1 rounded-full text-xs font-bold ${tag.color}`}>
                    {tag.name}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
