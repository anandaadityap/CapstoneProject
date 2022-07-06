import React from "react";
import CardJob from "../Components/Card/CardJob";
import Html from "../assets/home_kit/Html.png";
import Navbar from "../Components/Navbar/index.js";
import Footer from "../Components/Footer/index.js";

const Job = () => {
    return (
      <div>
        <Navbar />
        {/* bagian 1 */}
        <div>
        <div className="home-container mt-5 p-5" style={{ backgroundColor: "#8DACCC" }}>
          <h1 className="card-title fw-bold text-start mx-5">Dapatkan Pekerjaan Sesuai Bakatmu</h1>
          <div class="home mt-5">
            <div class="d-flex m-5 text-center">
            <div class="input-group" style={{ width: "30%", height : "30%" }}>
                <span class="input-group-text " id="basic-addon1">@</span>
                <input type="text" class="form-control" placeholder="KataKunci" aria-label="Kata Kunci" aria-describedby="basic-addon1" />
            </div>
            <div class="form mx-4 mt-1" style={{ width: "20%", height : "20%" }}>
                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                    <option selected>Provinsi</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div class="form">
                <button type="button" class="btn btn-success">Cari</button>
            </div>
        </div>
    </div>
    </div>
    </div>

        <div clas="container">
        <div class="card m-5 py-3">
            <div class="card-body text-start">
                <h1>Selamat Datang,,, </h1>
                <h3>Temukan Lowongan Pekerjaan Terkini.</h3>
                <h5>hanya di Directed...</h5>
            </div>
            </div>
        </div>
        {/* penutup bagian 1 */}

        {/* bagian 2 */}
        <div className="jocontainer">
            <h1 class="text-start my-5">
                Pekerjaan Front End Developer
            </h1>
  
          <div className="card">
            <CardJob
              job="Front End Developer"
              img={Html}
              perusahaan="PT Gemilang aman Sentosa Jaya"
              salary="dirahasiakan"
              kota="Medan"
              desc="We are looking for team members who are intelligent and driven, creative, passionate about gaming and technology, and possess a growth mindset to help take our company to the next level."
              tgl="5 hari yang lalu"
            />
            
            <CardJob
              job="Front End Developer"
              img={Html}
              perusahaan="PT Gemilang aman Sentosa Jaya"
              salary="IDR 9.000.000"
              kota="Medan"
              desc="We are looking for team members who are intelligent and driven, creative, passionate about gaming and technology, and possess a growth mindset to help take our company to the next level."
              tgl="5 hari yang lalu"
            />
            <CardJob
              job="Front End Developer"
              img={Html}
              perusahaan="PT Gemilang aman Sentosa Jaya"
              salary="dirahasiakan"
              kota="Medan"
              desc="We are looking for team members who are intelligent and driven, creative, passionate about gaming and technology, and possess a growth mindset to help take our company to the next level."
              tgl="5 hari yang lalu"
            />

            <CardJob
              job="Front End Developer"
              img={Html}
              perusahaan="PT Gemilang aman Sentosa Jaya"
              salary="dirahasiakan"
              kota="Medan"
              desc="We are looking for team members who are intelligent and driven, creative, passionate about gaming and technology, and possess a growth mindset to help take our company to the next level."
              tgl="5 hari yang lalu"
            />
            </div>
          </div>
        {/* penutup bagian 2 */}
  
        {/* bagian 3 */}
        <div></div>
        {/* penutup bagian 3 */}
        <Footer />
      </div>
    );
  };

export default Job;
