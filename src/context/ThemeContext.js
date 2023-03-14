import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

export const ACTIONS = {
  changeMode: "CHANGE_MODE",
  changeColor: "CHANGE_COLOR",
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.changeMode:
      return { ...state, mode: action.payload };
    case ACTIONS.changeColor:
      return { ...state, color: action.payload };
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, { mode: "dark" });

  const changeMode = (mode) => {
    dispatch({ type: ACTIONS.changeMode, payload: mode });
  };

  const changeColor = (color) => {
    dispatch({ type: ACTIONS.changeColor, payload: color });
  };

  return (
    <ThemeContext.Provider value={{ ...state, changeMode, changeColor }}>
      {children}
    </ThemeContext.Provider>
  );
};
