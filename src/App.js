import Navbar from "./components/Navbar";
import Home from "./page/home/Home";
import "react-router-dom";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from "./page/about/About";
import Contact from "./page/contact/Contact";
import Footer from "./components/Footer";
import Services from "./page/services/Services";
import Workwithus from "./page/workwithus/Workwithus";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/workwithus" element={<Workwithus />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
