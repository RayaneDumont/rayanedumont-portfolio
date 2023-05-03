import './styles.scss'

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
              <button className="nav-link active" aria-current="page" href="#">Home</button>
              <button className="nav-link" href="#">Projects</button>
              <button className="nav-link" href="#">Music</button>
              <button className="nav-link disabled">Contact</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;