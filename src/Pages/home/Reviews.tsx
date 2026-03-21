import { motion } from "framer-motion";
import { Quote } from "lucide-react";

type Review = {
  text: string;
  author: string;
  location: string;
};

const reviews: Review[] = [
  {
    text: "We saw a 35% increase in online bookings within the first month.",
    author: "James Miller",
    location: "The Grill House",
  },
  {
    text: "Customers book in seconds, no more missed reservations.",
    author: "Sarah Chen",
    location: "Artisan Cafe",
  },
  {
    text: "It made our business feel premium and professional overnight.",
    author: "Mark Thompson",
    location: "Blue Bar",
  },
  {
    text: "The best ROI we've seen on any hospitality software.",
    author: "Elena Rodriguez",
    location: "Vino & Tapas",
  },
];

export default function ReviewMarquee() {
  // We double the array to create the seamless loop effect
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="py-20 bg-white overflow-hidden border-y border-gray-100">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-brand-dark text-3xl md:text-5xl font-bold italic">
          Trusted by <span className="text-brand-gold">Industry Leaders</span>
        </h2>
      </div>

      <div className="relative flex">
        {/* Infinite Scroller Container */}
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"], // Moves halfway (through the first set of reviews)
          }}
          transition={{
            duration: 30, // Adjust speed here (higher = slower)
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedReviews.map((review, idx) => (
            <div
              key={idx}
              className="w-[350px] md:w-[450px] bg-brand-gold/5 p-8 rounded-3xl border border-brand-gold/10 flex flex-col justify-between shrink-0"
            >
              <div className="mb-6 text-brand-gold">
                <Quote size={32} fill="currentColor" className="opacity-20" />
              </div>

              <p className="text-gray-800 text-lg md:text-xl font-medium leading-relaxed italic whitespace-normal mb-8">
                “{review.text}”
              </p>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-xs">
                  {review.author}
                </div>
                <div>
                  <p className="text-brand-dark font-bold text-sm">
                    {review.author}
                  </p>
                  <p className="text-brand-gold text-[10px] uppercase font-black tracking-widest">
                    {review.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Gradient Fades for a "Classic" look */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </section>
  );
}
