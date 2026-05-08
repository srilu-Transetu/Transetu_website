"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Check, Zap, Shield, Globe, 
  ArrowRight, ArrowLeft, X, MousePointerClick, 
  MapPin, Clock, LayoutDashboard, Bell, 
  Truck, Bus, Package, Building2, 
  Settings, Signal, Wrench, PlayCircle, Loader2, CheckCircle2,
  Smartphone, Activity, Navigation, Lock, Server, BarChart3, Users,
  ChevronRight, CreditCard, Landmark, Wallet, ShieldCheck, Upload,
  Zap as ZapIcon
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
        <Link href="/#products" className="gps-back-nav-btn">
          <ArrowLeft size={20} />
          <span>Back to Products</span>
        </Link>
        <div className="gps-hero-bg-elements">
          <div className="gps-hero-overlay-dark"></div>
          <div className="gps-cta-particle-bg"></div>
          <div className="gps-hero-glow-orb orb-1"></div>
          <div className="gps-hero-glow-orb orb-2"></div>
          <div className="gps-hero-scanner"></div>
        </div>

        <div className="gps-hero-content">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
            <span className="gps-hero-badge">Enterprise GPS Solutions</span>
            <h1 className="gps-title">Real-Time Fleet Intelligence<br /><span>for Modern Transport</span></h1>
            <p className="gps-subtitle">Monitor, manage, and secure your vehicles with enterprise-grade GPS tracking built for real-world transport operations and smart mobility infrastructure.</p>
            <div className="gps-hero-buttons">
              <Link href="#pricing" className="gps-btn-glow-premium">
                <span className="flex items-center justify-center gap-2">Explore Plans <ArrowRight size={20} /></span>
              </Link>
              <button className="gps-btn-glow-secondary" onClick={() => handleProceedPayment("Enterprise Consultation")}>
                <span className="flex items-center justify-center gap-2">Request Enterprise Demo <ZapIcon size={20} /></span>
              </button>
            </div>

            <div className="gps-cta-trust mt-12" style={{ marginTop: '48px', opacity: 0.8 }}>
              <div className="gps-trust-item"><CheckCircle2 size={16} className="text-accent" /> AIS-140 Certified</div>
              <div className="gps-trust-item"><CheckCircle2 size={16} className="text-accent" /> Real-time Analytics</div>
              <div className="gps-trust-item"><CheckCircle2 size={16} className="text-accent" /> 24/7 Fleet Support</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust & Business Credibility Strip */}
      <section className="gps-trust-strip">
        <div className="gps-container">
          <div className="gps-trust-content">
            <div className="gps-trust-brand-side">
              <span className="gps-trust-label">Trusted Infrastructure Platform</span>
              <h3 className="gps-trust-main-heading">Enterprise Grade Fleet<br />Intelligence Systems</h3>
            </div>
            
            <div className="gps-trust-metrics-grid">
              <div className="gps-t-metric-card">
                <div className="gps-t-icon-box"><Shield size={20} /></div>
                <div className="gps-t-info">
                  <h4>Enterprise Grade</h4>
                  <p>Secured architecture</p>
                </div>
              </div>
              <div className="gps-t-metric-card">
                <div className="gps-t-icon-box"><Server size={20} /></div>
                <div className="gps-t-info">
                  <h4>99.9% Uptime</h4>
                  <p>Mission critical SLA</p>
                </div>
              </div>
              <div className="gps-t-metric-card">
                <div className="gps-t-icon-box"><Globe size={20} /></div>
                <div className="gps-t-info">
                  <h4>Nationwide</h4>
                  <p>Complete coverage</p>
                </div>
              </div>
              
              <div className="gps-partner-marquee-container">
                <div className="gps-partner-logo-v2">TATA MOTORS</div>
                <div className="gps-partner-logo-v2">ASHOK LEYLAND</div>
                <div className="gps-partner-logo-v2">MAHINDRA</div>
                <div className="gps-partner-logo-v2">ECOM EXPRESS</div>
              </div>
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
            <p className="gps-section-desc max-w-2xl mx-auto text-center">Delivering unparalleled reliability and precision for mission-critical transport operations.</p>
          </motion.div>
          
          <motion.div 
            className="gps-why-grid"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            {whyChooseUs.map((item, index) => (
              <motion.div key={index} className="gps-why-card gps-glass-panel" variants={fadeInUp}>
                <div className="gps-why-icon-wrap">
                  {item.icon}
                  <div className="gps-icon-glow"></div>
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="gps-why-card-border"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Features Grid */}
      <section className="gps-section bg-gradient-blue relative">
        <div className="gps-animated-bg-gradient"></div>
        <div className="gps-container">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="gps-section-title">Next-Gen <span>Features</span></h2>
            <p className="gps-section-desc max-w-2xl mx-auto text-center">Everything you need to manage your fleet securely and efficiently.</p>
          </motion.div>
          
          <motion.div 
            className="gps-features-grid"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            {features.map((feature, index) => (
              <motion.div key={index} className="gps-glass-panel gps-feature-card-premium" variants={fadeInUp}>
                <div className="gps-feature-icon-premium">
                  {feature.icon}
                </div>
                <h3 className="gps-feature-title">{feature.title}</h3>
                <p className="gps-feature-desc">{feature.desc}</p>
                <div className="gps-feature-hover-glow"></div>
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
            <p className="gps-section-desc max-w-2xl mx-auto text-center">Monitor operations with enterprise-grade real-time fleet telemetry.</p>
          </motion.div>
          
          <div className="gps-command-layout">
            <motion.div 
              className="gps-command-analytics"
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            >
              <div className="gps-analytics-card">
                <div className="gps-analytics-header">
                  <div className="gps-analytics-icon"><Truck size={20} /></div>
                  <span className="gps-trend-up">+12%</span>
                </div>
                <div className="gps-analytics-body">
                  <div className="gps-analytics-val">1,240</div>
                  <div className="gps-analytics-label">Active Vehicles</div>
                </div>
                <div className="gps-analytics-graph gps-graph-1"></div>
                <div className="gps-pulse-indicator gps-status-green"></div>
              </div>

              <div className="gps-analytics-card">
                <div className="gps-analytics-header">
                  <div className="gps-analytics-icon"><Signal size={20} /></div>
                  <span className="gps-trend-up">+5%</span>
                </div>
                <div className="gps-analytics-body">
                  <div className="gps-analytics-val">98.5%</div>
                  <div className="gps-analytics-label">Vehicles Online</div>
                </div>
                <div className="gps-analytics-graph gps-graph-2"></div>
                <div className="gps-pulse-indicator gps-status-blue"></div>
              </div>

              <div className="gps-analytics-card gps-alert-card">
                <div className="gps-analytics-header">
                  <div className="gps-analytics-icon"><Bell size={20} /></div>
                  <span className="gps-trend-down">-2%</span>
                </div>
                <div className="gps-analytics-body">
                  <div className="gps-analytics-val">3</div>
                  <div className="gps-analytics-label">Emergency Alerts</div>
                </div>
                <div className="gps-analytics-graph gps-graph-3"></div>
                <div className="gps-pulse-indicator gps-status-red"></div>
              </div>

              <div className="gps-analytics-card">
                <div className="gps-analytics-header">
                  <div className="gps-analytics-icon"><Server size={20} /></div>
                  <span className="gps-trend-neutral">Stable</span>
                </div>
                <div className="gps-analytics-body">
                  <div className="gps-analytics-val">99.99%</div>
                  <div className="gps-analytics-label">System Uptime</div>
                </div>
                <div className="gps-analytics-graph gps-graph-4"></div>
                <div className="gps-pulse-indicator gps-status-green"></div>
              </div>
            </motion.div>

            <motion.div 
              className="gps-command-map-wrapper"
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            >
              <div className="gps-live-map-ui">
                <div className="gps-map-grid-bg"></div>
                
                <svg className="gps-map-routes" viewBox="0 0 800 600">
                  <path d="M 100 500 L 200 400 L 400 450 L 550 250 L 700 150" className="gps-map-route-line active" />
                  <path d="M 50 200 L 150 250 L 250 150 L 450 200 L 600 400" className="gps-map-route-line" />
                </svg>

                <div className="gps-map-pin pin-1">
                  <div className="gps-pin-core"></div>
                  <div className="gps-pin-radar"></div>
                </div>
                <div className="gps-map-pin pin-2">
                  <div className="gps-pin-core"></div>
                  <div className="gps-pin-radar"></div>
                </div>
                <div className="gps-map-pin pin-3 warning">
                  <div className="gps-pin-core"></div>
                  <div className="gps-pin-radar"></div>
                </div>

                <div className="gps-telemetry-card t-card-1">
                  <div className="gps-t-header">MH 12 AB 1234</div>
                  <div className="gps-t-row"><span>Speed:</span> 65 km/h</div>
                  <div className="gps-t-row"><span>Fuel:</span> 78%</div>
                  <div className="gps-t-status">Live Tracking</div>
                </div>

                <div className="gps-telemetry-card t-card-2">
                  <div className="gps-t-header">DL 01 CD 5678</div>
                  <div className="gps-t-row"><span>Speed:</span> 0 km/h</div>
                  <div className="gps-t-row"><span>Status:</span> Idling</div>
                  <div className="gps-t-status warning">Check Required</div>
                </div>

                <div className="gps-holo-overlay"></div>
                <div className="gps-map-scanner"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Mobile App Ecosystem Section */}
      <section className="gps-section bg-dark-1 overflow-hidden relative">
        <div className="gps-container">
          <div className="gps-mobile-ecosystem-layout">
            <motion.div 
              className="gps-mobile-content"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            >
              <h2 className="gps-section-title text-left" style={{ marginBottom: "20px" }}>Track Anywhere.<br /><span>Control Anytime.</span></h2>
              <p className="gps-mobile-desc">
                Access enterprise command center intelligence on the go. Native mobile applications for iOS and Android.
              </p>
              
              <ul className="gps-mobile-features">
                <li>
                  <div className="gps-m-icon"><MapPin size={20} /></div>
                  <div>
                    <h4>Live Tracking</h4>
                    <p>Sub-second location updates on an interactive mobile map.</p>
                  </div>
                </li>
                <li>
                  <div className="gps-m-icon"><Bell size={20} /></div>
                  <div>
                    <h4>Instant Alerts</h4>
                    <p>Push notifications for speeding, geo-fence breaches, and ignition.</p>
                  </div>
                </li>
                <li>
                  <div className="gps-m-icon"><Settings size={20} /></div>
                  <div>
                    <h4>Remote Monitoring</h4>
                    <p>Immobilize vehicles or run diagnostics remotely via the app.</p>
                  </div>
                </li>
              </ul>
              
              <div className="gps-mobile-badges">
                <div className="gps-store-badge">Get it on Google Play</div>
                <div className="gps-store-badge">Download on App Store</div>
              </div>
            </motion.div>
            
            <motion.div 
              className="gps-mobile-mockup-wrapper"
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }} whileInView={{ opacity: 1, scale: 1, rotate: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="gps-smartphone-mockup">
                <div className="gps-phone-notch"></div>
                <div className="gps-phone-screen">
                  <div className="gps-app-header">
                    <div className="gps-app-menu"><div className="gps-hamburger"></div></div>
                    <div className="gps-app-title">Transetu Fleet</div>
                    <div className="gps-app-profile"></div>
                  </div>
                  <div className="gps-app-map">
                    <div className="gps-app-map-grid"></div>
                    <div className="gps-app-pin"></div>
                    <svg className="gps-app-route" viewBox="0 0 200 300"><path d="M 50 250 L 100 150 L 150 100" /></svg>
                    
                    <div className="gps-app-floating-card">
                      <div className="gps-af-title">Vehicle #402</div>
                      <div className="gps-af-status">In Transetu • 55 km/h</div>
                      <div className="gps-af-bar"><div className="gps-af-progress"></div></div>
                    </div>
                  </div>
                  <div className="gps-app-bottom-nav">
                    <div className="gps-nav-item active"><MapPin size={20} /></div>
                    <div className="gps-nav-item"><Activity size={20} /></div>
                    <div className="gps-nav-item"><Bell size={20} /></div>
                    <div className="gps-nav-item"><Settings size={20} /></div>
                  </div>
                </div>
                <div className="gps-phone-glow"></div>
              </div>
              
              <motion.div 
                className="gps-floating-notification f-notif-1"
                animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }}
              >
                <CheckCircle2 size={16} color="#10B981" /> Delivery Completed
              </motion.div>
              <motion.div 
                className="gps-floating-notification f-notif-2"
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
        <div className="gps-industries-bg-texture"></div>
        <div className="gps-container">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="gps-section-title">Built For <span>Your Industry</span></h2>
            <p className="gps-section-desc max-w-2xl mx-auto text-center">Tailored intelligence for every sector of transport and logistics.</p>
          </motion.div>
          
          <motion.div 
            className="gps-industries-grid"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            {industries.map((industry, index) => (
              <motion.div key={index} className="gps-industry-card-premium" variants={fadeInUp}>
                <div className="gps-industry-icon-premium">
                  {industry.icon}
                  <div className="gps-industry-icon-bg"></div>
                </div>
                <h3>{industry.title}</h3>
                <p>{industry.desc}</p>
                <div className="gps-industry-hover-glow"></div>
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
            <p className="gps-section-desc max-w-2xl mx-auto text-center">Get your fleet connected and monitored in four simple steps.</p>
          </motion.div>
          
          <div className="gps-process-flow">
            <div className="gps-process-connecting-line">
              <div className="gps-process-progress-animated"></div>
            </div>
            
            <motion.div 
              className="gps-process-nodes"
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            >
              {[
                { step: "01", title: "Site Audit", icon: <MapPin size={28} />, desc: "Complete fleet and terminal infrastructure assessment." },
                { step: "02", title: "Installation", icon: <Wrench size={28} />, desc: "Expert on-site hardware deployment and unit testing." },
                { step: "03", title: "Activation", icon: <Signal size={28} />, desc: "Secure platform onboarding and telemetry sync." },
                { step: "04", title: "Operations", icon: <Activity size={28} />, desc: "24/7 command center monitoring and management." }
              ].map((node, i) => (
                <motion.div key={i} className="gps-process-card-modern" variants={fadeInUp}>
                  <div className="gps-p-number">{node.step}</div>
                  <div className="gps-p-icon-modern">
                    {node.icon}
                  </div>
                  <h3 className="gps-p-title-modern">{node.title}</h3>
                  <p className="gps-p-desc-modern">{node.desc}</p>
                </motion.div>
              ))}
            </motion.div>
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
            <p className="gps-section-desc max-w-2xl mx-auto text-center">Transparent pricing tailored for fleets of all sizes.</p>
          </motion.div>
          
          <motion.div 
            className="gps-pricing-premium-grid"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            <motion.div className="gps-glass-panel gps-pricing-card-premium" variants={fadeInUp}>
              <div className="gps-pricing-header">
                <h3>Basic Tracking</h3>
                <div className="gps-price">₹2,999<span>/yr</span></div>
                <p className="gps-pricing-sub">Per vehicle. Essential tracking.</p>
              </div>
              <ul className="gps-pricing-features">
                <li><Check size={18} className="text-accent" /> Real-time Tracking (10s updates)</li>
                <li><Check size={18} className="text-accent" /> 30-Day Route History</li>
                <li><Check size={18} className="text-accent" /> Mobile App Access</li>
                <li><Check size={18} className="text-accent" /> Standard Email Support</li>
              </ul>
                <button className="gps-btn-pricing gps-btn-outline w-full" onClick={() => handleProceedPayment("Basic Tracking Plan")}>
                  Select Plan
                </button>
            </motion.div>
            
            <motion.div className="gps-glass-panel gps-pricing-card-premium highlighted" variants={fadeInUp}>
              <div className="popular-badge-animated">
                MOST POPULAR
              </div>
              <div className="gps-pricing-header">
                <h3>Advanced Fleet</h3>
                <div className="gps-price">₹4,999<span>/yr</span></div>
                <p className="gps-pricing-sub gps-text-highlight">Save 20% compared to monthly.</p>
              </div>
              <ul className="gps-pricing-features">
                <li><Check size={18} className="text-accent" /> Remote Engine Cut-off</li>
                <li><Check size={18} className="text-accent" /> 6-Month Route History</li>
                <li><Check size={18} className="text-accent" /> Advanced Geo-fencing</li>
                <li><Check size={18} className="text-accent" /> Analytics Dashboard</li>
                <li><Check size={18} className="text-accent" /> Priority 24/7 Support</li>
              </ul>
              <button className="gps-btn-pricing gps-btn-primary w-full" onClick={() => handleProceedPayment("Advanced Fleet Plan")}>Get Started Now</button>
            </motion.div>

            <motion.div className="gps-glass-panel gps-pricing-card-premium" variants={fadeInUp}>
              <div className="gps-pricing-header">
                <h3>Enterprise</h3>
                <div className="gps-price">Custom</div>
                <p className="gps-pricing-sub">For fleets with 50+ vehicles.</p>
              </div>
              <ul className="gps-pricing-features">
                <li><Check size={18} className="text-accent" /> Unlimited History Retention</li>
                <li><Check size={18} className="text-accent" /> Custom API Integrations</li>
                <li><Check size={18} className="text-accent" /> Advanced Multi-user Roles</li>
                <li><Check size={18} className="text-accent" /> White-label Options</li>
                <li><Check size={18} className="text-accent" /> Dedicated Account Manager</li>
              </ul>
                <button className="gps-btn-pricing gps-btn-primary w-full" onClick={() => handleProceedPayment("Enterprise Solutions")}>
                  Select Plan
                </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 9. Enhanced CTA Section */}
      <section className="gps-section bg-dark-1 border-t border-white/5">
        <div className="gps-container">
          <motion.div 
            className="gps-cta-premium-banner"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          >
            <div className="gps-cta-particle-bg"></div>
            
            <div className="gps-cta-content relative z-10">
              <h2 className="gps-cta-heading">Transform Your Fleet Operations Today</h2>
              <p className="gps-cta-desc">
                Join enterprise fleets optimizing operations with our advanced tracking platform.
              </p>
              
              <div className="gps-cta-actions">
                <button className="gps-btn-glow-premium lg" onClick={() => handleProceedPayment("General Inquiry")}>
                  <span className="flex items-center justify-center gap-3">Start Your Transformation <ArrowRight size={24} /></span>
                </button>
              </div>
              
              <div className="gps-cta-trust">
                <div className="gps-trust-item"><CheckCircle2 size={16} className="text-accent" /> Bank-Grade Security</div>
                <div className="gps-trust-item"><CheckCircle2 size={16} className="text-accent" /> 99.99% Uptime SLA</div>
                <div className="gps-trust-item"><CheckCircle2 size={16} className="text-accent" /> 24/7 Expert Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* 10. Enhanced Payment & Subscription Modal */}
      {showPaymentForm && (
        <div className="gps-modal-overlay" onClick={() => setShowPaymentForm(false)}>
          <motion.div 
            className="gps-payment-modal-premium" 
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
          >
            <button className="gps-modal-close" onClick={() => setShowPaymentForm(false)}><X size={24} /></button>
            
            {isSuccess ? (
              <div className="gps-modal-success">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, delay: 0.2 }}>
                  <div className="gps-success-icon-wrap">
                    <CheckCircle2 size={60} color="#10B981" />
                    <div className="gps-success-pulse"></div>
                  </div>
                </motion.div>
                <h3>Request Secured!</h3>
                <p>Your enterprise request has been received. Our deployment team will contact you within 2 hours.</p>
                <div className="gps-secure-badge mt-6" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748B', fontSize: '0.85rem', justifyContent: 'center', marginTop: '24px' }}><Lock size={14} /> Encrypted Transmission</div>
              </div>
            ) : (
              <>
                <div className="gps-modal-header">
                  <h3>Complete Configuration</h3>
                  <p>Configure your <span>{selectedPlan}</span> deployment.</p>
                </div>
                
                <form className="gps-modal-form" onSubmit={handleSubmit}>
                  <div className="gps-form-grid">
                    <div className="gps-form-group">
                      <label>Full Name</label>
                      <input type="text" placeholder="Enter your full name" required className="gps-premium-input" />
                    </div>
                    
                    <div className="gps-form-group">
                      <label>Company Name</label>
                      <input type="text" placeholder="Enter company name" required className="gps-premium-input" />
                    </div>
                    
                    <div className="gps-form-group">
                      <label>Mobile Number</label>
                      <input type="tel" placeholder="Enter 10-digit number" required pattern="[0-9]{10}" className="gps-premium-input" />
                    </div>
 
                    <div className="gps-form-group">
                      <label>Email Address</label>
                      <input type="email" placeholder="Enter work email" required className="gps-premium-input" />
                    </div>
 
                    <div className="gps-form-group">
                      <label>Fleet Size</label>
                      <select required defaultValue="" className="gps-premium-input">
                        <option value="" disabled>Select vehicle count</option>
                        <option value="1-5">1 - 5 Vehicles</option>
                        <option value="6-20">6 - 20 Vehicles</option>
                        <option value="21-50">21 - 50 Vehicles</option>
                        <option value="50+">50+ Vehicles (Enterprise)</option>
                      </select>
                    </div>
 
                    <div className="gps-form-group">
                      <label>Billing Cycle</label>
                      <select required defaultValue="" className="gps-premium-input">
                        <option value="" disabled>Select duration</option>
                        <option value="monthly">Monthly Billing</option>
                        <option value="yearly">Annual Billing (20% Off)</option>
                      </select>
                    </div>
                  </div>
 
                  <div className="gps-payment-method-section" style={{ marginTop: '30px' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--gps-text-secondary)', marginBottom: '12px', display: 'block' }}>Select Payment Method</label>
                    <div className="gps-payment-options">
                      <div className={`gps-payment-option ${paymentMethod === 'upi' ? 'active' : ''}`} onClick={() => setPaymentMethod('upi')}>
                        <Smartphone size={20} /> UPI / QR
                      </div>
                      <div className={`gps-payment-option ${paymentMethod === 'card' ? 'active' : ''}`} onClick={() => setPaymentMethod('card')}>
                        <CreditCard size={20} /> Credit Card
                      </div>
                      <div className={`gps-payment-option ${paymentMethod === 'net' ? 'active' : ''}`} onClick={() => setPaymentMethod('net')}>
                        <Landmark size={20} /> Net Banking
                      </div>
                    </div>
                  </div>
                  
                  <button type="submit" disabled={isProcessing} className="gps-btn-glow-premium lg w-full" style={{ width: '100%', marginTop: '30px', padding: "18px" }}>
                    {isProcessing ? (
                      <span className="flex items-center justify-center gap-3">
                        <Loader2 className="animate-spin" size={20} />
                        Establishing Secure Connection...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-3">
                        <Lock size={18} /> Proceed to Secure Checkout
                      </span>
                    )}
                  </button>
                  
                  <div className="gps-secure-checkout-footer">
                    <span>Secured by</span>
                    <div className="gps-razorpay-placeholder">Razorpay</div>
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