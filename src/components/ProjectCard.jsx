import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

export default function ProjectCard({ title, description, tech, link, Icon }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }} 
      viewport={{ once: true }}
      className="h-100"
    >
      <Card className="h-100 border-0 text-center p-4 glass-panel bg-transparent">
        {Icon && <div className="fs-1 mb-4 text-gradient">{<Icon />}</div>}
        <Card.Body className="d-flex flex-column p-0">
          <Card.Title className="fw-bold mb-3 fs-4 text-white">{title}</Card.Title>
          <Card.Text className="text-secondary-glow flex-grow-1">{description}</Card.Text>
          <div className="mt-4 pt-3 border-top border-secondary">
            <span className="text-gradient fw-bold fs-6">{tech}</span>
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
}
