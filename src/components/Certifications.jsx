import { motion } from 'framer-motion';
import { BadgeCheck, Calendar } from 'lucide-react';
import { useEffect } from 'react';
import { certifications } from '../data/portfolio';
import LiquidEther from './LiquidEther';

const Certifications = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//cdn.credly.com/assets/utilities/embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">

      {/* LiquidEther en fond */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <LiquidEther
          colors={['#FF6B35', '#F7931E', '#FDC830']}
          mouseForce={15}
          cursorSize={80}
          resolution={0.4}
          autoDemo
          autoSpeed={0.4}
          autoIntensity={1.8}
        />
      </div>

      {/* Fond animé */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
        <div className="absolute rounded-full blur-3xl animate-float" style={{ width: '450px', height: '450px', background: 'rgba(14, 165, 233, 0.08)', top: '-10%', left: '-5%' }}></div>
        <div className="absolute rounded-full blur-3xl animate-float" style={{ width: '350px', height: '350px', background: 'rgba(139, 92, 246, 0.08)', bottom: '-15%', right: '-10%', animationDelay: '2s' }}></div>
        <div className="absolute rounded-full blur-2xl animate-float" style={{ width: '200px', height: '200px', background: 'rgba(236, 72, 153, 0.06)', top: '45%', left: '50%', animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative" style={{ zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-gray-400 text-lg">Certifications professionnelles obtenues</p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="mb-8 last:mb-0"
            >
              <div className="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group border border-white/5 hover:border-primary/30"
                style={{ backdropFilter: 'blur(20px)' }}>

                <div className="flex flex-col md:flex-row gap-6 items-start">

                  {/* Badge Credly */}
                  <div className="flex-shrink-0 flex justify-center">
                    <div
                      data-iframe-width="150"
                      data-iframe-height="270"
                      data-share-badge-id={cert.credlyBadgeId}
                      data-share-badge-host="https://www.credly.com"
                    ></div>
                  </div>

                  <div className="flex-1">
                    {/* Titre et émetteur */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{cert.name}</h3>
                        <p className="text-xl font-semibold" style={{ color: '#0ea5e9' }}>{cert.issuer}</p>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full border"
                        style={{ borderColor: 'rgba(14, 165, 233, 0.4)', background: 'rgba(14, 165, 233, 0.1)' }}>
                        <BadgeCheck size={16} style={{ color: '#0ea5e9' }} />
                        <span className="text-sm font-bold" style={{ color: '#0ea5e9' }}>{cert.date}</span>
                      </div>
                    </div>

                    {/* Description */}
                    {cert.description && (
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">{cert.description}</p>
                    )}

                    {/* Skills */}
                    {cert.skills && (
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, i) => (
                          <span key={i} className="px-3 py-1 text-xs rounded-full"
                            style={{ background: 'rgba(14, 165, 233, 0.1)', border: '1px solid rgba(14, 165, 233, 0.3)', color: '#38bdf8' }}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
