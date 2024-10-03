import React, { useState } from 'react';

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    gender: 'Male',
    phone: '',
    appointmentDate: '',
    appointmentTime: '',
    reason: '',
    symptoms: '',
    insurance: '',
    feePaid: false,
    patientType: 'New',
    lastConsultation: '',
    consent: false,
  });

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
      feePaid,
      patientType,
      lastConsultation,
    } = formData;

    if (!feePaid) {
      alert('Please confirm that you have paid the consultation fee.');
      return;
    }

    const consultationFee = '1000 PKR';
    const bankDetails = `
      <strong>Bank: </strong>ABC Bank<br>
      <strong>Account No: </strong>123456789<br>
      <strong>Branch: </strong>XYZ
    `;

    const whatsappMessage = `Hello, I would like to book an appointment.%0A%0A*Patient Information:*%0AFull Name: ${fullName}%0ADate of Birth: ${dob}%0AGender: ${gender}%0APhone: ${phone}%0A%0A*Appointment Details:*%0AAppointment Date: ${appointmentDate}%0AAppointment Time: ${appointmentTime}%0AReason: ${reason}%0A%0A*Additional Information:*%0ASymptoms/Comments: ${symptoms}%0AInsurance Details: ${insurance}%0A%0A*Patient Type:* ${patientType}%0A*Last Consultation:* ${lastConsultation || 'N/A'}%0A%0A*Consultation Fee:* ${consultationFee}%0A*Bank Details:* ${bankDetails}%0A%0A_Please send your payment screenshot to this number for consultation confirmation._`;

    const whatsappNumber = '923054122637';

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div
      className="min-h-screen p-4 flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/docto-f5d36.appspot.com/o/bg%20book.jpg?alt=media&token=ec0d405c-fd9b-4137-8121-aeee135ba53f)',
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full border border-gray-200">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-blue-600">Book an Appointment</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Patient Information */}
          <h2 className="text-xl font-semibold border-b-2 border-blue-500 pb-2">Patient Information</h2>

          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Appointment Details */}
          <h2 className="text-xl font-semibold border-b-2 border-blue-500 pb-2">Appointment Details</h2>

          <div>
            <label className="block text-sm font-medium mb-1">Appointment Date</label>
            <input
              type="date"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Appointment Time</label>
            <input
              type="time"
              name="appointmentTime"
              value={formData.appointmentTime}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Reason for Appointment</label>
            <select
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>Select a reason</option>
              <option value="Consultation">Consultation</option>
              <option value="Follow-up">Follow-up</option>
              <option value="Check-up">Check-up</option>
              <option value="Symptoms Assessment">Symptoms Assessment</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Additional Information */}
          <h2 className="text-xl font-semibold border-b-2 border-blue-500 pb-2">Additional Information</h2>

          <div>
            <label className="block text-sm font-medium mb-1">Symptoms/Comments</label>
            <textarea
              name="symptoms"
              value={formData.symptoms}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Are you a new or returning patient?</label>
            <select
              name="patientType"
              value={formData.patientType}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="New">New</option>
              <option value="Returning">Returning</option>
            </select>
          </div>

          {formData.patientType === 'Returning' && (
            <div>
              <label className="block text-sm font-medium mb-1">How long since your last consultation?</label>
              <select
                name="lastConsultation"
                value={formData.lastConsultation}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="1 week">1 Week</option>
                <option value="15 days">15 Days</option>
                <option value="1 month">1 Month</option>
                <option value="3 months">3 Months</option>
                <option value="6 months">6 Months</option>
                <option value="1 year">1 Year</option>
                <option value="More than 1 year">More than 1 Year</option>
              </select>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium mb-1">Insurance Provider (if applicable)</label>
            <input
              type="text"
              name="insurance"
              value={formData.insurance}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Payment Confirmation */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="feePaid"
              checked={formData.feePaid}
              onChange={handleChange}
              required
              className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label className="ml-2 text-sm font-medium">I confirm I have paid the consultation fee (1000 PKR).</label>
          </div>

          {/* Bank Details Section */}
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Bank Details</h2>
            <p className="text-sm">Please make the payment to the following bank account:</p>
            <p className="text-sm"><strong>Bank:</strong> ABC Bank</p>
            <p className="text-sm"><strong>Account No:</strong> 123456789</p>
            <p className="text-sm"><strong>Branch:</strong> XYZ</p>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full mt-4 py-2 px-4 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;
