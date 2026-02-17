import { useEffect, useRef } from 'react';

const ShapeBlur = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let shapes = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Shape {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 200 + 100;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.hue = Math.random() * 60 + 200; // Bleu/violet
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < -this.size || this.x > canvas.width + this.size) this.vx *= -1;
        if (this.y < -this.size || this.y > canvas.height + this.size) this.vy *= -1;
      }

      draw() {
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size
        );
        gradient.addColorStop(0, `hsla(${this.hue}, 70%, 60%, 0.3)`);
        gradient.addColorStop(1, `hsla(${this.hue}, 70%, 60%, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);
      }
    }

    for (let i = 0; i < 5; i++) {
      shapes.push(new Shape());
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      shapes.forEach(shape => {
        shape.update();
        shape.draw();
      });

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
      style={{ opacity: 0.5, filter: 'blur(40px)' }}
    />
  );
};

export default ShapeBlur;
