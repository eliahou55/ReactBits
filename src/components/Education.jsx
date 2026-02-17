import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { education } from '../data/portfolio';

const Education = () => {
  return (
    <section id="education" className="py-20 relative overflow-hidden">

      {/* Fond animé */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
        <div className="absolute rounded-full blur-3xl animate-float" style={{ width: '450px', height: '450px', background: 'rgba(139, 92, 246, 0.08)', top: '-10%', right: '-5%' }}></div>
        <div className="absolute rounded-full blur-3xl animate-float" style={{ width: '350px', height: '350px', background: 'rgba(14, 165, 233, 0.08)', bottom: '-15%', left: '-10%', animationDelay: '2s' }}></div>
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
            <span className="text-gradient">Formation</span>
          </h2>
          <p className="text-gray-400 text-lg">Mon parcours académique</p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="mb-8 last:mb-0"
            >
              <div className="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group border border-white/5 hover:border-secondary/30"
                style={{ backdropFilter: 'blur(20px)' }}>

                <div className="flex flex-col md:flex-row gap-6">

                  {/* Icone */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg"
                      style={{ background: 'linear-gradient(135deg, #8b5cf6, #0ea5e9)' }}>
                      <GraduationCap size={30} className="text-white" />
                    </div>
                  </div>

                  <div className="flex-1">
                    {/* Titre et badge */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{edu.degree}</h3>
                        <p className="text-xl font-semibold" style={{ color: '#8b5cf6' }}>{edu.school}</p>
                      </div>
                      {edu.grade && (
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full border"
                          style={{ borderColor: 'rgba(139, 92, 246, 0.4)', background: 'rgba(139, 92, 246, 0.1)' }}>
                          <Award size={16} style={{ color: '#8b5cf6' }} />
                          <span className="text-sm font-bold" style={{ color: '#8b5cf6' }}>{edu.grade}</span>
                        </div>
                      )}
                    </div>

                    {/* Infos */}
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Calendar size={14} style={{ color: '#0ea5e9' }} />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <MapPin size={14} style={{ color: '#0ea5e9' }} />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    {edu.description && (
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">{edu.description}</p>
                    )}

                    {/* Matières */}
                    {edu.subjects && (
                      <div className="flex flex-wrap gap-2">
                        {edu.subjects.map((subject, i) => (
                          <span key={i} className="px-3 py-1 text-xs rounded-full transition-colors"
                            style={{ background: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.3)', color: '#a78bfa' }}>
                            {subject}
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

export default Education;
