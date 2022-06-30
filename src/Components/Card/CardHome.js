import React from "react";
import jam from "../../assets/home_kit/jam.png";
import toga from "../../assets/home_kit/toga.png";
import tas from "../../assets/home_kit/tas.png";
import webinar from "../../assets/home_kit/webinar.png";

const CardHome = () => {
  return (
    <div className=" container row">
      <div className="card m-auto" style={{ width: "200px" }}>
        <img
          src={jam}
          className="card-img-top m-auto"
          style={{ height: "75px", width: "75px" }}
        />
        <div className="card-body">
          <h5 className="fw-bold">Jadwal Pelatihan</h5>
          <p className="card-text" style={{ fontSize: "small" }}>
            Ikuti Pelatihan dimanapun dan kapanpun selama kamu kamu terhubung
            dengan internet.
          </p>
        </div>
      </div>
      {/* ============================== */}
      <div className="card m-auto" style={{ width: "200px" }}>
        <img
          src={toga}
          className="card-img-top m-auto"
          style={{ height: "75px", width: "75px" }}
        />
        <div className="card-body">
          <h5 className="fw-bold">Jadwal Pelatihan</h5>
          <p className="card-text" style={{ fontSize: "small" }}>
            Ikuti Pelatihan dimanapun dan kapanpun selama kamu kamu terhubung
            dengan internet.
          </p>
        </div>
      </div>
      {/* ============================== */}
      <div className="card m-auto" style={{ width: "200px" }}>
        <img
          src={tas}
          className="card-img-top m-auto"
          style={{ height: "75px", width: "75px" }}
        />
        <div className="card-body">
          <h5 className="fw-bold">Jadwal Pelatihan</h5>
          <p className="card-text" style={{ fontSize: "small" }}>
            Ikuti Pelatihan dimanapun dan kapanpun selama kamu kamu terhubung
            dengan internet.
          </p>
        </div>
      </div>
      {/* ============================== */}
      <div className="card m-auto" style={{ width: "200px" }}>
        <img
          src={webinar}
          className="card-img-top m-auto"
          style={{ height: "75px", width: "75px" }}
        />
        <div className="card-body">
          <h5 className="fw-bold">Jadwal Pelatihan</h5>
          <p className="card-text" style={{ fontSize: "small" }}>
            Ikuti Pelatihan dimanapun dan kapanpun selama kamu kamu terhubung
            dengan internet.
          </p>
        </div>
      </div>
      {/* ============================== */}
    </div>
  );
};

export default CardHome;
