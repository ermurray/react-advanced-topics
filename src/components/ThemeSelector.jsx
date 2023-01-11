

const ThemeSelector =  ({changeTheme}) => {

  return (
    <div>
      <button
        className="lightButton"
        onClick={() => changeTheme('light')}
      > Make It Light </button>
      <button
        className="darkButton"
        onClick={() => changeTheme('dark')}
      > Make It Dark </button>
      <button
        className= "rainbowButton"
        onClick={() => changeTheme('rainbow')}
      >I Like Rainbows</button>
    </div>
  )
}

export default ThemeSelector;
