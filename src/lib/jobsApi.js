const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const jsonHeaders = { "Content-Type": "application/json" };

export const fetchJobs = async () => {
  const res = await fetch(`${API_BASE}/api/jobs`);
  if (!res.ok) throw new Error("Failed to fetch jobs");
  return res.json();
};

export const fetchJobById = async (id) => {
  const res = await fetch(`${API_BASE}/api/jobs/${id}`);
  if (!res.ok) throw new Error("Failed to fetch job details");
  return res.json();
};

export const createJob = async (payload) => {
  const res = await fetch(`${API_BASE}/api/jobs`, {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Failed to create job");
  return res.json();
};

export const deleteJob = async (id) => {
  const res = await fetch(`${API_BASE}/api/jobs/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete job");
};

export const submitApplication = async (payload) => {
  const res = await fetch(`${API_BASE}/api/applications`, {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Failed to submit application");
  return res.json();
};
