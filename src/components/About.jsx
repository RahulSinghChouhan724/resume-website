import React from 'react';
import profileImg from '../assets/profile.png';
import { Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

export default function About() {
  const summary = `I’m Rahul Singh Chouhan, a results-driven Full-Stack Developer with 5+ years of experience building responsive, user-focused applications using React.js, Node.js, JavaScript (ES6+), and modern web technologies. Skilled at translating UI/UX designs into scalable code, optimizing performance, and collaborating across cross-functional teams. Passionate about automation and integrating software with real-world hardware to deliver impactful solutions.`;

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
      <Row className="align-items-center">
        <Col md={4} className="text-center mb-5 mb-md-0">
          <motion.div 
            className="profile-photo-wrapper mx-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={profileImg} alt="Rahul Singh Chouhan" className="profile-photo img-fluid" />
          </motion.div>
        </Col>

        <Col md={8}>
          <h2 className="mb-3 section-title text-md-start">About <span className="text-gradient">Me</span></h2>
          <p className="lead text-secondary-glow" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>{summary}</p>

          <div className="mb-4 mt-4 glass-panel p-4">
            <h5 className="text-gradient fw-bold mb-3">Automation & Tools</h5>
            <p className="text-secondary-glow mb-0">
              Built automation solutions to transform JSON/text into visual dashboards, created file management automation with Amazon Cloud backups, and implemented workflow optimizations to reduce manual workloads.
            </p>
          </div>

          <div className="d-flex gap-3 justify-content-center justify-content-md-start mt-4">
            <a href="#projects" className="btn btn-premium">See Projects</a>
            <a href="/Rahul_Singh_Chouhan_Resume.pdf" className="btn btn-outline-premium" target="_blank" rel="noopener noreferrer">Download Resume</a>
          </div>
        </Col>
      </Row>
    </motion.div>
  );
}
