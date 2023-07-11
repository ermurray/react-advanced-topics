import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

export const DisplayTheme = () => {

  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <h1>I AM THE THEME {theme}</h1>
    </div>
  )
}