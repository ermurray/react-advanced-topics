import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';

const ThemeSelector =  () => {
  const { changeThemeHandler } = useContext(ThemeContext)

  return (
    <div>
      <button
        className="lightButton"
        onClick={() => changeThemeHandler('light')}
      > Make It Light </button>
      <button
        className="darkButton"
        onClick={() => changeThemeHandler('dark')}
      > Make It Dark </button>
      <button
        className= "rainbowButton"
        onClick={() => changeThemeHandler('rainbow')}
      >I Like Rainbows</button>
    </div>
  )
}

export default ThemeSelector;
