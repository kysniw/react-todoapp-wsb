import React from "react";
import "./ThemeButton.css";
import { FaSun, FaMoon } from "react-icons/fa";

type Props = {
  isDark: boolean;
  onDarkThemeChange: (isDarkHandled: boolean) => void;
};

function ThemeButton({ isDark, onDarkThemeChange }: Props) {
  const btnLightClass = isDark ? "" : " theme-button__light--active";
  const btnDarkClass = isDark ? " theme-button__dark--active" : "";

  return (
    <div className="theme-button-container">
      <div
        onClick={() => onDarkThemeChange(false)}
        className={"theme-button__light theme-btn" + btnLightClass}
      >
        <FaSun className="icon-sun" />
      </div>
      <div
        onClick={() => onDarkThemeChange(true)}
        className={"theme-button__dark theme-btn" + btnDarkClass}
      >
        <FaMoon className="icon-dark" />
      </div>
    </div>
  );
}

export default ThemeButton;
