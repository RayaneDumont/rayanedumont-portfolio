import { NavLink } from 'react-router-dom';
import './styles.scss'
import "/node_modules/flag-icons/css/flag-icons.min.css";

function Header() {
  return  (
    <div className="header">
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark">
        <div className="container-fluid d-flex justify-content-between">
          <button data-text="Awesome" className="button-logo">
            <span className="actual-text">&nbsp;Rayane.d&nbsp;</span>
            <span className="hover-text" aria-hidden="true">&nbsp;Rayane.d&nbsp;</span>
          </button>
            <label className="navbar-toggler switch" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <input type="checkbox" className="chk" />
              <span className="slider"></span>
            </label>
          <div className="collapse navbar-collapse" id="navbarToggleExternalContent">
            <div className="navbar-nav">
              <NavLink to='/' className="custom-link">
                <button className="nav-link" aria-current="page" href="#">Home</button>
              </NavLink>
              <NavLink to='/projects' className='custom-link'>
                <button className="nav-link" href="#">Projects</button>
              </NavLink>
              <NavLink to='/music' className='custom-link'>
                <button className="nav-link" href="#">Music</button>
              </NavLink>
              <NavLink to='/about-me' className='custom-link'>
                <button className="nav-link" href="#">About me / Contacts</button>
              </NavLink>
              <li className="dropdown">
                <button className="nav-link" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Language
                </button>
                <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                  <li><button className="dropdown-item nav-link bg-dark" href="#">French <span className="fi fi-fr"></span></button></li>
                  <li><button className="dropdown-item nav-link bg-dark" href="#">English <span className="fi fi-gb"></span></button></li>
                </ul>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;