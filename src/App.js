import React from 'react';
import Header from './components/header';
import Portfolio from './components/Portofolio';
import Services from './components/Services';
import ContactSection from './components/ContactSection';
import About from './components/About';

function App() {
  return (
    <div>
      <Header />
      <main>
        <ContactSection />
        <About />
        <Portfolio />
        <Services /> 

      </main>
    </div>
  );
}

export default App;
