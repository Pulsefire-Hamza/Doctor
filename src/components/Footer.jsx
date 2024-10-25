import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm">
          {/* Contact Information */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
            <p className="hover:text-white transition duration-300"><strong>Phone:</strong> (123) 456-7890</p>
            <p className="hover:text-white transition duration-300"><strong>Email:</strong> contact@doctor.com</p>
            <p className="hover:text-white transition duration-300"><strong>Address:</strong> 123 Main St, City, Country</p>
          </div>

          {/* Social Media */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://www.facebook.com/drshahid.faraz.3" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="w-5 h-5 text-[#4267B2] hover:text-blue-400 transition duration-300" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-5 h-5 text-[#C13584] hover:text-pink-400 transition duration-300" />
            </a>
          </div>
        </div>

        <div className="text-center mt-6 border-t border-gray-700 pt-4">
          <p className="text-xs md:text-sm">&copy; 2024 Dr. Shahid Faraz. All rights reserved.</p>
          <p className="text-xs md:text-sm">
            Website created by{' '}
            <a
              href="https://devrexdigital.com" // Replace with your company's website
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline transition duration-300"
            >
              Devrex Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
