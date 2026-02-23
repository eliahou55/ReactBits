import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Composant de graphique décoratif animé avec effets 3D
export const DataChart = ({ type = 'line', className = '' }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const generateData = () => {
      return Array.from({ length: 12 }, () => Math.floor(Math.random() * 100));
    };
    setData(generateData());

    const interval = setInterval(() => {
      setData(generateData());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (type === 'line') {
    return (
      <div className="relative" style={{ filter: 'drop-shadow(0 8px 16px rgba(255, 107, 53, 0.4))' }}>
        <svg viewBox="0 0 200 100" className={`w-full h-full ${className}`}>
          {/* Grille avec effet de profondeur */}
          {[0, 25, 50, 75, 100].map(y => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2="200"
              y2={y}
              stroke="rgba(255, 107, 53, 0.15)"
              strokeWidth="1"
            />
          ))}
          
          {/* Ombre de la ligne (effet 3D) */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            d={`M ${data.map((val, i) => `${i * (200 / data.length)},${100 - val + 5}`).join(' L ')}`}
            fill="none"
            stroke="rgba(0, 0, 0, 0.4)"
            strokeWidth="4"
            filter="blur(3px)"
          />

          {/* Ligne principale épaisse */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            d={`M ${data.map((val, i) => `${i * (200 / data.length)},${100 - val}`).join(' L ')}`}
            fill="none"
            stroke="url(#gradient-line)"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Zone sous la courbe avec gradient */}
          <motion.path
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 2 }}
            d={`M ${data.map((val, i) => `${i * (200 / data.length)},${100 - val}`).join(' L ')} L 200,100 L 0,100 Z`}
            fill="url(#gradient-area)"
          />

          {/* Points avec effet 3D */}
          {data.map((val, i) => (
            <g key={i}>
              {/* Ombre du point */}
              <motion.circle
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1 }}
                cx={i * (200 / data.length)}
                cy={100 - val + 3}
                r="4"
                fill="rgba(0, 0, 0, 0.3)"
                filter="blur(2px)"
              />
              {/* Point principal */}
              <motion.circle
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1 }}
                cx={i * (200 / data.length)}
                cy={100 - val}
                r="4"
                fill="#FDC830"
                stroke="#FF6B35"
                strokeWidth="2"
              />
            </g>
          ))}

          <defs>
            <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF6B35" />
              <stop offset="50%" stopColor="#F7931E" />
              <stop offset="100%" stopColor="#FDC830" />
            </linearGradient>
            <linearGradient id="gradient-area" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#FDC830" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  if (type === 'bars') {
    return (
      <div className="relative" style={{ filter: 'drop-shadow(0 8px 16px rgba(255, 107, 53, 0.4))' }}>
        <svg viewBox="0 0 200 100" className={`w-full h-full ${className}`}>
          {/* Grille */}
          {[0, 25, 50, 75, 100].map(y => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2="200"
              y2={y}
              stroke="rgba(255, 107, 53, 0.15)"
              strokeWidth="1"
            />
          ))}
          
          {data.slice(0, 8).map((val, i) => (
            <g key={i}>
              {/* Ombre de la barre (effet 3D) */}
              <motion.rect
                initial={{ height: 0, y: 100 }}
                animate={{ height: val, y: 100 - val }}
                transition={{ duration: 1, delay: i * 0.1 }}
                x={i * 25 + 4}
                width="18"
                fill="rgba(0, 0, 0, 0.3)"
                rx="3"
                transform="translate(2, 3)"
                filter="blur(2px)"
              />
              {/* Barre principale avec gradient */}
              <motion.rect
                initial={{ height: 0, y: 100 }}
                animate={{ height: val, y: 100 - val }}
                transition={{ duration: 1, delay: i * 0.1 }}
                x={i * 25 + 4}
                width="18"
                fill={`url(#bar-gradient-${i})`}
                rx="3"
                stroke="rgba(255, 107, 53, 0.5)"
                strokeWidth="1"
              />
              <defs>
                <linearGradient id={`bar-gradient-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor={`hsl(${20 + i * 8}, 90%, 65%)`} />
                  <stop offset="100%" stopColor={`hsl(${20 + i * 8}, 80%, 50%)`} />
                </linearGradient>
              </defs>
            </g>
          ))}
        </svg>
      </div>
    );
  }

  if (type === 'circle') {
    const total = data.reduce((a, b) => a + b, 0);
    let currentAngle = 0;

    return (
      <div className="relative" style={{ filter: 'drop-shadow(0 10px 20px rgba(255, 107, 53, 0.5))' }}>
        <svg viewBox="0 0 100 100" className={`w-full h-full ${className}`}>
          {/* Ombre du cercle */}
          <circle cx="52" cy="52" r="42" fill="rgba(0, 0, 0, 0.3)" filter="blur(4px)" />
          
          {data.slice(0, 5).map((val, i) => {
            const percentage = (val / total) * 100;
            const angle = (percentage / 100) * 360;
            const startAngle = currentAngle;
            const endAngle = currentAngle + angle;
            currentAngle = endAngle;

            const start = polarToCartesian(50, 50, 42, startAngle);
            const end = polarToCartesian(50, 50, 42, endAngle);
            const largeArc = angle > 180 ? 1 : 0;

            const colors = ['#FF6B35', '#F7931E', '#FDC830', '#FF8C61', '#FFE066'];

            return (
              <motion.path
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                d={`M 50 50 L ${start.x} ${start.y} A 42 42 0 ${largeArc} 1 ${end.x} ${end.y} Z`}
                fill={colors[i]}
                stroke="rgba(0, 0, 0, 0.2)"
                strokeWidth="1"
              />
            );
          })}
          
          {/* Centre avec gradient */}
          <circle cx="50" cy="50" r="28" fill="url(#center-gradient)" />
          
          <defs>
            <radialGradient id="center-gradient">
              <stop offset="0%" stopColor="#1a1a1a" />
              <stop offset="100%" stopColor="#0a0a0a" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    );
  }

  if (type === 'radar') {
    const radarData = data.slice(0, 6);
    const maxValue = 100;

    return (
      <div className="relative" style={{ filter: 'drop-shadow(0 8px 16px rgba(255, 107, 53, 0.4))' }}>
        <svg viewBox="0 0 100 100" className={`w-full h-full ${className}`}>
          {/* Grilles avec effet de profondeur */}
          {[0.2, 0.4, 0.6, 0.8, 1].map((scale, i) => (
            <polygon
              key={i}
              points={radarData.map((_, idx) => {
                const angle = (Math.PI * 2 * idx) / radarData.length - Math.PI / 2;
                const x = 50 + Math.cos(angle) * 40 * scale;
                const y = 50 + Math.sin(angle) * 40 * scale;
                return `${x},${y}`;
              }).join(' ')}
              fill="none"
              stroke="rgba(255, 107, 53, 0.2)"
              strokeWidth="1"
            />
          ))}

          {/* Lignes radiales */}
          {radarData.map((_, idx) => {
            const angle = (Math.PI * 2 * idx) / radarData.length - Math.PI / 2;
            const x = 50 + Math.cos(angle) * 40;
            const y = 50 + Math.sin(angle) * 40;
            return (
              <line
                key={idx}
                x1="50"
                y1="50"
                x2={x}
                y2={y}
                stroke="rgba(255, 107, 53, 0.2)"
                strokeWidth="1"
              />
            );
          })}

          {/* Ombre des données */}
          <motion.polygon
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            points={radarData.map((d, idx) => {
              const angle = (Math.PI * 2 * idx) / radarData.length - Math.PI / 2;
              const radius = (d / maxValue) * 40;
              const x = 51 + Math.cos(angle) * radius;
              const y = 51 + Math.sin(angle) * radius;
              return `${x},${y}`;
            }).join(' ')}
            fill="rgba(0, 0, 0, 0.3)"
            filter="blur(2px)"
          />

          {/* Données principales */}
          <motion.polygon
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            points={radarData.map((d, idx) => {
              const angle = (Math.PI * 2 * idx) / radarData.length - Math.PI / 2;
              const radius = (d / maxValue) * 40;
              const x = 50 + Math.cos(angle) * radius;
              const y = 50 + Math.sin(angle) * radius;
              return `${x},${y}`;
            }).join(' ')}
            fill="rgba(255, 107, 53, 0.4)"
            stroke="#FF6B35"
            strokeWidth="2"
          />

          {/* Points */}
          {radarData.map((d, idx) => {
            const angle = (Math.PI * 2 * idx) / radarData.length - Math.PI / 2;
            const radius = (d / maxValue) * 40;
            const x = 50 + Math.cos(angle) * radius;
            const y = 50 + Math.sin(angle) * radius;
            return (
              <motion.circle
                key={idx}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                cx={x}
                cy={y}
                r="3"
                fill="#FDC830"
                stroke="#FF6B35"
                strokeWidth="2"
              />
            );
          })}
        </svg>
      </div>
    );
  }

  return null;
};

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = (angleInDegrees * Math.PI) / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
}

// Composant carte de statistique avec effet 3D
export const StatCard = ({ title, value, change, icon }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, rotateY: 5 }}
      className="data-card p-6"
      style={{
        transformStyle: 'preserve-3d',
        boxShadow: '0 10px 30px rgba(255, 107, 53, 0.3)'
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <div 
          className="w-12 h-12 rounded-xl flex items-center justify-center" 
          style={{ 
            background: 'linear-gradient(135deg, #FF6B35, #F7931E)',
            boxShadow: '0 4px 12px rgba(255, 107, 53, 0.4)'
          }}
        >
          {icon}
        </div>
        {change && (
          <div className={`text-xs font-semibold px-2 py-1 rounded ${
            change > 0 ? 'text-green-400 bg-green-400/10' : 'text-red-400 bg-red-400/10'
          }`}>
            {change > 0 ? '↑' : '↓'} {Math.abs(change)}%
          </div>
        )}
      </div>
      <div className="text-3xl font-bold mb-1" style={{ color: '#FF6B35' }}>
        {count}
      </div>
      <div className="text-sm text-gray-400">{title}</div>
    </motion.div>
  );
};

export default DataChart;