"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Check, Zap, Clock, Shield, Globe, RefreshCw, FileText, 
  CreditCard, Smartphone, MessageCircle, Phone, Mail, Car, 
  ArrowRight, ArrowLeft, Wallet, QrCode, X, MousePointerClick, 
  ShieldCheck, Upload, Loader2, CheckCircle2, Landmark, 
  ChevronRight, Building2, Server, Users, Activity, Lock, 
  Sun, Settings, Package, ShoppingCart, Eye, Truck
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import "./rfid.css";
import Link from "next/link";

export default function RFIDHolderPage() {
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
    { icon: <Shield size={32} />, title: "Matte Black Edition", desc: "Premium matte finish with zero light reflection. Engineered for executive vehicles." },
    { icon: <Eye size={32} />, title: "Crystal Clear Edition", desc: "Transparent high-density polymer for a minimalist, factory-integrated look." },
    { icon: <Truck size={32} />, title: "Titanium Silver", desc: "Reinforced edges with metallic aesthetic coating for heavy-duty performance." },
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
    <div className="rfid-page">
      <Navbar />
      
      {/* 1. Hero Section */}
      <section className="rfid-hero">
        <Link href="/#products" className="rfid-back-nav-btn">
          <ArrowLeft size={20} />
          <span>Back to Products</span>
        </Link>
        <div className="rfid-hero-bg-elements">
          <div className="rfid-cta-particle-bg"></div>
          <div className="rfid-hero-glow-orb rfid-orb-1"></div>
          <div className="rfid-hero-glow-orb rfid-orb-2"></div>
        </div>

        <div className="rfid-hero-content">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
            <span className="rfid-hero-badge">Premium Vehicle Accessories</span>
            <h1 className="rfid-title">Precision RFID Protection<br /><span>For Modern Mobility</span></h1>
            <p className="rfid-subtitle">Secure your transit credentials with enterprise-grade electromagnetic shield holders. Engineered for durability, styled for elite vehicle aesthetics.</p>
            <div className="rfid-hero-buttons">
              <Link href="#pricing" className="rfid-btn-glow-premium">
                <span className="flex items-center justify-center gap-2">View Variants <ArrowRight size={20} /></span>
              </Link>
              <button className="rfid-btn-glow-secondary" onClick={() => {document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' })}}>
                <span className="flex items-center justify-center gap-2">Technical Specs <Settings size={20} /></span>
              </button>
            </div>
            
            <div className="rfid-cta-trust mt-12" style={{ marginTop: '48px', opacity: 0.8 }}>
              <div className="rfid-trust-item"><CheckCircle2 size={16} className="text-accent" /> Heat Resistant</div>
              <div className="rfid-trust-item"><CheckCircle2 size={16} className="text-accent" /> Industrial Grade Adhesive</div>
              <div className="rfid-trust-item"><CheckCircle2 size={16} className="text-accent" /> UV Protected</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="rfid-trust-strip">
        <div className="rfid-container">
          <div className="rfid-trust-content">
            <div className="rfid-trust-brand-side">
              <span className="rfid-trust-label">Quality Assured Hardware</span>
              <h3 className="rfid-trust-main-heading">Enterprise Grade<br />Tolling Accessories</h3>
            </div>
            
            <div className="rfid-trust-metrics-grid">
              <div className="rfid-t-metric-card">
                <div className="rfid-t-icon-box"><Shield size={20} /></div>
                <div className="rfid-t-info">
                  <h4>Military Grade</h4>
                  <p>High-density polymer</p>
                </div>
              </div>
              <div className="rfid-t-metric-card">
                <div className="rfid-t-icon-box"><Zap size={20} /></div>
                <div className="rfid-t-info">
                  <h4>Signal Neutral</h4>
                  <p>Zero interference</p>
                </div>
              </div>
              <div className="rfid-t-metric-card">
                <div className="rfid-t-icon-box"><Sun size={20} /></div>
                <div className="rfid-t-info">
                  <h4>Heat Shield</h4>
                  <p>Up to 85°C resistance</p>
                </div>
              </div>
              
              <div className="rfid-partner-marquee-container">
                <div className="rfid-partner-logo-v2">TRANSETU</div>
                <div className="rfid-partner-logo-v2">ISO 9001</div>
                <div className="rfid-partner-logo-v2">PREMIUM</div>
                <div className="rfid-partner-logo-v2">TRANSETU</div>
                <div className="rfid-partner-logo-v2">ISO 9001</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section id="overview" className="rfid-section bg-dark-1 overflow-hidden">
        <div className="rfid-container">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="rfid-section-title">Product <span>Showcase</span></h2>
            <p className="rfid-section-desc max-w-3xl mx-auto text-center">
              Explore our curated range of premium holders designed for modern mobility. Built to withstand extreme conditions while looking completely integrated.
            </p>
          </motion.div>
          
          <motion.div 
            className="rfid-services-grid"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            {mainServices.map((service, index) => (
              <motion.div key={index} className="rfid-service-card-premium" variants={fadeInUp}>
                <div className="rfid-service-icon-premium">
                  {service.icon}
                </div>
                <h3 className="rfid-service-title">{service.title}</h3>
                <p className="rfid-service-desc">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Benefits Section - Redesigned based on the tech overview image */}
      <section className="rfid-section bg-dark-2">
        <div className="rfid-container">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="rfid-section-title">Next-Gen <span>Features</span></h2>
            <p className="rfid-section-desc max-w-2xl mx-auto text-center">Engineered for durability and elite aesthetic performance on the road.</p>
          </motion.div>
          
          <div className="rfid-benefits-layout">
            <motion.div 
              className="rfid-benefit-image-container"
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            >
              <div className="rfid-benefit-image-wrapper">
                <Image 
                  src="/assets/Fastag_image.png" 
                  alt="RFID Technology Overview" 
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="rfid-benefit-content-overlay">
                {[
                  { label: "DURABILITY CORE", title: "Military Polymers", desc: "Engineered high-density materials for maximum longevity and resistance to heat warping." },
                  { label: "AESTHETIC FINISH", title: "UV Protection", desc: "Advanced optical coatings that maintain an elegant look through years of exposure." },
                  { label: "PRECISION FIT", title: "3M Industrial", desc: "Heavy-duty no-residue mounting for secure and clean installation on any glass surface." }
                ].map((tech, idx) => (
                  <motion.div 
                    key={idx} 
                    className="rfid-tech-info-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 * idx }}
                  >
                    <span className="rfid-tech-label">{tech.label}</span>
                    <h4 className="rfid-tech-heading">{tech.title}</h4>
                    <p className="rfid-tech-desc">{tech.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Seamless Activation - Redesigned UI */}
      <section className="rfid-section bg-dark-1">
        <div className="rfid-container">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="rfid-section-title">Installation <span>Workflow</span></h2>
            <p className="rfid-section-desc max-w-2xl mx-auto text-center">Get your FASTag protected in four precise steps.</p>
          </motion.div>
          
          <div className="rfid-process-flow">
            <motion.div 
              className="rfid-process-nodes"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            >
              {[
                { icon: <MousePointerClick size={28} />, title: "Clean Surface", step: "01", desc: "Wipe your windshield area with a microfiber cloth to ensure a debris-free bond." },
                { icon: <ShieldCheck size={28} />, title: "Attach Holder", step: "02", desc: "Peel the 3M industrial adhesive and secure the holder in your desired position." },
                { icon: <CreditCard size={28} />, title: "Insert FASTag", step: "03", desc: "Slide your active FASTag card into the precision-cut electromagnetic shield slot." },
                { icon: <Zap size={28} />, title: "Ready to Use", step: "04", desc: "Your tag is now protected and ready for seamless, friction-free highway transit." }
              ].map((node, i) => (
                <motion.div key={i} className="rfid-process-card-modern" variants={fadeInUp}>
                  <div className="rfid-p-number">{node.step}</div>
                  <div className="rfid-p-icon-modern">{node.icon}</div>
                  <h3 className="rfid-p-title-modern">{node.title}</h3>
                  <p className="rfid-p-desc-modern">{node.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Pricing Section - Fixed alignment */}
      <section id="pricing" className="rfid-section bg-gradient-blue relative">
        <div className="rfid-container">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="rfid-section-title">Select Your <span>Variant</span></h2>
            <p className="rfid-section-desc max-w-2xl mx-auto text-center">Transparent pricing structures for every vehicle scale and fleet type.</p>
          </motion.div>
          
          <motion.div 
            className="rfid-pricing-premium-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="rfid-glass-panel rfid-pricing-card-premium" variants={fadeInUp}>
              <div className="rfid-pricing-header">
                <h3>Standard Holder</h3>
                <div className="rfid-price">₹150<span>/unit</span></div>
                <p className="rfid-pricing-sub">Optimized for private transit.</p>
              </div>
              <ul className="rfid-pricing-features">
                <li><Check size={18} className="text-accent" /> Priority Fulfillment</li>
                <li><Check size={18} className="text-accent" /> 3M Industrial Mounting</li>
                <li><Check size={18} className="text-accent" /> Standard Finish</li>
                <li><Check size={18} className="text-accent" /> 1-Year Warranty</li>
              </ul>
              <button className="rfid-btn-pricing rfid-btn-outline" onClick={() => handleProceedPayment("Standard Holder")}>Select Variant</button>
            </motion.div>
            
            <motion.div className="rfid-glass-panel rfid-pricing-card-premium highlighted" variants={fadeInUp}>
              <div className="rfid-popular-badge-animated">MOST POPULAR</div>
              <div className="rfid-pricing-header">
                <h3>Premium Holder</h3>
                <div className="rfid-price">₹250<span>/unit</span></div>
                <p className="rfid-pricing-sub rfid-text-highlight">Maximum durability & style.</p>
              </div>
              <ul className="rfid-pricing-features">
                <li><Check size={18} className="text-accent" /> Heat Resistant up to 85°C</li>
                <li><Check size={18} className="text-accent" /> Signal Neutral Design</li>
                <li><Check size={18} className="text-accent" /> Titanium Silver Aesthetic</li>
                <li><Check size={18} className="text-accent" /> Priority Support</li>
                <li><Check size={18} className="text-accent" /> 3-Year Warranty</li>
              </ul>
              <button className="rfid-btn-pricing rfid-btn-primary" onClick={() => handleProceedPayment("Premium Holder")}>Select Variant</button>
            </motion.div>
            
            <motion.div className="rfid-glass-panel rfid-pricing-card-premium" variants={fadeInUp}>
              <div className="rfid-pricing-header">
                <h3>Commercial Vehicle</h3>
                <div className="rfid-price">₹350<span>/unit</span></div>
                <p className="rfid-pricing-sub">Heavy duty logistics grade.</p>
              </div>
              <ul className="rfid-pricing-features">
                <li><Check size={18} className="text-accent" /> Reinforced Edges</li>
                <li><Check size={18} className="text-accent" /> Heavy Duty Locking Mechanism</li>
                <li><Check size={18} className="text-accent" /> Bulk Asset Management Integration</li>
                <li><Check size={18} className="text-accent" /> API Transit Integration capable</li>
                <li><Check size={18} className="text-accent" /> Dedicated Account Manager</li>
              </ul>
              <button className="rfid-btn-pricing rfid-btn-outline" onClick={() => handleProceedPayment("Commercial Holder")}>Select Variant</button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* 7. Final CTA Section - Updated with Background Image */}
      <section className="rfid-section bg-dark-1 border-t border-white/5">
        <div className="rfid-container">
          <motion.div 
            className="rfid-cta-premium-banner"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          >
            <div className="rfid-cta-particle-bg"></div>
            
            <div className="rfid-cta-content relative z-10">
              <h2 className="rfid-cta-heading">Protect Your FASTag with Premium Holders</h2>
              <p className="rfid-cta-desc">
                Integrate with India's most reliable mobility infrastructure. Deploy enterprise-grade tolling accessories today for your elite vehicle fleet.
              </p>
              
              <div className="rfid-cta-actions">
                <button className="rfid-btn-glow-premium lg" onClick={() => {document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}}>
                  <span className="flex items-center justify-center gap-3">Shop the Collection <ArrowRight size={24} /></span>
                </button>
              </div>
              
              <div className="rfid-cta-trust">
                <div className="rfid-trust-item"><CheckCircle2 size={16} className="text-accent" /> ISO 9001 Certified</div>
                <div className="rfid-trust-item"><CheckCircle2 size={16} className="text-accent" /> Secured Checkout</div>
                <div className="rfid-trust-item"><CheckCircle2 size={16} className="text-accent" /> Premium Quality</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Premium Payment Modal */}
      {showPaymentForm && (
        <div className="rfid-modal-overlay" onClick={() => setShowPaymentForm(false)}>
          <motion.div 
            className="rfid-payment-modal-premium" 
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
          >
            <button className="rfid-modal-close" onClick={() => setShowPaymentForm(false)}><X size={24} /></button>
            
            {isSuccess ? (
              <div className="rfid-modal-success">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, delay: 0.2 }}>
                  <div className="rfid-success-icon-wrap">
                    <CheckCircle2 size={60} color="#10B981" />
                    <div className="rfid-success-pulse"></div>
                  </div>
                </motion.div>
                <h3>Order Confirmed</h3>
                <p>Your RFID Holder order has been placed successfully. Dispatch details will be sent to your registered contact protocol.</p>
                <div className="rfid-secure-badge mt-6" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748B', fontSize: '0.85rem', justifyContent: 'center', marginTop: '24px' }}><Lock size={14} /> 256-bit Encrypted Transmission</div>
              </div>
            ) : (
              <>
                <div className="rfid-modal-header">
                  <h3>Checkout</h3>
                  <p>Ordering <span>{selectedPlan}</span></p>
                </div>
                
                <form className="rfid-modal-form" onSubmit={handleSubmit}>
                  <div className="rfid-form-grid">
                    <div className="rfid-form-group">
                      <label>Full Name</label>
                      <input type="text" placeholder="Legal full name" required className="rfid-premium-input" />
                    </div>
                    
                    <div className="rfid-form-group">
                      <label className="flex items-center gap-1.5"><Mail size={14} /> Email Address</label>
                      <input type="email" placeholder="your@email.com" required className="rfid-premium-input" />
                    </div>
                    
                    <div className="rfid-form-group">
                      <label>Contact Number</label>
                      <input type="tel" placeholder="10-digit mobile number" required pattern="[0-9]{10}" className="rfid-premium-input" />
                    </div>
                    
                    <div className="rfid-form-group">
                      <label>Quantity</label>
                      <select required defaultValue="1" className="rfid-premium-input">
                        <option value="1">1 Unit</option>
                        <option value="2">2 Units</option>
                        <option value="5">5 Units</option>
                        <option value="10">10 Units (Bulk)</option>
                      </select>
                    </div>
 
                    <div className="rfid-form-group">
                      <label>Shipping Pincode</label>
                      <input 
                        type="text" 
                        placeholder="e.g. 400001" 
                        required 
                        className="rfid-premium-input"
                      />
                    </div>
 
                    <div className="rfid-form-group" style={{ gridColumn: 'span 2' }}>
                      <label>Complete Address</label>
                      <textarea placeholder="Enter your full delivery address" rows={2} required className="rfid-premium-input" style={{ resize: 'none' }}></textarea>
                    </div>
                  </div>
 
                  <div className="rfid-payment-method-section" style={{ marginTop: '30px' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--rfid-text-secondary)', marginBottom: '12px', display: 'block' }}>Select Payment Method</label>
                    <div className="rfid-payment-options">
                      <div className={`rfid-payment-option ${paymentMethod === 'upi' ? 'active' : ''}`} onClick={() => setPaymentMethod('upi')}>
                        <Smartphone size={20} /> UPI / QR
                      </div>
                      <div className={`rfid-payment-option ${paymentMethod === 'card' ? 'active' : ''}`} onClick={() => setPaymentMethod('card')}>
                        <CreditCard size={20} /> Credit Card
                      </div>
                      <div className={`rfid-payment-option ${paymentMethod === 'net' ? 'active' : ''}`} onClick={() => setPaymentMethod('net')}>
                        <Landmark size={20} /> Net Banking
                      </div>
                    </div>
                  </div>
                  
                  <button type="submit" disabled={isProcessing} className="rfid-btn-glow-premium lg w-full" style={{ width: '100%', marginTop: '30px', padding: "18px" }}>
                    {isProcessing ? (
                      <span className="flex items-center justify-center gap-3">
                        <Loader2 className="animate-spin" size={20} />
                        Processing Securely...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-3">
                      <Lock size={18} /> Confirm Order
                      </span>
                    )}
                  </button>
                  
                  <div className="rfid-secure-checkout-footer">
                    <span>Secured via</span>
                    <div className="rfid-razorpay-placeholder">Razorpay</div>
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


