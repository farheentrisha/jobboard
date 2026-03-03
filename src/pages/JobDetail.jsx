import React from "react";
import jobsData from "../components/jobs";
import { useParams } from "react-router-dom";

const JobDetail = () => {
  const { id } = useParams();
  const job = jobsData.find(j => j.id === Number(id));

  if (!job) {
    return <div className="container mx-auto px-4 py-16">Job not found.</div>;
  }

  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-2xl">
        <div className="flex items-center gap-4 mb-6">
          <img src={job.logo} alt={job.company} className="w-14 h-14 object-contain" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{job.role}</h1>
            <p className="text-gray-500">{job.company} • {job.location}</p>
          </div>
        </div>
        <div className="mb-4">
          <span className="px-3 py-1 border border-blue-600 text-blue-600 text-xs font-semibold mr-2">{job.type}</span>
          {job.tags.map((tag, i) => (
            <span key={i} className={`px-4 py-1 rounded-full text-xs font-bold mr-2 ${tag.color}`}>{tag.name}</span>
          ))}
        </div>
        <p className="mb-8 text-gray-700 whitespace-pre-line">{job.description}</p>
        <h2 className="text-xl font-bold mb-4">Apply Now</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="border px-4 py-2 rounded w-full" required />
          <input type="email" placeholder="Email" className="border px-4 py-2 rounded w-full" required />
          <input type="url" placeholder="Resume Link (URL)" className="border px-4 py-2 rounded w-full" required />
          <textarea placeholder="Cover Note" className="border px-4 py-2 rounded w-full" rows={4} required />
          <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded font-bold hover:bg-blue-700 transition">Submit Application</button>
        </form>
      </div>
    </section>
  );
};

export default JobDetail;
