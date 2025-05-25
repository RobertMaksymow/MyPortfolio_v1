import {} from "react";
import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
// import Navbar from "./components/Navbar";

function App() {
  // const [sidebarVisibleLeft, setSidebarVisibleLeft] = useState(true);
  // const [sidebarVisibleRight, setSidebarVisibleRight] = useState(true);

  // const toggleSidebarLeft = () => setSidebarVisibleLeft((prev) => !prev);
  // const toggleSidebarRight = () => setSidebarVisibleRight((prev) => !prev);

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
