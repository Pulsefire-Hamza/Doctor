import React, { useState } from 'react';
import { FaUser, FaPhone, FaCalendarAlt, FaCommentDots, FaMoneyBillWave } from 'react-icons/fa';

const BookAppointment = () => {
  const [language, setLanguage] = useState('en'); // 'en' for English, 'ur' for Urdu

  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    gender: 'Male',
    phone: '',
    appointmentDate: '',
    appointmentTime: '',
    reason: 'Consultation', // Default value
    symptoms: '',
    insurance: '',
    feePaid: false,
    patientType: 'New',
    lastConsultation: '',
    consent: false,
  });

  const handleLanguageToggle = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'ur' : 'en'));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      fullName,
      dob,
      gender,
      phone,
      appointmentDate,
      appointmentTime,
      reason,
      symptoms,
      insurance,
      feePaid,
      patientType,
      lastConsultation,
    } = formData;

    if (!feePaid) {
      alert(language === 'en' ? 'Please confirm that you have paid the consultation fee.' : 'براہ کرم تصدیق کریں کہ آپ نے مشاورت کی فیس ادا کی ہے۔');
      return;
    }

    const consultationFee = '1500 PKR';
    
    // Constructing bank details for the message
    const bankDetails = `
      Bank: ABC Bank
      Account No: 123456789
      Branch: XYZ
    `.trim().replace(/\n/g, '%0A'); // Convert line breaks for URL

    const whatsappMessage = `Hello, I would like to book an appointment.%0A%0A*Patient Information:*%0AFull Name: ${encodeURIComponent(fullName)}%0ADate of Birth: ${encodeURIComponent(dob)}%0AGender: ${encodeURIComponent(gender)}%0APhone: ${encodeURIComponent(phone)}%0A%0A*Appointment Details:*%0AAppointment Date: ${encodeURIComponent(appointmentDate)}%0AAppointment Time: ${encodeURIComponent(appointmentTime)}%0AReason: ${encodeURIComponent(reason)}%0A%0A*Additional Information:*%0ASymptoms/Comments: ${encodeURIComponent(symptoms)}%0AInsurance Details: ${encodeURIComponent(insurance)}%0A%0A*Patient Type:* ${encodeURIComponent(patientType)}%0A*Last Consultation:* ${encodeURIComponent(lastConsultation || 'N/A')}%0A%0A*Consultation Fee:* ${encodeURIComponent(consultationFee)}%0A*Bank Details:* ${encodeURIComponent(bankDetails)}%0A%0A_Please send your payment screenshot to this number for consultation confirmation._`;

    const whatsappNumber = '923054122637'; // Ensure this is correct
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    
    window.open(whatsappURL, '_blank'); // Open WhatsApp
};

  const labels = {
    en: {
      title: 'Book an Appointment',
      patientInfo: 'Patient Information',
      fullName: 'Full Name',
      dob: 'Date of Birth',
      gender: 'Gender',
      phone: 'Phone Number',
      appointmentDetails: 'Appointment Details',
      appointmentDate: 'Appointment Date',
      appointmentTime: 'Appointment Time',
      reason: 'Reason for Appointment',
      symptoms: 'Symptoms or Comments',
      patientType: 'Patient Type',
      newPatient: 'New',
      returningPatient: 'Returning',
      lastConsultation: 'Last Consultation Date',
      feeConfirmation: 'I confirm that I have paid the consultation fee',
      bookAppointment: 'Book Appointment',
      male: 'Male',
      female: 'Female',
      other: 'Other',
      reasons: [
        'Consultation',
        'Regular Check-up',
        'Follow-up',
        'Emergency',
        'Vaccination',
        'Other',
      ],
      consultationFee: 'Consultation Fee: 1500 PKR',
      bankDetails: `Bank: ABC Bank\nAccount No: 123456789\nBranch: XYZ`,
    },
    ur: {
      title: 'ایک وقت طے کریں',
      patientInfo: 'مریض کی معلومات',
      fullName: 'مکمل نام',
      dob: 'پیدائش کی تاریخ',
      gender: 'صنف',
      phone: 'فون نمبر',
      appointmentDetails: 'وقت کی تفصیلات',
      appointmentDate: 'وقت کی تاریخ',
      appointmentTime: 'وقت کا وقت',
      reason: 'وقت کا مقصد',
      symptoms: 'علامات یا تبصرے',
      patientType: 'مریض کی قسم',
      newPatient: 'نیا',
      returningPatient: 'واپس آنے والا',
      lastConsultation: 'آخری مشورہ کی تاریخ',
      feeConfirmation: 'میں تصدیق کرتا ہوں کہ میں نے مشاورت کی فیس ادا کی ہے',
      bookAppointment: 'وقت طے کریں',
      male: 'مرد',
      female: 'عورت',
      other: 'دیگر',
      reasons: [
        'مشاورت',
        'باقاعدہ چیک اپ',
        'فالو اپ',
        'ایمرجنسی',
        'ویکسینیشن',
        'دیگر',
      ],
      consultationFee: 'مشاورت کی فیس: 1500 PKR',
      bankDetails: 'بینک: اے بی سی بینک\nاکاؤنٹ نمبر: 123456789\nبرانچ: XYZ',
    },
  };

  return (
    <div className="min-h-screen p-4 flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-black">
      <div className="bg-white p-10 rounded-xl shadow-xl max-w-3xl w-full border border-gray-200">
        
        <div className="flex justify-end mb-4">
          <button
            onClick={handleLanguageToggle}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none"
          >
            {language === 'en' ? 'اردو' : 'English'}
          </button>
        </div>

        <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-700">
          {labels[language].title}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Patient Information */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold border-b-2 border-blue-400 pb-2">
              {labels[language].patientInfo}
            </h2>

            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder={labels[language].fullName}
                className="w-full px-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Date of Birth Input */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {labels[language].dob} (e.g., 1990-01-01)
              </label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="YYYY-MM-DD" // Placeholder to indicate format
              />
              <span className="text-gray-500 text-xs">
                Please enter your date of birth in the format YYYY-MM-DD.
              </span>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {labels[language].gender}
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Male">{labels[language].male}</option>
                <option value="Female">{labels[language].female}</option>
                <option value="Other">{labels[language].other}</option>
              </select>
            </div>

            <div className="relative">
              <FaPhone className="absolute left-3 top-3 text-gray-400" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder={labels[language].phone}
                className="w-full px-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Appointment Details */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold border-b-2 border-blue-400 pb-2">
              {labels[language].appointmentDetails}
            </h2>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {labels[language].appointmentDate}
              </label>
              <input
                type="date"
                name="appointmentDate"
                value={formData.appointmentDate}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {labels[language].appointmentTime}
              </label>
              <input
                type="time"
                name="appointmentTime"
                value={formData.appointmentTime}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {labels[language].reason}
              </label>
              <select
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {labels[language].reasons.map((reason, index) => (
                  <option key={index} value={reason}>
                    {reason}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {labels[language].symptoms}
              </label>
              <textarea
                name="symptoms"
                value={formData.symptoms}
                onChange={handleChange}
                placeholder={labels[language].symptoms}
                className="w-full h-24 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
          </div>

          {/* Patient Type and Fee Confirmation */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold border-b-2 border-blue-400 pb-2">
              {labels[language].patientType}
            </h2>

            <div>
              <select
                name="patientType"
                value={formData.patientType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="New">{labels[language].newPatient}</option>
                <option value="Returning">{labels[language].returningPatient}</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {labels[language].lastConsultation}
              </label>
              <input
                type="date"
                name="lastConsultation"
                value={formData.lastConsultation}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                name="feePaid"
                checked={formData.feePaid}
                onChange={handleChange}
                required
                className="mr-2 leading-tight"
              />
              <label className="text-sm">{labels[language].feeConfirmation}</label>
            </div>
          </div>

          {/* Payment Information Section */}
          <div className="mt-4 p-4 border border-gray-300 rounded-lg bg-gray-50">
            <p className="font-semibold text-lg">{labels[language].consultationFee}</p>
            <p className="text-sm">{labels[language].bankDetails.split('\n').map((line, index) => (
              <span key={index}>
                {line}<br />
              </span>
            ))}</p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none"
          >
            {labels[language].bookAppointment}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;
