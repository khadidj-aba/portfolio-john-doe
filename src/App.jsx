import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Mentions from "./pages/Mentions";
import GithubModal from "./components/GithubModal";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Header />

      <button className="btn-modal" onClick={() => setShowModal(true)}>
        Voir mon GitHub
      </button>

      {showModal && <GithubModal onClose={() => setShowModal(false)} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions" element={<Mentions />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
