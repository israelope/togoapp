import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/home/Home";
import Contact from "./Pages/contact/Contact"; 
import Booking from "./Pages/booking/Booking"; 

const App = () => {
  return (
    <Router>
      {/* Navbar stays here so it shows on EVERY page */}
      <Navbar /> 
      
      <Routes>
        {/* This is the "Main Screen" */}
        <Route path="/" element={<Home />} /> 
        
        {/* These only show when the URL matches /contact or /booking */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-a-demo" element={<Booking />} />
      </Routes>

      {/* Footer stays here so it shows on EVERY page */}
      <Footer />
    </Router>
  );
};

export default App