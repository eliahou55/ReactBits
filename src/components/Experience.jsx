import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin , Clock } from 'lucide-react';
import { experiences } from '../data/portfolio';
import LiquidEther from './LiquidEther';

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">

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

      {/* Fond animÃ© */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
        <div className="absolute rounded-full blur-3xl animate-float" style={{ width: '500px', height: '500px', background: 'rgba(14, 165, 233, 0.08)', top: '-20%', right: '-10%' }}></div>
        <div className="absolute rounded-full blur-3xl animate-float" style={{ width: '400px', height: '400px', background: 'rgba(139, 92, 246, 0.08)', bottom: '-10%', left: '-5%', animationDelay: '2s' }}></div>
        <div className="absolute rounded-full blur-2xl animate-float" style={{ width: '200px', height: '200px', background: 'rgba(14, 165, 233, 0.1)', top: '50%', left: '30%', animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative" style={{ zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Experiences</span>
          </h2>
          <p className="text-gray-400 text-lg">Mon parcours professionnel</p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            const card = (
              <motion.div
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group border border-white/5 hover:border-primary/30"
                style={{ backdropFilter: 'blur(20px)' }}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                    <Briefcase size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                    <p className="text-primary font-semibold text-lg">{exp.company}</p>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full border border-secondary/50 text-secondary bg-secondary/10 whitespace-nowrap">
                    {exp.type}
                  </span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                  <MapPin size={14} className="text-primary" />
                  <span>{exp.location}</span>
                </div>

                {/* Description */}
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                      <span className="text-primary mt-1 flex-shrink-0">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );

            const dateLabel = (
              <motion.div
                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.1, duration: 0.5 }}
                className={`hidden md:flex flex-col gap-1 pt-5 ${isEven ? 'items-start pl-4' : 'items-end pr-4'}`}
              >
                <span className="text-sm font-bold" style={{ color: '#0ea5e9' }}>
                  {exp.period}
                </span>
                {exp.duration && (
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Clock size={11} />
                    {exp.duration}
                  </span>
                )}
              </motion.div>
            );

            return (
              <div key={exp.id} className="flex items-start mb-12 gap-0">
                {/* Colonne gauche */}
                <div className="flex-1">
                  {isEven ? card : dateLabel}
                </div>

                {/* Ligne + point central */}
                <div className="hidden md:flex flex-col items-center mx-4 pt-6" style={{ minWidth: '24px' }}>
                  <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: 'linear-gradient(135deg, #0ea5e9, #8b5cf6)', boxShadow: '0 0 12px rgba(14, 165, 233, 0.8)', flexShrink: 0 }} />
                  <div className="flex-1 w-px mt-2" style={{ background: 'linear-gradient(to bottom, rgba(14,165,233,0.4), rgba(139,92,246,0.1))', minHeight: '60px' }} />
                </div>

                {/* Colonne droite */}
                <div className="flex-1">
                  {isEven ? dateLabel : card}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;




