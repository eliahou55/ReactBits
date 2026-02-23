import { motion } from 'framer-motion';
import { skills, softSkills } from '../data/portfolio';
import LiquidEther from './LiquidEther';
import CircularGallery from './CircularGallery';

// Génère une image SVG data URL avec icône Lucide pour chaque soft skill
const softSkillIconPaths = {
  1: `<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>`,
  2: `<path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/>`,
  3: `<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>`,
  4: `<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>`,
  5: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>`,
  6: `<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>`,
  7: `<line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/>`,
  8: `<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>`,
};

function createSkillImage(color, svgPath, label) {
  const s = 6;
  const tx = 400 - 12 * s;
  const ty = 260 - 12 * s;
  const svg = [
    '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">',
    '<defs>',
    '<linearGradient id="g" x1="0" y1="0" x2="1" y2="1">',
    `<stop offset="0%" stop-color="${color}" stop-opacity="0.25"/>`,
    `<stop offset="100%" stop-color="${color}" stop-opacity="0.05"/>`,
    '</linearGradient>',
    '</defs>',
    '<rect width="800" height="600" fill="#111111"/>',
    '<rect width="800" height="600" fill="url(#g)"/>',
    `<g transform="translate(${tx},${ty}) scale(${s})" stroke="${color}" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">`,
    svgPath,
    '</g>',
    `<text x="400" y="430" text-anchor="middle" font-family="Figtree, sans-serif" font-size="36" font-weight="700" fill="${color}">${label}</text>`,
    `<line x1="320" y1="450" x2="480" y2="450" stroke="${color}" stroke-width="2" stroke-opacity="0.4"/>`,
    '</svg>'
  ].join('');
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

const softSkillItems = softSkills.map(skill => ({
  text: '',
  image: createSkillImage(skill.color, softSkillIconPaths[skill.id] || '', skill.name)
}));

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
                {/* Header catÃ©gorie */}
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

        {/* Section Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="text-center mb-4">
            <h3 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="text-gradient">Soft Skills</span>
            </h3>
            <p className="text-gray-400">Compétences comportementales et transversales</p>
            <div className="w-16 h-1 mx-auto mt-3 rounded-full" style={{ background: 'linear-gradient(to right, #FF6B35, #F7931E, #FDC830)' }}></div>
          </div>

          <div style={{ height: '500px', position: 'relative' }}>
            <CircularGallery
              items={softSkillItems}
              bend={1}
              textColor="#ffffff"
              borderRadius={0.05}
              scrollSpeed={2}
              scrollEase={0.05}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;



