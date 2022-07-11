import React from 'react';
import '../Footer/index.css';

export default function Navbar() {
  return (
    <div className="footer-container">
      <div className="row row-cols-2 row-cols-md-4 m-4">
        <div className="col-md-3 text-start">
          <h1>Directed.</h1>
          <p>
            Directed adalah sebuah platform meningkatkan skill dan membangun
            karir anda.
          </p>
        </div>
        <div className="col-md-3 text-start">
          <ul>
            <h5>Directed</h5>
            <li>
              <a href="/#">Education</a>
            </li>
            <li>
              <a href="/#">Career Centers</a>
            </li>
            <li>
              <a href="/#">Forums</a>
            </li>
            <li>
              <a href="/#">Articles</a>
            </li>
          </ul>
        </div>
        <div className="col-md-3 text-start">
          <ul>
            <h5>Bantuan dan Panduan</h5>
            <li>
              <a href="/#">Syarat dan Ketentuan</a>
            </li>
            <li>
              <a href="/#">Kebijakan Privasi</a>
            </li>
            <li>
              <a href="/#">Disclaimer</a>
            </li>
            <li>
              <a href="/#">Hubungi Kami</a>
            </li>
          </ul>
        </div>
        <div className="col-md-3 text-start">
          <h5>Stay Up To Date With The Latest Courses</h5>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email address"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <button type="submit" value="Send" className="btn btn-success m-2">
            Send
          </button>
        </div>
      </div>
      <div className="footer-bottom text-center mb-2">
        Copyright @Directed-2022 | All Rights Reserved
      </div>
    </div>
  );
}
