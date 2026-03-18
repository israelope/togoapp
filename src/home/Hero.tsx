import FadeIn from "./FadeIn";
import logo from "/logo.png";

const App = () => {
  return (
    <main className=" relative h-fit w-screen bg-white brightness-100 ">
      <video
        autoPlay
        muted
        loop
        className="absolute h-full w-full -z-1 top-0 left-0 object-cover opacity-40"
        src="/bgvid.mp4"
      />
<FadeIn>
      <div className=" p-5 py-25  sm:text-center sm:p-20">
        <h1 className="text-black text-5xl font-bold ">
          <span className="text-brand-gold">Supercharge</span> your bookings
          with our AI powered system.
        </h1>
        <p className="text-black text-2xl pt-5">
          Experience seamless booking and maximise your venue’s potential with
          Togo’s dynamic, commission-free reservation system.
        </p>
        <button className="mt-6 bg-white border-2 text-2xl rounded-4xl text-brand-dark px-10 py-2 font-semibold hover:bg-brand-gold ">
          Book a Demo
        </button>
      </div>
      </FadeIn>
      <div className="bg-brand-gold h-fit w-screen text-center py-5">
        <p className="text-4xl">Our Customers</p>
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] group">
          <ul className="flex items-center justify-center animate-[infinite-scroll_35s_linear_infinite] group-hover:[animation-play-state:paused]">
            <li className="mx-4 lg:mx-8">
              <img
                src={logo}
                className="max-w-none h-12 lg:h-16 object-contain"
              />
            </li>
            <li aria-hidden="true" className="mx-4 lg:mx-8">
              <img
                src={logo}
                className="max-w-none h-12 lg:h-16 object-contain"
              />
            </li>
            <li aria-hidden="true" className="mx-4 lg:mx-8">
              <img
                src={logo}
                className="max-w-none h-12 lg:h-16 object-contain"
              />
            </li>
            <li aria-hidden="true" className="mx-4 lg:mx-8">
              <img
                src={logo}
                className="max-w-none h-12 lg:h-16 object-contain"
              />
            </li>
            <li aria-hidden="true" className="mx-4 lg:mx-8">
              <img
                src={logo}
                className="max-w-none h-12 lg:h-16 object-contain"
              />
            </li>
            <li aria-hidden="true" className="mx-4 lg:mx-8">
              <img
                src={logo}
                className="max-w-none h-12 lg:h-16 object-contain"
              />
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default App;
