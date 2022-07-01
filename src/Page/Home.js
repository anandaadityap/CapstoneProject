import React from "react";
import CardHome from "../Components/Card/CardHome";
import CardPelatihan from "../Components/Card/CardPelatihan";
import CardStart from "../Components/Card/CardStart";
import startlearning from "../assets/home_kit/startlearning.png";
import startclass from "../assets/home_kit/startclass.png";
import "../Page/Home.css";

const Home = () => {
  return (
    <div>
      {/* bagian 1 */}
      <div> 
        <div className="conatinerrs">
            <h1 class="header1">Tingkatkan Karirmu Bersama Kami</h1>
            <p class="header2">Directed, membantumu untuk mencari pekerjaan sesuai bakat dan minat yang kamu miliki</p>
                <button class="button-primary">Sign Up</button>
                <button class="button-secondary">Sign In</button>
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

        <CardHome />
      </div>
      {/* penutup bagian 3 */}

      {/* bagian 3 */}
      <div className="container">
        <div className="mx-auto" style={{ width: "50%", margin: "50px" }}>
          <h1>
            LET'S GET <span style={{ color: "yellow" }}>STARTED NOW</span>
          </h1>
          <p>
            "Directed" a platform that allows people to create online classes and seeking for a job 
            that they can apply by online. Getting job and increase skills with course that available at this platform
          </p>
        </div>
        <div class="row">
          <div class="col">
            <CardStart src={startlearning}/>
          </div>
          <div class="col">
            <CardStart src={startclass}/>
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

        <CardPelatihan />
      </div>
      {/* penutup bagian 4 */}

      {/* bagian 5 */}
      <div></div>
      {/* penutup bagian 5 */}
    </div>
  );
};

export default Home;
