import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

export const Navbar = () => {
  const { mode, color } = useTheme();
  return (
    <nav className={`${mode}`} style={{ background: color }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/newpost">New Post</NavLink>
    </nav>
  );
};
