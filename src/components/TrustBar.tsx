"use client";

import { Gauge, Shield, Clock, Users } from "lucide-react";

export default function TrustBar() {
  const items = [
    {
      icon: <Gauge className="strip-icon" />,
      title: "Cashless Payments",
      subtitle: "Fast & Convenient Toll Payments",
    },
    {
      icon: <Shield className="strip-icon" />,
      title: "Secure & Reliable",
      subtitle: "100% Safe & Encrypted Transactions",
    },
    {
      icon: <Clock className="strip-icon" />,
      title: "24/7 Support",
      subtitle: "We're Here Anytime You Need Us",
    },
    {
      icon: <Users className="strip-icon" />,
      title: "Trusted by Thousands",
      subtitle: "Across Highways Across India",
    },
  ];

  return (
    <section className="feature-strip">
      <div className="container strip-container">
        {items.map((item, index) => (
          <div key={index} className="strip-item">
            {item.icon}
            <div className="strip-content">
              <h4>{item.title}</h4>
              <p>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}