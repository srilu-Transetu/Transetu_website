"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Check, Zap, Clock, Shield, Globe, RefreshCw, FileText, 
  CreditCard, Smartphone, MessageCircle, Phone, Mail, Car, 
  ArrowRight, Wallet, QrCode, X, MousePointerClick, 
  ShieldCheck, Upload, Loader2, CheckCircle2, Landmark, 
  ChevronRight, Building2, Server, Users, Activity, Lock
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import "./fastag.css";
import Link from "next/link";

export default function FastagDetail() {
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleNumberError, setVehicleNumberError] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("upi");

  const handleVehicleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.toUpperCase().replace(/[^A-Z0-9 ]/g, "");
    setVehicleNumber(val);
    
    const vehicleRegex = /^[A-Z]{2}\s?[0-9]{1,2}\s?[A-Z]{1,3}\s?[0-9]{4}$/;
    if (val && !vehicleRegex.test(val)) {
      setVehicleNumberError("Invalid format (e.g. MH 12 AB 1234)");
    } else {
      setVehicleNumberError("");
    }
  };

  const handleProceedPayment = (planName: string) => {
    setSelectedPlan(planName);
    setShowPaymentForm(true);
    setIsProcessing(false);
    setIsSuccess(false);
    setVehicleNumber("");
    setVehicleNumberError("");
  };

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (vehicleNumberError) return;
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      setTimeout(() => {
        setShowPaymentForm(false);
        setIsSuccess(false);
      }, 4000);
    }, 2500);
  };

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
        <div className="hero-bg-elements">
          <div className="cta-particle-bg"></div>
          <div className="hero-glow-orb orb-1"></div>
          <div className="hero-glow-orb orb-2"></div>
        </div>

        <div className="fastag-hero-content">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
            <span className="hero-badge">Enterprise Mobility Infrastructure</span>
            <h1 className="fastag-title">Precision Toll Solutions<br /><span>For Modern Transit</span></h1>
            <p className="fastag-subtitle">High-velocity highway transit powered by automated, enterprise-grade toll infrastructure built for the future of logistics.</p>
            <div className="hero-buttons">
              <Link href="#pricing" className="btn-glow-premium">
                <span className="flex items-center justify-center gap-2">Get Your FASTag <ArrowRight size={20} /></span>
              </Link>
              <button className="btn-glow-secondary" onClick={() => handleProceedPayment("Quick FASTag Recharge")}>
                <span className="flex items-center justify-center gap-2">Quick Recharge <Zap size={20} /></span>
              </button>
            </div>
            
            <div className="cta-trust mt-12" style={{ marginTop: '48px', opacity: 0.8 }}>
              <div className="trust-item"><CheckCircle2 size={16} className="text-accent" /> NPCI Authorized</div>
              <div className="trust-item"><CheckCircle2 size={16} className="text-accent" /> Secured Payments</div>
              <div className="trust-item"><CheckCircle2 size={16} className="text-accent" /> 24/7 Support</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Strip - Creative Redesign */}
      <section className="trust-strip">
        <div className="fastag-container">
          <div className="trust-content">
            <div className="trust-brand-side">
              <span className="trust-label">Certified NETC Partner</span>
              <h3 className="trust-main-heading">The Infrastructure Choice<br />for Modern Transit</h3>
            </div>
            
            <div className="trust-metrics-grid">
              <div className="t-metric-card">
                <div className="t-icon-box"><Shield size={20} /></div>
                <div className="t-info">
                  <h4>Fintech Grade</h4>
                  <p>Encrypted security</p>
                </div>
              </div>
              <div className="t-metric-card">
                <div className="t-icon-box"><Server size={20} /></div>
                <div className="t-info">
                  <h4>High Availability</h4>
                  <p>Reliable systems</p>
                </div>
              </div>
              <div className="t-metric-card">
                <div className="t-icon-box"><Globe size={20} /></div>
                <div className="t-info">
                  <h4>Pan-India</h4>
                  <p>Universal coverage</p>
                </div>
              </div>
              
              <div className="partner-marquee-container">
                <div className="partner-logo-v2">NPCI</div>
                <div className="partner-logo-v2">NETC</div>
                <div className="partner-logo-v2">NHAI</div>
                <div className="partner-logo-v2">NPCI</div>
                <div className="partner-logo-v2">NETC</div>
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
            <p className="section-desc max-w-3xl mx-auto">
              A passive RFID-based system designed for high-velocity highway movement. 
              Transetu integrates this technology into a robust ecosystem for friction-free logistics.
            </p>
          </motion.div>
          
          <motion.div 
            className="services-grid"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            {mainServices.map((service, index) => (
              <motion.div key={index} className="service-card-premium" variants={fadeInUp}>
                <div className="service-icon-premium">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
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
            <p className="section-desc max-w-2xl mx-auto">Comprehensive management tools for your mobility assets.</p>
          </motion.div>
          
          <motion.div 
            className="services-grid"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            {supportServices.map((service, index) => (
              <motion.div key={index} className="service-card-premium" variants={fadeInUp}>
                <div className="service-icon-premium">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
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
            <p className="section-desc max-w-2xl mx-auto">Setting the benchmark in digital tolling and highway mobility.</p>
          </motion.div>
          
          <div className="benefits-layout">
            <motion.div 
              className="benefit-image-container"
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            >
              <div className="benefit-image-wrapper">
                <Image 
                  src="/assets/Fastag_image.png" 
                  alt="FASTag Technology Overview" 
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="benefit-content-overlay">
                {[
                  { label: "TECHNOLOGY OVERVIEW", title: "Precision RFID Core", desc: "Engineered for high-accuracy signal capture even at high-velocity highway speeds." },
                  { label: "SECURITY ARCHITECTURE", title: "Encrypted Transactions", desc: "End-to-end cryptographic protocols ensuring absolute data and payment integrity." },
                  { label: "INTEGRATED ECOSYSTEM", title: "Instant Replenishment", desc: "Integrated API hooks for zero-latency balance replenishment across all digital channels." }
                ].map((tech, idx) => (
                  <motion.div 
                    key={idx} 
                    className="tech-info-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 * idx }}
                  >
                    <span className="tech-label">{tech.label}</span>
                    <h4 className="tech-heading">{tech.title}</h4>
                    <p className="tech-desc">{tech.desc}</p>
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
            <p className="section-desc max-w-2xl mx-auto">Commission your vehicle for the highway in four precise steps.</p>
          </motion.div>
          
          <div className="process-flow">
            <motion.div 
              className="process-nodes"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            >
              {[
                { icon: <MousePointerClick size={28} />, title: "Protocol Selection", step: "01", desc: "Define your requirement: issuance, replenishment, or hardware replacement." },
                { icon: <Car size={28} />, title: "Asset Registration", step: "02", desc: "Submit vehicle credentials and digital compliance documentation." },
                { icon: <ShieldCheck size={28} />, title: "Validation", step: "03", desc: "Automated and manual audit of vehicle and KYC data for compliance." },
                { icon: <Zap size={28} />, title: "System Activation", step: "04", desc: "Final commissioning and priority fulfillment of your hardware." }
              ].map((node, i) => (
                <motion.div key={i} className="process-card-modern" variants={fadeInUp}>
                  <div className="p-number">{node.step}</div>
                  <div className="p-icon-modern">{node.icon}</div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '10px' }}>{node.title}</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--fastag-text-secondary)', lineHeight: '1.6' }}>{node.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Pricing Section - Fixed alignment */}
      <section id="pricing" className="fastag-section bg-gradient-blue relative">
        <div className="fastag-container">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="fastag-section-title">Plans & <span>Deployments</span></h2>
            <p className="section-desc max-w-2xl mx-auto">Transparent pricing structures for every mobility scale.</p>
          </motion.div>
          
          <motion.div 
            className="pricing-premium-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="glass-panel pricing-card-premium" variants={fadeInUp}>
              <div className="pricing-header">
                <h3>Individual Mobility</h3>
                <div className="price">₹499<span>/one-time</span></div>
                <p className="pricing-sub">Optimized for private transit vehicles.</p>
              </div>
              <ul className="pricing-features">
                <li><Check size={18} className="text-accent" /> Priority Fulfillment</li>
                <li><Check size={18} className="text-accent" /> ₹200 Security Deposit</li>
                <li><Check size={18} className="text-accent" /> ₹100 Wallet Balance</li>
                <li><Check size={18} className="text-accent" /> Cloud Dashboard Access</li>
              </ul>
              <button className="btn-pricing btn-outline" onClick={() => handleProceedPayment("Personal Vehicle Tag")}>Apply Now</button>
            </motion.div>
            
            <motion.div className="glass-panel pricing-card-premium highlighted" variants={fadeInUp}>
              <div className="popular-badge-animated">MOST POPULAR</div>
              <div className="pricing-header">
                <h3>Gateway Replenishment</h3>
                <div className="price">₹0<span>/fee</span></div>
                <p className="pricing-sub text-highlight">High-velocity transit with zero friction.</p>
              </div>
              <ul className="pricing-features">
                <li><Check size={18} className="text-accent" /> Zero-Latency Replenishment</li>
                <li><Check size={18} className="text-accent" /> Real-Time Transit Alerts</li>
                <li><Check size={18} className="text-accent" /> Automated Low-Balance Triggers</li>
                <li><Check size={18} className="text-accent" /> Auto-recharge Protocols</li>
                <li><Check size={18} className="text-accent" /> 24/7 Priority Support</li>
              </ul>
              <button className="btn-pricing btn-primary" onClick={() => handleProceedPayment("FASTag Recharge")}>Recharge Now</button>
            </motion.div>
 
            <motion.div className="glass-panel pricing-card-premium" variants={fadeInUp}>
              <div className="pricing-header">
                <h3>Enterprise Logistics</h3>
                <div className="price">Custom</div>
                <p className="pricing-sub">Scalable solutions for fleet operators.</p>
              </div>
              <ul className="pricing-features">
                <li><Check size={18} className="text-accent" /> Accelerated Provisioning</li>
                <li><Check size={18} className="text-accent" /> Bulk Asset Management</li>
                <li><Check size={18} className="text-accent" /> Enterprise Compliance Reporting</li>
                <li><Check size={18} className="text-accent" /> Dedicated Solutions Architect</li>
                <li><Check size={18} className="text-accent" /> API Transit Integration</li>
              </ul>
              <button className="btn-pricing btn-outline" onClick={() => handleProceedPayment("Commercial Vehicle Tag")}>Contact Team</button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* 7. Final CTA Section - Updated with Background Image */}
      <section className="fastag-section bg-dark-1 border-t border-white/5">
        <div className="fastag-container">
          <motion.div 
            className="cta-premium-banner"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          >
            <div className="cta-particle-bg"></div>
            
            <div className="cta-content relative z-10">
              <h2 className="cta-heading">Modernize Your Transit Strategy</h2>
              <p className="cta-desc">
                Integrate with India's most reliable mobility infrastructure. Deploy enterprise-grade tolling solutions today.
              </p>
              
              <div className="cta-actions">
                <button className="btn-glow-premium lg" onClick={() => handleProceedPayment("New FASTag Application")}>
                  <span className="flex items-center justify-center gap-3">Get Started Now <ArrowRight size={24} /></span>
                </button>
              </div>
              
              <div className="cta-trust">
                <div className="trust-item"><CheckCircle2 size={16} className="text-accent" /> NPCI Authorized</div>
                <div className="trust-item"><CheckCircle2 size={16} className="text-accent" /> Secured Payments</div>
                <div className="trust-item"><CheckCircle2 size={16} className="text-accent" /> 24/7 Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Premium Payment Modal */}
      {showPaymentForm && (
        <div className="modal-overlay" onClick={() => setShowPaymentForm(false)}>
          <motion.div 
            className="payment-modal-premium" 
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
          >
            <button className="modal-close" onClick={() => setShowPaymentForm(false)}><X size={24} /></button>
            
            {isSuccess ? (
              <div className="modal-success">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, delay: 0.2 }}>
                  <div className="success-icon-wrap">
                    <CheckCircle2 size={60} color="#10B981" />
                    <div className="success-pulse"></div>
                  </div>
                </motion.div>
                <h3>Application Dispatched</h3>
                <p>Your FASTag provisioning request is active. Confirmation details have been dispatched to your registered contact protocol.</p>
                <div className="secure-badge mt-6" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748B', fontSize: '0.85rem', justifyContent: 'center', marginTop: '24px' }}><Lock size={14} /> 256-bit Encrypted Transmission</div>
              </div>
            ) : (
              <>
                <div className="modal-header">
                  <h3>Application Parameters</h3>
                  <p>Provisioning <span>{selectedPlan}</span> systems.</p>
                </div>
                
                <form className="modal-form" onSubmit={handleSubmit}>
                  <div className="form-grid">
                    <div className="form-group">
                      <label>Registrant Name</label>
                      <input type="text" placeholder="Legal full name" required className="premium-input" />
                    </div>
                    
                    <div className="form-group">
                      <label>Contact Number</label>
                      <input type="tel" placeholder="10-digit mobile number" required pattern="[0-9]{10}" className="premium-input" />
                    </div>
                    
                    {!selectedPlan.includes("Recharge") && (
                      <div className="form-group">
                        <label>Vehicle Type</label>
                        <select required defaultValue="" className="premium-input">
                          <option value="" disabled>Select vehicle type</option>
                          <option value="car">Car / Jeep / Van</option>
                          <option value="lcv">Light Commercial Vehicle</option>
                          <option value="bus">Bus / Truck</option>
                        </select>
                      </div>
                    )}

                    <div className="form-group">
                      <label>Registration Number</label>
                      <input 
                        type="text" 
                        placeholder="e.g. MH 12 AB 1234" 
                        required 
                        value={vehicleNumber}
                        onChange={handleVehicleNumberChange}
                        className="premium-input"
                        style={{ borderColor: vehicleNumberError ? "#EF4444" : "" }}
                      />
                      {vehicleNumberError && (
                        <span style={{ color: "#EF4444", fontSize: "0.75rem" }}>{vehicleNumberError}</span>
                      )}
                    </div>

                    {selectedPlan.includes("Recharge") && (
                      <div className="form-group" style={{ gridColumn: 'span 2' }}>
                        <label>Recharge Amount (₹)</label>
                        <input type="number" placeholder="Enter amount (Min ₹100)" min="100" required className="premium-input" />
                      </div>
                    )}

                    {!selectedPlan.includes("Recharge") && (
                      <div className="form-group" style={{ gridColumn: 'span 2' }}>
                        <label>Documentation Upload</label>
                        <div style={{ position: 'relative' }}>
                          <input type="file" required accept=".jpg,.jpeg,.png,.pdf" className="premium-input" style={{ width: '100%', cursor: 'pointer', opacity: 0, position: 'absolute', inset: 0, zIndex: 10 }} />
                          <div className="premium-input" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#64748B' }}>
                            <Upload size={18} /> Select RC document (PDF/JPG)
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="payment-method-section" style={{ marginTop: '30px' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--fastag-text-secondary)', marginBottom: '12px', display: 'block' }}>Select Payment Method</label>
                    <div className="payment-options">
                      <div className={`payment-option ${paymentMethod === 'upi' ? 'active' : ''}`} onClick={() => setPaymentMethod('upi')}>
                        <Smartphone size={20} /> UPI / QR
                      </div>
                      <div className={`payment-option ${paymentMethod === 'card' ? 'active' : ''}`} onClick={() => setPaymentMethod('card')}>
                        <CreditCard size={20} /> Credit Card
                      </div>
                      <div className={`payment-option ${paymentMethod === 'net' ? 'active' : ''}`} onClick={() => setPaymentMethod('net')}>
                        <Landmark size={20} /> Net Banking
                      </div>
                    </div>
                  </div>
                  
                  <button type="submit" disabled={isProcessing || !!vehicleNumberError} className="btn-glow-premium lg w-full" style={{ width: '100%', marginTop: '30px', padding: "18px" }}>
                    {isProcessing ? (
                      <span className="flex items-center justify-center gap-3">
                        <Loader2 className="animate-spin" size={20} />
                        Processing Securely...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-3">
                      <Lock size={18} /> Provision System
                      </span>
                    )}
                  </button>
                  
                  <div className="secure-checkout-footer">
                    <span>Secured via</span>
                    <div className="razorpay-placeholder">Razorpay</div>
                    <span>• Enterprise SSL Encryption Standard</span>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}
