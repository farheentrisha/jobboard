const Navbar = () => {
  return (
    <nav className="w-full px-6 md:px-12 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-indigo-600 rounded-full"></div>
        <span className="text-xl font-bold text-gray-800">QuickHire</span>
      </div>

      {/* Links */}
      <div className="hidden md:flex items-center gap-8 text-gray-600">
        <a href="#" className="hover:text-indigo-600">Find Jobs</a>
        <a href="#" className="hover:text-indigo-600">Browse Companies</a>
      </div>

      {/* Auth */}
      <div className="flex items-center gap-4">
        <button className="text-indigo-600 font-medium hidden sm:block">
          Login
        </button>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;