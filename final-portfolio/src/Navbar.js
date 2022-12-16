import './pages/bootstrap.min.css'
import './pages/Home.css'
import { BrowserRouter, Route, Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';

export default function Navbar(props) {
  return (
    <nav>
      <div id="navbar">
        <li className="navbar-item navbar-home">
          <Link className="navbar-item link" to="/">softbear888</Link>
        </li>
        <li className="navbar-item navbar-right">
          <Link className="navbar-item link" to="/about">About</Link>
        </li>
        <Dropdown className="navbar-item navbar-right d-inline-block">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Work &#9662;
          </Dropdown.Toggle>

          <Dropdown.Menu id="dropdown-menu" align="right">
              <Link to="/personas" className="dropdown-item link">Personas & Storyboarding</Link><br/>
              <Link to="/redesign" className="dropdown-item link">Thai Diner Homepage Redesign</Link><br/>
              <Link to="/iterative-design" className="dropdown-item link">Ole Startup Prototype</Link><br/>
              <Link to="/camera-geometry" className="dropdown-item link">Camera Geometry</Link>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  );
}
