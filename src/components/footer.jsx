import React from "react";
import { Facebook, Instagram, Globe, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#202430] text-gray-400 py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm rotate-45"></div>
              </div>
              <span className="text-white text-2xl font-bold">QuickHire</span>
            </div>
            <p className="text-sm leading-relaxed">
              Great platform for the job seeker that passionate about startups. Find your dream job easier.
            </p>
          </div>

          {/* Column 2: About Links */}
          <div>
            <h4 className="text-white font-bold mb-6">About</h4>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Companies</li>
              <li className="hover:text-white cursor-pointer transition-colors">Pricing</li>
              <li className="hover:text-white cursor-pointer transition-colors">Terms</li>
              <li className="hover:text-white cursor-pointer transition-colors">Advice</li>
              <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
            </ul>
          </div>

          {/* Column 3: Resources Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Help Docs</li>
              <li className="hover:text-white cursor-pointer transition-colors">Guide</li>
              <li className="hover:text-white cursor-pointer transition-colors">Updates</li>
              <li className="hover:text-white cursor-pointer transition-colors">Contact Us</li>
            </ul>
          </div>

          {/* Column 4: Newsletter Subscription */}
          <div>
            <h4 className="text-white font-bold mb-6">Get job notifications</h4>
            <p className="text-sm mb-6">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-white px-4 py-3 outline-none text-gray-900 w-full"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 font-bold transition-all whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm">
            2021 @ QuickHire. All rights reserved.
          </p>
          
          {/* Social Icons */}
          <div className="flex gap-4">
            <SocialIcon icon={<Facebook size={18} />} />
            <SocialIcon icon={<Instagram size={18} />} />
            <SocialIcon icon={<Globe size={18} />} />
            <SocialIcon icon={<Linkedin size={18} />} />
            <SocialIcon icon={<Twitter size={18} />} />
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper component for social icons to keep code clean
const SocialIcon = ({ icon }) => (
  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white cursor-pointer transition-all duration-300">
    {icon}
  </div>
);

export default Footer;