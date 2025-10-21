import React, { useState, useEffect } from "react";
import Navbar from './componenets/Navbar/Navbar';
import Hero from './componenets/Hero/Hero';
import About from './componenets/About/About';
import Projects from './componenets/Projects/Projects';
import Ew from './componenets/EducationWork.jsx/Ew';
import Testimonials from './componenets/Testimonials.jsx/Testimonials';
import Contact from './componenets/Contact/Contact';
import { SmoothCursor } from './componenets/ui/SmoothCursor';
import Footer from './componenets/Footer/Footer';
import Preloader from "./componenets/ui/Preloader";
const App = () => {
  const [loading, setLoading] = useState(true);
               
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // adjust time if needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='relative'>
      {loading && <Preloader/>}
      {!loading && (
        <div className='container mx-auto max-w-7xl'>
          <SmoothCursor/>
          <Navbar/>
          <Hero/>
          <About/>
          <Projects/>
          <Ew/>
          <Testimonials/>
          <Contact/>
          <Footer/>
        </div>
      )}
    </div>
  );
};

export default App;
