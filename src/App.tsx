import { BrowserRouter, Routes, Route } from 'react-router';
import { ThemeContext } from './context/ThemeContext';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { useContext } from 'react';
import { ThemeProvider } from './context/ThemeProvider';
import './styles/ThemeStyles.css';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider>
      <div className={`theme-transition ${theme.background} ${theme.text} ${theme.fontFamily} ${theme.spacing} ${theme.layout}`}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;