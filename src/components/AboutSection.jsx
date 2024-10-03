import React from 'react';

const AboutSection = () => {
  return (
    <section 
      className="relative text-white py-16 bg-cover bg-center"
      style={{ backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/docto-f5d36.appspot.com/o/%E2%80%94Pngtree%E2%80%94medical%20doctor%20science%20background_968711.jpg?alt=media&token=8a57db49-8e4c-459e-b22f-b14eb4973eea")' }} // Replace with your background image URL
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for readability */}
      <div className="relative container mx-auto px-6 text-center md:text-left flex flex-col md:flex-row items-center">
        {/* Profile Picture */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0 flex justify-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/docto-f5d36.appspot.com/o/faraz.jpg?alt=media&token=04a3bc86-7395-4b8d-9df7-134fcf32a839" // Replace with your doctor's profile picture URL
            alt="Dr. Shahid Faraz"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white object-cover shadow-lg"
          />
        </div>
        {/* Biography */}
        <div className="w-full md:w-2/3 md:pl-8">
          <h2 className="text-3xl font-bold mb-4">Dr. Shahid Faraz</h2>
          <p className="text-lg mb-4">
            Dr. Shahid Faraz is a highly respected physician with over 20 years of experience. Known for his dedication and expertise, Dr. Shahid Faraz has earned a reputation for providing exceptional care and innovative treatment solutions. He has a passion for internal medicine and is committed to staying at the forefront of medical advancements.
          </p>
          <p className="text-lg mb-4">
            With numerous qualifications, including an MBBS, FCPS, and specialization in internal medicine, Dr. Shahid Faraz is equipped to handle complex cases with a compassionate approach. He is also an active member of several professional associations and frequently contributes to research and medical discussions, ensuring that his patients benefit from the latest in medical science.
          </p>
          <p className="text-lg">
            Dr. Shahid Faraz's approach to healthcare combines expertise with empathy, ensuring that each patient receives personalized care that addresses both physical and emotional well-being.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
