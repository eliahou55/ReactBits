import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Preloader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simuler le chargement progressif
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Attendre un peu avant de masquer le preloader
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
          return 100;
        }
        // Augmentation progressive avec ralentissement vers la fin
        const increment = prev > 80 ? 2 : prev > 60 ? 5 : 10;
        return Math.min(prev + increment, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0f0a 50%, #0a0a0a 100%)',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Particules flottantes en arrière-plan */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{ 
              y: [null, -100],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              position: 'absolute',
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              background: `hsl(${20 + Math.random() * 20}, 80%, 60%)`
            }}
          />
        ))}
      </div>

      {/* Logo avec barre de progression circulaire */}
      <div style={{ position: 'relative', marginBottom: '2rem' }}>
        
        {/* Cercle de progression SVG */}
        <svg width="200" height="200" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(-90deg)' }}>
          {/* Cercle de fond */}
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="rgba(255, 107, 53, 0.1)"
            strokeWidth="8"
          />
          {/* Cercle de progression animé */}
          <motion.circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={565.48} // 2 * PI * 90
            initial={{ strokeDashoffset: 565.48 }}
            animate={{ strokeDashoffset: 565.48 - (565.48 * progress) / 100 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{ filter: 'drop-shadow(0 0 10px rgba(255, 107, 53, 0.8))' }}
          />
          {/* Gradient pour la barre */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF6B35" />
              <stop offset="50%" stopColor="#F7931E" />
              <stop offset="100%" stopColor="#FDC830" />
            </linearGradient>
          </defs>
        </svg>

        {/* Logo central animé */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          style={{
            width: '140px',
            height: '140px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #FF6B35, #F7931E, #FDC830)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 60px rgba(255, 107, 53, 0.6), 0 0 120px rgba(247, 147, 30, 0.4)',
            position: 'relative',
            margin: '30px'
          }}
        >
          <span style={{
            fontSize: '3.5rem',
            fontWeight: 'bold',
            color: 'white',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
          }}>
            EB
          </span>

          {/* Effet de brillance qui tourne */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              inset: '-5px',
              borderRadius: '50%',
              background: 'conic-gradient(from 0deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
              pointerEvents: 'none'
            }}
          />
        </motion.div>
      </div>

      {/* Texte de chargement */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          background: 'linear-gradient(135deg, #FF6B35, #F7931E, #FDC830)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '1rem'
        }}
      >
        Chargement...
      </motion.h2>

      {/* Pourcentage */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          color: '#FF6B35',
          fontFamily: 'monospace',
          textShadow: '0 0 20px rgba(255, 107, 53, 0.5)'
        }}
      >
        {progress}%
      </motion.span>
    </motion.div>
  );
};

export default Preloader;
