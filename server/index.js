// Force Node.js to use reliable DNS servers for MongoDB Atlas SRV lookups
const dns = require("dns");
try {
  dns.setServers(["8.8.8.8", "1.1.1.1"]);
} catch (e) {
  console.warn("Failed to set DNS servers (continuing):", e && e.message);
}

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const jobSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true, index: true },
  title: { type: String, required: true, trim: true },
  company: { type: String, required: true, trim: true },
  location: { type: String, required: true, trim: true },
  category: { type: String, default: "General", trim: true },
  description: { type: String, required: true, trim: true },
  logo: { type: String, default: "" },
  type: { type: String, default: "Full Time" },
  tags: [
    {
      name: String,
      color: String,
    },
  ],
  created_at: { type: Date, default: Date.now },
});

const applicationSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true, index: true },
  job_id: { type: Number, ref: "Job", required: true, index: true },
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  resume_link: { type: String, required: true, trim: true },
  cover_note: { type: String, required: true, trim: true },
  created_at: { type: Date, default: Date.now },
});

const Job = mongoose.model("Job", jobSchema);
const Application = mongoose.model("Application", applicationSchema);

const mapJobToLegacyShape = (jobDoc) => {
  const job = jobDoc.toObject ? jobDoc.toObject() : jobDoc;
  return {
    ...job,
    role: job.title,
  };
};

const getNextId = async (Model) => {
  const latest = await Model.findOne().sort({ id: -1 }).lean();
  return latest ? latest.id + 1 : 1;
};

// Get all jobs
app.get("/api/jobs", async (req, res) => {
  try {
    const jobs = await Job.find().sort({ created_at: -1 });
    res.json(jobs.map(mapJobToLegacyShape));
  } catch {
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
});

// Get single job by numeric ID
app.get("/api/jobs/:id", async (req, res) => {
  try {
    const rawId = req.params.id;
    const numericId = Number(rawId);
    const byNumericId = Number.isNaN(numericId) ? null : await Job.findOne({ id: numericId });
    const job = byNumericId || (mongoose.Types.ObjectId.isValid(rawId) ? await Job.findById(rawId) : null);
    if (!job) return res.status(404).json({ error: "Job not found" });
    res.json(mapJobToLegacyShape(job));
  } catch {
    res.status(500).json({ error: "Failed to fetch job" });
  }
});

// Add a job (Admin)
app.post("/api/jobs", async (req, res) => {
  try {
    const payload = req.body || {};
    const nextId = await getNextId(Job);

    const tags = Array.isArray(payload.tags) ? payload.tags : [];
    const categoryFromTags = tags[0]?.name || "";

    const job = new Job({
      id: nextId,
      title: payload.title || payload.role,
      company: payload.company,
      location: payload.location,
      category: payload.category || categoryFromTags || "General",
      description: payload.description,
      logo: payload.logo || "",
      type: payload.type || "Full Time",
      tags,
    });

    await job.save();
    res.status(201).json(mapJobToLegacyShape(job));
  } catch {
    res.status(400).json({ error: "Failed to create job" });
  }
});

// Delete a job by numeric ID
app.delete("/api/jobs/:id", async (req, res) => {
  try {
    const rawId = req.params.id;
    const numericId = Number(rawId);
    const deleted =
      (Number.isNaN(numericId) ? null : await Job.findOneAndDelete({ id: numericId })) ||
      (mongoose.Types.ObjectId.isValid(rawId) ? await Job.findByIdAndDelete(rawId) : null);
    if (!deleted) return res.status(404).json({ error: "Job not found" });
    res.status(204).end();
  } catch {
    res.status(500).json({ error: "Failed to delete job" });
  }
});

// Submit job application
app.post("/api/applications", async (req, res) => {
  try {
    const payload = req.body || {};
    const nextId = await getNextId(Application);

    const application = new Application({
      id: nextId,
      job_id: Number(payload.job_id),
      name: payload.name,
      email: payload.email,
      resume_link: payload.resume_link,
      cover_note: payload.cover_note,
    });

    await application.save();
    res.status(201).json(application);
  } catch {
    res.status(400).json({ error: "Failed to submit application" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
