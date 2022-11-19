import Navbar from "./components/Navbar";
import Home from "./page/home/Home";
import "react-router-dom";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from "./page/about/About";
import Contact from "./page/contact/Contact";
import Footer from "./components/Footer";
import Workwithus from "./page/workwithus/Workwithus";
import Jobsuopportservices from "./page/services/Job_support_services";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/jobsupportservices" element={<Jobsuopportservices />} />
          <Route path="/workwithus" element={<Workwithus />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
