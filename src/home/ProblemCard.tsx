import React from 'react';

interface ProblemCardProps {
  problem: string;
  solution: string;
  imageSrc: string;
}

const ProblemCard = ({ problem, solution, imageSrc }: ProblemCardProps) => {
  return (
    <div className="group relative h-[500px] w-full rounded-3xl overflow-hidden cursor-pointer shadow-lg">
      {/* Background Image */}
      <img
        src={imageSrc}
        alt={problem}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Dark Overlay (Initial State) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-0" />

      {/* Problem Title (Visible at start) */}
      <div className="absolute bottom-10 left-8 right-8 transition-all duration-500 group-hover:translate-y-[-20px] group-hover:opacity-0">
        <h3 className="text-white text-3xl md:text-4xl font-bold italic leading-tight">
          "{problem}"
        </h3>
      </div>

      {/* Solution Reveal (Hover State) */}
      <div className="absolute inset-0 bg-brand-gold p-10 flex flex-col justify-center items-start opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out translate-y-4 group-hover:translate-y-0">
        <span className="text-white/60 uppercase tracking-widest text-sm font-bold mb-4">The Togo Solution</span>
        <p className="text-white text-xl md:text-2xl font-medium leading-relaxed">
          {solution}
        </p>
        <button className="mt-8 border-2 border-white text-white px-6 py-2 rounded-full font-bold hover:bg-white hover:text-brand-gold transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ProblemCard;