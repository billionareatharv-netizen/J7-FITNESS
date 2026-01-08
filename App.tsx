import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Membership } from './components/Membership';
import { Motivation } from './components/Motivation';
import { MapSection } from './components/MapSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { StickyMobileCTA } from './components/StickyMobileCTA';

function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans antialiased selection:bg-j7red selection:text-white md:pb-0">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Membership />
        <Motivation />
        <MapSection />
        <ContactSection />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}

export default App;