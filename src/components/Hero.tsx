"use client";

import { CreditCard, MapPin, Box, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg-wrapper">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-bg-video-el"
        >
          <source src="/assets/hero-2.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="hero-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Seamless Travel.
            <br />
            <span>Smarter</span> Solutions.
          </motion.h1>

          <motion.p
            className="hero-p"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Transetu provides reliable FASTag solutions, GPS tracking systems,
            and premium holders for a smoother journey.
          </motion.p>

          <motion.div
            className="hero-features"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <CreditCard className="feature-icon" />
              </div>
              <span className="feature-label">FASTag</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <MapPin className="feature-icon" />
              </div>
              <span className="feature-label">GPS Tracking</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <Box className="feature-icon" />
              </div>
              <span className="feature-label">RFID Holders</span>
            </div>
          </motion.div>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <button className="btn-primary">
              Explore Products <ArrowRight size={18} />
            </button>
            <button className="btn-secondary">Learn More</button>
          </motion.div>
        </motion.div>

        <div className="hero-visual">
          {/* Visual element placeholder if needed to balance the layout */}
        </div>
      </div>
    </section>
  );
}