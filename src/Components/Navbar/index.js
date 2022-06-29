import React from 'react'
// import "./style.css"


const Navbar = () => {
  return (
    <div>

      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#003060" }}
      >
        <div className="container">

          {/* <div class="row"> */}

            <div class="col-md-8">



              <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <a className="navbar-brand fw-bold" href="#">Directed.</a>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Home</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">Pelatihan</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">Search Job</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">Tentang</a></li>
                </ul>

              </div>

            </div>

            <div class="col-6 col-md-4">.col-6 .col-md-4</div>

          </div>

        {/* </div> */}

      </nav>

    </div>
  );
};

export default Navbar;
