import React from "react";
import CardTentang from "../Components/Card/CardTentang";
import Html from "../assets/home_kit/Html.png";

const Tentang = () => {
    return (
      <div>
        <div className="home-container mt-5 p-5" style={{ backgroundColor: "#8DACCC" }}>
          <div className="h1 card-title fw-bold text-start mx-5">Kenali Pengembang Lebih Jauh...</div>
        </div>

        <div className="tentang-container m-5">
          <div className="d-flex">
            <CardTentang
              id="KM_G2FE5275"
              img={Html}
              name="Nizar Mayraldo"
              age="21"
              alamat="Surabaya"
              kampus="Institut Teknologi Sepuluh November"
              />
            <CardTentang
              id="KM_G2FE3045"
              img={Html}
              name="Novita Lia Nurilam Sari"
              age="21"
              alamat="Bandung"
              kampus="Sekolah Tinggi Teknologi Bandung"
              />
            <CardTentang
              id="KM_G2FE6108"
              img={Html}
              name="Ananda Aditya Putra"
              age="21"
              alamat="Surabaya"
              kampus="Universitas Esa Unggul"
              />
            <CardTentang
              id="KM_G2FE6018"
              img={Html}
              name="Khairun Nisa"
              age="21"
              alamat="yogyakarta"
              kampus="Universitas Bisnis Nusantara"
              />
            <CardTentang
              id="KM_G2FE5137"
              img={Html}
              name="Nathanael Joseph Dewantara"
              age="21"
              alamat="yogyakarta"
              kampus="Universitas Narotama"
              />

            </div>
          </div>
        {/* penutup bagian 2 */}
      </div>
    );
  };

export default Tentang;
