import React from "react";
import iconSun from "../assets/sun.svg";
import iconMoon from "../assets/moon.svg";
import "./ThemeSelector.scss";
import { useTheme } from "../hooks/useTheme";

export const ThemeSelector = () => {
  const { mode, changeMode, changeColor } = useTheme();
  const modeToggler = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };
  const colors = ["#ffac9a", "#9affff", "#ff65ce"];
  return (
    <div className="themeContainer">
      <div className="colorContainer">
        {colors.map((color) => (
          <div
            onClick={() => changeColor(color)}
            style={{ background: color }}
            key={color}
            className="col"
          ></div>
        ))}
      </div>
      <div className="theme-selector" onClick={modeToggler}>
        <img
          src={mode === "dark" ? iconSun : iconMoon}
          alt="light/dark mode toggler"
        />
      </div>
    </div>
  );
};
