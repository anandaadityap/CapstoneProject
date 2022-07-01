import React from "react";

const CardHome = (props) => {
  return (
    <div className="container">
      <div className="card m-auto" style={{ width: "200px", height: "225px" }}>
        <img
          src={props.img}
          className="card-img-top m-auto"
          style={{ height: "75px", width: "75px" }}
        />
        <div className="card-body">
          <h5 className="fw-bold">{props.tittle}</h5>
          <p className="card-text" style={{ fontSize: "small" }}>
            {props.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardHome;
