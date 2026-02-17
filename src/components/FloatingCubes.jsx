import { useEffect, useRef } from 'react';

const FloatingCubes = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let cubes = [];
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Cube {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 40 + 20;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        this.speedY = Math.random() * 0.5 + 0.2;
        this.opacity = Math.random() * 0.3 + 0.1;
      }

      update() {
        this.y -= this.speedY;
        this.rotation += this.rotationSpeed;

        if (this.y + this.size < 0) {
          this.y = canvas.height + this.size;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);

        // Face avant
        ctx.strokeStyle = `rgba(139, 92, 246, ${this.opacity})`;
        ctx.lineWidth = 2;
        ctx.strokeRect(-this.size / 2, -this.size / 2, this.size, this.size);

        // Face isomÃ©trique
        ctx.beginPath();
        ctx.moveTo(this.size / 2, -this.size / 2);
        ctx.lineTo(this.size / 2 + this.size / 3, -this.size / 2 - this.size / 3);
        ctx.lineTo(this.size / 2 + this.size / 3, this.size / 2 - this.size / 3);
        ctx.lineTo(this.size / 2, this.size / 2);
        ctx.strokeStyle = `rgba(14, 165, 233, ${this.opacity * 0.7})`;
        ctx.stroke();

        ctx.restore();
      }
    }

    for (let i = 0; i < 15; i++) {
      cubes.push(new Cube());
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      cubes.forEach(cube => {
        cube.update();
        cube.draw();
      });

      time += 0.01;
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
      style={{ opacity: 0.4 }}
    />
  );
};

export default FloatingCubes;
