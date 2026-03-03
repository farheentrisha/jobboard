import React, { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { jobs } from "../data/jobsData";

const Jobs = () => {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState(searchParams.get("location") || "");

  const categories = useMemo(
    () =>
      Array.from(
        new Set(
          jobs
            .flatMap((job) => (job.tags || []).map((tag) => tag.name))
            .filter(Boolean)
        )
      ),
    []
  );

  const locations = useMemo(
    () => Array.from(new Set(jobs.map((job) => job.location).filter(Boolean))),
    []
  );

  const filteredJobs = jobs.filter((job) => {
    const s = search.toLowerCase().trim();
    const l = location.toLowerCase().trim();

    const matchesSearch =
      !s ||
      (job.role || "").toLowerCase().includes(s) ||
      (job.company || "").toLowerCase().includes(s) ||
      (job.description || "").toLowerCase().includes(s);

    const matchesCategory = category
      ? (job.tags || []).some((tag) => tag.name === category)
      : true;

    const matchesLocation = l
      ? (job.location || "").toLowerCase().includes(l)
      : true;

    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-3xl font-bold mb-8 text-center">All Job Listings</h1>

        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center">
          <input
            type="text"
            placeholder="Search jobs or companies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-4 py-2 rounded w-full md:w-1/3"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border px-4 py-2 rounded w-full md:w-1/4"
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border px-4 py-2 rounded w-full md:w-1/4"
          >
            <option value="">All Locations</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.length === 0 ? (
            <p className="col-span-full text-center text-gray-500">No jobs found.</p>
          ) : (
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className="p-6 border border-gray-100 bg-white hover:shadow-xl transition-all duration-300 group rounded-lg"
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
                  {job.company} • {job.location}
                </p>
                <p className="text-sm text-gray-500 mb-6 line-clamp-2">{job.description}</p>
                <div className="flex gap-2 mb-4 flex-wrap">
                  {(job.tags || []).map((tag, i) => (
                    <span key={i} className={`px-4 py-1 rounded-full text-xs font-bold ${tag.color}`}>
                      {tag.name}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/jobs/${job.id}?source=featured`}
                  className="block w-full text-center py-2 bg-blue-600 text-white rounded font-bold hover:bg-blue-700 transition"
                >
                  View Details
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
