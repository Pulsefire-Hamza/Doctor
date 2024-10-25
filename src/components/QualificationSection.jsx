import React from 'react';
import { FaGraduationCap, FaClipboardCheck } from 'react-icons/fa';

const QualificationsSection = () => {
  return (
    <section className="py-16 bg-gray-50 text-black">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">
          Qualifications & Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Education */}
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl hover:scale-105">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 flex items-center justify-center">
              <FaGraduationCap className="mr-2 text-blue-600" />
              Education
            </h3>
            <ul className="list-disc list-inside space-y-4 text-left">
              <li>
                <div className="font-bold">MBBS</div>
              </li>
              <li>
                <div className="font-bold">MPH (UHS)</div>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl hover:scale-105">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 flex items-center justify-center">
              <FaClipboardCheck className="mr-2 text-green-600" />
              Certifications
            </h3>
            <ul className="list-disc list-inside space-y-4 text-left">
              <li>
                <div className="font-bold">Physician</div>
                <span className="text-gray-700">Faraz Hospital Bahawalpur</span>
              </li>
              <li>
                <div className="font-bold">Former Head</div>
                <span className="text-gray-700">Bahawalpur Victoria Hospital</span>
              </li>
              <li>
                <div className="font-bold">Former Principal</div>
                <span className="text-gray-700">GPMS Bahawalpur</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualificationsSection;
