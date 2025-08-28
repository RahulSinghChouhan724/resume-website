import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import { FaChartBar, FaCloud, FaFileInvoice, FaGlobe } from 'react-icons/fa';

// project data with icons
const projects = [
  {
    title: "Automation Dashboard",
    description: "Transformed JSON and text data into visual dashboards (charts/graphs) to enhance business insights and decision-making.",
    tech: "React, Node.js, Chart.js",
    link: "#",
    Icon: FaChartBar
  },
  {
    title: "File Management Automation",
    description: "Developed online file management system with categorization, Amazon Cloud backup, and automation tools to reduce manual work.",
    tech: "React, Node.js, AWS S3",
    link: "#",
    Icon: FaCloud
  },
  {
    title: "Billing & Lead Generation Tools",
    description: "Built web applications for billing and lead generation with optimized performance and streamlined workflows.",
    tech: "React, PHP, MySQL",
    link: "#",
    Icon: FaFileInvoice
  },
  {
    title: "Company Website Optimization",
    description: "Redesigned & optimized company website, boosting online presence and improving user experience.",
    tech: "React, Bootstrap",
    link: "https://www.shreeyash.com/",
    Icon: FaGlobe
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-5 bg-light">
      <Container>
        <h2 className="mb-4 text-center">Projects</h2>
        <Row className="g-4">
          {projects.map((proj, idx) => (
            <Col md={6} lg={4} key={idx}>
              <ProjectCard {...proj} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
