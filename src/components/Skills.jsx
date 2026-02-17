import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';

const categoryColors = {
  'Programming': { from: '#0ea5e9', to: '#06b6d4' },
  'Database': { from: '#8b5cf6', to: '#a78bfa' },
  'Data Engineering': { from: '#0ea5e9', to: '#8b5cf6' },
  'Backend': { from: '#06b6d4', to: '#0ea5e9' },
  'Analytics': { from: '#8b5cf6', to: '#ec4899' },
  'AI': { from: '#ec4899', to: '#8b5cf6' },
  'Tools': { from: '#0ea5e9', to: '#8b5cf6' },
  'DevOps': { from: '#06b6d4', to: '#8b5cf6' },
};

const Skills = () => {
  const categories = [...new Set(skills.map(s => s.category))];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">

      {/* Fond animé */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
        <div className="absolute rounded-full blur-3xl animate-float" style={{ width: '600px', height: '600px', background: 'rgba(139, 92, 246, 0.07)', top: '-20%', left: '-15%' }}></div>
        <div className="absolute rounded-full blur-3xl animate-float" style={{ width: '400px', height: '400px', background: 'rgba(14, 165, 233, 0.07)', bottom: '-10%', right: '-10%', animationDelay: '1.5s' }}></div>
        <div className="absolute rounded-full blur-2xl animate-float" style={{ width: '250px', height: '250px', background: 'rgba(236, 72, 153, 0.06)', top: '40%', right: '25%', animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative" style={{ zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Compétences</span>
          </h2>
          <p className="text-gray-400 text-lg">Technologies et outils que je maîtrise</p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {categories.map((category, catIndex) => {
            const categorySkills = skills.filter(s => s.category === category);
            const colors = categoryColors[category] || { from: '#0ea5e9', to: '#8b5cf6' };

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
                className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-primary/20 group"
              >
                {/* Header catégorie */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold"
                    style={{ background: `linear-gradient(135deg, ${colors.from}, ${colors.to})` }}>
                    {category[0]}
                  </div>
                  <h3 className="text-lg font-bold text-white">{category}</h3>
                  <div className="ml-auto text-xs text-gray-500">{categorySkills.length} skills</div>
                </div>

                {/* Skills */}
                <div className="space-y-4">
                  {categorySkills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                        <span className="text-sm font-bold" style={{ color: colors.from }}>{skill.level}%</span>
                      </div>
                      <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: catIndex * 0.1 + index * 0.1, ease: 'easeOut' }}
                          className="h-full rounded-full relative"
                          style={{ background: `linear-gradient(to right, ${colors.from}, ${colors.to})` }}
                        >
                          {/* Effet brillant */}
                          <div className="absolute inset-0 rounded-full opacity-50"
                            style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent)' }}>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tous les skills en badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, i) => (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 rounded-full text-sm font-medium cursor-default transition-all"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'white'
                }}
              >
                {skill.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
