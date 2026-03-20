
import { motion } from "framer-motion";

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  className?: string;
  index: number;
}

const ServiceCard = ({ title, description, imageSrc, className, index }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      // min-h is essential for mobile to look elegant
      className={`group relative overflow-hidden bg-brand-dark rounded-3xl shadow-xl cursor-pointer min-h-[350px] md:min-h-full ${className}`}
    >
      <div className="absolute inset-0 z-0">
        <img
          src={imageSrc}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105  group-hover:opacity-30"
        />
        {/* Stronger gradient for mobile text clarity */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      <div className="relative z-10 h-full p-8 flex flex-col justify-end">
        <h3 className="text-white text-2xl md:text-3xl font-bold italic mb-2 transition-colors group-hover:text-brand-gold">
          {title}
        </h3>
        
        {/* MOBILE: Always visible (max-h-40)
           DESKTOP: Reveal on hover (group-hover:max-h-40)
        */}
        <div className="overflow-hidden transition-all duration-500 max-h-40 md:max-h-0 md:group-hover:max-h-40 opacity-100 md:opacity-0 md:group-hover:opacity-100">
          <p className="text-gray-200 text-sm md:text-base leading-relaxed border-t border-white/20 pt-3 mt-1">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;