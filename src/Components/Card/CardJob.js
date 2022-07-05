import React from "react";


const CardJob = (props) => {
    return (
    <div class="job-container text-start w-auto mb-5">
    <div class="card text-start mx-2 h-100">
    <h5 class="card-header">
        {props.job}
    </h5>
    <div class="card-body">
        <div class="d-flex">
        <img
            src={props.img}
            className="card-img text-start"
            style={{ width: "15%", height: "15%"}}
        />
        <h6 class="card-title">  {props.perusahaan}</h6>
        </div>
        <h5 class="card-text mt-2">{props.salary}</h5>
        <h6 class="card-text mt-2">{props.kota}</h6>
        <p class="card-text">{props.desc}</p>
        <div class="text-end">
        <a href="#" class="btn btn-primary">Selengkapnya</a>
        </div>
    </div>
    <div class="card-footer">
          <div class="text-muted">{props.tgl} </div>
          </div>
    </div>
    </div>
  );
};

export default CardJob;
