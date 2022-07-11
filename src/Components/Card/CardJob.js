import React from "react";


const CardJob = (props) => {
    return (
    <div className="job-container text-start mb-5">
        <div className="d-flex">
        <div className="col-md-3,5 card text-start me-3 p-3 h-100">
            <div className="h5 header">
                {props.job}
            </div>
        <div className="body">
            <div className="d-flex">
                <img
                    src={props.img}
                    className="card-img text-start"
                    style={{ width: "10%", height: "10%"}}
                    alt="Pelatihan Directed"
                />
                <div className="h6 card-title">  {props.perusahaan}</div>
            </div>
                <div className="h5 card-text mt-2">{props.salary}</div>
                <div className="h6 card-text mt-2">{props.kota}</div>
                <p className="card-text">{props.desc}</p>
                <div className="text-muted">{props.tgl}</div>
            <div className="text-end">
                <a href="/#" className="btn btn-primary">Selengkapnya</a>
            </div>
        </div>
        </div>


        <div className="col-md-8 card text-start p-3 h-100">
            <div className="h4 header mb-3">
                {props.job}
            </div>
        <div className="body">
            <div className="d-flex">
                <img
                    src={props.img}
                    className="card-img text-start"
                    style={{ width: "5%", height: "5%"}}
                    alt="Pelatihan Directed"
                />
                <div className="h5 card-title">{props.perusahaan}</div>
            </div>
                <div className="h5 card-text mt-2">{props.kota}</div>
                <div className="h4 card-text mt-2">IDR {props.salary}</div>
                <div className="text-muted">ditayangkan pada {props.tgl} </div>

                <div className="h6 card-text mt-5">Keuntungan :</div>
                <p className="card-text">{props.profit}</p>
                <div className="h6 card-text mt-2">Deskripsi Pekerjaan :</div>                
                <p className="card-text">{props.require}</p>            
                <div className="h6 card-text mt-2">Tentang Perusahaan :</div>    
                <p className="card-text">{props.info}</p>                
        </div>
        </div>
        </div>
    </div>
  );
};

export default CardJob;
