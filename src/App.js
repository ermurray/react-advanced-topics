import { useState } from 'react';
import { ThemeContextProvider } from './context/themeContext';
import Layout from './components/Layout';
import Main from './components/Main';
import './App.css';
import HeaderState from './components/HeaderState';

// const defaultTheme = {
//   theme: 'light',
//   somethingElse: [],
// }

function App() {
  const [state, setState] = useState('this is some state');

  return (
    <div className="App">
      <ThemeContextProvider>
        <Layout
          headerComponent={<HeaderState headerText={state} />}
        >
          <Main
          // changeTheme={changeThemeHandler}
          // theme={theme}
          />
        </Layout>  
      </ThemeContextProvider>
  </div>
  );
}

export default App;


