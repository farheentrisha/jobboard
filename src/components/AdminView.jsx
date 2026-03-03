import React, { useState, useEffect } from "react";
import { createJob, deleteJob, fetchJobs } from "../lib/jobsApi";

const AdminView = () => {
  const [jobs, setJobs] = useState([]);
  const [form, setForm] = useState({
    company: "",
    logo: "",
    role: "",
    location: "",
    description: "",
    type: "Full Time",
    tags: ""
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch jobs from backend
  useEffect(() => {
    fetchJobs()
      .then(data => {
        setJobs(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load jobs from server.");
        setLoading(false);
      });
  }, []);

  // Add new job
  const handleAddJob = async (e) => {
    e.preventDefault();
    const newJob = {
      ...form,
      tags: form.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean)
        .map((name) => ({ name, color: "bg-blue-50 text-blue-400" })),
    };
    try {
      const saved = await createJob(newJob);
      setJobs([saved, ...jobs]);
      setForm({ company: "", logo: "", role: "", location: "", description: "", type: "Full Time", tags: "" });
    } catch {
      setError("Failed to add job.");
    }
  };

  // Delete job
  const handleDelete = async (id) => {
    try {
      await deleteJob(id);
      setJobs(jobs.filter((j) => j.id !== id));
    } catch {
      setError("Failed to delete job.");
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6">Admin: Manage Job Listings</h2>
      {error && <div className="text-red-600 mb-4">{error}</div>}
      <form onSubmit={handleAddJob} className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <input required placeholder="Company" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} className="border px-3 py-2 rounded" />
        <input required placeholder="Logo URL" value={form.logo} onChange={e => setForm({ ...form, logo: e.target.value })} className="border px-3 py-2 rounded" />
        <input required placeholder="Role" value={form.role} onChange={e => setForm({ ...form, role: e.target.value })} className="border px-3 py-2 rounded" />
        <input required placeholder="Location" value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} className="border px-3 py-2 rounded" />
        <input required placeholder="Type (e.g. Full Time)" value={form.type} onChange={e => setForm({ ...form, type: e.target.value })} className="border px-3 py-2 rounded" />
        <input required placeholder="Tags (comma separated)" value={form.tags} onChange={e => setForm({ ...form, tags: e.target.value })} className="border px-3 py-2 rounded" />
        <textarea required placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} className="border px-3 py-2 rounded col-span-1 md:col-span-2" />
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded col-span-1 md:col-span-2">Add Job</button>
      </form>
      <div className="overflow-x-auto">
        {loading ? (
          <div>Loading jobs...</div>
        ) : (
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="border px-4 py-2">ID</th>
                <th className="border px-4 py-2">Company</th>
                <th className="border px-4 py-2">Role</th>
                <th className="border px-4 py-2">Location</th>
                <th className="border px-4 py-2">Type</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map(job => (
                <tr key={job.id}>
                  <td className="border px-4 py-2">{job.id}</td>
                  <td className="border px-4 py-2">{job.company}</td>
                  <td className="border px-4 py-2">{job.role || job.title}</td>
                  <td className="border px-4 py-2">{job.location}</td>
                  <td className="border px-4 py-2">{job.type}</td>
                  <td className="border px-4 py-2">
                    <button onClick={() => handleDelete(job.id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminView;
