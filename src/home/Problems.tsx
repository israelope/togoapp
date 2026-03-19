import ProblemCard from "./ProblemCard";

const Problems = () => {
  return (
    <main className="w-screen h-screen p-20 bg-white">
      <div className="text-black text-3xl md:text-6xl font-bold leading-tight italic text-center">
        Your Problems: <span className="text-brand-gold">Solved</span>
      </div>
      <section className="bg-white py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl font-bold text-brand-dark italic">
              Your problems: <span className="text-brand-gold">Solved.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProblemCard
              problem="I'm sick of commissions!"
              solution="Stop lining someone else's pockets. With Togo, every penny stays with you. Commission-free bookings mean your cash goes straight to your business."
              imageSrc="/images/restaurant-payment.jpg"
            />
            <ProblemCard
              problem="I need a time saver!"
              solution="Manage bookings, events, and promotions with a click. It's like having a PA that never calls in sick."
              imageSrc="/images/manager-tablet.jpg"
            />
            <ProblemCard
              problem="Events are hard work."
              solution="Keep chaos at bay with our pre-order system. Manage pre-payments, allergens, and menu choices with ease."
              imageSrc="/images/party-event.jpg"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Problems;
