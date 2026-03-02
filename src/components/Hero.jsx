import heroImg from "../assets/Hero.png";
import bgPattern from "../assets/pattern.png";

const Hero = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: `url(${bgPattern})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right center",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Discover <br />
            more than{" "}
            <span className="text-blue-500">5000+ Jobs</span>
          </h1>

          <p className="mt-6 text-gray-500 max-w-md">
            Great platform for the job seeker that searching for new career
            heights and passionate about startups.
          </p>

          {/* SEARCH BAR */}
          <div className="mt-8 bg-white shadow-lg rounded-lg flex flex-col sm:flex-row items-center p-2 gap-2">
            <input
              type="text"
              placeholder="Job title or keyword"
              className="flex-1 px-4 py-3 outline-none"
            />
            <input
              type="text"
              placeholder="Florence, Italy"
              className="flex-1 px-4 py-3 outline-none"
            />
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-md w-full sm:w-auto hover:bg-indigo-700">
              Search my job
            </button>
          </div>

          {/* POPULAR */}
          <p className="mt-4 text-sm text-gray-400">
            Popular: UI Designer, UX Researcher, Android, Admin
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          <img
            src={heroImg}
            alt="Hero"
            className="w-full max-w-md md:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;