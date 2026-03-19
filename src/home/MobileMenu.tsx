import React, { useState } from "react";
import { X, ChevronRight, ArrowRight } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [activeMenu, setActiveMenu] = useState<string>("main");

  const handleClose = () => {
    onClose();
    setTimeout(() => setActiveMenu("main"), 500);
  };

  // The exact same structure as your Desktop Nav
  const menuItems = [
    { name: "Home", href: "/" },
    { 
      name: "Table Booking System", 
      type: "trigger", 
      id: "table",
      subLinks: [
        { name: "Togo Booking System", href: "#" },
        { name: "Togo Marketing Platform", href: "#" },
        { name: "Booking System Demo", href: "#" },
      ]
    },
    { name: "Activity Booking System", href: "/activity" },
    { name: "Websites", href: "/websites" },
    { 
      name: "Other Services", 
      type: "trigger", 
      id: "services",
      subLinks: [
        { name: "Branding", href: "#" },
        { name: "Photography", href: "#" },
      ]
    },
    { 
      name: "Spacebook", 
      type: "trigger", 
      id: "spacebook",
      subLinks: [
        { name: "Spacebook", href: "#" },
        { name: "Spacebook Beauty", href: "#" },
      ]
    },
    { name: "Contact", href: "/contact" },
  ];

  const currentSubMenu = menuItems.find(item => item.id === activeMenu);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-white transition-all duration-500 ease-in-out flex flex-col lg:hidden ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-6 border-b border-gray-50">
        <a href="/" onClick={handleClose} className="flex items-center gap-3">
          <img src="/logo2.webp" alt="Logo" className="w-10 h-10" />
          <span className="font-bold text-xl text-black uppercase tracking-tight">Togo</span>
        </a>
        <button onClick={handleClose} className="p-2 text-black">
          <X size={32} strokeWidth={1.5} />
        </button>
      </div>

      {/* Navigation Area */}
      <div className="flex-1 overflow-y-auto px-6 py-10">
        {activeMenu === "main" ? (
          <nav className="flex flex-col space-y-7">
            {menuItems.map((item, index) => (
              <div
                key={item.name}
                className={`transition-all duration-500 transform ${
                  isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                {item.type === "trigger" ? (
                  <button
                    onClick={() => setActiveMenu(item.id!)}
                    className="flex items-center justify-between w-full text-2xl font-semibold text-black group"
                  >
                    <span>{item.name}</span>
                    <ChevronRight className="text-brand-gold group-active:translate-x-2 transition-transform" />
                  </button>
                ) : (
                  <a href={item.href} onClick={handleClose} className="text-2xl font-semibold text-black block">
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </nav>
        ) : (
          /* Sub-Menu View */
          <div className="flex flex-col space-y-8 animate-in fade-in slide-in-from-right-5 duration-300">
            <button
              onClick={() => setActiveMenu("main")}
              className="flex items-center gap-2 text-sm font-semibold tracking-widest text-brand-gold uppercase mb-4"
            >
              <ChevronRight className="rotate-180 w-4 h-4" /> Back to Menu
            </button>
            
            <h2 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-2">
              {currentSubMenu?.name}
            </h2>

            {currentSubMenu?.subLinks?.map((sub, idx) => (
              <a 
                key={idx} 
                href={sub.href} 
                onClick={handleClose}
                className="text-2xl font-semibold text-black hover:text-brand-gold transition-colors"
              >
                {sub.name}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* CTA Footer */}
      <div 
        className={`p-6 pb-12 mt-auto transition-all duration-700 delay-500 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <button className="flex items-center justify-center w-full gap-3 px-6 py-5 bg-brand-gold text-white font-bold text-lg rounded-full shadow-lg">
          Get Togo <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}