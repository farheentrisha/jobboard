import React, { useState } from 'react';
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
  { id: 1, name: "Design", jobs: 235, icon: <PenTool size={32} /> },
  { id: 2, name: "Sales", jobs: 756, icon: <BarChart2 size={32} /> },
  { id: 3, name: "Marketing", jobs: 140, icon: <Megaphone size={32} /> },
  { id: 4, name: "Finance", jobs: 325, icon: <Wallet size={32} /> },
  { id: 5, name: "Technology", jobs: 436, icon: <Monitor size={32} /> },
  { id: 6, name: "Engineering", jobs: 542, icon: <Code size={32} /> },
  { id: 7, name: "Business", jobs: 211, icon: <Briefcase size={32} /> },
  { id: 8, name: "Human Resource", jobs: 346, icon: <Users size={32} /> },
];

const ExploreCategory = () => {
  // Track which card was clicked
  const [activeId, setActiveId] = useState(null);

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
          {categories.map((cat) => {
            const isActive = activeId === cat.id;
            
            return (
              <div 
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                className={`group p-8 border transition-all duration-300 cursor-pointer flex flex-col gap-6
                  ${isActive 
                    ? 'bg-indigo-600 border-indigo-600 text-white shadow-xl -translate-y-1' 
                    : 'bg-white border-gray-100 text-gray-900 hover:bg-indigo-600 hover:border-indigo-600 hover:text-white hover:shadow-xl hover:-translate-y-1'
                  }`}
              >
                {/* Icon Logic */}
                <div className={`transition-colors duration-300 
                  ${isActive ? 'text-white' : 'text-indigo-600 group-hover:text-white'}`}>
                  {cat.icon}
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">{cat.name}</h3>
                  
                  <div className="flex justify-between items-center">
                    <p className={`transition-colors duration-300 
                      ${isActive ? 'text-indigo-100' : 'text-gray-400 group-hover:text-indigo-100'}`}>
                      {cat.jobs} jobs available
                    </p>
                    
                    <ArrowRight 
                      size={20} 
                      className={`transition-all duration-300 group-hover:translate-x-2 
                        ${isActive ? 'text-white' : 'text-gray-900 group-hover:text-white'}`} 
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExploreCategory;