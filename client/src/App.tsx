import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Learning from "./pages/Learning";
import Blog from "./pages/Blog";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
