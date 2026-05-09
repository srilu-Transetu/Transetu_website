"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PhoneCall } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${(mounted && isScrolled) ? "scrolled" : ""}`}>
      <div className="container">
        <Link href="/" className="nav-logo">
          <img src="/assets/logo.png" alt="Transetu Logo" />
        </Link>

        <div className="nav-links">
          <Link href="/" className="nav-link active">Home</Link>
          <Link href="#products" className="nav-link">Products</Link>
          <Link href="#about" className="nav-link">About Us</Link>
        </div>

        <Link href="#contact" className="btn-contact">
          <PhoneCall size={18} />
          <span>Contact Us</span>
        </Link>
      </div>
    </nav>
  );
}
