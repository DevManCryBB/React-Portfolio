import './App.css';
import About from './components/pages/about'
import Contact from './components/pages/contact'
import Portfolio from './components/pages/portfolio'
import Resume from './components/pages/resume'
import Nav from './components/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
