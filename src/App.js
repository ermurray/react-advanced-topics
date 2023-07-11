import Layout from './components/Layout';
import Main from './components/Main';
import './App.css';
import { ThemeContextProvider } from './context/themeContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Counter from './components/Counter';



function App() {
 

  return (
    <div className="App">
      <ThemeContextProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path='about' element={<About/>}/>
              <Route path='/' element={<Main />} />
              <Route path='counter' element={<Counter />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeContextProvider>
  </div>
  );
}

export default App;


