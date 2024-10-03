import React from 'react';

const QualificationsSection = () => {
  return (
    <section className="relative py-16 bg-gray-100 text-black">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Qualifications & Certifications</h2>

        <div className="flex flex-col md:flex-row justify-center gap-10">
          {/* Education */}
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg border border-gray-300 flex-1 max-w-lg mx-auto transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-3xl font-semibold mb-4 border-b-2 border-gray-300 pb-2">Education</h3>
            <ul className="list-disc list-inside space-y-4 text-left">
              <li className="flex items-center">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">1</div>
                <div>
                  <div className="font-bold">MD in Internal Medicine</div>
                  <span className="text-gray-700">University of Example, 2008</span>
                </div>
              </li>
              <li className="flex items-center">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">2</div>
                <div>
                  <div className="font-bold">MBBS</div>
                  <span className="text-gray-700">College of Example, 2005</span>
                </div>
              </li>
              <li className="flex items-center">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">3</div>
                <div>
                  <div className="font-bold">Fellowship in Cardiology</div>
                  <span className="text-gray-700">Institute of Example, 2012</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg border border-gray-300 flex-1 max-w-lg mx-auto transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-3xl font-semibold mb-4 border-b-2 border-gray-300 pb-2">Certifications</h3>
            <ul className="list-disc list-inside space-y-4 text-left">
              <li className="flex items-center">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">1</div>
                <div>
                  <div className="font-bold">Certified Cardiac Specialist</div>
                  <span className="text-gray-700">Board of Example, 2015</span>
                </div>
              </li>
              <li className="flex items-center">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">2</div>
                <div>
                  <div className="font-bold">Advanced Trauma Life Support (ATLS)</div>
                  <span className="text-gray-700">Association of Example, 2018</span>
                </div>
              </li>
              <li className="flex items-center">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">3</div>
                <div>
                  <div className="font-bold">Member, American College of Physicians (ACP)</div>
                  <span className="text-gray-700">Since 2010</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualificationsSection;
