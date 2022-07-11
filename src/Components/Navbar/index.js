import React from 'react';
import '../Navbar/Index.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: '#003060' }}
      >
        <div className="container">
          <Link to="/" className="navbar-brand fw-bold" href="#">
            Directed.
          </Link>
          {/* <div className="row"> */}
          <div className="col-md-8 m-2">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link active" aria-current="page">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Pelatihan" className="nav-link">
                    Pelatihan
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Job" className="nav-link">
                    Pekerjaan
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Kursus" className="nav-link">
                    Kursus
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Tentang" className="nav-link">
                    Tentang
                  </Link>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <button type="button" className="btn btn-outline-primary">
              <Link to="/Login">SignIn</Link>
            </button>
            <button type="button" className="btn btn-outline-warning">
              <Link to="/SignUp">SignUp</Link>
            </button>
          </div>
        </div>

        {/* </div> */}
      </nav>
    </div>
  );
};

export default Navbar;
