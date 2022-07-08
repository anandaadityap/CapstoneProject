import React from "react";


const CardTentang = (props) => {
    return (
    <div class="text-start mb-5">
        <div class="d-flex card h-100 w-auto mt-3 me-3">
            <h4 class="card-header mb-3">
                {props.id}
            </h4>
        <div class="card-body">
            <div class="d-flex">
                <img
                    src={props.img}
                    className="card-img text-start"
                    style={{ width: "20%", height: "20%"}}
                />
                <h5 class="card-title align-self-center">{props.name}</h5>
            </div>
                <h6 class="card-text mt-2">Umur : {props.age} Tahun</h6>
                <h6 class="card-text mt-2">Alamat : {props.alamat}</h6>
                <h6 class="card-text mt-2">Kampus : {props.kampus}</h6>             
        </div>
        </div>        
        </div>
  );
};

export default CardTentang;
