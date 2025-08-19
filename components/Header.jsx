import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Header() {


  const [isDark,setIsDark]=useContext(ThemeContext);


  const toggleTheme = () => {
    setIsDark(!isDark);
    localStorage.setItem("isDarkMode", !isDark); //store in local Storage
  };

  return (
    <header className={`header-container ${isDark?"dark":''}`}>
      <div className="header-content">
        <h2 className="titile">
          <a href="/">Where in the world?</a>
        </h2>
        <p className="theme-changer" onClick={toggleTheme}>
          <i className={`fa-solid fa-${isDark ? "sun" : "moon"}`} />
          &nbsp;&nbsp; {isDark ? "Light" : "Dark"} Mode
        </p>
      </div>
    </header>
  );
}
