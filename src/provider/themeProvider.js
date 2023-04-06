import { createContext } from "react";
import { useMode } from "../hooks/theme";
import color from "../color";

let initialTheme = {
  mode: {},
  handleMode: () => {},
};

export const ThemeContext = createContext(initialTheme);

export const ThemeProvider = ({ children }) => {
  const data = useMode();
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};
