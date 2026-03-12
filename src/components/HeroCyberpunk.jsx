import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function HeroCyberpunk() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    // Cyberpunk grid settings
    const speed = 2; // speed of moving lines
    let offset = 0;
    
    const drawGrid = () => {
      ctx.clearRect(0, 0, width, height);

      // Create a glowing cyan/magenta gradient background
      const bgGrad = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, width/1.5);
      bgGrad.addColorStop(0, '#0f0f1b');
      bgGrad.addColorStop(1, '#050508');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Perspective variables
      const cX = width / 2;
      const cY = height / 2;
      const fov = 300;
      
      ctx.lineWidth = 1;
      
      // Draw horizontal traveling lines
      ctx.strokeStyle = 'rgba(236, 72, 153, 0.4)'; // pinkish
      offset = (offset + speed) % 50; 
      
      for (let z = 10; z < 800; z += 50) {
        // z controls depth. Closer z = further down on screen.
        let actualZ = z - offset;
        if (actualZ < 10) actualZ = actualZ + 800;
        
        const y = cY + (cY * fov) / actualZ;
        
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw vertical vanishing lines
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.4)'; // blue/cyan
      for (let x = -width; x < width * 2; x += 100) {
        const xDist = x - cX;
        ctx.beginPath();
        ctx.moveTo(cX, cY);
        // extrapolate out based on fov
        ctx.lineTo(cX + xDist * 5, height);
        ctx.stroke();
      }
      
      // Draw top horizon mask
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, cY);

      animationFrameId = requestAnimationFrame(drawGrid);
    };

    drawGrid();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const heroText = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="hero-wrapper position-relative">
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100vh', opacity: 0.6 }} />

      {/* overlay text/content */}
      <div className="hero-overlay d-flex flex-column justify-content-center align-items-center text-center">
        <motion.div initial="hidden" animate="show" variants={heroText} className="hero-content-inner">
          <h1 className="display-3 fw-bold text-white mb-2 glitch-text" data-text="Rahul Singh Chouhan">
            Rahul Singh Chouhan
          </h1>
          <p className="lead mb-4 text-secondary-glow fs-4 mt-3">
            <span className="cyber-terminal-text">Full-Stack Developer <span className="text-gradient fw-bold">— React · Node · Automation</span></span>
          </p>
          <div className="d-flex gap-3 justify-content-center mt-5">
            <a href="#projects" className="btn btn-premium btn-lg cyber-button shadow-lg">INITIALIZE // PROJECTS</a>
            <a href="#about" className="btn btn-outline-premium btn-lg text-white border-primary shadow-sm">READ_ME.md</a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
