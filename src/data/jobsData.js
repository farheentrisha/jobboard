export const jobs = [
  {
    id: 1,
    company: "Revolut",
    logo: "https://cdn.simpleicons.org/revolut/000000",
    role: "Email Marketing",
    location: "Madrid, Spain",
    description: "Revolut is looking for Email Marketing to help team ma ...",
    type: "Full Time",
    tags: [
      { name: "Marketing", color: "bg-orange-50 text-orange-400" },
      { name: "Design", color: "bg-green-50 text-green-400" },
    ],
  },
  {
    id: 2,
    company: "Dropbox",
    logo: "https://cdn.simpleicons.org/dropbox/0061FF",
    role: "Brand Designer",
    location: "San Fransisco, US",
    description: "Dropbox is looking for Brand Designer to help the team t ...",
    type: "Full Time",
    tags: [
      { name: "Design", color: "bg-green-50 text-green-400" },
      { name: "Business", color: "bg-blue-50 text-blue-400" },
    ],
  },
  {
    id: 3,
    company: "Pitch",
    logo: "https://cdn.simpleicons.org/pitch/000000",
    role: "Email Marketing",
    location: "Berlin, Germany",
    description: "Pitch is looking for Customer Manager to join marketing t ...",
    type: "Full Time",
    tags: [{ name: "Marketing", color: "bg-orange-50 text-orange-400" }],
  },
  {
    id: 4,
    company: "Blinklist",
    logo: "https://cdn.simpleicons.org/blinkist/00D791",
    role: "Visual Designer",
    location: "Granada, Spain",
    description: "Blinkist is looking for Visual Designer to help team desi ...",
    type: "Full Time",
    tags: [{ name: "Design", color: "bg-green-50 text-green-400" }],
  },
  {
    id: 5,
    company: "ClassPass2",
    logo: "https://cdn.simpleicons.org/classpass/000000",
    role: "Product Designer",
    location: "Manchester, UK",
    description: "ClassPass is looking for Product Designer to help us...",
    type: "Full Time",
    tags: [
      { name: "Marketing", color: "bg-orange-50 text-orange-400" },
      { name: "Design", color: "bg-green-50 text-green-400" },
    ],
  },
  {
    id: 6,
    company: "Canva",
    logo: "https://cdn.simpleicons.org/canva/00C4CC",
    role: "Lead Designer",
    location: "Ontario, Canada",
    description: "Canva is looking for Lead Engineer to help develop n ...",
    type: "Full Time",
    tags: [
      { name: "Design", color: "bg-green-50 text-green-400" },
      { name: "Business", color: "bg-blue-50 text-blue-400" },
    ],
  },
  {
    id: 7,
    company: "GoDaddy",
    logo: "https://cdn.simpleicons.org/godaddy/1BDBE4",
    role: "Brand Strategist",
    location: "Marseille, France",
    description: "GoDaddy is looking for Brand Strategist to join the team...",
    type: "Full Time",
    tags: [{ name: "Marketing", color: "bg-orange-50 text-orange-400" }],
  },
  {
    id: 8,
    company: "Twitter",
    logo: "https://cdn.simpleicons.org/twitter/1DA1F2",
    role: "Data Analyst",
    location: "San Diego, US",
    description: "Twitter is looking for Data Analyst to help team desi ...",
    type: "Full Time",
    tags: [{ name: "Technology", color: "bg-red-50 text-red-400" }],
  },
];

export const latestJobs = [
  { id: 1, role: "Social Media Assistant", company: "Nomad", location: "Paris, France", logo: "https://cdn.simpleicons.org/nomad/2EAD6B" },
  { id: 2, role: "Social Media Assistant", company: "Netlify", location: "Paris, France", logo: "https://cdn.simpleicons.org/netlify/00ADBB" },
  { id: 3, role: "Brand Designer", company: "Dropbox", location: "San Fransisco, USA", logo: "https://cdn.simpleicons.org/dropbox/0061FF" },
  { id: 4, role: "Brand Designer", company: "Maze", location: "San Fransisco, USA", logo: "https://cdn.simpleicons.org/maze/183153" },
  { id: 5, role: "Interactive Developer", company: "Terraform", location: "Hamburg, Germany", logo: "https://cdn.simpleicons.org/terraform/844FBA" },
  { id: 6, role: "Interactive Developer", company: "Udacity", location: "Hamburg, Germany", logo: "https://cdn.simpleicons.org/udacity/01B3E3" },
  { id: 7, role: "HR Manager", company: "Packer", location: "Lucern, Switzerland", logo: "https://cdn.simpleicons.org/packer/000000" },
  { id: 8, role: "HR Manager", company: "Webflow", location: "Lucern, Switzerland", logo: "https://cdn.simpleicons.org/webflow/4353FF" },
];

const latestDetailsById = Object.fromEntries(
  latestJobs.map((job) => [
    String(job.id),
    {
      ...job,
      description: `${job.company} is hiring a ${job.role} in ${job.location}.`,
      type: "Full Time",
      tags: [{ name: "Latest", color: "bg-blue-50 text-blue-400" }],
    },
  ])
);

export const findJobByRoute = (id, source = "featured") => {
  if (source === "latest") return latestDetailsById[String(id)] || null;
  return jobs.find((job) => String(job.id) === String(id)) || null;
};
