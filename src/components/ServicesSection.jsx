import React from 'react';

const Service = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-8">Our Services</h1>
        <div className="flex flex-col md:flex-row justify-around">
          {/* Easy Appointment */}
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 md:mb-0 md:w-1/3 mx-4 flex flex-col items-center">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/docto-f5d36.appspot.com/o/Appointment-icon.png?alt=media&token=f82ddca2-f1e1-4b85-bee0-fd44615cb85e"
              alt="Easy Appointment"
              className="w-24 h-24 mb-4"
            />
            <h2 className="text-2xl font-semibold mb-4">Easy Appointment</h2>
            <p className="text-gray-700">
              Book your appointment easily with our simple online system. Choose the doctor and time that suits you best, and get an appointment in just a few clicks.
            </p>
          </div>
          {/* Emergency */}
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 md:mb-0 md:w-1/3 mx-4 flex flex-col items-center">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/docto-f5d36.appspot.com/o/Emergency-icon.png?alt=media&token=4971349d-72d6-4fb0-aff2-74d00912889f"
              alt="Emergency"
              className="w-24 h-24 mb-4"
            />
            <h2 className="text-2xl font-semibold mb-4">Emergency</h2>
            <p className="text-gray-700">
              Our emergency team is ready to provide immediate and expert care for critical situations. Rest assured that you’ll receive prompt attention from our skilled professionals.
            </p>
          </div>
          {/* 24/7 Service */}
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 md:mb-0 md:w-1/3 mx-4 flex flex-col items-center">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/docto-f5d36.appspot.com/o/7-Service-icon.png?alt=media&token=760fcece-0500-4a1a-bab7-aaacf800c37e"
              alt="24/7 Service"
              className="w-24 h-24 mb-4"
            />
            <h2 className="text-2xl font-semibold mb-4">24/7 Service</h2>
            <p className="text-gray-700">
              Our healthcare services are available round-the-clock. Whether it’s day or night, you can rely on our doctors and staff to provide the care you need and book appointments anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
