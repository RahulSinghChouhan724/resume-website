import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { motion } from 'framer-motion';

export default function Contact() {
  const [status, setStatus] = useState(""); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mzzvllwn", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch {
      setStatus("ERROR");
    }
  };

  return (
    <section id="contact" className="py-5" style={{ background: 'var(--bg-darker)' }}>
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-panel p-4 p-md-5 mx-auto"
          style={{ maxWidth: "700px" }}
        >
          <h2 className="mb-4 text-center section-title">Let's <span className="text-gradient">Connect</span></h2>
          
          {status === "SUCCESS" && (
            <Alert variant="success" className="bg-transparent border-success text-success">
              Thanks! I'll get back to you soon.
            </Alert>
          )}
          {status === "ERROR" && (
            <Alert variant="danger" className="bg-transparent border-danger text-danger">
              Oops! There was an error sending your message.
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-4">
              <Form.Label className="text-secondary-glow">Name</Form.Label>
              <Form.Control 
                type="text" 
                name="name" 
                required 
                className="bg-transparent text-white border-secondary shadow-none" 
                style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="text-secondary-glow">Email</Form.Label>
              <Form.Control 
                type="email" 
                name="email" 
                required 
                className="bg-transparent text-white border-secondary shadow-none"
                style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="text-secondary-glow">Message</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={5} 
                name="message" 
                required 
                className="bg-transparent text-white border-secondary shadow-none"
                style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
              />
            </Form.Group>

            <div className="text-center mt-5">
              <Button type="submit" className="btn-premium px-5" size="lg">Send Message</Button>
            </div>
          </Form>
        </motion.div>
      </Container>
    </section>
  );
}
