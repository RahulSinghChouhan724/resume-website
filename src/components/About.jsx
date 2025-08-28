import React from 'react';
import profileImg from '../assets/profile.png'; // <- ensure the image exists at this path
import { Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

export default function About() {
  const summary = `I’m Rahul Singh Chouhan, a results-driven Full-Stack Developer with 5+ years of experience building responsive, user-focused applications using React.js, Node.js, JavaScript (ES6+), and modern web technologies. Skilled at translating UI/UX designs into scalable code, optimizing performance, and collaborating across cross-functional teams. Passionate about automation and integrating software with real-world hardware to deliver impactful solutions.`;

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <Row className="align-items-center">
        <Col md={4} className="text-center mb-4 mb-md-0">
          <div className="profile-photo-wrapper mx-auto">
            <img src={profileImg} alt="Rahul Singh Chouhan" className="profile-photo img-fluid" />
          </div>
        </Col>

        <Col md={8}>
          <h2 className="mb-3">About Me</h2>
          <p className="lead text-muted">{summary}</p>

          <div className="mb-3">
            <h5>Automation & Tools</h5>
            <p className="text-muted">
              Built automation solutions to transform JSON/text into visual dashboards, created file management automation with Amazon Cloud backups, and implemented workflow optimizations to reduce manual workloads.
            </p>
          </div>

          <div className="d-flex gap-2">
            <Button href="#projects" variant="primary">See Projects</Button>
            <Button href="/Rahul_Singh_Chouhan_Resume.pdf" variant="outline-secondary" target="_blank">Download Resume</Button>
          </div>
        </Col>
      </Row>
    </motion.div>
  );
}
