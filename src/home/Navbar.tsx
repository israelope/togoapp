import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Simplified logic: Only track if the user has moved from the top
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-500 px-6 md:px-10 ${
          /* Always visible, but background morphs on scroll */
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-md py-3"
            : "bg-brand-gold py-6"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo Section */}
          <a href="/" className="flex items-center gap-4 group">
            <img
              src={isScrolled ? "/logo2.webp" : "/logo.png"}
              className="w-12 h-12 transition-transform group-hover:scale-110"
            />

            <p className="text-black text-2xl font-bold">
              The Only Way{" "}
              <span className={isScrolled ? "text-brand-gold" : "text-white"}>
                Togo
              </span>
            </p>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-5 font-medium text-black ">
            <a href="/about" className="hover:opacity-60 transition-opacity">
              Home
            </a>

            <div className="relative group py-4">
              <button className="flex items-center gap-1 cursor-pointer">
                Table booking system{" "}
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              {/* Dropdown with the "Proactive" Lift Transition */}
              <div className="absolute top-full left-0 w-52 bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-3 group-hover:translate-y-0 transition-all duration-300 rounded-2xl border border-gray-100 overflow-hidden">
                <a
                  href="#"
                  className="block px-6 py-4 hover:bg-brand-gold hover:text-white text-sm transition-colors"
                >
                  Togo Booking System
                </a>
                <a
                  href="#"
                  className="block px-6 py-4 hover:bg-brand-gold hover:text-white text-sm transition-colors"
                >
                  Togo Marketing Platform
                </a>
                <a
                  href="#"
                  className="block px-6 py-4 hover:bg-brand-gold hover:text-white text-sm transition-colors"
                >
                  Booking System Demo
                </a>
              </div>
            </div>
            <a href="/about" className="hover:opacity-60 transition-opacity">
              Activity Booking System{" "}
            </a>
            <a href="/about" className="hover:opacity-60 transition-opacity">
              Websites{" "}
            </a>

            <div className="relative group py-4">
              <button className="flex items-center gap-1 cursor-pointer">
                Other Services{" "}
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              {/* Dropdown with the "Proactive" Lift Transition */}
              <div className="absolute top-full left-0 w-52 bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-3 group-hover:translate-y-0 transition-all duration-300 rounded-2xl border border-gray-100 overflow-hidden">
                <a
                  href="#"
                  className="block px-6 py-4 hover:bg-brand-gold hover:text-white text-sm transition-colors"
                >
                  Branding
                </a>
                <a
                  href="#"
                  className="block px-6 py-4 hover:bg-brand-gold hover:text-white text-sm transition-colors"
                >
                  Photography
                </a>
              </div>
            </div>

            <div className="relative group py-4">
              <button className="flex items-center gap-1 cursor-pointer">
                Spacebook{" "}
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              {/* Dropdown with the "Proactive" Lift Transition */}
              <div className="absolute top-full left-0 w-52 bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-3 group-hover:translate-y-0 transition-all duration-300 rounded-2xl border border-gray-100 overflow-hidden">
                <a
                  href="#"
                  className="block px-6 py-4 hover:bg-brand-gold hover:text-white text-sm transition-colors"
                >
                  Spacebook
                </a>
                <a
                  href="#"
                  className="block px-6 py-4 hover:bg-brand-gold hover:text-white text-sm transition-colors"
                >
                  Spacebook beauty
                </a>
              </div>
            </div>

            <a href="/demo" className="hover:opacity-60 transition-opacity">
              Contact
            </a>
          </nav>

          {/* Action Button */}
          <div className="flex items-center gap-4">
            <button
              className={`hidden md:flex items-center border-2 border-black gap-2 px-8 py-3 rounded-full font-bold transition-all duration-300 ${
                isScrolled
                  ? "bg-brand-gold text-white hover:bg-black"
                  : "bg-white text-black hover:bg-black hover:text-white"
              }`}
            >
              Get Togo <ArrowRight size={20} />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-black hover:scale-110 transition-transform"
            >
              <Menu size={32} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
