import FadeIn from "./FadeIn";
import ProblemCard from "./ProblemCard";

const Problems = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20 ">
      <div className="max-w-7xl mx-auto ">
        <div className="text-black text-5xl md:text-6xl font-bold leading-tight italic text-center mb-20">
          Your Problems: <span className="text-brand-gold">Solved</span>
        </div>
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProblemCard
              problem="I'm sick of commissions!"
              solution="Stop lining someone else's pockets. With Togo, every penny stays with you. Commission-free bookings mean your cash goes straight to your business."
              imageSrc="/commission.png"
            />
            <ProblemCard
              problem="I need a time saver!"
              solution="Manage bookings, events, complex table plays and promotions with a click. It’s like having a PA, but one that doesn’t call in sick."
              imageSrc="/time.png"
            />
            <ProblemCard
              problem="I need more repeat customers."
              solution="Turn one-time diners into loyal fans. Togo gathers customer data, making it easy for you to send targeted offers, promote events, and keep your business booming."
              imageSrc="/save.png"
            />
            <ProblemCard
              problem="How can I make more money?"
              solution="Togo turns your venue into a money-making machine. Sell gift vouchers and event tickets effortlessly, giving customers more reasons to spend money with you. Who wouldn’t want that?"
              imageSrc="/make.png"
            />
            <ProblemCard
              problem="Will my customers like it?"
              solution="Make their lives easier (and yours too). Togo lets your guests book online in seconds, hassle-free. Happy customers = repeat customers."
              imageSrc="/happy.png"
            />
            <ProblemCard
              problem="Events are hard work."
              solution="Togo’s pre-order system keeps chaos at bay, allowing you to do big nights with ease; manage pre-payment, allergens, menu choices are more."
              imageSrc="/event2.png"
            />
          </div>
        </FadeIn>
      </div>
      <FadeIn>
        <div className="mx-auto text-center p-8 border-2 border-black w-full sm:w-fit mt-15 rounded-2xl shadow-sm bg-white/50 backdrop-blur-sm">
          <h1 className="text-black text-3xl md:text-4xl font-bold leading-tight italic text-center pb-5 ">See it to believe it!</h1>
          <button className="bg-brand-gold hover:bg-white text-white px-10 py-3 rounded-full hover:text-white font-semibold border-black border-2">
            Schedule A Demo
          </button>
        </div>
        </FadeIn>
    </section>
  );
};

export default Problems;
