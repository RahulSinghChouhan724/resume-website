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
    >
      <Card className="h-100 shadow-sm border-0 text-center p-3">
        {Icon && <div className="fs-1 mb-3 text-primary">{<Icon />}</div>}
        <Card.Body>
          <Card.Title className="fw-bold">{title}</Card.Title>
          <Card.Text className="text-muted">{description}</Card.Text>
          <p><strong>Tech:</strong> {tech}</p>
        </Card.Body>
      </Card>
    </motion.div>
  );
}
