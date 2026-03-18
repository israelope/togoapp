import React, { useState, useEffect, useRef } from "react";
// Use standard <img> and <a> tags, or react-router-dom Link if you have it installed
import { ArrowRight, ChevronDown, Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function MobileMenu({ isOpen, onClose }) {
  const [activeMenu, setActiveMenu] = useState("main");

  const handleClose = () => {
    onClose();
    setTimeout(() => setActiveMenu("main"), 500);
  };

  const menuItems = [
    { name: "About", href: "/about" },
    { name: "Treatments", type: "trigger", id: "treatments" },
    { name: "Clinics", type: "trigger", id: "clinics" },
    { name: "Stories", href: "/stories" },
    { name: "Referrers", type: "trigger", id: "referrers" },
    { name: "Academy", href: "/academy" },
  ];

  return (
    <div
      className={`fixed inset-0 z-[100] bg-white transition-all duration-500 ease-in-out flex flex-col lg:hidden ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-6">
        <a href="/" onClick={handleClose}>
          <img src="/icons/proactive-logo.png" alt="Logo" className="w-auto h-8" />
        </a>
        <button onClick={handleClose} className="p-2 text-[#2D2921]">
          <X className="w-8 h-8" strokeWidth={1.5} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-8">
        {activeMenu === "main" && (
          <nav className="flex flex-col space-y-6 text-xl text-[#2D2921]">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 10 }}
                animate={isOpen ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
              >
                {item.type === "trigger" ? (
                  <button
                    onClick={() => setActiveMenu(item.id)}
                    className="flex items-center justify-between w-full hover:text-blue-600"
                  >
                    <span>{item.name}</span>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </button>
                ) : (
                  <a href={item.href} onClick={handleClose} className="hover:text-blue-600 block">
                    {item.name}
                  </a>
                )}
              </motion.div>
            ))}
          </nav>
        )}

        <AnimatePresence mode="wait">
          {activeMenu !== "main" && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="flex flex-col space-y-6 text-xl text-[#2D2921]"
            >
              <button
                onClick={() => setActiveMenu("main")}
                className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4 flex items-center gap-2"
              >
                <ChevronRight className="w-4 h-4 rotate-180" /> Back
              </button>
              {activeMenu === "treatments" && (
                <>
                  <a href="/treatments/prosthetics" onClick={handleClose}>Prosthetics</a>
                  <a href="/treatments/orthotics" onClick={handleClose}>Orthotics</a>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className={`p-6 pb-20 mt-auto transition-all duration-700 ${isOpen ? "opacity-100" : "opacity-0"}`}>
        <a href="/contact" onClick={handleClose} className="flex items-center justify-center w-full gap-2 px-6 py-4 border border-blue-600 text-[#2D2921] hover:bg-blue-600 hover:text-white transition-all">
          <ArrowRight className="w-4 h-4" /> Contact Us
        </a>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 50);
      setIsVisible(currentY <= lastScrollY.current || currentY < 100);
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-500 px-4 md:px-8 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${isScrolled ? "bg-white shadow-sm py-3" : "bg-transparent py-6"}`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <a href="/" className="flex-shrink-0">
            <img
              src={isScrolled ? "/icons/proactive-logo.png" : "/icons/proactive-logo-light.png"}
              alt="Logo"
              className="w-auto h-10 transition-all"
            />
          </a>

          <nav className={`hidden lg:flex items-center gap-8 font-light ${isScrolled ? "text-[#2D2921]" : "text-white"}`}>
            <a href="/about" className="hover:text-[#A6885B] transition-colors">About</a>
            <div className="relative group py-4">
              <button className="flex items-center gap-1 hover:text-[#A6885B]">
                Treatments <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 w-48 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all rounded-b-md overflow-hidden">
                <a href="/treatments/prosthetics" className="block px-4 py-3 text-[#2D2921] hover:bg-gray-50">Prosthetics</a>
              </div>
            </div>
            <a href="/stories" className="hover:text-[#A6885B] transition-colors">Stories</a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="/contact"
              className={`hidden md:flex items-center gap-2 px-6 py-2 text-sm uppercase tracking-widest border transition-all ${
                isScrolled 
                ? "border-[#A6885B] text-[#A6885B] hover:bg-[#A6885B] hover:text-white" 
                : "border-white text-white hover:bg-white hover:text-[#2D2921]"
              }`}
            >
              Contact Us
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`lg:hidden p-2 ${isScrolled ? "text-[#2D2921]" : "text-white"}`}
            >
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}