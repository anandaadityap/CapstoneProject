import React from "react";
import CardMateri from "../Components/Card/CardMateri";

const Kursus = () => {
  return (
    <div>
      <div className="home-container mt-5 p-5">
        <div className="m-5 py-3">
      <div className="card-body text-start">
        <h1>Selamat Datang,,, </h1>
        <h3>Temukan Kursus.</h3>
        <h5>sesuai dengan bakatmu...</h5>
    </div>
    </div>
    </div>

    <div className="kursuscontainer m-5">
      <h1 className="text-start mb-5">
        Kursus Terkini
      </h1>
      <CardMateri />
      </div>
    </div>
  );
};

export default Kursus;
