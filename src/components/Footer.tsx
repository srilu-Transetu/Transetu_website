"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer-main">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <img src="/assets/Footer_logo.png" alt="Transetu" className="footer-logo" />
            <p className="footer-desc">
              Seamless travel solutions including FASTag, GPS tracking, and premium accessories for your journey.
            </p>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/" className="footer-link">Home</Link></li>
              <li><Link href="#products" className="footer-link">Products</Link></li>
              <li><Link href="#about" className="footer-link">About Us</Link></li>
              <li><Link href="#contact" className="footer-link">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact Info</h4>
            <ul className="footer-contact">
              <li>
                <Phone size={18} style={{ color: 'var(--color-accent-blue)' }} /> 
                <span>+91 1800 123 4567</span>
              </li>
              <li>
                <Mail size={18} style={{ color: 'var(--color-accent-blue)' }} /> 
                <span>support@transetu.com</span>
              </li>
              <li>
                <MapPin size={18} style={{ color: 'var(--color-accent-blue)', marginTop: '4px' }} /> 
                <span>Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Transetu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
