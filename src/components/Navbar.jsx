import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center shadow-md">
      {/* Doctor's name aligned to the left */}
      <Link to="/" className="text-white text-lg font-medium hover:text-blue-300 transition duration-300">
        Dr. Shahid Faraz
      </Link>

      {/* Book Appointment button aligned to the right */}
      <Link
        to="/book-appointment"
        className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300 text-sm"
      >
        Book an Appointment
      </Link>
    </nav>
  );
};

export default Navbar;
