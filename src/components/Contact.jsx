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
    <section id="contact" className="py-5 bg-light">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-center">Contact Me</h2>
          <Form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "600px" }}>
            
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} name="message" required />
            </Form.Group>

            <div className="text-center">
              <Button type="submit" variant="primary" size="lg">Send Message</Button>
            </div>
          </Form>
        </motion.div>
      </Container>
    </section>
  );
}
