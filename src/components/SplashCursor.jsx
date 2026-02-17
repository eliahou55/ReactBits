import { useEffect, useRef, useState } from 'react';

const SplashCursor = () => {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let splashes = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });

      // CrÃ©er des particules au mouvement
      if (Math.random() > 0.7) {
        splashes.push(new Splash(e.clientX - rect.left, e.clientY - rect.top));
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    class Splash {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 10 + 5;
        this.vx = (Math.random() - 0.5) * 4;
        this.vy = (Math.random() - 0.5) * 4;
        this.life = 60;
        this.maxLife = this.life;
        this.color = Math.random() > 0.5 ? '14, 165, 233' : '139, 92, 246';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += 0.1; // GravitÃ©
        this.life -= 1;
        this.size *= 0.98;
      }

      draw() {
        const alpha = this.life / this.maxLife;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${alpha * 0.6})`;
        ctx.fill();
      }
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      splashes = splashes.filter(splash => splash.life > 0);

      splashes.forEach(splash => {
        splash.update();
        splash.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
};

export default SplashCursor;
