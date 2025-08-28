import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';

// Simple rotating mesh component
function RotatingShape({ reducedMotion }) {
  const ref = useRef();
  useFrame((state, delta) => {
    if (!reducedMotion) {
      ref.current.rotation.x += delta * 0.2;
      ref.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <icosahedronGeometry args={[1.5, 0]} />
      <meshStandardMaterial roughness={0.2} metalness={0.7} color="#0d6efd" />
    </mesh>
  );
}

export default function Hero3D() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener?.('change', handler);
    return () => mq.removeEventListener?.('change', handler);
  }, []);

  // overlay text animation
  const heroText = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <div className="hero-wrapper position-relative">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        style={{ height: '100vh', width: '100%' }}
        dpr={typeof window !== 'undefined' && window.devicePixelRatio > 2 ? 2 : window.devicePixelRatio || 1}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <Suspense fallback={null}>
          <RotatingShape reducedMotion={reducedMotion} />
          <Environment preset="studio" />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>

      {/* overlay text/content */}
      <div className="hero-overlay d-flex flex-column justify-content-center align-items-center text-center text-light">
        <motion.div initial="hidden" animate="show" variants={heroText}>
          <h1 className="display-5 fw-bold">Rahul Singh Chouhan</h1>
          <p className="lead mb-3">Full-Stack Developer — React · Node · Automation</p>
          <a href="#projects" className="btn btn-outline-light btn-lg">View My Work</a>
        </motion.div>
      </div>
    </div>
  );
}
