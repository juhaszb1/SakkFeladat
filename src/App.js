import './App.css';
import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import SakkListPage from './SakkListPage.js';
import SakkSinglePage from './SakkSinglePage.js';
import SakkNewPage from './SakkNewPage.js';
import SakkUpdatePage from './SakkUpdatePage.js';
import SakkDeletePage from './SakkDeletePage.js';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to={`/`} className="nav-link">
              <span className="nav-link">Sakk</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={`/uj-sakk`} className="nav-link">
              <span className="nav-link">Új sakk</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
      <Routes>
        <Route path='/' element={ <SakkListPage/> }/>
        <Route path='/sakk/:id' element={ <SakkSinglePage/> }/>
        <Route path='/uj-sakk' element={ <SakkNewPage/> }/>
        <Route path='/update-sakk/:id' element={ <SakkUpdatePage/> }/>
        <Route path='/delete-sakk/:id' element={ <SakkDeletePage/> }/>
      </Routes>
    </Router>
  );
}

export default App;
