"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, Zap, Clock, Shield, Globe, RefreshCw, FileText, CreditCard, Smartphone, MessageCircle, Phone, Mail, Car, ArrowRight, Wallet, QrCode, X, MousePointerClick, ShieldCheck, Upload, Loader2, CheckCircle2 } from "lucide-react";
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
    { icon: <Car size={36} />, title: "New FASTag", desc: "Apply for a new FASTag with quick processing and support." },
    { icon: <Zap size={36} />, title: "FASTag Recharge", desc: "Quick recharge options via UPI, Net Banking, and Cards." },
    { icon: <FileText size={36} />, title: "Commercial FASTag", desc: "Dedicated solutions for trucks, buses, and fleet operators." },
  ];

  const supportServices = [
    { icon: <RefreshCw size={24} />, title: "Replacement", desc: "Lost or damaged? Get a quick replacement." },
    { icon: <Shield size={24} />, title: "KYC Update", desc: "Easy online KYC updates to stay compliant." },
    { icon: <Wallet size={24} />, title: "Balance Check", desc: "24/7 access to your transaction history." },
  ];

  const benefits = [
    { icon: <Zap size={24} />, title: "Quick Activation", desc: "Ready to use on the highway shortly after setup." },
    { icon: <CreditCard size={24} />, title: "Cashless Payments", desc: "No more fumbling for change at the toll plazas." },
    { icon: <Clock size={24} />, title: "Saves Travel Time", desc: "Breeze through toll gates without stopping." },
    { icon: <Globe size={24} />, title: "Nationwide Coverage", desc: "Valid across all NETC enabled toll plazas in India." },
    { icon: <Shield size={24} />, title: "Secure Transactions", desc: "Bank-grade encryption for all your toll deductions." },
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
      }, 3000);
    }, 2000);
  };

  return (
    <div className="fastag-page">
      <Navbar />
      
      {/* 1. Hero Section */}
      <section className="fastag-hero">
        <div className="fastag-hero-content">
          <h1 className="fastag-title">Smart FASTag Solutions<br /><span>For Seamless Travel</span></h1>
          <p className="fastag-subtitle">Experience seamless highway travel with secure toll payments and smoother highway travel.</p>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="#pricing" className="btn-glow">
              Get Your FASTag <ArrowRight size={20} />
            </Link>
            <button className="btn-glow btn-outline" onClick={() => handleProceedPayment("Quick FASTag Recharge")}>
              Quick Recharge <Zap size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="fastag-section bg-dark-1">
        <div className="fastag-container">
          <div className="glass-card text-center" style={{ maxWidth: "800px", margin: "0 auto", padding: "50px" }}>
            <h2 className="fastag-section-title" style={{ marginBottom: "20px" }}>What is <span>FASTag</span>?</h2>
            <p className="service-desc" style={{ fontSize: "1.1rem", color: "#E2E8F0" }}>
              FASTag is an automated toll collection system that lets you pass through toll plazas without stopping. Linked to your prepaid account, it deducts charges automatically, ensuring a seamless journey.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Services Grid */}
      <section className="fastag-section bg-gradient-blue">
        <div className="fastag-container">
          <h2 className="fastag-section-title">Our FASTag <span>Services</span></h2>
          <div className="services-grid" style={{ marginBottom: "40px" }}>
            {mainServices.map((service, index) => (
              <div key={index} className="glass-card service-card">
                <div className="service-icon-wrap">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="services-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
            {supportServices.map((service, index) => (
              <div key={index} className="glass-card service-card" style={{ padding: "20px", display: "flex", alignItems: "flex-start", gap: "15px", flexDirection: "row", textAlign: "left" }}>
                <div className="service-icon-wrap" style={{ width: "50px", height: "50px", margin: "0" }}>
                  {service.icon}
                </div>
                <div>
                  <h3 className="service-title" style={{ fontSize: "1.1rem", marginBottom: "5px" }}>{service.title}</h3>
                  <p className="service-desc" style={{ fontSize: "0.9rem" }}>{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Benefits Section */}
      <section className="fastag-section bg-dark-2">
        <div className="fastag-container">
          <h2 className="fastag-section-title">Why Choose <span>Transetu FASTag</span>?</h2>
          <div className="benefits-layout">
            <div className="glass-card" style={{ padding: "0", overflow: "hidden", minHeight: "500px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Image 
                src="/assets/Fastag_image.png" 
                alt="FASTag Benefits" 
                width={600} 
                height={500} 
                style={{ objectFit: "cover", width: "100%", height: "100%", opacity: 0.9 }} 
              />
            </div>
            <div className="benefit-list">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <div className="benefit-icon">{benefit.icon}</div>
                  <div>
                    <h4 style={{ color: "#FFFFFF", fontSize: "1.2rem", marginBottom: "6px" }}>{benefit.title}</h4>
                    <p style={{ color: "#A8B4C8", lineHeight: "1.5" }}>{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Process Section */}
      <section className="fastag-section bg-dark-1">
        <div className="fastag-container">
          <h2 className="fastag-section-title">How It <span>Works</span></h2>
          <div className="process-cards">
            <div className="process-card">
              <div className="p-icon-wrap"><MousePointerClick size={36} /></div>
              <div className="p-step">Step 01</div>
              <h3>Choose Service</h3>
              <p>Select your required FASTag service from our platform.</p>
            </div>
            <div className="process-card p-down">
              <div className="p-icon-wrap"><Car size={36} /></div>
              <div className="p-step">Step 02</div>
              <h3>Vehicle Details</h3>
              <p>Enter your registration number securely to link your tag.</p>
            </div>
            <div className="process-card">
              <div className="p-icon-wrap"><ShieldCheck size={36} /></div>
              <div className="p-step">Step 03</div>
              <h3>Verification</h3>
              <p>We verify your details securely and process it.</p>
            </div>
            <div className="process-card p-down">
              <div className="p-icon-wrap"><Zap size={36} /></div>
              <div className="p-step">Step 04</div>
              <h3>Activation</h3>
              <p>Your tag is activated and shipped to you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Pricing & Recharge Section */}
      <section id="pricing" className="fastag-section bg-gradient-blue">
        <div className="fastag-container">
          <h2 className="fastag-section-title">Plans & <span>Services</span></h2>
          <div className="pricing-grid">
            <div className="glass-card pricing-card">
              <h3 style={{ fontSize: "1.5rem", color: "#FFFFFF" }}>Personal Vehicle</h3>
              <div className="price">Standard</div>
              <ul className="pricing-features">
                <li><Check size={18} color="#2EB3E8" /> Free Doorstep Delivery</li>
                <li><Check size={18} color="#2EB3E8" /> Basic Security Deposit</li>
                <li><Check size={18} color="#2EB3E8" /> Initial Wallet Balance</li>
                <li><Check size={18} color="#2EB3E8" /> App Access</li>
              </ul>
              <button className="btn-glow w-full btn-outline" onClick={() => handleProceedPayment("Personal Vehicle Tag")}>Apply Now</button>
            </div>
            
            <div className="glass-card pricing-card popular">
              <div className="popular-badge">RECHARGE</div>
              <h3 style={{ fontSize: "1.5rem", color: "#FFFFFF" }}>Instant Recharge</h3>
              <div className="price">Flexi</div>
              <ul className="pricing-features">
                <li><Check size={18} color="#2EB3E8" /> Zero Convenience Fee</li>
                <li><Check size={18} color="#2EB3E8" /> Instant Balance Update</li>
                <li><Check size={18} color="#2EB3E8" /> SMS/Email Notifications</li>
                <li><Check size={18} color="#2EB3E8" /> Auto-recharge Setup</li>
              </ul>
              <button className="btn-glow w-full" onClick={() => handleProceedPayment("FASTag Recharge")}>Recharge Now</button>
            </div>

            <div className="glass-card pricing-card">
              <h3 style={{ fontSize: "1.5rem", color: "#FFFFFF" }}>Commercial Vehicle</h3>
              <div className="price">Premium</div>
              <ul className="pricing-features">
                <li><Check size={18} color="#2EB3E8" /> Priority Processing</li>
                <li><Check size={18} color="#2EB3E8" /> Commercial Deposit</li>
                <li><Check size={18} color="#2EB3E8" /> Initial Wallet Balance</li>
                <li><Check size={18} color="#2EB3E8" /> Dedicated Support</li>
              </ul>
              <button className="btn-glow w-full btn-outline" onClick={() => handleProceedPayment("Commercial Vehicle Tag")}>Contact Team</button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Customer Support & Final CTA */}
      <section className="fastag-section bg-dark-1">
        <div className="fastag-container">
          <div className="support-grid" style={{ marginBottom: "80px" }}>
            <div className="glass-card">
              <h3 style={{ fontSize: "1.6rem", color: "#FFFFFF", marginBottom: "20px" }}>24/7 Customer Support</h3>
              <p style={{ color: "#A8B4C8", marginBottom: "30px", fontSize: "1.05rem" }}>Need help with your FASTag? Our support team is here for you round the clock.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "15px", color: "#FFFFFF", fontSize: "1.1rem" }}>
                  <MessageCircle color="#2EB3E8" size={24} /> <span>WhatsApp: +91 98765 43210</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "15px", color: "#FFFFFF", fontSize: "1.1rem" }}>
                  <Phone color="#2EB3E8" size={24} /> <span>Call: 1800-123-4567</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "15px", color: "#FFFFFF", fontSize: "1.1rem" }}>
                  <Mail color="#2EB3E8" size={24} /> <span>Email: support@transetu.com</span>
                </div>
              </div>
            </div>
            
            <div className="glass-card" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h3 style={{ fontSize: "1.6rem", color: "#FFFFFF", marginBottom: "20px" }}>Support Timings</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                <div style={{ background: "rgba(255,255,255,0.05)", padding: "20px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <h4 style={{ color: "#FFFFFF", marginBottom: "5px" }}>Monday - Saturday</h4>
                  <p style={{ color: "#2EB3E8" }}>9:00 AM to 8:00 PM</p>
                </div>
                <div style={{ background: "rgba(255,255,255,0.05)", padding: "20px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <h4 style={{ color: "#FFFFFF", marginBottom: "5px" }}>Sunday & Holidays</h4>
                  <p style={{ color: "#2EB3E8" }}>10:00 AM to 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="cta-banner">
            <div style={{ position: "relative", zIndex: 10 }}>
              <h2 style={{ fontSize: "3.2rem", fontWeight: "800", color: "#FFFFFF", marginBottom: "20px", letterSpacing: "-1px" }}>Activate Your FASTag Today</h2>
              <p style={{ color: "#A8B4C8", fontSize: "1.2rem", marginBottom: "40px" }}>Trusted FASTag solutions for smooth highway travel.</p>
              <Link href="#pricing" className="btn-glow" style={{ padding: "20px 40px", fontSize: "1.2rem" }}>
                Get Started Now <ArrowRight size={24} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Payment Modal */}
      {showPaymentForm && (
        <div className="payment-modal-overlay" onClick={() => setShowPaymentForm(false)}>
          <div className="payment-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setShowPaymentForm(false)}><X size={28} /></button>
            
            {isSuccess ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 20px", textAlign: "center" }}>
                <CheckCircle2 size={80} color="#10B981" style={{ marginBottom: "20px" }} />
                <h3 style={{ fontSize: "2rem", color: "#FFFFFF", marginBottom: "15px", fontWeight: "700" }}>Request Successful!</h3>
                <p style={{ color: "#A8B4C8", fontSize: "1.1rem" }}>Your request has been processed securely. You will receive an SMS confirmation shortly.</p>
              </div>
            ) : (
              <>
                <h3 style={{ fontSize: "2rem", color: "#FFFFFF", marginBottom: "15px", fontWeight: "700" }}>Complete Request</h3>
                <p style={{ color: "#A8B4C8", marginBottom: "30px", fontSize: "1.05rem" }}>
                  Selected Option: <strong style={{ color: "#2EB3E8", fontWeight: "600" }}>{selectedPlan}</strong>
                </p>
                
                <form className="payment-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="Enter your full name" required />
                  </div>
                  
                  <div className="form-group">
                    <label>Mobile Number</label>
                    <input type="tel" placeholder="Enter 10-digit mobile number" required pattern="[0-9]{10}" />
                  </div>

                  {!selectedPlan.includes("Recharge") && (
                    <>
                      <div className="form-group">
                        <label>Email Address (Optional)</label>
                        <input type="email" placeholder="Enter your email address" />
                      </div>
                      <div className="form-group">
                        <label>Vehicle Type</label>
                        <select required defaultValue="" style={{ width: "100%", padding: "16px", borderRadius: "12px", background: "rgba(0, 0, 0, 0.2)", border: "1px solid rgba(255, 255, 255, 0.1)", color: "#FFFFFF", outline: "none", fontSize: "1rem", appearance: "none", WebkitAppearance: "none" }}>
                          <option value="" disabled>Select vehicle type</option>
                          <option value="car" style={{ color: "#000" }}>Car / Jeep / Van</option>
                          <option value="lcv" style={{ color: "#000" }}>Light Commercial Vehicle</option>
                          <option value="bus" style={{ color: "#000" }}>Bus / Truck</option>
                        </select>
                      </div>
                    </>
                  )}

                  <div className="form-group">
                    <label>Vehicle Registration Number</label>
                    <input 
                      type="text" 
                      placeholder="e.g. MH 12 AB 1234" 
                      required 
                      value={vehicleNumber}
                      onChange={handleVehicleNumberChange}
                      style={{ borderColor: vehicleNumberError ? "#EF4444" : "" }}
                    />
                    {vehicleNumberError && (
                      <span style={{ color: "#EF4444", fontSize: "0.8rem", marginTop: "4px" }}>{vehicleNumberError}</span>
                    )}
                  </div>
                  
                  {selectedPlan.includes("Recharge") ? (
                    <>
                      <div className="form-group">
                        <label>FASTag ID (Optional)</label>
                        <input type="text" placeholder="Enter FASTag ID" />
                      </div>
                      <div className="form-group full-width">
                        <label>Recharge Amount (₹)</label>
                        <input type="number" placeholder="Enter amount to recharge" min="100" required />
                      </div>
                    </>
                  ) : (
                    <div className="form-group full-width">
                      <label>Upload RC Copy</label>
                      <div style={{ position: "relative", cursor: "pointer" }}>
                        <input type="file" required accept=".jpg,.jpeg,.png,.pdf" style={{ opacity: 0, position: "absolute", width: "100%", height: "100%", cursor: "pointer", zIndex: 10 }} />
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "16px", borderRadius: "12px", background: "rgba(0, 0, 0, 0.2)", border: "1px dashed rgba(255, 255, 255, 0.2)", color: "#A8B4C8" }}>
                          <Upload size={20} />
                          <span>Click to upload RC document</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <button type="submit" disabled={isProcessing || !!vehicleNumberError} className="btn-glow full-width" style={{ marginTop: "10px", padding: "18px", display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", opacity: (isProcessing || vehicleNumberError) ? 0.7 : 1 }}>
                    {isProcessing ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        Processing...
                      </>
                    ) : (
                      "Submit Request"
                    )}
                  </button>
                  <p className="full-width" style={{ textAlign: "center", fontSize: "0.85rem", color: "#64748B", marginTop: "-5px" }}>
                    By proceeding, you agree to our terms and conditions.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
