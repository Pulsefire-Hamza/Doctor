import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookAppointment from './pages/BookAppointment'; // Ensure this path is correct
import AboutSection from './components/AboutSection';
import QualificationsSection from './components/QualificationSection';
import Service from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>

        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AboutSection />
                <Service />
                <QualificationsSection />
                <TestimonialsSection />
                <Footer />
              </>
            }
          />
          <Route path="/book-appointment" element={<BookAppointment />} />
        </Routes>
     
    </Router>
  );
};

export default App;
