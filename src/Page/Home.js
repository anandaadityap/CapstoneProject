import React from "react";
import "../Page/Home.css";
import Navbar from "../Components/Navbar";
import CardHome from "../Components/Card/CardHome";
import CardPelatihan from "../Components/Card/CardPelatihan";
import startclass from "../assets/home_kit/startclass.png";
import CardPopuler from "../Components/Card/CardPopuler";
import Footer from "../Components/Footer";


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
      <Navbar />
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
            Directed is one of the most powerful online software that combines
            all the tools needed to carry out honing skills and finding work
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
            "Directed" a platform that allows people to create online classes
            and seeking for a job that they can apply by online. Getting job and
            increase skills with course that available at this platform
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
              PELATIHAN POPULER
          </h1>
          <p>
              yuk simak pelatihan yang banyak di ikuti saat ini
          </p>
        </div>

        <div className="d-flex">
          <CardPelatihan
            img={Word}
            title="Microsoft Word"
            desc="90 Peserta Telah Mengikuti"
          />
          <CardPelatihan
            img={Excel}
            title="Microsoft Excel"
            desc="90 Peserta Telah Mengikuti"
          />
          <CardPelatihan
            img={Point}
            title="Microsoft Power Point"
            desc="90 Peserta Telah Mengikuti"
          />
        </div>

        <div className=" d-flex">
          <CardPelatihan
            img={Html}
            title="HTML"
            desc="90 Peserta Telah Mengikuti"
          />
          <CardPelatihan
            img={Css}
            title="CSS"
            desc="23 Peserta Telah Mengikuti"
          />
          <CardPelatihan
            img={Js}
            title="Java Script"
            desc="80 Peserta Telah Mengikuti"
          />
        </div>

        <div className=" d-flex">
          <CardPelatihan
            img={Sql}
            title="SQL"
            desc="40 Peserta Telah Mengikuti"
          />
          <CardPelatihan
            img={Php}
            title="PHP"
            desc="30 Peserta Telah Mengikuti"
          />
          <CardPelatihan
            img={Java}
            title="Java"
            desc="55 Peserta Telah Mengikuti"
          />
        </div>
      </div>
      {/* penutup bagian 4 */}

      {/* bagian 5 */}
      <div className="container">
        <div className="mx-auto" style={{ width: "50%", margin: "50px" }}>
          <h1>
          Kenapa Harus Directed?
          </h1>
        </div>
          <CardPopuler />
      
        </div>
      {/* penutup bagian 5 */}
      <Footer />
    </div>
  );
};

export default Home;
