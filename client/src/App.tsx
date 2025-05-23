import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Sidebar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
