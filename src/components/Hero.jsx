import heroImg from "../assets/Pic.png";
import bgPattern from "../assets/Pattern.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (search.trim()) params.set("search", search.trim());
    if (location.trim()) params.set("location", location.trim());
    const query = params.toString();
    navigate(query ? `/jobs?${query}` : "/jobs");
  };

  return (
    <section
      className="relative min-h-[85vh] flex items-center bg-gray-50 overflow-hidden"
      style={{
        backgroundImage: `url(${bgPattern})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right center",
      }}
    >
      {/* 1. Ensure the container is flex and items are centered vertically */}
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
        
        {/* LEFT CONTENT */}
        <div className="z-10 w-full md:w-1/2 py-12 md:py-20">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-[1.1]">
            Discover <br />
            more than{" "}
            <span className="text-blue-600">5000+ Jobs</span>
          </h1>

          <p className="mt-6 text-lg text-gray-500 max-w-md">
            Great platform for the job seeker searching for new career
            heights and passionate about startups.
          </p>

          {/* SEARCH BAR */}
          <form
            onSubmit={handleSearch}
            className="mt-10 bg-white shadow-2xl rounded-xl flex flex-col md:flex-row items-center p-3 gap-2 border border-gray-100 max-w-2xl"
          >
            <input
              type="text"
              placeholder="Job title or keyword"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-3 outline-none text-gray-700 border-b md:border-b-0 md:border-r border-gray-100"
            />
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-3 outline-none text-gray-700"
            />
            <button type="submit" className="bg-indigo-600 text-white px-8 py-4 rounded-lg w-full md:w-auto font-bold whitespace-nowrap hover:bg-indigo-700 transition-all">
              Search my job
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-400">
            <span className="font-semibold text-gray-500">Popular:</span> UI Designer, UX Researcher, Android, Admin
          </p>
        </div>

        {/* RIGHT IMAGE - Now part of the flex flow, not absolute */}
        <div className="w-full md:w-1/2 flex justify-end items-end h-full self-end">
          <img
            src={heroImg}
            alt="Hero"
            // Use 'max-h' to ensure it doesn't break the section height
            className="w-auto max-h-[70vh] md:max-h-[85vh] object-contain object-bottom"
          />
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
