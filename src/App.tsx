import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Awards from './components/Awards';

function App() {
  useEffect(() => {
    // Update the document title
    document.title = '西安芯柔微纳科技 - 仿生微纳功能材料助力全球节能减排';
    
    // Change favicon dynamically (optional)
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link) {
      link.href = '/favicon.ico';
    }
  }, []);

  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Services />
      <About />
      <Awards />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;