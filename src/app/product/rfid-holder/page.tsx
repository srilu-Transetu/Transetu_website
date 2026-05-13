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
  Sun, Settings, Package, ShoppingCart, Eye, Truck,
  Plus, Minus, MessageSquare
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import "./rfid.css";
import Link from "next/link";

export default function FASTagHolderPage() {
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("FASTag Holder");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("upi");

  // Form Fields
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [notes, setNotes] = useState("");

  const handleProceedPayment = () => {
    setSelectedPlan("FASTag Holder");
    setShowPaymentForm(true);
    setIsProcessing(false);
    setIsSuccess(false);
  };

  const mainServices = [
    { icon: <Shield size={32} />, title: "Matte Black Edition", desc: "Glare-free premium finish for modern vehicles. Engineered for a sleek, integrated look." },
    { icon: <Eye size={32} />, title: "Crystal Clear Edition", desc: "Transparent minimal design for a seamless windshield appearance. Practically invisible once installed." },
    { icon: <Truck size={32} />, title: "Titanium Silver", desc: "Metallic premium finish for commercial and heavy-duty vehicles. Built for maximum durability." },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      setTimeout(() => {
        setShowPaymentForm(false);
        setIsSuccess(false);
        // Reset form
        setFullName("");
        setMobileNumber("");
        setEmail("");
        setAddress("");
        setPincode("");
        setNotes("");
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
            <h1 className="rfid-title">Premium FASTag Holders<br /><span>For Seamless Travel</span></h1>
            <p className="rfid-subtitle">High-quality windshield mounting solutions designed for durability, easy installation, and a clean automotive aesthetic.</p>
            <div className="rfid-hero-buttons">
              <button onClick={() => {document.getElementById('purchase')?.scrollIntoView({ behavior: 'smooth' })}} className="rfid-btn-glow-premium">
                <span className="flex items-center justify-center gap-2">Buy Now <ArrowRight size={20} /></span>
              </button>
              <button className="rfid-btn-glow-secondary" onClick={() => {document.getElementById('specs')?.scrollIntoView({ behavior: 'smooth' })}}>
                <span className="flex items-center justify-center gap-2">Technical Specs <Settings size={20} /></span>
              </button>
            </div>
            
            <div className="rfid-cta-trust mt-12" style={{ marginTop: '48px', opacity: 0.8 }}>
              <div className="rfid-trust-item"><CheckCircle2 size={16} className="text-accent" /> Heat Resistant Material</div>
              <div className="rfid-trust-item"><CheckCircle2 size={16} className="text-accent" /> Strong Adhesive Grip</div>
              <div className="rfid-trust-item"><CheckCircle2 size={16} className="text-accent" /> Weather Resistant</div>
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
              <h3 className="rfid-trust-main-heading">Premium Automotive<br />Accessories</h3>
            </div>
            
            <div className="rfid-trust-metrics-grid">
              <div className="rfid-t-metric-card">
                <div className="rfid-t-icon-box"><Shield size={20} /></div>
                <div className="rfid-t-info">
                  <h4>ABS Polymer</h4>
                  <p>Durable construction</p>
                </div>
              </div>
              <div className="rfid-t-metric-card">
                <div className="rfid-t-icon-box"><Zap size={20} /></div>
                <div className="rfid-t-info">
                  <h4>Secure Mount</h4>
                  <p>3M Adhesive grip</p>
                </div>
              </div>
              <div className="rfid-t-metric-card">
                <div className="rfid-t-icon-box"><Sun size={20} /></div>
                <div className="rfid-t-info">
                  <h4>Heat Proof</h4>
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

      {/* 4. Benefits Section */}
      <section className="rfid-section bg-dark-2">
        <div className="rfid-container">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="rfid-section-title">Essential <span>Benefits</span></h2>
            <p className="rfid-section-desc max-w-2xl mx-auto text-center">Engineered for durability and clean organization on your windshield.</p>
          </motion.div>
          
          <div className="rfid-benefits-layout">
            <motion.div 
              className="rfid-benefit-image-container"
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            >
              <div className="rfid-benefit-image-wrapper">
                <Image 
                  src="/assets/Fastag_image.png" 
                  alt="FASTag Technology Overview" 
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="rfid-benefit-content-overlay">
                {[
                  { label: "DURABILITY CORE", title: "Heat Resistant Build", desc: "Premium ABS polymer material that withstands high windshield temperatures without warping." },
                  { label: "AESTHETIC FINISH", title: "Premium Finish", desc: "Sleek automotive-grade coating that resists UV fading and maintains a clean look." },
                  { label: "PRECISION FIT", title: "Strong Adhesive Grip", desc: "Genuine 3M industrial-strength adhesive for secure mounting and easy, residue-free removal." }
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

      {/* 5. Installation Workflow */}
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
                { icon: <ShieldCheck size={28} />, title: "Attach Holder", step: "02", desc: "Peel the 3M adhesive and secure the holder in your desired position." },
                { icon: <CreditCard size={28} />, title: "Insert FASTag", step: "03", desc: "Slide your active FASTag card into the precision-cut holder slot." },
                { icon: <Zap size={28} />, title: "Ready to Use", step: "04", desc: "Your tag is now organized and ready for seamless, reliable highway transit." }
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
      {/* 6. Technical Specifications Section */}
      <section id="specs" className="rfid-section bg-dark-2">
        <div className="rfid-container">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="rfid-section-title">Technical <span>Specifications</span></h2>
            <p className="rfid-section-desc max-w-2xl mx-auto text-center">Built for performance, designed for longevity.</p>
          </motion.div>

          <div className="rfid-specs-container-v2">
            <div className="rfid-specs-visual-aside">
              <div className="rfid-specs-blueprint">
                <div className="rfid-blueprint-image">
                  <Image src="/assets/Fastag_image.png" alt="Hardware Blueprint" width={400} height={400} className="rfid-blueprint-img" />
                  <div className="rfid-blueprint-overlay"></div>
                </div>
                <div className="rfid-blueprint-annotations">
                  <div className="rfid-annotation rfid-a1"><span>UV Protection Layer</span></div>
                  <div className="rfid-annotation rfid-a2"><span>ABS Polymer Frame</span></div>
                  <div className="rfid-annotation rfid-a3"><span>3M Industrial Grip</span></div>
                </div>
              </div>
            </div>

            <div className="rfid-specs-grid-v2">
              {[
                { label: "Material Composition", value: "High-Density ABS Polymer", desc: "Industrial-grade thermoplastic built for extreme durability.", icon: <Shield size={22} /> },
                { label: "Thermal Stability", value: "Up to 85°C / 185°F", desc: "Engineered to maintain integrity under direct summer solar radiation.", icon: <Sun size={22} /> },
                { label: "Adhesive Protocol", value: "Genuine 3M VHB", desc: "High-bond acrylic foam tape for vibration-resistant mounting.", icon: <Zap size={22} /> },
                { label: "Signal Transparency", value: "100% RF Pass-through", desc: "Zero interference with passive RFID transmission frequencies.", icon: <Activity size={22} /> },
                { label: "Mounting Profile", value: "Low-Profile Slimfit", desc: "Minimal footprint for zero obstruction of driver visibility.", icon: <MousePointerClick size={22} /> },
                { label: "Finish Quality", value: "Matte UV-Inhibitor", desc: "Resists discoloration and brittleness from long-term UV exposure.", icon: <Package size={22} /> }
              ].map((spec, i) => (
                <motion.div 
                  key={i} 
                  className="rfid-spec-card-v2"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="rfid-spec-header-v2">
                    <div className="rfid-spec-icon-v2">{spec.icon}</div>
                    <div className="rfid-spec-titles-v2">
                      <span className="rfid-spec-label-v2">{spec.label}</span>
                      <h4 className="rfid-spec-value-v2">{spec.value}</h4>
                    </div>
                  </div>
                  <p className="rfid-spec-desc-v2">{spec.desc}</p>
                  <div className="rfid-spec-glow-v2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Vehicle Compatibility Section */}
      <section className="rfid-section bg-dark-1">
        <div className="rfid-container">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="rfid-section-title">Vehicle <span>Compatibility</span></h2>
            <p className="rfid-section-desc max-w-2xl mx-auto text-center">Our holders are designed to fit seamlessly on a wide range of vehicles.</p>
          </motion.div>

          <div className="rfid-compatibility-grid">
            {[
              { title: "Cars", desc: "Sleek fit for all sedan and hatchback models.", icon: <Car size={32} /> },
              { title: "SUVs", desc: "Durable mounting for large windshield surfaces.", icon: <Car size={32} /> },
              { title: "Trucks", desc: "Heavy-duty builds for long-haul transport.", icon: <Truck size={32} /> },
              { title: "Fleet Vehicles", desc: "Standardized solution for corporate fleets.", icon: <Building2 size={32} /> },
              { title: "Commercial Vehicles", desc: "Reliable performance for logistics and delivery.", icon: <Package size={32} /> }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                className="rfid-compat-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="rfid-compat-icon-box">{item.icon}</div>
                <h3 className="rfid-compat-title">{item.title}</h3>
                <p className="rfid-compat-desc">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Premium Purchase Section */}
      <section id="purchase" className="rfid-purchase-section-v3">
        <div className="rfid-container">
          <div className="rfid-purchase-bg-overlay"></div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="rfid-section-title-v3">Premium <span>FASTag Holder</span></h2>
            <div className="rfid-title-accent-line"></div>
            <p className="rfid-section-desc-v3">The perfect mounting solution for your vehicle's FASTag.</p>
          </motion.div>
          
          <div className="rfid-showcase-v3">
            <motion.div 
              className="rfid-showcase-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="rfid-product-visual-box">
                <div className="rfid-hologram-glow"></div>
                <div className="rfid-scan-line"></div>
                <Image 
                  src="/assets/Fastag_image.png" 
                  alt="FASTag Holder Premium" 
                  width={500} 
                  height={500} 
                  className="rfid-main-img-v3"
                />
                <div className="rfid-img-reflection"></div>

                <div className="rfid-visual-stats-v3">
                  <div className="rfid-v-stat-v3">
                    <span className="rfid-v-stat-val-v3">85°C</span>
                    <span className="rfid-v-stat-lbl-v3">Heat Resistance</span>
                  </div>
                  <div className="rfid-v-stat-v3">
                    <span className="rfid-v-stat-val-v3">3M</span>
                    <span className="rfid-v-stat-lbl-v3">Adhesive Grip</span>
                  </div>
                  <div className="rfid-v-stat-v3">
                    <span className="rfid-v-stat-val-v3">100%</span>
                    <span className="rfid-v-stat-lbl-v3">Signal Reliable</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="rfid-showcase-right"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="rfid-header-v3">
                <div className="rfid-premium-badge-v3">
                  <Shield size={12} fill="currentColor" fillOpacity={0.2} />
                  <span>OFFICIAL ACCESSORY</span>
                </div>
                <div className="rfid-pricing-tag-v3">
                  <span className="rfid-p-tag-label">Special Launch Price</span>
                  <div className="rfid-p-tag-val">₹150 <span className="rfid-p-tag-sub">/ Unit</span></div>
                </div>
              </div>

              <h3 className="rfid-p-name-v3">Premium FASTag Holder</h3>
              <p className="rfid-p-summary-v3">
                Durable, heat-resistant, and easy to install. Our premium FASTag holder provides a secure mounting solution that keeps your windshield organized and your tag protected.
              </p>

              <div className="rfid-p-benefits-v3">
                {[
                  { icon: <Shield size={18} />, text: "Strong Adhesive Grip" },
                  { icon: <Zap size={18} />, text: "Heat Resistant Build" },
                  { icon: <Clock size={18} />, text: "Easy FASTag Placement" },
                  { icon: <Truck size={18} />, text: "Durable Material Quality" }
                ].map((item, idx) => (
                  <div key={idx} className="rfid-p-benefit-item-v3">
                    <div className="rfid-p-b-icon">{item.icon}</div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="rfid-interaction-box-v3">
                <div className="rfid-q-wrap-v3">
                  <label>QUANTITY</label>
                  <div className="rfid-q-control-v3">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus size={16} /></button>
                    <span>{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)}><Plus size={16} /></button>
                  </div>
                </div>

                <button className="rfid-buy-btn-v3" onClick={handleProceedPayment}>
                  <span className="rfid-btn-content">
                    <ShoppingCart size={22} />
                    <span>Proceed to Secure Checkout</span>
                    <ArrowRight size={20} className="rfid-btn-arrow" />
                  </span>
                  <div className="rfid-btn-glow-v3"></div>
                </button>

                <div className="rfid-security-badges-v3">
                  <div className="rfid-s-badge"><Lock size={14} /> <span>256-Bit SSL</span></div>
                  <div className="rfid-s-badge"><CheckCircle2 size={14} /> <span>Razorpay Verified</span></div>
                  <div className="rfid-s-badge"><Package size={14} /> <span>Trackable Shipping</span></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* 7. Final CTA Section */}
      <section className="rfid-section bg-dark-1 border-t border-white/5">
        <div className="rfid-container">
          <motion.div 
            className="rfid-cta-premium-banner"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          >
            <div className="rfid-cta-particle-bg"></div>
            
            <div className="rfid-cta-content relative z-10">
              <h2 className="rfid-cta-heading">Clean Windshield, Secure Mounting</h2>
              <p className="rfid-cta-desc">
                Upgrade your vehicle with our premium FASTag holders. Designed for all vehicle types and built to last through every journey.
              </p>
              
              <div className="rfid-cta-actions">
                <button className="rfid-btn-glow-premium lg" onClick={() => {document.getElementById('purchase')?.scrollIntoView({ behavior: 'smooth' })}}>
                  <span className="flex items-center justify-center gap-3">Buy Now <ArrowRight size={24} /></span>
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
                <p>Your FASTag Holder order has been placed successfully. Dispatch details will be sent to your registered contact protocol.</p>
                <div className="rfid-secure-badge mt-6" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748B', fontSize: '0.85rem', justifyContent: 'center', marginTop: '24px' }}><Lock size={14} /> 256-bit Encrypted Transmission</div>
              </div>
            ) : (
              <>
                <div className="rfid-modal-header">
                  <h3>Checkout</h3>
                  <p>Ordering <span>{quantity}x {selectedPlan}</span></p>
                  <div className="rfid-total-amount">Total: ₹{quantity * 150}</div>
                </div>
                
                <form className="rfid-modal-form" onSubmit={handleSubmit}>
                  <div className="rfid-form-grid">
                    <div className="rfid-form-group">
                      <label>Full Name *</label>
                      <input 
                        type="text" 
                        placeholder="Legal full name" 
                        required 
                        className="rfid-premium-input" 
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </div>
                    
                    <div className="rfid-form-group">
                      <label className="flex items-center gap-1.5"><Phone size={14} /> Mobile Number *</label>
                      <input 
                        type="tel" 
                        placeholder="10-digit mobile number" 
                        required 
                        pattern="[0-9]{10}" 
                        className="rfid-premium-input" 
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                      />
                    </div>
                    
                    <div className="rfid-form-group">
                      <label className="flex items-center gap-1.5"><Mail size={14} /> Email Address (Optional)</label>
                      <input 
                        type="email" 
                        placeholder="your@email.com" 
                        className="rfid-premium-input" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="rfid-form-group">
                      <label>Shipping Pincode *</label>
                      <input 
                        type="text" 
                        placeholder="e.g. 400001" 
                        required 
                        className="rfid-premium-input"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                      />
                    </div>
 
                    <div className="rfid-form-group" style={{ gridColumn: 'span 2' }}>
                      <label>Delivery Address *</label>
                      <textarea 
                        placeholder="Enter your full delivery address" 
                        rows={2} 
                        required 
                        className="rfid-premium-input" 
                        style={{ resize: 'none' }}
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      ></textarea>
                    </div>

                    <div className="rfid-form-group" style={{ gridColumn: 'span 2' }}>
                      <label className="flex items-center gap-1.5"><MessageSquare size={14} /> Notes / Instructions (Optional)</label>
                      <input 
                        type="text" 
                        placeholder="Any specific delivery instructions" 
                        className="rfid-premium-input" 
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                      />
                    </div>
                  </div>
  
                  <div className="rfid-payment-method-section" style={{ marginTop: '24px' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--rfid-text-secondary)', marginBottom: '12px', display: 'block' }}>Select Payment Method</label>
                    <div className="rfid-payment-options">
                      <div className={`rfid-payment-option ${paymentMethod === 'upi' ? 'active' : ''}`} onClick={() => setPaymentMethod('upi')}>
                        <Smartphone size={18} /> UPI / QR
                      </div>
                      <div className={`rfid-payment-option ${paymentMethod === 'card' ? 'active' : ''}`} onClick={() => setPaymentMethod('card')}>
                        <CreditCard size={18} /> Card
                      </div>
                      <div className={`rfid-payment-option ${paymentMethod === 'net' ? 'active' : ''}`} onClick={() => setPaymentMethod('net')}>
                        <Landmark size={18} /> Net Banking
                      </div>
                    </div>
                  </div>
                  
                  <button type="submit" disabled={isProcessing} className="rfid-btn-glow-premium lg w-full" style={{ width: '100%', marginTop: '24px', padding: "16px" }}>
                    {isProcessing ? (
                      <span className="flex items-center justify-center gap-3">
                        <Loader2 className="animate-spin" size={20} />
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-3">
                      <Lock size={18} /> Pay ₹{quantity * 150}
                      </span>
                    )}
                  </button>
                  
                  <div className="rfid-secure-checkout-footer">
                    <span>Secured via Razorpay</span>
                    <span>• SSL Encrypted</span>
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
