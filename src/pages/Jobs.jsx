import React, { useState } from "react";
import jobsData from "../components/jobs";

const Jobs = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");

  // Get unique categories from tags
  const categories = Array.from(
    new Set(jobsData.map(job => job.tags.map(tag => tag.name)).flat())
  );
  // Get unique locations
  const locations = Array.from(new Set(jobsData.map(job => job.location)));

  // Filter jobs
  const filteredJobs = jobsData.filter(job => {
    const matchesSearch =
      job.role.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category ? job.tags.some(tag => tag.name === category) : true;
    const matchesLocation = location ? job.location === location : true;
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
            onChange={e => setSearch(e.target.value)}
            className="border px-4 py-2 rounded w-full md:w-1/3"
          />
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="border px-4 py-2 rounded w-full md:w-1/4"
          >
            <option value="">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <select
            value={location}
            onChange={e => setLocation(e.target.value)}
            className="border px-4 py-2 rounded w-full md:w-1/4"
          >
            <option value="">All Locations</option>
            {locations.map(loc => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.length === 0 ? (
            <p className="col-span-full text-center text-gray-500">No jobs found.</p>
          ) : (
            filteredJobs.map(job => (
              <div key={job.id} className="p-6 border border-gray-100 bg-white hover:shadow-xl transition-all duration-300 group rounded-lg">
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
                <div className="flex gap-2 mb-4">
                  {job.tags.map((tag, i) => (
                    <span key={i} className={`px-4 py-1 rounded-full text-xs font-bold ${tag.color}`}>
                      {tag.name}
                    </span>
                  ))}
                </div>
                <a href={`/jobs/${job.id}`} className="block w-full text-center py-2 bg-blue-600 text-white rounded font-bold hover:bg-blue-700 transition">View Details</a>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
