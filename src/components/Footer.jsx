import React from 'react';
import { Container } from 'react-bootstrap';
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-4 border-top bg-white">
      <Container className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
        <div className="text-muted">© {year} Rahul Singh Chouhan</div>
        <nav className="d-flex gap-3">
        <div className="d-flex align-items-center gap-3">
          <a
            href="https://www.linkedin.com/in/rahulsinghchouhan724"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-decoration-none"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="mailto:rahulsinghchouhan724@gmail.com"
            aria-label="Email"
            className="text-decoration-none"
          >
            <MdEmail size={22} />
          </a>
          <div className="small text-muted d-none d-md-block">
            <div>LinkedIn: /in/rahulsinghchouhan724</div>
            <div>Email: rahulsinghchouhan724@gmail.com</div>
          </div>
        </div>
        </nav>
       
      </Container>
    </footer>
  );
}


