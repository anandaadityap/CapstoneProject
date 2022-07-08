import React from "react";


const CardJob = (props) => {
    return (
    <div class="job-container text-start mb-5">
        <div class="d-flex">
        <div class="col-md-3,5 card text-start me-3 p-3 h-100">
            <h5 class="header">
                {props.job}
            </h5>
        <div class="body">
            <div class="d-flex">
                <img
                    src={props.img}
                    className="card-img text-start"
                    style={{ width: "10%", height: "10%"}}
                />
                <h6 class="card-title">  {props.perusahaan}</h6>
            </div>
                <h5 class="card-text mt-2">{props.salary}</h5>
                <h6 class="card-text mt-2">{props.kota}</h6>
                <p class="card-text">{props.desc}</p>
                <div class="text-muted">{props.tgl}</div>
            <div class="text-end">
                <a href="#" class="btn btn-primary">Selengkapnya</a>
            </div>
        </div>
        </div>


        <div class="col-md-8 card text-start p-3 h-100">
            <h4 class="header mb-3">
                {props.job}
            </h4>
        <div class="body">
            <div class="d-flex">
                <img
                    src={props.img}
                    className="card-img text-start"
                    style={{ width: "5%", height: "5%"}}
                />
                <h5 class="card-title">{props.perusahaan}</h5>
            </div>
                <h5 class="card-text mt-2">{props.kota}</h5>
                <h4 class="card-text mt-2">IDR {props.salary}</h4>
                <div class="text-muted">ditayangkan pada {props.tgl} </div>

                <h6 class="card-text mt-5">Keuntungan :</h6>
                <p class="card-text">{props.profit}</p>
                <h6 class="card-text mt-2">Deskripsi Pekerjaan :</h6>                
                <p class="card-text">{props.require}</p>            
                <h6 class="card-text mt-2">Tentang Perusahaan :</h6>    
                <p class="card-text">{props.info}</p>                
        </div>
        </div>

        
        </div>
    </div>
  );
};

export default CardJob;
