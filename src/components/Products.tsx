"use client";

import { Check, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

export default function Products() {
  const products = [
    {
      name: "FASTag",
      tagline: "Cashless Toll Payments",
      features: [
        "Instant Activation",
        "Recharge Anytime",
        "Accepted Everywhere"
      ],
      price: "₹500",
      color: "var(--color-accent-blue)"
    },
    {
      name: "GPS Tracking",
      tagline: "Real-time Vehicle Monitor",
      features: [
        "Live Tracking",
        "Route History",
        "Theft Protection"
      ],
      price: "₹2,499",
      color: "var(--color-accent-sky)"
    },
    {
      name: "RFID Holders",
      tagline: "Durable Tag Protection",
      features: [
        "High Quality Build",
        "Easy Installation",
        "Universal Fit"
      ],
      price: "₹199",
      color: "var(--color-green)"
    }
  ];

  return (
    <section id="products" style={{ padding: '100px 0', backgroundColor: 'var(--color-bg-primary)' }}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Solutions</h2>
          <p>
            Choose the right product for a smarter and safer journey.
          </p>
        </motion.div>

        <div className="products-grid">
          {products.map((product, index) => (
            <motion.div 
              key={index} 
              className="product-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3>{product.name}</h3>
              <p className="product-tagline">{product.tagline}</p>
              
              <ul className="product-features">
                {product.features.map((feature, fIndex) => (
                  <li key={fIndex} className="product-feature-item">
                    <Check size={18} style={{ color: product.color }} />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="product-footer">
                <span className="product-price">{product.price}</span>
                <button 
                  className="btn-buy"
                  style={{ backgroundColor: product.color, color: 'white' }}
                >
                  Get Started <ShoppingCart size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
