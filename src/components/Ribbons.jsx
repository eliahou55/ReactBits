import { useEffect, useRef } from 'react';

const Ribbons = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let ribbons = [];
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Ribbon {
      constructor() {
        this.y = Math.random() * canvas.height;
        this.amplitude = Math.random() * 50 + 30;
        this.frequency = Math.random() * 0.02 + 0.01;
        this.speed = Math.random() * 0.02 + 0.01;
        this.offset = Math.random() * Math.PI * 2;
        this.color = Math.random() > 0.5 ? 'rgba(14, 165, 233, 0.2)' : 'rgba(139, 92, 246, 0.2)';
      }

      draw(t) {
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 3;

        for (let x = 0; x < canvas.width; x += 5) {
          const y = this.y + Math.sin(x * this.frequency + t * this.speed + this.offset) * this.amplitude;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
      }
    }

    for (let i = 0; i < 6; i++) {
      ribbons.push(new Ribbon());
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ribbons.forEach(ribbon => {
        ribbon.draw(time);
      });

      time += 1;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
};

export default Ribbons;
