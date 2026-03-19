interface ProblemCardProps {
  problem: string;
  solution: string;
  imageSrc: string;
}

const ProblemCard = ({ problem, solution, imageSrc }: ProblemCardProps) => {
  return (
    <div className="group relative h-[500px] w-full rounded-3xl overflow-hidden cursor-pointer shadow-lg">
      {/* 1. Background Image - Always visible now */}
      <img
        src={imageSrc}
        alt={problem}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 md:group-hover:scale-110"
      />
      
      {/* 2. Dynamic Overlay: 
          - Mobile: A dark tint so white text is readable over the photo
          - Desktop: Fades out on hover
      */}
      <div className="absolute inset-0 bg-black/60 md:bg-gradient-to-t md:from-black/90 md:via-black/40 md:to-transparent transition-opacity duration-500 md:group-hover:opacity-0" />

      {/* 3. Problem Title: 
          - Mobile: Shown at the top as a 'header'
          - Desktop: Shown at the bottom (until hover)
      */}
      <div className="absolute top-8 left-8 right-8 md:top-auto md:bottom-10 transition-all duration-500 md:group-hover:translate-y-[-20px] md:group-hover:opacity-0">
        <h3 className="text-white text-2xl md:text-4xl font-bold italic leading-tight">
          "{problem}"
        </h3>
      </div>

      {/* 4. Solution Reveal:
          - Mobile: Transparent background, text sits over the image
          - Desktop: Solid gold background reveal on hover
      */}
      <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-center items-start 
                      transition-all duration-500 ease-in-out
                      /* Mobile: Transparent & Visible | Desktop: Gold & Hidden */
                      bg-transparent md:bg-brand-gold 
                      opacity-100 md:opacity-0 md:group-hover:opacity-100 
                      translate-y-4 md:translate-y-8 md:group-hover:translate-y-0">
        
        <span className="text-brand-gold md:text-white/70 uppercase tracking-widest text-sm font-bold mb-4 border-b border-brand-gold md:border-white/20 pb-1">
          The Togo Solution
        </span>

        <p className="text-white text-lg md:text-2xl font-medium leading-relaxed">
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