import { useState, useContext } from "react";
import color from "../color";
import { ThemeContext } from "../provider/themeProvider";

export function useMode() {
  let [mode, setmode] = useState(color.darkTheme);
  const handleMode = (e) => {
    e.preventDefault();
    if (mode === color.darkTheme) {
      setmode(color.lightTheme);
    } else {
      setmode(color.darkTheme);
    }
  };
  return {
    mode,
    handleMode,
  };
}

export function useTheme() {
  //   console.log("context:", useContext(ThemeProvider));
  return useContext(ThemeContext);
}
