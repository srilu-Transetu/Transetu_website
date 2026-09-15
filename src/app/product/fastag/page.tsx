"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Check, Zap, Clock, Shield, Globe, RefreshCw, FileText, 
  CreditCard, Smartphone, MessageCircle, Phone, Mail, Car, 
  ArrowRight, ArrowLeft, Wallet, QrCode, X, MousePointerClick, 
  ShieldCheck, Upload, Loader2, CheckCircle2, Landmark, 
  ChevronRight, Building2, Server, Users, Activity, Lock
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import "./fastag.css";
import Link from "next/link";
import FastagEnquiryModal from "@/components/FastagEnquiryModal";

export default function FastagDetail() {
  const [isFastagEnquiryOpen, setIsFastagEnquiryOpen] = useState(false);

  const mainServices = [
    { icon: <Car size={32} />, title: "Issuance", desc: "On-demand FASTag issuance with rapid fulfillment and logistical integration." },
    { icon: <Zap size={32} />, title: "Replenishment", desc: "Instant liquidity management via multi-channel digital payment gateways." },
    { icon: <Building2 size={32} />, title: "Enterprise Fleet", desc: "Advanced protocols designed for high-volume commercial logistics and fleets." },
  ];

  const supportServices = [
    { icon: <RefreshCw size={24} />, title: "Replacement", desc: "Accelerated replacement workflows for hardware failure or loss." },
    { icon: <Shield size={24} />, title: "Compliance", desc: "Digital KYC management for seamless regulatory alignment." },
    { icon: <Wallet size={24} />, title: "Analytics", desc: "Real-time ledger transparency and comprehensive transit analytics." },
  ];

  const benefits = [
    { icon: <Zap size={24} />, title: "Rapid Deployment", desc: "Operational readiness within hours of system activation." },
    { icon: <CreditCard size={24} />, title: "Automated Settlement", desc: "Friction-free toll deductions for continuous movement." },
    { icon: <Clock size={24} />, title: "Transit Efficiency", desc: "Optimized transit times with zero-stop highway protocols." },
    { icon: <Globe size={24} />, title: "Interoperable Network", desc: "Universal compatibility across all NETC-enabled toll plazas." },
    { icon: <Shield size={24} />, title: "Encrypted Protocol", desc: "Banking-grade security standards for all transit data." },
  ];

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="fastag-page">
      <Navbar />
      
      {/* 1. Hero Section */}
      <section className="fastag-hero">
        <Link href="/#products" className="fastag-back-nav-btn">
          <ArrowLeft size={20} />
          <span>Back to Products</span>
        </Link>
        <div className="fastag-hero-bg-elements">
          <div className="fastag-cta-particle-bg"></div>
          <div className="fastag-hero-glow-orb fastag-orb-1"></div>
          <div className="fastag-hero-glow-orb fastag-orb-2"></div>
        </div>

        <div className="fastag-hero-content">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
            <span className="fastag-hero-badge">Enterprise Mobility Infrastructure</span>
            <h1 className="fastag-title">Precision Toll Solutions<br /><span>For Modern Transit</span></h1>
            <p className="fastag-subtitle">High-velocity highway transit powered by automated, enterprise-grade toll infrastructure built for the future of logistics.</p>
            <div className="fastag-hero-buttons">
              <button
                type="button"
                className="fastag-btn-glow-premium"
                onClick={() => setIsFastagEnquiryOpen(true)}
              >
                <span className="flex items-center justify-center gap-2">Buy FASTag <ArrowRight size={20} /></span>
              </button>
              <button
                type="button"
                className="fastag-btn-glow-secondary"
                onClick={() => setIsFastagEnquiryOpen(true)}
              >
                <span className="flex items-center justify-center gap-2">Quick Recharge <Zap size={20} /></span>
              </button>
            </div>
            
            <div className="fastag-cta-trust mt-12" style={{ marginTop: '48px', opacity: 0.8 }}>
              <div className="fastag-trust-item"><CheckCircle2 size={16} className="text-accent" /> NPCI Authorized</div>
              <div className="fastag-trust-item"><CheckCircle2 size={16} className="text-accent" /> Secured Payments</div>
              <div className="fastag-trust-item"><CheckCircle2 size={16} className="text-accent" /> 24/7 Support</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Strip - Creative Redesign */}
      <section className="fastag-trust-strip">
        <div className="fastag-container">
          <div className="fastag-trust-content">
            <div className="fastag-trust-brand-side">
              <span className="fastag-trust-label">Certified NETC Partner</span>
              <h3 className="fastag-trust-main-heading">The Infrastructure Choice <br className="fastag-br-desktop" /> for Modern Transit</h3>
            </div>
            
            <div className="fastag-trust-metrics-grid">
              <div className="fastag-t-metric-card">
                <div className="fastag-t-icon-box"><Shield size={20} /></div>
                <div className="fastag-t-info">
                  <h4>Fintech Grade</h4>
                  <p>Encrypted security</p>
                </div>
              </div>
              <div className="fastag-t-metric-card">
                <div className="fastag-t-icon-box"><Server size={20} /></div>
                <div className="fastag-t-info">
                  <h4>High Availability</h4>
                  <p>Reliable systems</p>
                </div>
              </div>
              <div className="fastag-t-metric-card">
                <div className="fastag-t-icon-box"><Globe size={20} /></div>
                <div className="fastag-t-info">
                  <h4>Pan-India</h4>
                  <p>Universal coverage</p>
                </div>
              </div>
              
              <div className="fastag-partner-marquee-container">
                <div className="fastag-partner-logo-v2">NPCI</div>
                <div className="fastag-partner-logo-v2">NETC</div>
                <div className="fastag-partner-logo-v2">NHAI</div>
                <div className="fastag-partner-logo-v2">NPCI</div>
                <div className="fastag-partner-logo-v2">NETC</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="fastag-section bg-dark-1 overflow-hidden">
        <div className="fastag-container">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="fastag-section-title">Automated Transit <span>Protocol</span></h2>
            <p className="fastag-section-desc max-w-3xl mx-auto text-center">
              A passive RFID-based system designed for high-velocity highway movement. 
              Transetu integrates this technology into a robust ecosystem for friction-free logistics.
            </p>
          </motion.div>
          
          <motion.div 
            className="fastag-services-grid"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            {mainServices.map((service, index) => (
              <motion.div key={index} className="fastag-service-card-premium" variants={fadeInUp}>
                <div className="fastag-service-icon-premium">
                  {service.icon}
                </div>
                <h3 className="fastag-service-title">{service.title}</h3>
                <p className="fastag-service-desc">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Support Services */}
      <section className="fastag-section bg-gradient-blue relative">
        <div className="fastag-container">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="fastag-section-title">Core <span>Infrastructure</span></h2>
            <p className="fastag-section-desc max-w-2xl mx-auto text-center">Comprehensive management tools for your mobility assets.</p>
          </motion.div>
          
          <motion.div 
            className="fastag-services-grid"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            {supportServices.map((service, index) => (
              <motion.div key={index} className="fastag-service-card-premium" variants={fadeInUp}>
                <div className="fastag-service-icon-premium">
                  {service.icon}
                </div>
                <h3 className="fastag-service-title">{service.title}</h3>
                <p className="fastag-service-desc">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Benefits Section - Redesigned based on the tech overview image */}
      <section className="fastag-section bg-dark-2">
        <div className="fastag-container">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="fastag-section-title">The Transetu <span>Advantage</span></h2>
            <p className="fastag-section-desc max-w-2xl mx-auto text-center">Setting the benchmark in digital tolling and highway mobility.</p>
          </motion.div>
          
          <div className="fastag-benefits-layout">
            <motion.div 
              className="fastag-benefit-image-container"
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            >
              <div className="fastag-benefit-image-wrapper">
                <Image 
                  src="/assets/Fastag_image.png" 
                  alt="FASTag Technology Overview" 
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="fastag-benefit-content-overlay">
                {[
                  { label: "TECHNOLOGY OVERVIEW", title: "Precision RFID Core", desc: "Engineered for high-accuracy signal capture even at high-velocity highway speeds." },
                  { label: "SECURITY ARCHITECTURE", title: "Encrypted Transactions", desc: "End-to-end cryptographic protocols ensuring absolute data and payment integrity." },
                  { label: "INTEGRATED ECOSYSTEM", title: "Instant Replenishment", desc: "Integrated API hooks for zero-latency balance replenishment across all digital channels." }
                ].map((tech, idx) => (
                  <motion.div 
                    key={idx} 
                    className="fastag-tech-info-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 * idx }}
                  >
                    <span className="fastag-tech-label">{tech.label}</span>
                    <h4 className="fastag-tech-heading">{tech.title}</h4>
                    <p className="fastag-tech-desc">{tech.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Seamless Activation - Redesigned UI */}
      <section className="fastag-section bg-dark-1">
        <div className="fastag-container">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="fastag-section-title">Activation <span>Workflow</span></h2>
            <p className="fastag-section-desc max-w-2xl mx-auto text-center">Commission your vehicle for the highway in four precise steps.</p>
          </motion.div>
          
          <div className="fastag-process-flow">
            <motion.div 
              className="fastag-process-nodes"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            >
              {[
                { icon: <MousePointerClick size={28} />, title: "Protocol Selection", step: "01", desc: "Define your requirement: issuance, replenishment, or hardware replacement." },
                { icon: <Car size={28} />, title: "Asset Registration", step: "02", desc: "Submit vehicle credentials and digital compliance documentation." },
                { icon: <ShieldCheck size={28} />, title: "Validation", step: "03", desc: "Automated and manual audit of vehicle and KYC data for compliance." },
                { icon: <Zap size={28} />, title: "System Activation", step: "04", desc: "Final commissioning and priority fulfillment of your hardware." }
              ].map((node, i) => (
                <motion.div key={i} className="fastag-process-card-modern" variants={fadeInUp}>
                  <div className="fastag-p-number">{node.step}</div>
                  <div className="fastag-p-icon-modern">{node.icon}</div>
                  <h3 className="fastag-p-title-modern">{node.title}</h3>
                  <p className="fastag-p-desc-modern">{node.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Pricing Section - Updated to single centered card */}
      <section id="pricing" className="fastag-section bg-gradient-blue relative">
        <div className="fastag-container">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="fastag-section-title">Plans & <span>Deployments</span></h2>
            <p className="fastag-section-desc max-w-2xl mx-auto text-center">Transparent pricing structures for every mobility scale.</p>
          </motion.div>
          
          <div className="fastag-pricing-single-container">
            <motion.div 
              className="fastag-pricing-hero-wrapper"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <div className="fastag-pricing-visual">
                <div className="fastag-visual-tag-badge">Certified Tech</div>
                <div className="fastag-visual-main">
                  <div className="fastag-visual-rings"></div>
                  <div className="fastag-visual-rings-inner"></div>
                  <div className="fastag-visual-icon-wrap">
                    <Car size={80} strokeWidth={1.5} />
                  </div>
                </div>
                <div className="fastag-cta-trust mt-8">
                  <div className="fastag-trust-item"><CheckCircle2 size={16} className="text-accent" /> Active RFID</div>
                  <div className="fastag-trust-item"><CheckCircle2 size={16} className="text-accent" /> Secure Chip</div>
                </div>
              </div>

              <div className="fastag-pricing-info">
                <div className="fastag-info-header">
                  <span className="fastag-tech-label">DEPLOYMENT PLAN</span>
                  <h3>Individual Mobility</h3>
                  <div className="fastag-price">₹500<span>/one-time</span></div>
                  <p className="fastag-pricing-sub">Enterprise-grade FASTag infrastructure optimized for private transit vehicles.</p>
                </div>

                <div className="fastag-info-features-grid">
                  {[
                    { label: "Priority Fulfillment", icon: <Zap size={18} /> },
                    { label: "₹200 Security Deposit", icon: <Shield size={18} /> },
                    { label: "₹100 Wallet Balance", icon: <Wallet size={18} /> },
                    { label: "Cloud Dashboard Access", icon: <Globe size={18} /> },
                    { label: "Real-time Tracking", icon: <Activity size={18} /> },
                    { label: "24/7 Premium Support", icon: <Users size={18} /> }
                  ].map((feature, idx) => (
                    <div key={idx} className="fastag-feature-item-v2">
                      <div className="fastag-feature-icon-box">{feature.icon}</div>
                      <span>{feature.label}</span>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  className="fastag-btn-glow-premium lg w-full"
                  onClick={() => setIsFastagEnquiryOpen(true)}
                >
                  <span className="flex items-center justify-center gap-3">Apply for FASTag Now <ArrowRight size={20} /></span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* 7. Final CTA Section - Updated with Background Image */}
      <section className="fastag-section bg-dark-1 border-t border-white/5">
        <div className="fastag-container">
          <motion.div 
            className="fastag-cta-premium-banner"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          >
            <div className="fastag-cta-particle-bg"></div>
            
            <div className="fastag-cta-content relative z-10">
              <h2 className="fastag-cta-heading">Modernize Your Transit Strategy</h2>
              <p className="fastag-cta-desc">
                Integrate with India's most reliable mobility infrastructure. Deploy enterprise-grade tolling solutions today.
              </p>
              
              <div className="fastag-cta-actions">
                <button
                  type="button"
                  className="fastag-btn-glow-premium lg"
                  onClick={() => setIsFastagEnquiryOpen(true)}
                >
                  <span className="flex items-center justify-center gap-3">Buy FASTag Now <ArrowRight size={24} /></span>
                </button>
              </div>
              
              <div className="fastag-cta-trust">
                <div className="fastag-trust-item"><CheckCircle2 size={16} className="text-accent" /> NPCI Authorized</div>
                <div className="fastag-trust-item"><CheckCircle2 size={16} className="text-accent" /> Secured Payments</div>
                <div className="fastag-trust-item"><CheckCircle2 size={16} className="text-accent" /> 24/7 Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Official FASTag Enquiry Modal */}
      <FastagEnquiryModal
        isOpen={isFastagEnquiryOpen}
        onClose={() => setIsFastagEnquiryOpen(false)}
      />
    </div>
  );
}
