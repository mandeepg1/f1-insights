import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Info from './components/Info';
import Highlights from './components/Highlights';
import Footer from './components/Footer';
import Teams from './pages/Teams';
import Drivers from './pages/Drivers';
import ContactUs from './pages/ContactUs';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
        <Route
          path="/"
          element={
          <div>
            <Hero />
            <Info />
            <Highlights />
            <Footer />
          </div>
         }
         />
          <Route path="/about" element={<About />} />
          <Route path="/highlights" element={<Highlights />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
