import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import LaserFlow from './LaserFlow';
import Cubes from './Cubes';
import photo from '../assets/moi.png';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      style={{ backgroundColor: 'transparent' }}>

      {/* LaserFlow en fond absolu */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
       <LaserFlow
          color="#CF9EFF"
          horizontalBeamOffset={0.1}
          verticalBeamOffset={0.0}
          horizontalSizing={0.5}
          verticalSizing={2}
          wispDensity={1}
          wispSpeed={15}
          wispIntensity={5}
          flowSpeed={0.50}
          flowStrength={0.25}
          fogIntensity={1}
          fogScale={0.3}
          fogFallSpeed={0.6}
          decay={1.1}
          falloffStart={1.2}
        />
      </div>

      {/* Cubes par dessus LaserFlow */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
        <Cubes
          gridSize={14}
          maxAngle={45}
          radius={3}
          borderStyle="1px solid rgba(139, 92, 246, 0.4)"
          faceColor="transparent"
          rippleColor="#0ea5e9"
          rippleSpeed={1.5}
          autoAnimate
          rippleOnClick
        />
      </div>

      {/* Contenu */}
      <div className="container mx-auto px-6" style={{ position: 'relative', zIndex: 2, pointerEvents: 'none' }}>
        <div className="max-w-4xl mx-auto text-center">

          <motion.div 
  initial={{ scale: 0, rotate: -180 }}
  animate={{ scale: 1, rotate: 0 }}
  transition={{ duration: 0.8, type: 'spring' }}
  style={{ 
    width: '128px',
    height: '128px',
    margin: '0 auto 2rem',
    borderRadius: '50%',
    padding: '4px',
    background: 'linear-gradient(to right, #0ea5e9, #8b5cf6)'
  }}
>
  <div
    style={{
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      background: '#060010',
      overflow: 'hidden' // 🔴 important pour garder le rond
    }}
  >
    <img
      src={photo}
      alt="Ma photo"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }}
    />
  </div>
</motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-gradient">{personalInfo.name}</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-6">
            {personalInfo.title}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            className="inline-block glass px-6 py-3 rounded-full mb-8">
            <p className="text-primary font-semibold">Alternance: {personalInfo.alternance}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-8" style={{ pointerEvents: 'auto' }}>
            <a href={`mailto:${personalInfo.email}`} className="glass px-4 py-2 rounded-lg hover:bg-primary/20 transition-all flex items-center gap-2" style={{ color: 'white', textDecoration: 'none' }}>
              <Mail size={18} /><span className="hidden md:inline">{personalInfo.email}</span>
            </a>
            <a href={`tel:${personalInfo.phone}`} className="glass px-4 py-2 rounded-lg hover:bg-primary/20 transition-all flex items-center gap-2" style={{ color: 'white', textDecoration: 'none' }}>
              <Phone size={18} /><span className="hidden md:inline">{personalInfo.phone}</span>
            </a>
            <div className="glass px-4 py-2 rounded-lg flex items-center gap-2">
              <MapPin size={18} /><span>{personalInfo.location}</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
            className="flex justify-center gap-4" style={{ pointerEvents: 'auto' }}>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
              className="glass p-4 rounded-full hover:bg-primary/20 transition-all hover:scale-110" style={{ color: 'white', textDecoration: 'none' }}>
              <Github size={24} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
              className="glass p-4 rounded-full hover:bg-primary/20 transition-all hover:scale-110" style={{ color: 'white', textDecoration: 'none' }}>
              <Linkedin size={24} />
            </a>
            <button className="glass p-4 rounded-full hover:bg-primary/20 transition-all hover:scale-110" style={{ color: 'white', cursor: 'pointer' }}>
              <Download size={24} />
            </button>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2" style={{ zIndex: 3, pointerEvents: 'none' }}>
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-primary rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
