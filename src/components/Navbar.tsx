"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PhoneCall } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Set initial active link based on hash or path
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setActiveLink(hash);
    } else if (pathname === "/") {
      setActiveLink("home");
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <nav className={`navbar ${(mounted && isScrolled) ? "scrolled" : ""}`}>
      <div className="container">
        <Link href="/" className="nav-logo" onClick={() => handleLinkClick("home")}>
          <img src="/assets/logo.png" alt="Transetu Logo" />
        </Link>

        <div className="nav-links">
          <Link 
            href="/" 
            className={`nav-link ${activeLink === "home" ? "active" : ""}`}
            onClick={() => handleLinkClick("home")}
          >
            Home
          </Link>
          <Link 
            href="/#products" 
            className={`nav-link ${activeLink === "products" ? "active" : ""}`}
            onClick={() => handleLinkClick("products")}
          >
            Products
          </Link>
          <Link 
            href="/#about" 
            className={`nav-link ${activeLink === "about" ? "active" : ""}`}
            onClick={() => handleLinkClick("about")}
          >
            About Us
          </Link>
        </div>

        <Link href="/#contact" className="btn-contact" onClick={() => handleLinkClick("contact")}>
          <PhoneCall size={18} />
          <span>Contact Us</span>
        </Link>
      </div>
    </nav>
  );
}
