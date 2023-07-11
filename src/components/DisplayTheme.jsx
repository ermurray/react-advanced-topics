import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';
import Counter from './Counter';

export const DisplayTheme = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <h1>I AM THE THEME {theme}</h1>
      <Counter/>
    </div>
  )
}