import { createContext, useState } from "react";

const defaultTheme = {
  theme: 'light',
  changeTheme: () => {},
}

export const ThemeContext = createContext(defaultTheme);

export const ThemeContextProvider = ({ children }) => {

  const [theme, setTheme] = useState(defaultTheme.theme);
  
  const changeThemeHandler = theme => setTheme(theme);  

  return(
    <ThemeContext.Provider value={{ theme, changeThemeHandler}}>
      { children }
    </ThemeContext.Provider>
  )
}