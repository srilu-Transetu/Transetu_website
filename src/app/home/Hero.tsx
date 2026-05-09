"use client";

import { CreditCard, MapPin, Box, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import TrustBar from "./TrustBar";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg-wrapper">
        {/* Background Image - Replaces Video */}
        <img 
          src="/assets/Background_image.png" 
          alt="Transetu Hero Background" 
          className="hero-bg-image-el"
        />

        {/* Video Background (Commented Out)
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-bg-video-el"
        >
          <source src="/assets/hero-2.mp4" type="video/mp4" />
        </video>
        */}
      </div>

      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
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
            <span className="solutions-wrap">
              <span className="text-gradient">Smarter</span> Solutions.
            </span>
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
            <div className="hero-feature-item">
              <CreditCard className="hero-feature-icon" size={24} />
              <span className="hero-feature-label">FASTag</span>
            </div>
            <div className="hero-feature-item">
              <MapPin className="hero-feature-icon" size={24} />
              <span className="hero-feature-label">GPS Tracking</span>
            </div>
            <div className="hero-feature-item">
              <Box className="hero-feature-icon" size={24} />
              <span className="hero-feature-label">RFID Holders</span>
            </div>
          </motion.div>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link href="/#products" className="btn-primary" style={{ textDecoration: 'none' }}>
              Explore Products <ArrowRight size={18} />
            </Link>
            <Link href="/#about" className="btn-secondary" style={{ textDecoration: 'none' }}>
              Learn More
            </Link>
          </motion.div>
        </motion.div>

        <div className="hero-visual">
          {/* Visual balance */}
        </div>
      </div>

      <div className="hero-bottom-bar">
        <TrustBar />
      </div>
    </section>
  );
}