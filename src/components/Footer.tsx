import { Link } from "react-router-dom";
import {
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Clock,
  Phone,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10 px-6 md:px-20 relative overflow-hidden">
      {/* 1. Large Faded Logo "Stamp" in the background */}
      <div className="absolute right-[-5%] bottom-[-5%] opacity-[0.03] pointer-events-none ">
        <img
          src="/logo.png"
          alt=""
          className="w-[600px] h-[600px] object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* TOP SECTION: Headline & CTA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 border-b border-white/10 pb-12">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold italic mb-4">
              Get in <span className="text-brand-gold">Touch</span>
            </h2>
            <p className="text-gray-400 max-w-md">
              Stay updated with our ever-evolving booking ecosystem.
            </p>
          </div>
          <div className="flex gap-4 mt-8 md:mt-0">
            <Link to="/contact">
              <button className="flex items-center gap-2 border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-brand-dark transition-all text-sm uppercase font-bold tracking-widest">
                <Mail size={16} /> Contact Us
              </button>
            </Link>
            <Link to="/book-a-demo">
              <button className="flex items-center gap-2 bg-brand-gold px-6 py-3 rounded-full hover:bg-white hover:text-brand-dark transition-all text-sm uppercase font-bold tracking-widest">
                Schedule A Demo
              </button>
            </Link>
          </div>
        </div>

        {/* MIDDLE SECTION: 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Col 1: Newsletter */}
          <div className="space-y-6">
            <h4 className="text-brand-gold uppercase tracking-tighter font-bold">
              Newsletter
            </h4>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-transparent border-b border-white/20 py-2 focus:border-brand-gold outline-none transition-colors"
              />
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b border-white/20 py-2 focus:border-brand-gold outline-none transition-colors"
                />
                <button className="absolute right-0 bottom-2 text-brand-gold hover:text-white transition-colors">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Col 2: Location */}
          <div className="space-y-6">
            <h4 className="text-brand-gold uppercase tracking-tighter font-bold">
              Location
            </h4>
            <div className="flex gap-3 text-gray-400">
              <MapPin size={20} className="shrink-0 text-white" />
              <p>
                Holmfield Mills, Holdsworth Road,
                <br />
                Halifax, HX3 6SN
              </p>
            </div>
          </div>

          {/* Col 3: Hours */}
          <div className="space-y-6">
            <h4 className="text-brand-gold uppercase tracking-tighter font-bold">
              Opening Hours
            </h4>
            <div className="flex gap-3 text-gray-400">
              <Clock size={20} className="shrink-0 text-white" />
              <p>
                Monday to Friday:
                <br />
                9am – 5pm
              </p>
            </div>
          </div>

          {/* Col 4: Contact */}
          <div className="space-y-6">
            <h4 className="text-brand-gold uppercase tracking-tighter font-bold">
              Quick Contact
            </h4>
            <div className="space-y-4 text-gray-400">
              <a
                href="tel:01133281109"
                className="flex gap-3 hover:text-white transition-colors"
              >
                <Phone size={20} className="text-white" /> 0113 328 1109
              </a>
              <a
                href="#"
                className="flex gap-3 hover:text-white transition-colors"
              >
                <Mail size={20} className="text-white" /> Enquiry Form
              </a>
              <div className="flex gap-4 pt-2">
                <a
                  href="#"
                  className="p-2 bg-white/5 rounded-full hover:bg-brand-gold transition-colors"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-white/5 rounded-full hover:bg-brand-gold transition-colors"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-widest font-bold">
          <p>© 2026 The Only Way Togo. All Rights Reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
