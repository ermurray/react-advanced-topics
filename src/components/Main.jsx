import { DisplayTheme } from './DisplayTheme';
import logo from '../logo.svg';
import ThemeSelector from './ThemeSelector';

export default function Main() {
  return (

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <DisplayTheme
          />
          <ThemeSelector
          />
        </header> 
  );
}