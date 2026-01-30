import React, { useEffect, useRef } from 'react';

const AnimatedHeroBackground = ({ isDark = false }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 0.7;

    let animationFrameId;
    const particles = [];
    const particleCount = 50;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.maxOpacity = this.opacity;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw(ctx) {
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = isDark
          ? `hsl(45, 93%, 50%)`
          : `hsl(45, 93%, 45%)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    let time = 0;

    const animate = () => {
      time += 0.001;

      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);

      if (isDark) {
        gradient.addColorStop(0, `hsla(0, 0%, 0%, 0.95)`);
        gradient.addColorStop(0.5, `hsla(45, 93%, 25%, 0.1)`);
        gradient.addColorStop(1, `hsla(0, 0%, 0%, 0.95)`);
      } else {
        gradient.addColorStop(0, `hsla(45, 93%, 95%, 0.9)`);
        gradient.addColorStop(0.5, `hsla(45, 93%, 80%, 0.15)`);
        gradient.addColorStop(1, `hsla(45, 93%, 92%, 0.9)`);
      }

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw animated gradient blobs
      const blobCount = 3;
      for (let i = 0; i < blobCount; i++) {
        const blobX = (canvas.width / (blobCount + 1)) * (i + 1);
        const blobY = (canvas.height / 2) + Math.sin(time * 0.5 + i) * 50;
        const blobSize = 150 + Math.sin(time * 0.3 + i) * 50;

        const blobGradient = ctx.createRadialGradient(blobX, blobY, 0, blobX, blobY, blobSize);

        if (isDark) {
          blobGradient.addColorStop(0, `hsla(45, 93%, 50%, 0.15)`);
          blobGradient.addColorStop(0.5, `hsla(45, 93%, 50%, 0.05)`);
          blobGradient.addColorStop(1, `hsla(45, 93%, 50%, 0)`);
        } else {
          blobGradient.addColorStop(0, `hsla(45, 93%, 60%, 0.2)`);
          blobGradient.addColorStop(0.5, `hsla(45, 93%, 60%, 0.08)`);
          blobGradient.addColorStop(1, `hsla(45, 93%, 60%, 0)`);
        }

        ctx.fillStyle = blobGradient;
        ctx.beginPath();
        ctx.arc(blobX, blobY, blobSize, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw horizontal light rays
      ctx.strokeStyle = isDark
        ? `hsla(45, 93%, 50%, ${0.05 + Math.sin(time * 0.8) * 0.03})`
        : `hsla(45, 93%, 60%, ${0.08 + Math.sin(time * 0.8) * 0.04})`;
      ctx.lineWidth = 1;

      for (let i = 0; i < 5; i++) {
        const yPos = (canvas.height / 6) * (i + 1);
        const offset = Math.sin(time * 0.4 + i) * 100;
        ctx.beginPath();
        ctx.moveTo(0, yPos);
        ctx.quadraticCurveTo(canvas.width / 2, yPos + offset, canvas.width, yPos);
        ctx.stroke();
      }

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw(ctx);
      });

      // Add subtle pulse animation
      const pulse = Math.sin(time * 0.3) * 0.1;
      ctx.globalAlpha = pulse * 0.2;
      ctx.fillStyle = isDark
        ? `hsla(45, 93%, 50%, 0.1)`
        : `hsla(45, 93%, 60%, 0.1)`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 1;

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 0.7;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: 'block' }}
    />
  );
};

export default AnimatedHeroBackground;
