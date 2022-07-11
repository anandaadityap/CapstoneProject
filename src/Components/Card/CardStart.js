import React from "react";
import "./CardStart.css";

const CardStart = (props) => {
  const { src } = props;
  return (
    <div className="card text-center">
      <img src={src} className="card-img" alt="gambar"></img>
      <div className="card-img-overlay position-absolute top-50 start-50 translate-middle ">
        <div className="tengah">
          <div className="h5 card-titlee ">Mencari</div>
          <a href="/#" className="btn btn-warning">
            Start Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardStart;
