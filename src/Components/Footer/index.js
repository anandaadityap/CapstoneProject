import React from 'react';
import "../Footer/index.css"

const Footer = () => {
    return(
      <div class="footer-container">
      <div class="footer">
        <div class="footer-heading footer-1">
          <h2>Directed.</h2>
          <p>Directed adalah sebuah platform meningkatkan skill dan membangun karir anda.</p>
        </div>
        <div class="footer-heading footer-2">
          <h2>Directed</h2>
          <a href="#">Education</a>
          <a href="#">Career Centers</a>
          <a href="#">Forums</a>
          <a href="#">Articles</a>
        </div>
        <div class="footer-heading footer-3">
          <h2>Directed</h2>
          <a href="#">Syarat dan Ketentuan</a>
          <a href="#">Kebijakan Privasi</a>
          <a href="#">Disclaimer</a>
          <a href="#">Hubungi Kami</a>
        </div>
        <div class="footer-email-form">
          <h2>Stay Up To Date With The Latest Courses</h2>
          <input type="email" placeholder="Enter your email address" id="footer-email" />
          <input type="submit" value="Send" id="footer-email-btn" />
        </div>
      </div>
      <div class="footer-bottom">
        &Copyright @Directed-2022 | All Rights Reserved
      </div>
    </div>
    );
};

export default Footer;