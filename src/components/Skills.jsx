import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaAws } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiPhp } from 'react-icons/si';
import { motion } from 'framer-motion';

const skills = [
  { name: "React", icon: FaReact, color: "#61DBFB" },
  { name: "Node.js", icon: FaNodeJs, color: "#3C873A" },
  { name: "JavaScript", icon: FaJs, color: "#F0DB4F" },
  { name: "HTML5", icon: FaHtml5, color: "#E44D26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#264de4" },
  { name: "Bootstrap", icon: FaBootstrap, color: "#7952b3" },
  { name: "MongoDB", icon: SiMongodb, color: "#4DB33D" },
  { name: "MySQL", icon: SiMysql, color: "#00618A" },
  { name: "PHP", icon: SiPhp, color: "#787CB5" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Databases", icon: FaDatabase, color: "#6c757d" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-5">
      <Container>
        <h2 className="mb-4 text-center">Skills</h2>
        <Row className="g-4 text-center">
          {skills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <Col xs={6} md={4} lg={3} key={idx}>
                <motion.div 
                  className="p-3 shadow-sm rounded h-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="fs-1 mb-2" style={{ color: skill.color }}>
                    <Icon />
                  </div>
                  <h6 className="fw-bold">{skill.name}</h6>
                </motion.div>
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  );
}
