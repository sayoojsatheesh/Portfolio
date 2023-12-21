// React //
import { useState } from "react";

// Custom //
import Navbar from "./components/shared/Navbar/Navbar";
import Sidebar from "./components/shared/Sidebar/Sidebar";
import Home from "./Pages/Home";

// CSS //
import "./App.css";

function App() {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  // Handles opening and closing of sidebar //
  function toggleDrawer() {
    console.log("hello");
    setSideBarOpen((prevValue) => {
      return !prevValue;
    });
  }
  return (
    <div>
      <Navbar toggleDrawer={toggleDrawer} />
      <Sidebar sideBarOpen={sideBarOpen} toggleDrawer={toggleDrawer} />
      <Home />
    </div>
  );
}

export default App;
