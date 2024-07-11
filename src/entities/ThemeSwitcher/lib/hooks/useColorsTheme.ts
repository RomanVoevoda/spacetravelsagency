import { ThemeContext } from "@/shared/lib";
import { useContext } from "react";


export const useColorsTheme = () => {
  const context = useContext(ThemeContext);

  if(!context) {
    throw new Error("useColorsTheme must be used in ThemeContext.Provider");
  }

  return context
}