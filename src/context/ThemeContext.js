import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

export const ACTIONS = { changeMode: "CHANGE_MODE" };

const themeReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.changeMode:
      return { ...state, mode: action.payload };
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, { mode: "dark" });

  const changeMode = (mode) => {
    dispatch({ type: ACTIONS.changeMode, payload: mode });
  };

  return (
    <ThemeContext.Provider value={{ ...state, changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
