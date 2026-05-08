"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Check, Zap, Shield, Globe, 
  ArrowRight, X, MousePointerClick, 
  MapPin, Clock, LayoutDashboard, Bell, 
  Truck, Bus, Package, Building2, 
  Settings, Signal, Wrench, PlayCircle, Loader2, CheckCircle2,
  Smartphone, Activity, Navigation, Lock, Server, BarChart3, Users,
  ChevronRight, CreditCard, Landmark, Wallet
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import "./gps.css";
import Link from "next/link";

export default function GPSDetail() {
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("upi");

  const handleProceedPayment = (planName: string) => {
    setSelectedPlan(planName);
    setShowPaymentForm(true);
    setIsProcessing(false);
    setIsSuccess(false);
  };

  const features = [
    { icon: <MapPin size={32} />, title: "Live Vehicle Tracking", desc: "Real-time monitoring with interactive pinpoint accuracy." },
    { icon: <Globe size={32} />, title: "Geo-Fencing", desc: "Set virtual boundaries and get instant breach alerts." },
    { icon: <Clock size={32} />, title: "Route History", desc: "Access detailed 6-month historical trip and route playback." },
    { icon: <Settings size={32} />, title: "Engine Monitoring", desc: "Track engine health and enable remote immobilization." },
    { icon: <LayoutDashboard size={32} />, title: "Fleet Dashboard", desc: "Manage entire fleets from a unified analytics dashboard." },
    { icon: <Bell size={32} />, title: "Theft Alerts", desc: "Instant notifications for unauthorized movement or tampering." },
  ];

  const industries = [
    { icon: <Truck size={36} />, title: "Logistics", desc: "Optimize freight routing and delivery schedules." },
    { icon: <Bus size={36} />, title: "Transport", desc: "Ensure passenger safety and schedule adherence." },
    { icon: <Building2 size={36} />, title: "Fleet Businesses", desc: "Control operational costs and vehicle health." },
    { icon: <Package size={36} />, title: "Delivery Services", desc: "Track last-mile deliveries with complete precision." },
  ];

  const whyChooseUs = [
    { icon: <Server size={32} />, title: "Enterprise Infrastructure", desc: "Scalable cloud infrastructure built for high-volume fleet operations." },
    { icon: <Navigation size={32} />, title: "High Accuracy Tracking", desc: "Sub-meter GNSS accuracy for reliable urban tracking." },
    { icon: <Lock size={32} />, title: "Secure Cloud Platform", desc: "End-to-end encryption securing sensitive logistics data." },
    { icon: <Activity size={32} />, title: "24/7 Monitoring", desc: "Automated around-the-clock monitoring for offline unit alerts." },
    { icon: <BarChart3 size={32} />, title: "Fleet Analytics", desc: "Convert fleet data into operational intelligence." },
    { icon: <Users size={32} />, title: "Scalable Architecture", desc: "Scale from 5 to 50,000+ vehicles without platform migration." },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
    <div className="gps-page">
      <Navbar />
      
      {/* 1. Hero Section */}
      <section className="gps-hero">
        {/* Animated Background Elements */}
        <div className="hero-bg-elements">
          <div className="hero-grid"></div>
          <div className="hero-glow-orb orb-1"></div>
          <div className="hero-glow-orb orb-2"></div>
          
          <div className="hero-scanner"></div>
        </div>

        <div className="gps-hero-content">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
            <span className="hero-badge">Enterprise GPS Solutions</span>
            <h1 className="gps-title">Real-Time Fleet Intelligence<br /><span>for Modern Transport</span></h1>
            <p className="gps-subtitle">Monitor, manage, and secure your vehicles with enterprise-grade GPS tracking built for real-world transport operations and smart mobility infrastructure.</p>
            <div className="hero-buttons">
              <Link href="#pricing" className="btn-glow-premium">
                Explore Plans <ArrowRight size={20} />
              </Link>
              <button className="btn-glow-secondary" onClick={() => handleProceedPayment("Enterprise Consultation")}>
                Request Enterprise Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust & Business Credibility Strip */}
      <section className="trust-strip">
        <div className="gps-container">
          <div className="trust-content">
            <span className="trust-label">Trusted Infrastructure Platform</span>
            <div className="trust-metrics">
              <div className="t-metric"><Shield size={18} /> Enterprise Grade</div>
              <div className="t-metric"><Server size={18} /> 99.9% Uptime</div>
              <div className="t-metric"><Globe size={18} /> Nationwide Coverage</div>
              <div className="t-metric"><Users size={18} /> 10,000+ Fleets</div>
            </div>
            <div className="partner-logos">
              {/* Using placeholders for partner logos to maintain realism */}
              <div className="partner-logo">TATA Motors</div>
              <div className="partner-logo">Ashok Leyland</div>
              <div className="partner-logo">Mahindra</div>
              <div className="partner-logo">Ecom Express</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Why Choose Us Section */}
      <section className="gps-section bg-dark-1 overflow-hidden">
        <div className="gps-container">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="gps-section-title">Why Businesses Choose <span>Transetu</span></h2>
            <p className="section-desc max-w-2xl mx-auto">Delivering unparalleled reliability and precision for mission-critical transport operations.</p>
          </motion.div>
          
          <motion.div 
            className="why-grid"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            {whyChooseUs.map((item, index) => (
              <motion.div key={index} className="why-card glass-panel" variants={fadeInUp}>
                <div className="why-icon-wrap">
                  {item.icon}
                  <div className="icon-glow"></div>
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="why-card-border"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Features Grid */}
      <section className="gps-section bg-gradient-blue relative">
        {/* Animated background gradient */}
        <div className="animated-bg-gradient"></div>
        
        <div className="gps-container">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="gps-section-title">Next-Gen <span>Features</span></h2>
            <p className="section-desc max-w-2xl mx-auto">Everything you need to manage your fleet securely and efficiently.</p>
          </motion.div>
          
          <motion.div 
            className="features-grid"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            {features.map((feature, index) => (
              <motion.div key={index} className="glass-panel feature-card-premium" variants={fadeInUp}>
                <div className="feature-icon-premium">
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.desc}</p>
                <div className="feature-hover-glow"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Command Center */}
      <section className="gps-section bg-dark-2 overflow-hidden">
        <div className="gps-container">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="gps-section-title">Command <span>Center</span></h2>
            <p className="section-desc max-w-2xl mx-auto">Monitor operations with enterprise-grade real-time fleet telemetry.</p>
          </motion.div>
          
          <div className="command-layout">
            {/* Left Side: Analytics */}
            <motion.div 
              className="command-analytics"
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            >
              <div className="analytics-card">
                <div className="analytics-header">
                  <div className="analytics-icon"><Truck size={20} /></div>
                  <span className="trend-up">+12%</span>
                </div>
                <div className="analytics-body">
                  <div className="analytics-val">1,240</div>
                  <div className="analytics-label">Active Vehicles</div>
                </div>
                <div className="analytics-graph graph-1"></div>
                <div className="pulse-indicator status-green"></div>
              </div>

              <div className="analytics-card">
                <div className="analytics-header">
                  <div className="analytics-icon"><Signal size={20} /></div>
                  <span className="trend-up">+5%</span>
                </div>
                <div className="analytics-body">
                  <div className="analytics-val">98.5%</div>
                  <div className="analytics-label">Vehicles Online</div>
                </div>
                <div className="analytics-graph graph-2"></div>
                <div className="pulse-indicator status-blue"></div>
              </div>

              <div className="analytics-card alert-card">
                <div className="analytics-header">
                  <div className="analytics-icon"><Bell size={20} /></div>
                  <span className="trend-down">-2%</span>
                </div>
                <div className="analytics-body">
                  <div className="analytics-val">3</div>
                  <div className="analytics-label">Emergency Alerts</div>
                </div>
                <div className="analytics-graph graph-3"></div>
                <div className="pulse-indicator status-red"></div>
              </div>

              <div className="analytics-card">
                <div className="analytics-header">
                  <div className="analytics-icon"><Server size={20} /></div>
                  <span className="trend-neutral">Stable</span>
                </div>
                <div className="analytics-body">
                  <div className="analytics-val">99.99%</div>
                  <div className="analytics-label">System Uptime</div>
                </div>
                <div className="analytics-graph graph-4"></div>
                <div className="pulse-indicator status-green"></div>
              </div>
            </motion.div>

            {/* Right Side: Live Map UI */}
            <motion.div 
              className="command-map-wrapper"
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            >
              <div className="live-map-ui">
                <div className="map-grid-bg"></div>
                
                {/* Simulated Map Elements */}
                <svg className="map-routes" viewBox="0 0 800 600">
                  <path d="M 100 500 L 200 400 L 400 450 L 550 250 L 700 150" className="map-route-line active" />
                  <path d="M 50 200 L 150 250 L 250 150 L 450 200 L 600 400" className="map-route-line" />
                </svg>

                {/* Animated Pins */}
                <div className="map-pin pin-1">
                  <div className="pin-core"></div>
                  <div className="pin-radar"></div>
                </div>
                <div className="map-pin pin-2">
                  <div className="pin-core"></div>
                  <div className="pin-radar"></div>
                </div>
                <div className="map-pin pin-3 warning">
                  <div className="pin-core"></div>
                  <div className="pin-radar"></div>
                </div>

                {/* Telemetry Cards Overlay */}
                <div className="telemetry-card t-card-1">
                  <div className="t-header">MH 12 AB 1234</div>
                  <div className="t-row"><span>Speed:</span> 65 km/h</div>
                  <div className="t-row"><span>Fuel:</span> 78%</div>
                  <div className="t-status">Live Tracking</div>
                </div>

                <div className="telemetry-card t-card-2">
                  <div className="t-header">DL 01 CD 5678</div>
                  <div className="t-row"><span>Speed:</span> 0 km/h</div>
                  <div className="t-row"><span>Status:</span> Idling</div>
                  <div className="t-status warning">Check Required</div>
                </div>

                {/* Holographic Overlays */}
                <div className="holo-overlay"></div>
                <div className="map-scanner"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Mobile App Ecosystem Section */}
      <section className="gps-section bg-dark-1 overflow-hidden relative">
        <div className="gps-container">
          <div className="mobile-ecosystem-layout">
            <motion.div 
              className="mobile-content"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            >
              <h2 className="gps-section-title text-left" style={{ marginBottom: "20px" }}>Track Anywhere.<br /><span>Control Anytime.</span></h2>
              <p className="mobile-desc">
                Access enterprise command center intelligence on the go. Native mobile applications for iOS and Android.
              </p>
              
              <ul className="mobile-features">
                <li>
                  <div className="m-icon"><MapPin size={20} /></div>
                  <div>
                    <h4>Live Tracking</h4>
                    <p>Sub-second location updates on an interactive mobile map.</p>
                  </div>
                </li>
                <li>
                  <div className="m-icon"><Bell size={20} /></div>
                  <div>
                    <h4>Instant Alerts</h4>
                    <p>Push notifications for speeding, geo-fence breaches, and ignition.</p>
                  </div>
                </li>
                <li>
                  <div className="m-icon"><Settings size={20} /></div>
                  <div>
                    <h4>Remote Monitoring</h4>
                    <p>Immobilize vehicles or run diagnostics remotely via the app.</p>
                  </div>
                </li>
              </ul>
              
              <div className="mobile-badges">
                <div className="store-badge">Get it on Google Play</div>
                <div className="store-badge">Download on App Store</div>
              </div>
            </motion.div>
            
            <motion.div 
              className="mobile-mockup-wrapper"
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }} whileInView={{ opacity: 1, scale: 1, rotate: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="smartphone-mockup">
                <div className="phone-notch"></div>
                <div className="phone-screen">
                  {/* Simulated App UI */}
                  <div className="app-header">
                    <div className="app-menu"><div className="hamburger"></div></div>
                    <div className="app-title">Transetu Fleet</div>
                    <div className="app-profile"></div>
                  </div>
                  <div className="app-map">
                    <div className="app-map-grid"></div>
                    <div className="app-pin"></div>
                    <svg className="app-route" viewBox="0 0 200 300"><path d="M 50 250 L 100 150 L 150 100" /></svg>
                    
                    <div className="app-floating-card">
                      <div className="af-title">Vehicle #402</div>
                      <div className="af-status">In Transetu • 55 km/h</div>
                      <div className="af-bar"><div className="af-progress"></div></div>
                    </div>
                  </div>
                  <div className="app-bottom-nav">
                    <div className="nav-item active"><MapPin size={20} /></div>
                    <div className="nav-item"><Activity size={20} /></div>
                    <div className="nav-item"><Bell size={20} /></div>
                    <div className="nav-item"><Settings size={20} /></div>
                  </div>
                </div>
                <div className="phone-glow"></div>
              </div>
              
              {/* Floating Notifications */}
              <motion.div 
                className="floating-notification f-notif-1"
                animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }}
              >
                <CheckCircle2 size={16} color="#10B981" /> Delivery Completed
              </motion.div>
              <motion.div 
                className="floating-notification f-notif-2"
                animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              >
                <Bell size={16} color="#F59E0B" /> Over-speeding Alert
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Industries Section */}
      <section className="gps-section bg-gradient-blue relative">
        <div className="industries-bg-texture"></div>
        <div className="gps-container">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="gps-section-title">Built For <span>Your Industry</span></h2>
            <p className="section-desc max-w-2xl mx-auto">Tailored intelligence for every sector of transport and logistics.</p>
          </motion.div>
          
          <motion.div 
            className="industries-grid"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            {industries.map((industry, index) => (
              <motion.div key={index} className="industry-card-premium" variants={fadeInUp}>
                <div className="industry-icon-premium">
                  {industry.icon}
                  <div className="industry-icon-bg"></div>
                </div>
                <h3>{industry.title}</h3>
                <p>{industry.desc}</p>
                <div className="industry-hover-glow"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. Installation Process */}
      <section className="gps-section bg-dark-2">
        <div className="gps-container">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="gps-section-title">Seamless <span>Deployment</span></h2>
            <p className="section-desc max-w-2xl mx-auto">Get your fleet connected and monitored in four simple steps.</p>
          </motion.div>
          
          <div className="process-flow">
            <div className="process-connecting-line">
              <div className="process-progress-animated"></div>
            </div>
            
            <div className="process-nodes">
              <motion.div className="process-node" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <div className="p-icon-glow"><MousePointerClick size={30} /></div>
                <div className="p-phase">Phase 01</div>
                <h3>Hardware Selection</h3>
                <p>Choose from our range of OBD, wired, or wireless trackers.</p>
              </motion.div>

              <motion.div className="process-node mt-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                <div className="p-icon-glow"><Wrench size={30} /></div>
                <div className="p-phase">Phase 02</div>
                <h3>Expert Installation</h3>
                <p>Covert installation by certified technicians nationwide.</p>
              </motion.div>

              <motion.div className="process-node" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
                <div className="p-icon-glow"><Signal size={30} /></div>
                <div className="p-phase">Phase 03</div>
                <h3>Cloud Activation</h3>
                <p>Devices sync instantly with our secure enterprise cloud.</p>
              </motion.div>

              <motion.div className="process-node mt-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.7 }}>
                <div className="p-icon-glow"><LayoutDashboard size={30} /></div>
                <div className="p-phase">Phase 04</div>
                <h3>Live Monitoring</h3>
                <p>Access full tracking capabilities via web and mobile.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Pricing Section */}
      <section id="pricing" className="gps-section bg-gradient-blue relative">
        <div className="gps-container">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="gps-section-title">Subscription <span>Plans</span></h2>
            <p className="section-desc max-w-2xl mx-auto">Transparent pricing tailored for fleets of all sizes.</p>
          </motion.div>
          
          <div className="pricing-premium-grid">
            <motion.div className="glass-panel pricing-card-premium" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="pricing-header">
                <h3>Basic Tracking</h3>
                <div className="price">₹2,999<span>/yr</span></div>
                <p className="pricing-sub">Per vehicle. Essential tracking.</p>
              </div>
              <ul className="pricing-features">
                <li><Check size={18} className="text-accent" /> Real-time Tracking (10s updates)</li>
                <li><Check size={18} className="text-accent" /> 30-Day Route History</li>
                <li><Check size={18} className="text-accent" /> Mobile App Access</li>
                <li><Check size={18} className="text-accent" /> Standard Email Support</li>
              </ul>
              <button className="btn-pricing btn-outline w-full" onClick={() => handleProceedPayment("Basic Tracking Plan")}>Select Plan</button>
            </motion.div>
            
            <motion.div className="glass-panel pricing-card-premium highlighted" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="popular-badge-animated">
                <div className="badge-glow"></div>
                MOST POPULAR
              </div>
              <div className="pricing-header">
                <h3>Advanced Fleet</h3>
                <div className="price">₹4,999<span>/yr</span></div>
                <p className="pricing-sub text-highlight">Save 20% compared to monthly.</p>
              </div>
              <ul className="pricing-features">
                <li><Check size={18} className="text-accent" /> Remote Engine Cut-off</li>
                <li><Check size={18} className="text-accent" /> 6-Month Route History</li>
                <li><Check size={18} className="text-accent" /> Advanced Geo-fencing</li>
                <li><Check size={18} className="text-accent" /> Analytics Dashboard</li>
                <li><Check size={18} className="text-accent" /> Priority 24/7 Support</li>
              </ul>
              <button className="btn-pricing btn-primary w-full" onClick={() => handleProceedPayment("Advanced Fleet Plan")}>Get Started Now</button>
            </motion.div>

            <motion.div className="glass-panel pricing-card-premium" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.4 }}>
              <div className="pricing-header">
                <h3>Enterprise</h3>
                <div className="price">Custom</div>
                <p className="pricing-sub">For fleets with 50+ vehicles.</p>
              </div>
              <ul className="pricing-features">
                <li><Check size={18} className="text-accent" /> Unlimited History Retention</li>
                <li><Check size={18} className="text-accent" /> Custom API Integrations</li>
                <li><Check size={18} className="text-accent" /> Advanced Multi-user Roles</li>
                <li><Check size={18} className="text-accent" /> White-label Options</li>
                <li><Check size={18} className="text-accent" /> Dedicated Account Manager</li>
              </ul>
              <button className="btn-pricing btn-outline w-full" onClick={() => handleProceedPayment("Enterprise Plan")}>Contact Sales</button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. Enhanced CTA Section */}
      <section className="gps-section bg-dark-1 border-t border-white/5">
        <div className="gps-container">
          <div className="cta-premium-banner">
            <div className="cta-particle-bg"></div>
            <div className="cta-glow-core"></div>
            
            <div className="cta-content relative z-10">
              <h2 className="cta-heading">Transform Your Fleet Operations Today</h2>
              <p className="cta-desc">
                Join enterprise fleets optimizing operations with our advanced tracking platform.
              </p>
              
              <div className="cta-actions">
                <button className="btn-glow-premium lg" onClick={() => handleProceedPayment("General Inquiry")}>
                  Start Your Transformation <ArrowRight size={24} />
                </button>
              </div>
              
              <div className="cta-trust">
                <div className="trust-item"><CheckCircle2 size={16} className="text-accent" /> Bank-Grade Security</div>
                <div className="trust-item"><CheckCircle2 size={16} className="text-accent" /> 99.99% Uptime SLA</div>
                <div className="trust-item"><CheckCircle2 size={16} className="text-accent" /> 24/7 Expert Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* 10. Enhanced Payment & Subscription Modal */}
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
                <h3>Request Secured!</h3>
                <p>Your enterprise request has been received. Our deployment team will contact you within 2 hours.</p>
                <div className="secure-badge mt-6 inline-flex"><Lock size={14} /> Encrypted Transmission</div>
              </div>
            ) : (
              <>
                <div className="modal-header">
                  <h3>Complete Configuration</h3>
                  <p>Configure your <span>{selectedPlan}</span> deployment.</p>
                </div>
                
                <form className="modal-form" onSubmit={handleSubmit}>
                  <div className="form-grid">
                    <div className="form-group">
                      <label>Full Name</label>
                      <input type="text" placeholder="Enter your full name" required className="premium-input" />
                    </div>
                    
                    <div className="form-group">
                      <label>Company Name</label>
                      <input type="text" placeholder="Enter company name" required className="premium-input" />
                    </div>
                    
                    <div className="form-group">
                      <label>Mobile Number</label>
                      <input type="tel" placeholder="Enter 10-digit number" required pattern="[0-9]{10}" className="premium-input" />
                    </div>

                    <div className="form-group">
                      <label>Email Address</label>
                      <input type="email" placeholder="Enter work email" required className="premium-input" />
                    </div>

                    <div className="form-group">
                      <label>Fleet Size</label>
                      <select required defaultValue="" className="premium-input">
                        <option value="" disabled>Select vehicle count</option>
                        <option value="1-5">1 - 5 Vehicles</option>
                        <option value="6-20">6 - 20 Vehicles</option>
                        <option value="21-50">21 - 50 Vehicles</option>
                        <option value="50+">50+ Vehicles (Enterprise)</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Billing Cycle</label>
                      <select required defaultValue="" className="premium-input">
                        <option value="" disabled>Select duration</option>
                        <option value="monthly">Monthly Billing</option>
                        <option value="yearly">Annual Billing (20% Off)</option>
                      </select>
                    </div>
                  </div>

                  {/* Payment Method Selection - Visual Only */}
                  <div className="payment-method-section mt-6">
                    <label className="text-sm text-slate-300 font-medium mb-3 block">Select Payment Method</label>
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
                  
                  <button type="submit" disabled={isProcessing} className="btn-glow-premium w-full mt-8" style={{ padding: "18px" }}>
                    {isProcessing ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="animate-spin" size={20} />
                        Establishing Secure Connection...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Lock size={18} /> Proceed to Secure Checkout
                      </span>
                    )}
                  </button>
                  
                  {/* Razorpay / Secure Trust indicators */}
                  <div className="secure-checkout-footer">
                    <span>Secured by</span>
                    <div className="razorpay-placeholder">Razorpay</div>
                    <span>• 256-bit SSL Encryption</span>
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