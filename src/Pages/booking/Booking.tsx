import { Link } from "react-router-dom";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Building,
  User,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const Booking = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="min-h-screen bg-brand-gold flex items-center justify-center px-6">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-12 rounded-[2.5rem] shadow-2xl text-center max-w-md"
        >
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-3xl font-bold text-brand-dark mb-4 italic">
            Request Received!
          </h2>
          <p className="text-gray-500 mb-8">
            One of our specialists will reach out shortly to confirm your custom
            Togo walkthrough.
          </p>
          <Link to="/">
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-brand-gold font-bold uppercase tracking-widest text-sm hover:underline cursor-pointer"
            >
              Back to Home
            </button>
          </Link>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-brand-gold pt-32 pb-20 px-6 flex flex-col items-center">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="max-w-4xl w-full text-center mb-12"
      >
        <h1 className="text-white text-5xl md:text-7xl font-bold italic mb-4">
          See Togo in <span className="text-brand-dark">Action.</span>
        </h1>
        <p className="text-white/80 text-lg md:text-xl">
          Fill out the quick form below and we’ll get back to you right away.
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-3xl w-full bg-white rounded-[3rem] shadow-2xl overflow-hidden p-8 md:p-16 relative"
      >
        {/* Subtle background branding */}
        <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
          <img src="/logo.png" alt="" className="w-64 h-64" />
        </div>

        <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
          {/* User & Venue Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group">
              <User
                className="absolute right-0 bottom-3 text-gray-300 group-focus-within:text-brand-gold transition-colors"
                size={18}
              />
              <input
                type="text"
                required
                className="w-full border-b-2 border-gray-100 py-3 focus:border-brand-gold outline-none transition-all peer bg-transparent text-black"
                placeholder=" "
              />
              <label className="absolute left-0 top-3 text-gray-400 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-gold peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                Full Name
              </label>
            </div>

            <div className="relative group">
              <Building
                className="absolute right-0 bottom-3 text-gray-300 group-focus-within:text-brand-gold transition-colors"
                size={18}
              />
              <input
                type="text"
                required
                className="w-full border-b-2 border-gray-100 py-3 focus:border-brand-gold outline-none transition-all peer bg-transparent text-black"
                placeholder=" "
              />
              <label className="absolute left-0 top-3 text-gray-400 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-gold peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                Venue Name
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group">
              <Phone
                className="absolute right-0 bottom-3 text-gray-300 group-focus-within:text-brand-gold transition-colors"
                size={18}
              />
              <input
                type="tel"
                required
                className="w-full border-b-2 border-gray-100 py-3 focus:border-brand-gold outline-none transition-all peer bg-transparent text-black"
                placeholder=" "
              />
              <label className="absolute left-0 top-3 text-gray-400 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-gold peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                Telephone
              </label>
            </div>

            <div className="relative group">
              <Mail
                className="absolute right-0 bottom-3 text-gray-300 group-focus-within:text-brand-gold transition-colors"
                size={18}
              />
              <input
                type="email"
                required
                className="w-full border-b-2 border-gray-100 py-3 focus:border-brand-gold outline-none transition-all peer bg-transparent text-black"
                placeholder=" "
              />
              <label className="absolute left-0 top-3 text-gray-400 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-gold peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                Business Email
              </label>
            </div>
          </div>

          {/* Date & Time Selectors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
                <Calendar size={14} /> Preferred Date
              </span>
              <input
                type="date"
                className="w-full border-b-2 border-gray-100 py-2 outline-none focus:border-brand-gold transition-colors text-black"
              />
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
                <Clock size={14} /> Preferred Time
              </span>
              <select className="w-full border-b-2 border-gray-100 py-2 outline-none focus:border-brand-gold transition-colors text-black bg-transparent">
                <option>Morning (9am - 12pm)</option>
                <option>Afternoon (12pm - 3pm)</option>
                <option>Late Afternoon (3pm - 5pm)</option>
              </select>
            </div>
          </div>

          <div className="pt-10 flex flex-col items-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-brand-dark text-white py-5 rounded-full font-bold uppercase tracking-[0.2em] shadow-xl hover:bg-black transition-all flex items-center justify-center gap-4"
            >
              Request My Demo <ArrowRight size={20} />
            </motion.button>
            <p className="mt-6 text-gray-400 text-xs font-medium">
              By submitting, you agree to our privacy policy and terms.
            </p>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default Booking;
