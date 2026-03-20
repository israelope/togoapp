
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section className="min-h-screen bg-brand-gold pt-32 pb-20 px-6 md:px-20 flex items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[2.5rem] overflow-hidden shadow-2xl">
        
        {/* LEFT PANEL: The Modern Form */}
        <div className="p-8 md:p-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-brand-dark text-4xl md:text-5xl font-bold italic mb-2">Let's <span className="text-brand-gold">Connect.</span></h2>
            <p className="text-gray-500 mb-10">Have a question or ready to scale? We're here to help.</p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <input type="text" id="name" required className="w-full border-b-2 border-gray-200 py-3 focus:border-brand-gold outline-none transition-all peer bg-transparent" placeholder=" " />
                  <label htmlFor="name" className="absolute left-0 top-3 text-gray-400 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-gold peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">Full Name</label>
                </div>
                <div className="relative group">
                  <input type="email" id="email" required className="w-full border-b-2 border-gray-200 py-3 focus:border-brand-gold outline-none transition-all peer bg-transparent" placeholder=" " />
                  <label htmlFor="email" className="absolute left-0 top-3 text-gray-400 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-gold peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">Email Address</label>
                </div>
              </div>

              <div className="relative group">
                <select className="w-full border-b-2 border-gray-200 py-3 focus:border-brand-gold outline-none transition-all text-gray-500 bg-transparent">
                  <option>Reason for contact?</option>
                  <option>Table Booking Demo</option>
                  <option>Marketing Platform</option>
                  <option>Bespoke Branding</option>
                </select>
              </div>

              <div className="relative group">
                <textarea id="message" rows={4} required className="w-full border-b-2 border-gray-200 py-3 focus:border-brand-gold outline-none transition-all peer bg-transparent resize-none" placeholder=" " />
                <label htmlFor="message" className="absolute left-0 top-3 text-gray-400 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-gold peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">How can we help you?</label>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full md:w-fit bg-brand-dark text-white px-12 py-4 rounded-full font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-brand-gold transition-colors"
              >
                Send Message <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* RIGHT PANEL: The Info & Vibe */}
        <div className="relative bg-brand-dark p-8 md:p-16 flex flex-col justify-between overflow-hidden">
          {/* Background Decorative Pattern */}
          <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 space-y-12">
            <div>
              <h3 className="text-brand-gold text-sm font-black tracking-[0.3em] uppercase mb-6">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex gap-6 group">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-brand-gold transition-colors">
                    <Phone className="text-brand-gold group-hover:text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Call Us</p>
                    <p className="text-xl font-medium">0113 328 1109</p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-brand-gold transition-colors">
                    <MapPin className="text-brand-gold group-hover:text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Find Us</p>
                    <p className="text-xl font-medium">3rd Floor, Holmfield Mills,<br/>HX3 6SN Halifax</p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-brand-gold transition-colors">
                    <MessageSquare className="text-brand-gold group-hover:text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Live Support</p>
                    <p className="text-xl font-medium">9AM — 5PM Mon-Fri</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-10 border-t border-white/10">
              <p className="text-gray-400 italic mb-4 font-light">"Our mission is to help your venue reach its full, commission-free potential."</p>
              <img src="/logo.png" alt="Togo Logo" className="w-16 h-16 opacity-20" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;