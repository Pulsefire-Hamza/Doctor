import React from 'react';

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Patient Testimonials</h2>

        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Testimonial 1 */}
          <div className="bg-gray-500 p-8 rounded-lg shadow-lg border border-gray-400 flex flex-col items-center">
            <p className="text-white mb-6 italic">
              "Dr. Faraz is incredibly knowledgeable and attentive. He has helped me manage my chronic condition with great expertise."
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                {/* Optional: Insert profile image here */}
                <span className="text-gray-600 text-xl font-bold">JD</span>
              </div>
              <p className="font-semibold text-gray-800">John Doe</p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-500 p-8 rounded-lg shadow-lg border border-gray-400 flex flex-col items-center">
            <p className="text-white mb-6 italic">
              "Excellent care and personalized attention. I highly recommend Dr. Faraz for anyone needing a reliable specialist."
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                {/* Optional: Insert profile image here */}
                <span className="text-gray-600 text-xl font-bold">JS</span>
              </div>
              <p className="font-semibold text-gray-800">Jane Smith</p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-gray-500 p-8 rounded-lg shadow-lg border border-gray-400 flex flex-col items-center">
            <p className="text-white mb-6 italic">
              "Dr. Faraz’s expertise and empathy make him a standout physician. I always feel well-cared for during my visits."
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                {/* Optional: Insert profile image here */}
                <span className="text-gray-600 text-xl font-bold">EJ</span>
              </div>
              <p className="font-semibold text-gray-800">Emily Johnson</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
