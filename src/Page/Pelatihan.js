import React from "react";
import "../Page/Pelatihan.css";
import CardHome from "../Components/Card/CardHome";
import CardFront from "../Components/Card/CardFront";
import CardLatest from "../Components/Card/CardLatest";
import Html from '../assets/home_kit/Html.png';
import Css from '../assets/home_kit/Css.png';
import Js from '../assets/home_kit/Js.png';
import Rea from '../assets/home_kit/Rea.png';
import Java from '../assets/home_kit/Java.png';
import Php from '../assets/home_kit/Php.png';
import Word from '../assets/home_kit/Word.png';
import Excel from '../assets/home_kit/Excel.png';
import Point from '../assets/home_kit/Point.png';

import design from '../assets/pelatihan_kit/design.png';
import aps from '../assets/pelatihan_kit/aps.png';
import web from '../assets/pelatihan_kit/web.png';
import office from '../assets/pelatihan_kit/office.png';

const Pelatihan = () => {
  return (
    <div>
      {/* bagian 1 */}
      <div className="pelatihan-container">
          <div className="h1 card-title fw-bold">Kembangkan keterampilan Anda dengan kursus online bersama directed.</div>
          <p className="card-text "> <span style={{ color: "yellow" }}>
            Pelatihan terjangkau, mulai dari Rp 0
            </span>
          </p>
          <div className="home mt-5">
            <button type="button" className="btn btn-outline-primary">SignIn</button>
            <button type="button" className="btn btn-outline-warning">SignUp</button>
          </div>
    </div>
      {/* penutup bagian 1 */}

      {/* bagian 2 */}
      <div className="container">
        <div className="mx-auto" style={{ width: "50%", margin: "50px" }}>
          <h1>
            Kategori <span style={{ color: "yellow" }}>Pelatihan</span>
          </h1>
          <p>
            di DIRECTED terdapat kategori pelatihan yang bisa kamu pilih sesuai bakat yang kamu sukai.
          </p>
        </div>

        <div className="container d-flex">
          <CardHome
            img={design}
            tittle="Design"
            desc="Rencana atau spesifikasi untuk membuat sebuah produk berupa website maupun aplikasi dalam bentuk prototipe."
          />
          <CardHome
            img={aps}
            tittle="Aplikasi"
            desc="Mengimplementasikan bahasa pemrograman yang sesuai sehingga menjadi aplikasi menarik."
          />
          <CardHome
            img={web}
            tittle="Website"
            desc="Membuat halaman web dengan yang berisi informasi yang disediakan secara perorangan, kelompok, atau organisasi."
          />
          <CardHome
            img={office}
            tittle="Perkantoran"
            desc="Fokus pelatihan ini diutamakan kepada orang yang ingin belajar administrasi perkantoran."
          />
        </div>
      </div>
      {/* penutup bagian 2 */}

      {/* bagian 3 */}
      <div className="container my-5">
        <div className="text-center my-5">
          <h1>
              Pelatihan Front End Developer
          </h1>
          <p> 
            Kuasai Pelatihan Front End Developer untuk masa depan yang lebih baik.
          </p>
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
      <div className="container mb-5">
        <div className="d-flex mt-5">
          <div className="h1 text-start m-auto">
            Pelatihan Popular
          </div>
          <div className="h1 text-end m-auto">
            Pelatihan Terbaru
          </div>
          </div>
          <div className="d-flex mb-5">
          <p className="text-start m-auto">berikut ini adalah pelatihan populer yang ada di directed</p>
          <p className="text-start m-auto">berikut ini adalah pelatihan terbaru yang ada di directed</p>
        </div>

        <div className="text-start">
          <CardLatest
            img={Rea}
            title="React"
            desc="React adalah sebuah library JavaScript yang sering digunakan untuk membangun user interface yang interaktif."
            star="4.9"
            price="90.0000"
            imgl={Word}
            titlel="Word"
            descl="Microsoft Word dapat menunjang kebutuhan pengguna untuk melengkapi berbagai dokumen seperti surat menyurat, dll."
            starl="4.7"
            pricel="FREE"
          />
          <CardLatest
            img={Java}
            title="Java"
            desc="Java mampu dijalankan di berbagai platform tanpa perlu disusun ulang menyesuaikan platformnya."
            star="4.5"
            price="FREE"
            imgl={Excel}
            titlel="Microsoft Excel"
            descl="Excel digunakan untuk mengelola data sederhana hingga rumit, membuat diagram maupun grafik."
            starl="4.5"
            pricel="60.000"
          />
          <CardLatest
            img={Php}
            title="PHP"
            desc="PHP digunakan untuk mengakses layanan Web dan mengubah halaman HTML statis menjadi halaman dinamis."
            star="4.5"
            price="90.0000"
            imgl={Point}
            titlel="Microsoft Power Point"
            descl="Microsoft Power Point dipakai untuk membuat file presentasi dalam bentuk slide."
            starl="4.9"
            pricel="49.000"
          />
          </div>
        </div>
      {/* penutup bagian 4 */}
    </div>
  );
};

export default Pelatihan;
