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

export default function FastagDetail() {
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("upi");
  
  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    vehicleNumber: "",
    rcNumber: "",
    panNumber: "",
    aadhaarNumber: "",
    rechargeAmount: "100",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }

    // Special validation for vehicle number
    if (name === "vehicleNumber") {
      const val = value.toUpperCase().replace(/[^A-Z0-9 ]/g, "");
      setFormData(prev => ({ ...prev, vehicleNumber: val }));
      
      const vehicleRegex = /^[A-Z]{2}\s?[0-9]{1,2}\s?[A-Z]{1,3}\s?[0-9]{4}$/;
      if (val && !vehicleRegex.test(val)) {
        setErrors(prev => ({ ...prev, vehicleNumber: "Invalid format (e.g. MH 12 AB 1234)" }));
      }
    }
  };

  const handleProceedPayment = (planName: string) => {
    setSelectedPlan(planName);
    setShowPaymentForm(true);
    setIsProcessing(false);
    setIsSuccess(false);
    setFormData({
      fullName: "",
      mobile: "",
      email: "",
      vehicleNumber: "",
      rcNumber: "",
      panNumber: "",
      aadhaarNumber: "",
      rechargeAmount: "100",
    });
    setErrors({});
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
    
    // Final Validation
    const newErrors: Record<string, string> = {};
    if (!formData.rcNumber) newErrors.rcNumber = "RC Number is required";
    if (!formData.panNumber) newErrors.panNumber = "PAN Number is required";
    if (!formData.vehicleNumber) newErrors.vehicleNumber = "Vehicle Number is required";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

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
              <Link href="#pricing" className="fastag-btn-glow-premium">
                <span className="flex items-center justify-center gap-2">Get Your FASTag <ArrowRight size={20} /></span>
              </Link>
              <button className="fastag-btn-glow-secondary" onClick={() => handleProceedPayment("Quick FASTag Recharge")}>
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

                <button className="fastag-btn-glow-premium lg w-full" onClick={() => handleProceedPayment("Individual Mobility")}>
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
                <button className="fastag-btn-glow-premium lg" onClick={() => handleProceedPayment("New FASTag Application")}>
                  <span className="flex items-center justify-center gap-3">Get Started Now <ArrowRight size={24} /></span>
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

      {/* Premium Payment Modal */}
      {showPaymentForm && (
        <div className="fastag-modal-overlay" onClick={() => setShowPaymentForm(false)}>
          <motion.div 
            className="fastag-payment-modal-premium" 
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
          >
            <button className="fastag-modal-close" onClick={() => setShowPaymentForm(false)}><X size={24} /></button>
            
            {isSuccess ? (
              <div className="fastag-modal-success">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, delay: 0.2 }}>
                  <div className="fastag-success-icon-wrap">
                    <CheckCircle2 size={60} color="#10B981" />
                    <div className="fastag-success-pulse"></div>
                  </div>
                </motion.div>
                <h3>Application Dispatched</h3>
                <p>Your FASTag provisioning request is active. Confirmation details have been dispatched to your registered contact protocol.</p>
                <div className="fastag-secure-badge mt-6" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748B', fontSize: '0.85rem', justifyContent: 'center', marginTop: '24px' }}><Lock size={14} /> 256-bit Encrypted Transmission</div>
              </div>
            ) : (
              <>
                <div className="fastag-modal-header">
                  <h3>Application Parameters</h3>
                  <p>Provisioning <span>{selectedPlan}</span> systems.</p>
                </div>
                
                <form className="fastag-modal-form" onSubmit={handleSubmit}>
                  <div className="fastag-form-grid">
                    <div className="fastag-form-group">
                      <label>Full Name *</label>
                      <input 
                        type="text" 
                        name="fullName"
                        placeholder="Legal full name" 
                        required 
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="fastag-premium-input" 
                      />
                    </div>
                    
                    <div className="fastag-form-group">
                      <label>Mobile Number *</label>
                      <input 
                        type="tel" 
                        name="mobile"
                        placeholder="10-digit mobile number" 
                        required 
                        pattern="[0-9]{10}" 
                        value={formData.mobile}
                        onChange={handleInputChange}
                        className="fastag-premium-input" 
                      />
                    </div>

                    <div className="fastag-form-group">
                      <label>Email Address *</label>
                      <input 
                        type="email" 
                        name="email"
                        placeholder="your@email.com" 
                        required 
                        value={formData.email}
                        onChange={handleInputChange}
                        className="fastag-premium-input" 
                      />
                    </div>
                    
                    <div className="fastag-form-group">
                      <label>Vehicle Number *</label>
                      <input 
                        type="text" 
                        name="vehicleNumber"
                        placeholder="e.g. MH 12 AB 1234" 
                        required 
                        value={formData.vehicleNumber}
                        onChange={handleInputChange}
                        className="fastag-premium-input"
                        style={{ borderColor: errors.vehicleNumber ? "#EF4444" : "" }}
                      />
                      {errors.vehicleNumber && (
                        <span style={{ color: "#EF4444", fontSize: "0.75rem" }}>{errors.vehicleNumber}</span>
                      )}
                    </div>

                    <div className="fastag-form-group">
                      <label>RC Number *</label>
                      <input 
                        type="text" 
                        name="rcNumber"
                        placeholder="Registration Certificate No." 
                        required 
                        value={formData.rcNumber}
                        onChange={handleInputChange}
                        className="fastag-premium-input"
                        style={{ borderColor: errors.rcNumber ? "#EF4444" : "" }}
                      />
                      {errors.rcNumber && (
                        <span style={{ color: "#EF4444", fontSize: "0.75rem" }}>{errors.rcNumber}</span>
                      )}
                    </div>

                    <div className="fastag-form-group">
                      <label>PAN Number *</label>
                      <input 
                        type="text" 
                        name="panNumber"
                        placeholder="ABCDE1234F" 
                        required 
                        value={formData.panNumber}
                        onChange={handleInputChange}
                        className="fastag-premium-input"
                        style={{ borderColor: errors.panNumber ? "#EF4444" : "" }}
                      />
                      {errors.panNumber && (
                        <span style={{ color: "#EF4444", fontSize: "0.75rem" }}>{errors.panNumber}</span>
                      )}
                    </div>

                    <div className="fastag-form-group optional">
                      <label>Aadhaar Number</label>
                      <input 
                        type="text" 
                        name="aadhaarNumber"
                        placeholder="12-digit Aadhaar" 
                        value={formData.aadhaarNumber}
                        onChange={handleInputChange}
                        className="fastag-premium-input" 
                      />
                    </div>

                    <div className="fastag-form-group">
                      <label>Recharge Amount (₹) *</label>
                      <input 
                        type="number" 
                        name="rechargeAmount"
                        placeholder="Min ₹100" 
                        min="100" 
                        required 
                        value={formData.rechargeAmount}
                        onChange={handleInputChange}
                        className="fastag-premium-input" 
                      />
                    </div>

                    <div className="fastag-form-group" style={{ gridColumn: 'span 2' }}>
                      <label>Upload RC Document *</label>
                      <div style={{ position: 'relative' }}>
                        <input type="file" required accept=".jpg,.jpeg,.png,.pdf" className="fastag-premium-input" style={{ width: '100%', cursor: 'pointer', opacity: 0, position: 'absolute', inset: 0, zIndex: 10 }} />
                        <div className="fastag-premium-input" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#64748B' }}>
                          <Upload size={18} /> Select RC document (PDF/JPG)
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="fastag-payment-method-section" style={{ marginTop: '30px' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--fastag-text-secondary)', marginBottom: '12px', display: 'block' }}>Select Payment Method</label>
                    <div className="fastag-payment-options">
                      <div className={`fastag-payment-option ${paymentMethod === 'upi' ? 'active' : ''}`} onClick={() => setPaymentMethod('upi')}>
                        <Smartphone size={20} /> UPI / QR
                      </div>
                      <div className={`fastag-payment-option ${paymentMethod === 'card' ? 'active' : ''}`} onClick={() => setPaymentMethod('card')}>
                        <CreditCard size={20} /> Credit Card
                      </div>
                      <div className={`fastag-payment-option ${paymentMethod === 'net' ? 'active' : ''}`} onClick={() => setPaymentMethod('net')}>
                        <Landmark size={20} /> Net Banking
                      </div>
                    </div>
                  </div>
                  
                  <button type="submit" disabled={isProcessing || Object.keys(errors).length > 0} className="fastag-btn-glow-premium lg w-full" style={{ width: '100%', marginTop: '30px', padding: "18px" }}>
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
                  
                  <div className="fastag-secure-checkout-footer">
                    <span>Secured via</span>
                    <div className="fastag-razorpay-placeholder">Razorpay</div>
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
