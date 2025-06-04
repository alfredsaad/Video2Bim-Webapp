import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky  ">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold text-blue-950"> <Link to="/">Scan to Bim</Link></div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-950">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-950">About</Link>
          <Link to="/test" className="text-gray-700 hover:text-blue-950">Test</Link>
          <Link to="/pricing" className="text-gray-700 hover:text-blue-950">Pricing</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-950">Contact</Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 focus:outline-none">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link to="/" className="block text-gray-500 hover:text-blue-950">Home</Link>
          <Link to="/about" className="block text-gray-500 hover:text-blue-950">About</Link>
          <Link to="/test" className="block text-gray-500 hover:text-blue-950">Test</Link>
          <Link to="/pricing" className="block text-gray-500 hover:text-blue-950">Pricing</Link>
          <Link to="/contact" className="block text-gray-500 hover:text-blue-950">Contact</Link>
        </div>
      )}
    </nav>
  );
}
export default Navbar;