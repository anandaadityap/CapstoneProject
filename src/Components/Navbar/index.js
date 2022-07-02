import React from "react";
import "../Navbar/Index.css";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#003060" }}
      >
        <div className="container">
        <a className="navbar-brand fw-bold" href="#">
                Directed.
              </a>
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
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pelatihan
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Search Job
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
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
            <button type="button" class="btn btn-outline-primary">SignIn</button>
            <button type="button" class="btn btn-outline-warning">SignUp</button>
          </div>
        </div>

        {/* </div> */}
      </nav>
    </div>
  );
};

export default Navbar;
