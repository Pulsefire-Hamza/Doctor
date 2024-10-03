import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-6 flex justify-between items-center">
      {/* Wrap the doctor's name in a Link component */}
      <Link to="/" className="text-white text-2xl font-bold">
        Dr. Shahid Faraz
      </Link>
      <Link
        to="/book-appointment"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 text-sm md:text-lg"
      >
        Book an Appointment
      </Link>
    </nav>
  );
};

export default Navbar;
