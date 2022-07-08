import React from "react";
import "../Page/Home.css";

import CardHome from "../Components/Card/CardHome";
import CardPelatihan from "../Components/Card/CardPelatihan";
import startclass from "../assets/home_kit/startclass.png";
import CardPopuler from "../Components/Card/CardPopuler";

import CardStart from "../Components/Card/CardStart";
import startlearning from "../assets/home_kit/startlearning.png";
import jam from "../assets/home_kit/jam.png";
import toga from "../assets/home_kit/toga.png";
import tas from "../assets/home_kit/tas.png";
import webinar from "../assets/home_kit/webinar.png";
import Word from '../assets/home_kit/Word.png';
import Excel from '../assets/home_kit/Excel.png';
import Point from '../assets/home_kit/Point.png';
import Html from '../assets/home_kit/Html.png';
import Css from '../assets/home_kit/Css.png';
import Js from '../assets/home_kit/Js.png';
import Sql from '../assets/home_kit/Sql.png';
import Php from '../assets/home_kit/Php.png';
import Java from '../assets/home_kit/Java.png';



const Home = () => {
  return (
    <div>
     
      {/* bagian 1 */}
      <div>
        <div className="home-container">
          <h1 className="card-title fw-bold">Tingkatkan Karirmu Bersama Kami</h1>
          <p className="card-text "> <span style={{ color: "yellow" }}>
            Directed, membantumu untuk mencari pekerjaan sesuai bakat dan minat yang kamu miliki.
            </span>
          </p>
          <div class="home mt-5">
            <button type="button" class="btn btn-outline-primary">SignIn</button>
            <button type="button" class="btn btn-outline-warning">SignUp</button>
          </div>
        </div>
      </div>

      {/* penutup bagian 1 */}

      {/* bagian 2 */}
      <div className="container">
        <div className="mx-auto" style={{ width: "50%", margin: "50px" }}>
          <h1>
            All-In-One <span style={{ color: "yellow" }}>Can Be Directed.</span>
          </h1>
          <p>
          Directed adalah salah satu perangkat lunak online paling kuat yang menggabungkan pelatihan teknologi yang diperlukan untuk mengasah keterampilan dan mencari pekerjaan.
          </p>
        </div>

        <div className="container d-flex">
          <CardHome
            img={jam}
            tittle="Jadwal Pelatihan"
            desc="Ikuti webinar gratis yang dapat mengembangkan soft skill dan career rediness kamu"
          />
          <CardHome
            img={toga}
            tittle="Peserta"
            desc=">4K Peserta mengikuti pelatihan kami."
          />
          <CardHome
            img={tas}
            tittle="+100 Career Center"
            desc="Lowongan Kerja tersedia sesuai bakat dan minat yang kamu miliki"
          />
          <CardHome
            img={webinar}
            tittle="+60 webinars"
            desc="Ikuti webinar gratis yang dapat mengembangkan soft skill dan career rediness kamu"
          />
        </div>
      </div>
      {/* penutup bagian 3 */}

      {/* bagian 3 */}
      <div className="container">
        <div className="mx-auto" style={{ width: "50%", margin: "50px" }}>
          <h1>
            LET'S GET <span style={{ color: "yellow" }}>STARTED NOW</span>
          </h1>
          <p>
          "Directed" sebuah platform yang memungkinkan orang untuk membuat kelas online dan mencari pekerjaan yang dapat mereka lamar secara online. Dapatkan pekerjaan dan tingkatkan keterampilan dengan kursus yang tersedia di platform ini
          </p>
        </div>
        <div class="row">
          <div class="col">
            <CardStart src={startlearning} />
          </div>
          <div class="col">
            <CardStart src={startclass} />
          </div>
        </div>
      </div>
      {/* penutup bagian 3 */}

      {/* bagian 4 */}
      <div className="container">
        <div className="mx-auto" style={{ width: "50%", margin: "50px" }}>
          <h1>
              Our <span style={{ color: "yellow" }}>Popular Course</span>
          </h1>
          <p>
              yuk simak pelatihan yang banyak di ikuti saat ini
          </p>
        </div>

        <div className="d-flex">
          <CardPelatihan
            img={Word}
            title="Word"
            star="⭐⭐⭐⭐"
            hour="17 jam"
            desc="60 Peserta Telah Mengikuti"
          />
          <CardPelatihan
            img={Excel}
            title="Excel"
            star="⭐⭐⭐"
            hour="10 jam"
            desc="80 Peserta Telah Mengikuti"
          />
          <CardPelatihan
            img={Point}
            title="Power Point"
            star="⭐⭐"
            hour="18 jam"
            desc="90 Peserta Telah Mengikuti"
          />
        </div>

        <div className=" d-flex">
          <CardPelatihan
            img={Html}
            title="HTML"
            star="⭐⭐⭐"
            hour="4 jam"
            desc="90 Peserta Telah Mengikuti"
          />
          <CardPelatihan
            img={Css}
            title="CSS"
            star="⭐⭐⭐⭐"
            hour="9 jam"
            desc="23 Peserta Telah Mengikuti"
          />
          <CardPelatihan
            img={Js}
            title="Java Script"
            star="⭐⭐⭐"
            hour="7 jam"
            desc="80 Peserta Telah Mengikuti"
          />
        </div>

        <div className=" d-flex">
          <CardPelatihan
            img={Sql}
            title="SQL"
            star="⭐⭐⭐⭐"
            hour="7 jam"
            desc="40 Peserta Telah Mengikuti"
          />
          <CardPelatihan
            img={Php}
            title="PHP"
            star="⭐⭐⭐⭐"
            hour="5 jam"
            desc="30 Peserta Telah Mengikuti"
          />
          <CardPelatihan
            img={Java}
            title="Java"
            star="⭐⭐⭐⭐"
            hour="8 jam"
            desc="55 Peserta Telah Mengikuti"
          />
        </div>
      </div>
      {/* penutup bagian 4 */}

      {/* bagian 5 */}
      <div className="container">
        <div className="mx-auto" style={{ width: "50%", margin: "50px" }}>
          <h1>
           Why Should Be <span style={{ color: "yellow" }}>Directed</span> 
          </h1>
          <p>
              beberapa alsaan kenapa kamu harus memilih directed untuk mengambangkan bakat anda!
          </p>
        </div>
          <CardPopuler />
      
        </div>
      {/* penutup bagian 5 */}
      
    </div>
  );
};

export default Home;
