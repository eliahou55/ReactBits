import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Scene3D from './components/Scene3D';
import './index.css';

function App() {
  return (
    <div className="relative min-h-screen">
      <Scene3D />
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;