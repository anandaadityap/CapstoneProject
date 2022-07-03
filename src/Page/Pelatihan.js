import React from "react";

import CardFront from "../Components/Card/CardFront";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import "../Page/Pelatihan.css";

import Html from '../assets/home_kit/Html.png';
import Css from '../assets/home_kit/Css.png';
import Js from '../assets/home_kit/Js.png';
import Rea from '../assets/home_kit/Rea.png';

const Pelatihan = () => {
  return (
    <div>
      <Navbar />
      {/* bagian 1 */}
      <div className="pelatihan-container">
          <h1 className="card-title fw-bold">Kembangkan keterampilan Anda dengan kursus online bersama directed.</h1>
          <p className="card-text "> <span style={{ color: "yellow" }}>
            Pelatihan terjangkau, mulai dari Rp 0
            </span>
          </p>
          <div class="home mt-5">
            <button type="button" class="btn btn-outline-primary">SignIn</button>
            <button type="button" class="btn btn-outline-warning">SignUp</button>
          </div>
    </div>
      {/* penutup bagian 1 */}

      {/* bagian 2 */}
      <div></div>
      {/* penutup bagian 2 */}

      {/* bagian 3 */}
      <div className="container">
        <div className="mx-auto" style={{ width: "50%", margin: "50px" }}>
          <h1>
              Pelatihan Front End Developer
          </h1>
        </div>

        <div className="d-flex">
          <CardFront
            img={Html}
            title="HTML"
            desc="HTML atau HyperText Markup Language adalah markup yang digunakan untuk mendefinisikan struktur halaman web."
            star="4.8"
            price="FREE"
          />
          <CardFront
            img={Css}
            title="CSS"
            desc="Cascading Style Sheet dapat memberikan style pada interface, misal: warna background, mengatur posisi elemen, dll."
            star="4.7"
            price="FREE"
          />
          <CardFront
            img={Js}
            title="Java Script"
            desc="Java Script yaitu bahasa pemrograman yang sering digunakan untuk membuat halaman web yang lebih interaktif."
            star="4.5"
            price="FREE"
          />
          <CardFront
            img={Rea}
            title="React"
            desc="React adalah sebuah library JavaScript yang sering digunakan untuk membangun user interface yang interaktif."
            star="4.9"
            price="RP. 90.0000"
          />
          </div>
        </div>
      {/* penutup bagian 3 */}

      {/* bagian 4 */}
      <div></div>
      {/* penutup bagian 4 */}
      <Footer />
    </div>
  );
};

export default Pelatihan;
