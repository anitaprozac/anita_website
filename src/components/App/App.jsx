import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import About from "../../pages/About/About";
import Booking from "../../pages/Booking/Booking";
import Timeline from "../../pages/Timeline/Timeline";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
