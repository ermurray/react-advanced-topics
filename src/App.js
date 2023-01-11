import { useState } from 'react';
import Layout from './components/Layout';
import Main from './components/Main';
import './App.css';

const defaultTheme = {
  theme: 'light',
  somethingElse: [],
}

function App() {
  const [theme, setTheme] = useState(defaultTheme.theme);
  const changeThemeHandler = theme => setTheme(theme);  

  return (
    <div className="App">
      <Layout>
        <Main
        changeTheme={changeThemeHandler}
        theme={theme}
        />
      </Layout>
  </div>
  );
}

export default App;


