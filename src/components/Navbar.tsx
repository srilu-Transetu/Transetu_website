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

    window.addEventListener("scroll", handleScroll);

    // Only run IntersectionObserver on the home page
    if (pathname === "/") {
      const sections = ["home", "products", "about", "contact"];
      const observers = sections.map((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  setActiveLink(sectionId);
                }
              });
            },
            { threshold: 0.5 } // Trigger when 50% of section is visible
          );
          observer.observe(element);
          return observer;
        }
        return null;
      });

      return () => {
        window.removeEventListener("scroll", handleScroll);
        observers.forEach((observer) => observer?.disconnect());
      };
    } else if (pathname.startsWith("/product")) {
      setActiveLink("products");
    }

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

        <div className="nav-actions" style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Link href="/#contact" className="btn-contact" onClick={() => handleLinkClick("contact")}>
            <PhoneCall size={18} />
            <span>Contact Us</span>
          </Link>
          
          <Link href="/signup" className="btn-signup">
            <span>Sign Up</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
