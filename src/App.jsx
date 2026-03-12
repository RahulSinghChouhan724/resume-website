import React, { Suspense } from 'react';
import SiteNavbar from './components/SiteNavbar';
const HeroCyberpunk = React.lazy(() => import('./components/HeroCyberpunk'));
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <>
      <SiteNavbar />
      <main>
        <section id="home">
          <Suspense fallback={<div style={{height: '100vh', background: 'var(--bg-dark)'}} />}> 
            <HeroCyberpunk />
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
      <BackToTop />
    </>
  );
}

export default App;
