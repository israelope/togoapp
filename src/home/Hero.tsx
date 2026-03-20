import FadeIn from "../components/FadeIn";

const App = () => {
  return (
    <>
      <main className="relative min-h-screen w-screen bg-white overflow-hidden brightness-100">
        {/* 1. Background Video with Overlay */}
        <div className="absolute inset-0 -z-10">
          <video
            autoPlay
            muted
            loop
            className="h-full w-full object-cover"
            src="/bgvid.mp4"
          />
          {/* This creates that bright, clean look from the image */}
          <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]"></div>
        </div>

        {/* 2. Hero Content Area */}
        <FadeIn>
          <div className="relative pt-40 pb-20 px-6 md:px-20 max-w-4xl">
            <h1 className="text-black text-5xl md:text-7xl font-bold leading-tight italic">
              <span className="text-brand-gold">Supercharge</span> your bookings
              with our AI powered system.
            </h1>
            <p className="text-gray-800 text-xl md:text-2xl mt-6 max-w-xl leading-relaxed">
              Experience seamless booking and maximise your venue’s potential
              with Togo’s dynamic, commission-free reservation system.
            </p>
            <button className="mt-10 border-2 border-black rounded-full px-12 py-3 bg-brand-gold text-lg font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-all">
              Explore
            </button>
          </div>
        </FadeIn>
      </main>

      {/* 3. Infinite Logo Scroll Section */}
      <div className="bg-brand-gold w-full py-4 mt-auto">
        <div className="container mx-auto px-6 mb-4">
          <p className="text-3xl md:text-4xl italic text-white font-medium text-center">
            Our Customers
          </p>
        </div>

        {/* Scroller Container */}
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          {/* List 1 */}
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            <li>
              <img
                src="/cus1.webp"
                className="h-12 opacity-90 brightness-0 invert"
                alt="Customer"
              />
            </li>
            <li>
              <img
                src="/cus2.svg"
                className="h-12 opacity-90 brightness-0 invert"
                alt="Customer"
              />
            </li>
            <li>
              <img
                src="/cus3.webp"
                className="h-12 opacity-90 brightness-0 invert"
                alt="Customer"
              />
            </li>
            <li>
              <img
                src="/cus4.webp"
                className="h-12 opacity-90 brightness-0 invert"
                alt="Customer"
              />
            </li>
            <li>
              <img
                src="/cus5.webp"
                className="h-12 opacity-90 brightness-0 invert"
                alt="Customer"
              />
            </li>
          </ul>
          {/* List 2 (The Duplicate for the Infinite Loop) */}
          <ul
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
            aria-hidden="true"
          >
            <li>
              <img
                src="/cus1.webp"
                className="h-12 opacity-90 brightness-0 invert"
                alt="Customer"
              />
            </li>
            <li>
              <img
                src="/cus2.svg"
                className="h-12 opacity-90 brightness-0 invert"
                alt="Customer"
              />
            </li>
            <li>
              <img
                src="/cus3.webp"
                className="h-12 opacity-90 brightness-0 invert"
                alt="Customer"
              />
            </li>
            <li>
              <img
                src="/cus4.webp"
                className="h-12 opacity-90 brightness-0 invert"
                alt="Customer"
              />
            </li>
            <li>
              <img
                src="/cus5.webp"
                className="h-12 opacity-90 brightness-0 invert"
                alt="Customer"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
