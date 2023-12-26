// React //
import { useState } from "react";

// Custom //
import Navbar from "./components/shared/Navbar/Navbar";
import Sidebar from "./components/shared/Sidebar/Sidebar";
import Home from "./Pages/Home";

function App() {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  // Handles opening and closing of sidebar //
  function toggleDrawer() {
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
