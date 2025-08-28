import React, { Suspense } from 'react';
import SiteNavbar from './components/SiteNavbar';
const Hero3D = React.lazy(() => import('./components/Hero3D'));
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <SiteNavbar />
      <main>
        <section id="home">
          <Suspense fallback={<div style={{height: 360}} />}> 
            <Hero3D />
          </Suspense>
        </section>

        <section id="about" className="py-5">
          <div className="container">
            <About />
          </div>
        </section>

        <Projects />
        <Skills />
        <Contact />   {/* ✅ Contact Section */}
      </main>
      <Footer />
    </>
  );
}


export default App;
