interface ProblemCardProps {
  problem: string;
  solution: string;
  imageSrc: string;
}

const ProblemCard = ({ problem, solution, imageSrc }: ProblemCardProps) => {
  return (
    <div className="group relative h-[500px] w-full rounded-3xl overflow-hidden cursor-pointer shadow-lg">
      {/* Background Image - Scale only on desktop hover */}
      <img
        src={imageSrc}
        alt={problem}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 md:group-hover:scale-110"
      />
      
      {/* 1. Dark Overlay: Always on for mobile, fades on desktop hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 md:group-hover:opacity-0" />

      {/* 2. Problem Title: Visible ONLY on desktop (hidden on mobile) */}
      <div className="hidden md:block absolute bottom-10 left-8 right-8 transition-all duration-500 group-hover:translate-y-[-20px] group-hover:opacity-0">
        <h3 className="text-white text-3xl md:text-4xl font-bold italic leading-tight">
          "{problem}"
        </h3>
      </div>

      {/* 3. Solution Reveal Logic:
          - Mobile: Always visible (opacity-100)
          - Desktop: Only on hover (md:opacity-0 md:group-hover:opacity-100)
      */}
      <div className="absolute inset-0 bg-brand-gold p-8 md:p-10 flex flex-col justify-center items-start 
                      transition-all duration-500 ease-in-out
                      opacity-100 md:opacity-0 md:group-hover:opacity-100 
                      translate-y-0 md:translate-y-4 md:group-hover:translate-y-0">
        
        {/* Mobile Header: Reminds them what the problem was since the title is gone */}
        <span className="text-white/50 uppercase tracking-widest text-xs font-bold mb-1 md:hidden">
          The Problem: "{problem}"
        </span>
        
        <span className="text-white/70 uppercase tracking-widest text-sm font-bold mb-4 border-b border-white/20 pb-1">
          The Togo Solution
        </span>

        <p className="text-white text-xl md:text-2xl font-medium leading-relaxed">
          {solution}
        </p>

        <button className="mt-8 border-2 border-white text-white px-8 py-2.5 rounded-full font-bold hover:bg-white hover:text-brand-gold transition-all active:scale-95">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ProblemCard;