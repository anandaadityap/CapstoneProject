import React from "react";
import "../Navbar/Index.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#003060" }}
      >
        <div className="container">
        <Link className="navbar-brand fw-bold" href="#">
                Directed.
               </Link>
          {/* <div class="row"> */}
          <div class="col-md-8 m-2">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link exact to="/" className="nav-link active" aria-current="page" >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link exact to="/Pelatihan" className="nav-link" >
                    Pelatihan
                  </Link>
                </li>
                <li className="nav-item">
                  <Link exact to="/" className="nav-link" >
                    Search Job
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" >
                    Tentang
                  </a>
                </li>
              </ul>
              <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <button type="button" class="btn btn-outline-primary"><Link exact to={'/Login'}>SignIn</Link></button>
            <button type="button" class="btn btn-outline-warning"><Link exact to="/SignUp">SignUp</Link></button>
          </div>
        </div>

        {/* </div> */}
      </nav>
    </div>
  );
};

export default Navbar;
