
import { motion } from "framer-motion";
import ServiceCard from "../../components/ServiceCard";

const WhatWeDo = () => {
  const services = [
    { 
      title: "Table Booking Systems", 
      desc: "Designed to save time, cut costs, boost customer satisfaction, and drive repeat business.", 
      img: "/table.webp", 
      size: "md:col-span-2 md:row-span-2" 
    },
    { 
      title: "Activity Venue Solutions", 
      desc: "Feature-rich booking systems for activity venues with upselling, chain bookings, POS kiosks for on-site bookings, and availability screens.", 
      img: "/venue.webp", 
      size: "md:col-span-1 md:row-span-3" 
    },
    { 
      title: "Websites", 
      desc: "Seemless intergration with TOGO, feature rich and pixel perfect on all devices.", 
      img: "/website.webp", 
      size: "md:col-span-1 md:row-span-1" 
    },
    { 
      title: "Stunny Photography", 
      desc: "Drive online bookings with mouth watering photography for your business.", 
      img: "/stun.webp", 
      size: "md:col-span-1 md:row-span-2" 
    },
    { 
      title: "", 
      desc: "", 
      img: "/extra1.webp",
      size: "" 
    },
    { 
      title: "", 
      desc: "", 
      img: "/extra2.webp", 
      size: "" 
    },

  ];

  return (
    <section className="bg-brand-gold py-16 md:py-24 px-4 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-white text-5xl md:text-7xl font-bold italic mb-12"
        >
          What We <span className="text-brand-dark underline decoration-brand-dark underline-offset-8">Do</span>
        </motion.h2>

        {/* MOBILE: Standard stack (1 col)
           DESKTOP: 3 columns with fixed row height to prevent squishing
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[220px]">
          {services.map((service, idx) => (
            <ServiceCard 
              key={idx}
              index={idx}
              title={service.title}
              description={service.desc}
              imageSrc={service.img}
              className={service.size}
            />
          ))}
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-brand-dark rounded-3xl p-8 md:p-12 flex flex-col justify-center items-center  text-center border-2 border-white/10 group min-h-[300px] "
          >
            <h3 className="text-white text-3xl md:text-5xl font-bold italic mb-4">Need Something Bespoke?</h3>
            <p className="text-brand-gold text-lg md:text-xl max-w-lg mb-8">Get in touch with our friendly team to talk through your needs.</p>
            <a href="/contact"><button className="bg-white text-brand-dark px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-white transition-all shadow-lg active:scale-95">
              Get In Touch
            </button></a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;