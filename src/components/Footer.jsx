import React from 'react';
import { Container } from 'react-bootstrap';
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-4 glass-panel bg-transparent rounded-0 shadow-none border-0 mt-5" style={{ borderTop: '1px solid var(--glass-border) !important', background: 'var(--bg-dark)' }}>
      <Container className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
        <div className="text-secondary-glow">© {year} Rahul Singh Chouhan</div>
        <nav className="d-flex gap-3">
        <div className="d-flex align-items-center gap-4">
          <a
            href="https://www.linkedin.com/in/rahulsinghchouhan724"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-secondary-glow text-decoration-none transition-all hover-white"
            style={{ transition: 'color 0.3s ease' }}
            onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:rahulsinghchouhan724@gmail.com"
            aria-label="Email"
            className="text-secondary-glow text-decoration-none transition-all"
            style={{ transition: 'color 0.3s ease' }}
            onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            <MdEmail size={26} />
          </a>
          <div className="small text-secondary-glow d-none d-md-block border-start border-secondary ps-3 ms-2">
            <div><span className="fw-bold">LinkedIn:</span> /in/rahulsinghchouhan724</div>
            <div><span className="fw-bold">Email:</span> rahulsinghchouhan724@gmail.com</div>
          </div>
        </div>
        </nav>
      </Container>
    </footer>
  );
}
