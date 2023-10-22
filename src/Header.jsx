import React, { useContext } from "react";
import "./styles/header.css";
import "./styles/index.css";
import { ThemeContext } from "./Theme";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="header-toggle-buttons">
      <button onClick={() => toggleTheme()}>{theme}</button>
    </div>
  );
};

export default Header;
