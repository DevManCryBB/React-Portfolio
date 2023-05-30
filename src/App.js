import './App.css';
import About from './components/pages/about'
import Contact from './components/pages/contact'
import Portfolio from './components/pages/portfolio'
import Resume from './components/pages/resume'
import Nav from './components/Nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      
      <header className='navbar'>
      <Nav>

      </Nav>
      <Router>
        <Routes>
          <Route
            path='/About'
            element={<About/>}
          >

          </Route>
        </Routes>
      </Router>
      </header>
  
    </div>
  );
}

export default App;
