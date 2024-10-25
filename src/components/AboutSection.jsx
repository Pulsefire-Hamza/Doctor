import React from 'react';
import { FaAward, FaStethoscope, FaUserMd } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const AboutSection = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-center lg:justify-between px-8 py-20 bg-gradient-to-br from-blue-700 via-gray-800 to-blue-900 text-white overflow-hidden">
      
      {/* Darker Animated Background Shapes */}
      <div className="absolute -top-24 -left-24 w-60 h-60 bg-gradient-to-r from-blue-900 to-blue-700 rounded-full opacity-50 animate-pulse" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full opacity-40 animate-pulse" />

      {/* Doctor's Image with Hover Effect */}
      <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0 relative z-10">
        <img 
          src="https://firebasestorage.googleapis.com/v0/b/docto-f5d36.appspot.com/o/faraz.jpg?alt=media&token=04a3bc86-7395-4b8d-9df7-134fcf32a839" 
          alt="Dr. Shahid Faraz"
          className="rounded-full w-48 h-48 lg:w-60 lg:h-60 object-cover shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-300 ease-out"
        />
      </div>

      {/* Doctor's Information */}
      <div className="text-center lg:text-left lg:w-1/2 relative z-10 space-y-6">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight">
          Dr. Shahid Faraz
        </h1>

        {/* Animated Expertise Icons */}
        <div className="flex justify-center lg:justify-start space-x-6 my-6">
          <div className="flex flex-col items-center group">
            <FaAward className="text-3xl text-yellow-300 group-hover:text-yellow-400 transition-colors duration-300" />
            <span className="mt-2 text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300">15+ Years</span>
          </div>
          <div className="flex flex-col items-center group">
            <FaStethoscope className="text-3xl text-green-300 group-hover:text-green-400 transition-colors duration-300" />
            <span className="mt-2 text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300">Patient-Centered Care</span>
          </div>
          <div className="flex flex-col items-center group">
            <FaUserMd className="text-3xl text-red-300 group-hover:text-red-400 transition-colors duration-300" />
            <span className="mt-2 text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300">Expert Physician</span>
          </div>
        </div>

        {/* Decorative Divider with Hidden Class on Large Screens */}
        <div className="w-2/3 lg:hidden mx-auto border-t-2 border-white my-6 opacity-50 hover:opacity-100 transition-opacity duration-300" />

        {/* Action Button with Hover Effect */}
        <div className="flex justify-center lg:justify-start mt-6">
          <Link to="/book-appointment">
            <button className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-full shadow-md hover:bg-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300">
              Book Appointment
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
