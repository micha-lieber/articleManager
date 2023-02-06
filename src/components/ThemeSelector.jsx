import React from "react";
import iconSun from "../assets/sun.svg";
import iconMoon from "../assets/moon.svg";
import "./ThemeSelector.scss";
import { useTheme } from "../hooks/useTheme";

export const ThemeSelector = () => {
  const { mode, changeMode } = useTheme();
  const modeToggler = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };
  return (
    <div className="theme-selector" onClick={modeToggler}>
      <img
        src={mode === "dark" ? iconSun : iconMoon}
        alt="light/dark mode toggler"
      />
    </div>
  );
};

// mode === "dark" ? "../assets/moon.svg" :
