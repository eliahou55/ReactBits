import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { experiences } from '../data/portfolio';

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">

      {/* Fond animé */}
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
            <span className="text-gradient">Expériences</span>
          </h2>
          <p className="text-gray-400 text-lg">Mon parcours professionnel</p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Ligne verticale centrale */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary opacity-30 hidden md:block" style={{ transform: 'translateX(-50%)' }}></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`relative mb-12 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'}`}
            >
              {/* Point sur la ligne */}
              <div className="absolute top-6 hidden md:block"
                style={{ [index % 2 === 0 ? 'right' : 'left']: '-1.5rem', width: '12px', height: '12px', borderRadius: '50%', background: 'linear-gradient(to right, #0ea5e9, #8b5cf6)', boxShadow: '0 0 10px rgba(14, 165, 233, 0.8)' }}>
              </div>

              <div className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group border border-white/5 hover:border-primary/30"
                style={{ backdropFilter: 'blur(20px)' }}>

                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                    <Briefcase size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                    <p className="text-primary font-semibold text-lg">{exp.company}</p>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full border border-secondary/50 text-secondary bg-secondary/10">
                    {exp.type}
                  </span>
                </div>

                {/* Infos */}
                <div className="flex flex-wrap gap-3 mb-4">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar size={14} className="text-primary" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <MapPin size={14} className="text-primary" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                      <span className="text-primary mt-1 flex-shrink-0">▸</span>
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
