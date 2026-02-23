import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, Download, TrendingUp } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import LaserFlow from './LaserFlow';
import LiquidEther from './LiquidEther';
import { DataChart } from './DataChart';
import profileImage from '../assets/moiremovebg.png';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">

      {/* LiquidEther en fond */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <LiquidEther
          colors={['#FF6B35', '#F7931E', '#FDC830']}
          mouseForce={15}
          cursorSize={80}
          resolution={0.35}
          autoDemo
          autoSpeed={0.4}
          autoIntensity={1.5}
        />
      </div>

      {/* LaserFlow */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <LaserFlow
          color="#7fb5a4"
          horizontalBeamOffset={0.25}
          verticalBeamOffset={-0.4}
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

      {/* Graphiques décoratifs 3D - REPOSITIONNÉS DANS LES 4 COINS */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        {/* Graphique ligne - HAUT GAUCHE */}
        <motion.div
          initial={{ opacity: 0, x: -50, y: -50 }}
          animate={{ opacity: 0.6, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ 
            position: 'absolute',
            top: '90px',
            left: '30px',
            width: '200px',
            height: '100px',
            zIndex: 0
          }}
          className="hidden lg:block"
        >
          <DataChart type="line" />
        </motion.div>

        {/* Graphique barres - HAUT DROITE */}
        <motion.div
          initial={{ opacity: 0, x: 50, y: -50 }}
          animate={{ opacity: 0.6, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          style={{ 
            position: 'absolute',
            top: '90px',
            right: '30px',
            right: '20px',
            width: '200px',
            height: '100px',
            zIndex: 0
          }}
          className="hidden lg:block"
        >
          <DataChart type="bars" />
        </motion.div>

        {/* Graphique circulaire - BAS GAUCHE */}
        <motion.div
          initial={{ opacity: 0, x: -50, y: 50 }}
          animate={{ opacity: 0.6, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          style={{ 
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            width: '130px',
            height: '130px',
            zIndex: 0
          }}
          className="hidden lg:block"
        >
          <DataChart type="circle" />
        </motion.div>

        {/* Graphique radar - BAS DROITE */}
        <motion.div
          initial={{ opacity: 0, x: 50, y: 50 }}
          animate={{ opacity: 0.6, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          style={{ 
            position: 'absolute',
            bottom: '60px',
            right: '20px',
            width: '130px',
            height: '130px',
            zIndex: 0
          }}
          className="hidden lg:block"
        >
          <DataChart type="radar" />
        </motion.div>

        {/* Mini stat card - MILIEU GAUCHE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 0.85, x: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '20px',
            transform: 'translateY(-50%)',
            background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.15), rgba(247, 147, 30, 0.15))',
            backdropFilter: 'blur(20px)',
            borderRadius: '1rem',
            border: '1px solid rgba(255, 107, 53, 0.3)',
            padding: '0.75rem 1rem',
            boxShadow: '0 10px 30px rgba(255, 107, 53, 0.4)',
            zIndex: 0
          }}
          className="hidden xl:block"
        >
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs text-gray-400 font-medium">Performance</span>
          </div>
          <div className="text-2xl font-bold text-primary">+42%</div>
        </motion.div>
      </div>

      {/* Boules flottantes */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
        <div className="absolute rounded-full blur-3xl animate-float" style={{ width: '400px', height: '400px', background: 'rgba(255, 107, 53, 0.12)', top: '-10%', left: '-10%' }}></div>
        <div className="absolute rounded-full blur-3xl animate-float" style={{ width: '300px', height: '300px', background: 'rgba(247, 147, 30, 0.15)', top: '20%', right: '5%', animationDelay: '1s' }}></div>
        <div className="absolute rounded-full blur-2xl animate-float" style={{ width: '180px', height: '180px', background: 'rgba(253, 200, 48, 0.1)', top: '60%', left: '15%', animationDelay: '2s' }}></div>
        <div className="absolute rounded-full blur-3xl animate-float" style={{ width: '350px', height: '350px', background: 'rgba(255, 107, 53, 0.1)', bottom: '-5%', right: '20%', animationDelay: '0.5s' }}></div>
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-6" style={{ position: 'relative', zIndex: 2, pointerEvents: 'none' }}>
        <div className="max-w-4xl mx-auto text-center">

         <motion.div
  initial={{ scale: 0, rotate: -180 }}
  animate={{ scale: 1, rotate: 0 }}
  transition={{ duration: 0.8, type: 'spring' }}
  whileHover={{ scale: 1.1, rotate: 5 }}
  style={{ 
    width: '160px', 
    height: '160px', 
    margin: '0 auto 2rem', 
    borderRadius: '50%', 
    
    cursor: 'pointer'
  }}
>
  {/* Image de profil */}
  <img 
    src={profileImage}
    alt="Eliott Benamou"
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }}
  />
  
  {/* Effet de brillance qui passe */}
  
</motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            <span className="text-gradient">{personalInfo.name}</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-6"
          >
            {personalInfo.title}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.6 }}
            className="inline-block glass px-6 py-3 rounded-full mb-8 border"
            style={{ 
              borderColor: 'rgba(255, 107, 53, 0.4)',
              boxShadow: '0 4px 16px rgba(255, 107, 53, 0.2)'
            }}
          >
            <p className="font-semibold" style={{ color: '#FF6B35' }}>
              Alternance: {personalInfo.alternance}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-8" 
            style={{ pointerEvents: 'auto' }}
          >
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="glass px-4 py-2 rounded-lg transition-all flex items-center gap-2 border hover:border-primary/50 hover:shadow-lg" 
              style={{ 
                color: 'white', 
                textDecoration: 'none', 
                borderColor: 'rgba(255, 107, 53, 0.3)',
                boxShadow: '0 2px 8px rgba(255, 107, 53, 0.15)'
              }}
            >
              <Mail size={18} className="text-primary" />
              <span className="hidden md:inline">{personalInfo.email}</span>
            </a>
            <a 
              href={`tel:${personalInfo.phone}`} 
              className="glass px-4 py-2 rounded-lg transition-all flex items-center gap-2 border hover:border-primary/50 hover:shadow-lg" 
              style={{ 
                color: 'white', 
                textDecoration: 'none', 
                borderColor: 'rgba(255, 107, 53, 0.3)',
                boxShadow: '0 2px 8px rgba(255, 107, 53, 0.15)'
              }}
            >
              <Phone size={18} className="text-primary" />
              <span className="hidden md:inline">{personalInfo.phone}</span>
            </a>
            <div 
              className="glass px-4 py-2 rounded-lg flex items-center gap-2 border" 
              style={{ 
                borderColor: 'rgba(255, 107, 53, 0.3)',
                boxShadow: '0 2px 8px rgba(255, 107, 53, 0.15)'
              }}
            >
              <MapPin size={18} className="text-primary" />
              <span>{personalInfo.location}</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 1 }}
            className="flex justify-center gap-4" 
            style={{ pointerEvents: 'auto' }}
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-4 rounded-full transition-all hover:scale-110 border"
              style={{ 
                color: 'white', 
                textDecoration: 'none', 
                borderColor: 'rgba(255, 107, 53, 0.3)',
                boxShadow: '0 4px 12px rgba(255, 107, 53, 0.2)'
              }}
            >
              <Github size={24} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-4 rounded-full transition-all hover:scale-110 border"
              style={{ 
                color: 'white', 
                textDecoration: 'none', 
                borderColor: 'rgba(255, 107, 53, 0.3)',
                boxShadow: '0 4px 12px rgba(255, 107, 53, 0.2)'
              }}
            >
              <Linkedin size={24} />
            </a>
            <button 
              className="glass p-4 rounded-full transition-all hover:scale-110 border" 
              style={{ 
                color: 'white', 
                cursor: 'pointer', 
                borderColor: 'rgba(255, 107, 53, 0.3)',
                boxShadow: '0 4px 12px rgba(255, 107, 53, 0.2)'
              }}
            >
              <Download size={24} />
            </button>
          </motion.div>
        </div>
      </div>

     
    </section>
  );
};

export default Hero;