import React from 'react';
import { 
  ArrowRight, 
  PenTool, 
  BarChart2, 
  Megaphone, 
  Wallet, 
  Monitor, 
  Code, 
  Briefcase, 
  Users 
} from 'lucide-react';

const categories = [
  { name: "Design", jobs: 235, icon: <PenTool size={32} /> },
  { name: "Sales", jobs: 756, icon: <BarChart2 size={32} /> },
  { name: "Marketing", jobs: 140, icon: <Megaphone size={32} />, active: true },
  { name: "Finance", jobs: 325, icon: <Wallet size={32} /> },
  { name: "Technology", jobs: 436, icon: <Monitor size={32} /> },
  { name: "Engineering", jobs: 542, icon: <Code size={32} /> },
  { name: "Business", jobs: 211, icon: <Briefcase size={32} /> },
  { name: "Human Resource", jobs: 346, icon: <Users size={32} /> },
];

const ExploreCategory = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Explore by <span className="text-blue-500">category</span>
          </h2>
          <button className="flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all">
            Show all jobs <ArrowRight size={20} />
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <div 
              key={index}
              className={`group p-8 border transition-all duration-300 cursor-pointer flex flex-col gap-6
                ${cat.active 
                  ? 'bg-indigo-600 border-indigo-600 text-white' 
                  : 'bg-white border-gray-100 text-gray-900 hover:border-indigo-600 hover:shadow-xl'
                }`}
            >
              <div className={`${cat.active ? 'text-white' : 'text-indigo-600'}`}>
                {cat.icon}
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">{cat.name}</h3>
                <div className="flex justify-between items-center">
                  <p className={`${cat.active ? 'text-indigo-100' : 'text-gray-400'}`}>
                    {cat.jobs} jobs available
                  </p>
                  <ArrowRight 
                    size={20} 
                    className={`transition-transform group-hover:translate-x-2 
                      ${cat.active ? 'text-white' : 'text-gray-900'}`} 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExploreCategory;