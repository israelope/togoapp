// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"; // Import it here
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/home/Home";
import Contact from "./Pages/contact/Contact";
import Booking from "./Pages/booking/Booking";

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Place it right here */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-a-demo" element={<Booking />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
