"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Target, Eye, HeartHandshake, X, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./about.css";

export default function About() {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  // Prevent background scrolling when slider is open
  useEffect(() => {
    if (isSliderOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSliderOpen]);

  return (
    <section className="about-section" id="about">
      <div className="about-bg-pattern"></div>
      
      <div className="about-container">
        <div className="about-grid">
          
          {/* Left Side */}
          <div className="about-left">
            <span className="about-label">ABOUT TRANSETU</span>
            <h2 className="about-title">
              Driven by <span className="about-title-highlight">Innovation.</span><br />
              <span className="about-title-highlight">Committed</span> to You.
            </h2>
            <p className="about-description">
              Transetu is dedicated to delivering smart, reliable, and innovative solutions for modern travelers and businesses.
            </p>
            <button className="about-btn" onClick={() => setIsSliderOpen(true)}>
              Know More About Us <ArrowRight size={16} />
            </button>
          </div>

          {/* Right Side */}
          <div className="about-right">
            
            {/* Feature 1 */}
            <div className="about-feature">
              <div className="about-icon-container">
                <Target size={28} strokeWidth={1.5} />
              </div>
              <h3 className="about-feature-title">Our Mission</h3>
              <p className="about-feature-text">
                To provide seamless and smart travel solutions.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="about-feature">
              <div className="about-icon-container">
                <Eye size={28} strokeWidth={1.5} />
              </div>
              <h3 className="about-feature-title">Our Vision</h3>
              <p className="about-feature-text">
                To be a trusted leader in toll and tracking solutions.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="about-feature">
              <div className="about-icon-container">
                <HeartHandshake size={28} strokeWidth={1.5} />
              </div>
              <h3 className="about-feature-title">Our Commitment</h3>
              <p className="about-feature-text">
                Quality products, trusted service, and customer first.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* Side Slider Panel */}
      <AnimatePresence>
        {isSliderOpen && (
          <>
            <motion.div 
              className="about-slider-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSliderOpen(false)}
            />
            <motion.div 
              className="about-slider-panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="about-slider-header">
                <h3 className="about-slider-title">Transetu Details</h3>
                <button className="about-slider-close" onClick={() => setIsSliderOpen(false)}>
                  <X size={20} />
                </button>
              </div>

              <div className="about-slider-content">
                <div className="mb-8">
                  <span className="about-label" style={{ display: 'inline-block', marginBottom: '12px' }}>THE TRANSETU STORY</span>
                  <h4 style={{ fontSize: '1.8rem', color: 'white', fontWeight: 700, marginBottom: '20px', lineHeight: 1.3 }}>
                    Engineering the Future of <span className="about-title-highlight">Highway Infrastructure</span>
                  </h4>
                  
                  <p className="about-slider-text">
                    Transetu began with a singular vision: to eliminate friction from India's vast highway networks. We recognized that the modern traveler and logistics enterprise required more than just physical infrastructure—they needed a <span className="about-slider-highlight">connected, intelligent mobility ecosystem</span>.
                  </p>
                  
                  <p className="about-slider-text">
                    Today, we stand at the forefront of transportation technology. By integrating enterprise-grade FASTag tolling systems with precision GPS tracking hardware, we've created a seamless transit experience that saves time, reduces fuel consumption, and provides absolute visibility over assets in motion.
                  </p>
                </div>

                <div className="about-slider-grid">
                  <div className="about-slider-card">
                    <ShieldCheck size={28} className="mb-4" color="#3b82f6" />
                    <h4>ISO Certified</h4>
                    <p>Our hardware and software ecosystems meet the highest international standards for security and reliability.</p>
                  </div>
                  <div className="about-slider-card">
                    <Zap size={28} className="mb-4" color="#3b82f6" />
                    <h4>99.9% Uptime</h4>
                    <p>Redundant server architecture ensures our tracking and tolling APIs are always available when you need them.</p>
                  </div>
                </div>

                <div style={{ marginTop: '40px' }}>
                  <h4 style={{ fontSize: '1.2rem', color: 'white', fontWeight: 600, marginBottom: '20px' }}>Our Mobility Ecosystem</h4>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <CheckCircle2 size={20} color="#3b82f6" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.5 }}>
                        <span style={{ color: 'white', fontWeight: 500 }}>Commercial Fleet Management:</span> Real-time telemetry, geofencing, and automated toll expense tracking.
                      </span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <CheckCircle2 size={20} color="#3b82f6" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.5 }}>
                        <span style={{ color: 'white', fontWeight: 500 }}>Private Vehicle Security:</span> Premium anti-theft GPS hardware integrated with emergency response protocols.
                      </span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <CheckCircle2 size={20} color="#3b82f6" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.5 }}>
                        <span style={{ color: 'white', fontWeight: 500 }}>Premium Accessories:</span> Signal-neutral, heat-resistant RFID holders designed for extreme durability.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
