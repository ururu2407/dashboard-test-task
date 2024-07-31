import React, { useState, useEffect } from "react";
import { SideMenu } from "./components/SideMenu";
import { Product } from "./components/Product";
import "./scss/App.scss";

function App() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  useEffect(() => {
    if (isSideMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isSideMenuOpen]);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  const closeSideMenu = () => {
    setIsSideMenuOpen(false);
  };

  return (
    <div className="App">
      <SideMenu isOpen={isSideMenuOpen} />
      {isSideMenuOpen && (
        <div className="overlay" onClick={closeSideMenu}></div>
      )}
      <Product toggleSideMenu={toggleSideMenu} />
    </div>
  );
}

export default App;
