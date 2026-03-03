import React, { useEffect, useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import bgPattern from "../assets/Pattern.png";
import { latestJobs } from "../data/jobsData";
import { fetchJobs } from "../lib/jobsApi";

const toUiJob = (job) => ({
  id: job.id ?? job._id,
  company: job.company || "Unknown Company",
  logo: job.logo || "https://cdn.simpleicons.org/briefcase/6B7280",
  role: job.role || job.title || "Untitled Role",
  location: job.location || "Remote",
  description: job.description || "",
  type: job.type || "Full Time",
  tags: job.tags || [{ name: "General", color: "bg-blue-50 text-blue-400" }],
});

const withLatestDefaults = (job) => ({
  ...job,
  description: job.description || `${job.company} is hiring a ${job.role} in ${job.location}.`,
  type: job.type || "Full-Time",
  tags: job.tags || [
    { name: "Marketing", color: "text-orange-400 border-orange-200" },
    { name: "Design", color: "text-blue-400 border-blue-200" },
  ],
});

const LatestJobs = () => {
  const [adminJobs, setAdminJobs] = useState([]);

  useEffect(() => {
    fetchJobs()
      .then((data) => setAdminJobs(data.map(toUiJob)))
      .catch(() => setAdminJobs([]));
  }, []);

  const latestMixed = useMemo(() => {
    const fromAdmin = adminJobs.map((job) => ({ ...job, source: "admin" }));
    const fromDummy = latestJobs.map((job) => ({ ...withLatestDefaults(job), source: "latest" }));
    return [...fromAdmin, ...fromDummy].slice(0, 8);
  }, [adminJobs]);

  return (
   <section
  className="py-20 relative overflow-hidden"
  style={{
    backgroundImage: `url(${bgPattern})`,
    // Set the width (e.g., 40%) and keep height auto
    backgroundSize: "40% auto", 
    // Anchor it to the right
    backgroundPosition: "right center", 
    backgroundRepeat: "no-repeat",
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
          {latestMixed.map((job) => (
            <Link
              to={`/jobs/${encodeURIComponent(String(job.id))}?source=${job.source}`}
              state={{ job }}
              key={`${job.source}-${job.id}`}
              className="bg-white p-6 flex items-start gap-6 hover:shadow-lg transition-shadow border border-gray-50 cursor-pointer"
            >
              <img src={job.logo} alt={job.company} className="w-12 h-12 object-contain" />

              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{job.role}</h3>
                <p className="text-gray-400 text-sm mb-4">
                  {job.company} <span className="mx-2">|</span> {job.location}
                </p>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-50 text-green-500 rounded-full text-xs font-bold border border-green-100">
                    {job.type}
                  </span>
                  {(job.tags || []).slice(0, 2).map((tag, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 border rounded-full text-xs font-bold ${tag.color || "text-blue-400 border-blue-200"}`}
                    >
                      {tag.name}
                    </span>
                  ))}
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
