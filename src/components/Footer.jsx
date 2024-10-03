import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          {/* Contact Information */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <p><strong>Phone:</strong> (123) 456-7890</p>
            <p><strong>Email:</strong> contact@doctor.com</p>
            <p><strong>Address:</strong> 123 Main Street, City, Country</p>
          </div>

          {/* Social Media */}
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="w-5 h-5 text-[#4267B2] hover:text-blue-700" /> {/* Facebook color */}
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-5 h-5 text-[#C13584] hover:text-pink-500" /> {/* Instagram color */}
            </a>
          </div>
        </div>

        <div className="text-center mt-2">
          <p className="text-base">&copy; 2024 Dr. Shahid Faraz . All rights reserved.</p>
          <p className="text-base">
            Website created by{' '}
            <a
              href="https://devrex.com" // Replace with your company's website
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Devrex
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
