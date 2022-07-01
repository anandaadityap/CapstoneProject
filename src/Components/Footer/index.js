import React from 'react';
import "../Footer/index.css"

const Footer = () => {
    return(
    <div class="footer-container">
      <div class="row m-4">
        <div class="col-md-3">
          <h1>Directed.</h1>
          <p>Directed adalah sebuah platform meningkatkan skill dan membangun karir anda.</p>
        </div>
        <div class="col-md-3">
          <ul><h5>Directed</h5>
            <li><a href="#">Education</a></li>
            <li><a href="#">Career Centers</a></li>
            <li><a href="#">Forums</a></li>
            <li><a href="#">Articles</a></li>
          </ul>
        </div>
        <div class="col-md-3">
          <ul><h5>Bantuan dan Panduan</h5>
            <li><a href="#">Syarat dan Ketentuan</a></li>
            <li><a href="#">Kebijakan Privasi</a></li>
            <li><a href="#">Disclaimer</a></li>
            <li><a href="#">Hubungi Kami</a></li>
          </ul>
        </div>
        <div class="col-md-3">
          <h5>Stay Up To Date With The Latest Courses</h5>
          <input type="email" class="form-control" placeholder="Enter your email address" aria-label="Username" aria-describedby="basic-addon1" />
          <button type="submit" value="Send" class="btn btn-success">Send</button>
        </div>
      </div>
      <div class="footer-bottom mb-2">
        &Copyright @Directed-2022 | All Rights Reserved
      </div>
    </div>
    );
};

export default Footer;