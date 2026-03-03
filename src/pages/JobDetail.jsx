import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { findJobByRoute } from "../data/jobsData";
import { fetchJobById, submitApplication } from "../lib/jobsApi";

const mapAdminJob = (job) => ({
  id: job.id,
  company: job.company || "Unknown Company",
  logo: job.logo || "https://cdn.simpleicons.org/briefcase/6B7280",
  role: job.role || job.title || "Untitled Role",
  location: job.location || "Remote",
  description: job.description || "",
  type: job.type || "Full Time",
  tags: job.tags || [],
});

const JobDetail = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const source = searchParams.get("source") || "featured";
  const isAdmin = source === "admin";
  const staticJob = isAdmin ? null : findJobByRoute(id, source);
  const [adminJob, setAdminJob] = useState(null);
  const [adminMissing, setAdminMissing] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    resume: "",
    coverNote: "",
  });

  useEffect(() => {
    if (!isAdmin) {
      return;
    }

    let cancelled = false;
    fetchJobById(id)
      .then((data) => {
        if (cancelled) return;
        setAdminMissing(false);
        setAdminJob(mapAdminJob(data));
      })
      .catch(() => {
        if (cancelled) return;
        setAdminMissing(true);
        setAdminJob(null);
      });

    return () => {
      cancelled = true;
    };
  }, [id, isAdmin]);

  const job = isAdmin ? adminJob : staticJob;
  const loading = isAdmin && (!adminJob || Number(adminJob.id) !== Number(id)) && !adminMissing;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitMessage("");

    if (!job) return;

    try {
      await submitApplication({
        job_id: Number(job.id),
        name: form.name,
        email: form.email,
        resume_link: form.resume,
        cover_note: form.coverNote,
      });
      setSubmitMessage("Application submitted successfully.");
      setForm({ name: "", email: "", resume: "", coverNote: "" });
    } catch {
      setSubmitMessage("Application submitted locally, but server save failed.");
    }
  };

  if (loading) {
    return <div className="container mx-auto px-4 py-16">Loading job details...</div>;
  }

  if (!job && !loading) {
    return <div className="container mx-auto px-4 py-16">Job not found.</div>;
  }

  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-2xl">
        <div className="flex items-center gap-4 mb-6">
          <img src={job.logo} alt={job.company} className="w-14 h-14 object-contain" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{job.role}</h1>
            <p className="text-gray-500">
              {job.company} | {job.location}
            </p>
          </div>
        </div>
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="px-3 py-1 border border-blue-600 text-blue-600 text-xs font-semibold">
            {job.type}
          </span>
          {(job.tags || []).map((tag, i) => (
            <span key={i} className={`px-4 py-1 rounded-full text-xs font-bold ${tag.color}`}>
              {tag.name}
            </span>
          ))}
        </div>
        <p className="mb-8 text-gray-700 whitespace-pre-line">{job.description}</p>
        <h2 className="text-xl font-bold mb-4">Apply Now</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="border px-4 py-2 rounded w-full"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="border px-4 py-2 rounded w-full"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            type="url"
            placeholder="Resume Link (URL)"
            className="border px-4 py-2 rounded w-full"
            value={form.resume}
            onChange={(e) => setForm({ ...form, resume: e.target.value })}
            required
          />
          <textarea
            placeholder="Cover Note"
            className="border px-4 py-2 rounded w-full"
            rows={4}
            value={form.coverNote}
            onChange={(e) => setForm({ ...form, coverNote: e.target.value })}
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded font-bold hover:bg-blue-700 transition"
          >
            Submit Application
          </button>
          {submitMessage && <p className="text-sm text-gray-600">{submitMessage}</p>}
        </form>
      </div>
    </section>
  );
};

export default JobDetail;
