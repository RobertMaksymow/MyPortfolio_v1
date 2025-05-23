import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
// import About from "../pages/About";
import Contact from "../pages/Contact";

import Learning from "../pages/Learning";
import Blog from "../pages/Blog";

const Main = () => {
  return (
    <main className="main-container">
      Main space
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/blog" element={<Blog />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
};

export default Main;
