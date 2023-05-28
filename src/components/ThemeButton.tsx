import React from "react";
import "./ThemeButton.css";
import { FaSun, FaMoon } from "react-icons/fa";

function ThemeButton() {
  return (
    <div className="theme-button">
      <FaSun />
      <FaMoon />
    </div>
  );
}

export default ThemeButton;
