"use client";

import { Check, ShoppingCart, CreditCard, Car, MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Products() {
  const products = [
    {
      name: "FASTag",
      tagline: "Cashless toll payments with instant deduction and seamless travel.",
      features: [
        "Easy to Use",
        "Instant Activation",
        "Recharge Anytime"
      ],
      price: "₹500",
      image: "/products/Fastags.png",
      bestSeller: true,
      href: "/product/fastag",
      buttonText: "View Details"
    },
    {
      name: "GPS Trackers",
      tagline: "Real-time vehicle tracking for safety, security and better control.",
      features: [
        "Live Tracking",
        "Geo-Fencing",
        "History Reports"
      ],
      price: "₹2,999",
      image: "/products/GPS Tracker.png",
      bestSeller: false,
      href: "/product/gps-tracker",
      buttonText: "View Details"
    },
    {
      name: "RFID Holders",
      tagline: "Durable and stylish holders to protect your FASTag while driving.",
      features: [
        "Premium Quality",
        "Long Lasting",
        "Lightweight"
      ],
      price: "₹150",
      image: "/products/RFID Holders.png",
      bestSeller: false,
      href: "/product/rfid-holder",
      buttonText: "View Details"
    }
  ];

  return (
    <section id="products" className="products-section">
      <div className="container">
        <motion.div 
          className="products-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">OUR PRODUCTS</span>
          <h2 className="section-title">
            Smart <span className="text-highlight">Solutions</span> for Every Journey
          </h2>
          <p className="section-desc">
            Explore our range of products designed to make toll payments easier, 
            monitor vehicles smarter, and keep your essentials in place.
          </p>
        </motion.div>

        <div className="products-grid">
          {products.map((product, index) => (
            <motion.div 
              key={index} 
              className="product-card-v2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="product-image-container">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill
                  className="product-display-img"
                  priority={index === 0}
                />
              </div>

              <div className="product-details">
                <h3 className="product-title">{product.name}</h3>
                <p className="product-description">{product.tagline}</p>
                
                <ul className="product-feature-list">
                  {product.features.map((feature, fIndex) => (
                    <li key={fIndex}>
                      <div className="check-circle-mini">
                        <Check size={12} strokeWidth={4} />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="product-purchase-footer">
                  <span className="product-price-value">{product.price}</span>
                  {product.href ? (
                    <Link href={product.href} className="product-buy-button" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <ShoppingCart size={18} fill="currentColor" />
                      <span>{product.buttonText || "Buy Now"}</span>
                    </Link>
                  ) : (
                    <button className="product-buy-button">
                      <ShoppingCart size={18} fill="currentColor" />
                      <span>{product.buttonText || "Buy Now"}</span>
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Banner Redesign */}
        <motion.div 
          className="premium-fastag-banner"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* LEFT SECTION: Dark Tunnel Automotive Theme */}
          <div className="banner-left-automotive">
            <Image 
              src="/assets/Car_image.png" 
              alt="FASTag Enabled Car" 
              fill
              className="object-cover object-left"
            />
            
            {/* Animated Scanning Beam */}
            <div className="absolute inset-0 z-10 w-full h-full pointer-events-none overflow-hidden rounded-l-3xl">
              <motion.div 
                className="relative w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {/* The Scanning Beam Line */}
                <motion.div 
                  className="absolute left-0 w-full h-[1px] bg-[#0057FF] shadow-[0_0_15px_#0057FF,0_0_30px_#0057FF]"
                  animate={{ 
                    top: ["0%", "95%", "0%"],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                >
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[4px] bg-[#0057FF]/30 blur-[2px]" />
                </motion.div>
              </motion.div>
            </div>
          </div>
          
          {/* RIGHT SECTION: Content and Steps */}
          <div className="banner-right-content">
            <div className="banner-flex-container">
              {/* Heading */}
              <div className="banner-heading-wrap">
                <h3>
                  Skip the line.<br />
                  Save time.<br />
                  <span>Travel more.</span>
                </h3>
              </div>

              {/* 3-Step Process Flow */}
              <div className="banner-steps-flow">
                {/* Step 1 */}
                <div className="banner-step-item">
                  <motion.div 
                    className="banner-step-icon"
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    <CreditCard size={26} />
                  </motion.div>
                  <div className="banner-step-text">
                    <span className="banner-step-num">01</span>
                    <p className="banner-step-label">Get Your FASTag</p>
                  </div>
                </div>

                <MoveRight className="banner-step-arrow" size={20} />

                {/* Step 2 */}
                <div className="banner-step-item">
                  <motion.div 
                    className="banner-step-icon"
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    <Car size={26} />
                  </motion.div>
                  <div className="banner-step-text">
                    <span className="banner-step-num">02</span>
                    <p className="banner-step-label">Drive Through</p>
                  </div>
                </div>

                <MoveRight className="banner-step-arrow" size={20} />

                {/* Step 3 */}
                <div className="banner-step-item">
                  <motion.div 
                    className="banner-step-icon"
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    <Check size={26} strokeWidth={3} />
                  </motion.div>
                  <div className="banner-step-text">
                    <span className="banner-step-num">03</span>
                    <p className="banner-step-label">Pay Automatically</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
