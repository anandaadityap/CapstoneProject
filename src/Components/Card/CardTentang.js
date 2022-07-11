import React from 'react';

const CardTentang = (props) => {
  return (
    <div className="text-start mb-5">
      <div className="d-flex card h-100 w-auto mt-3 me-3">
        <div className="h4 card-header mb-3">{props.id}</div>
        <div className="card-body">
          <div className="d-flex">
            <img
              src={props.img}
              className="card-img text-start"
              style={{ width: '20%', height: '20%' }}
              alt="Pelatihan Directed"
            />
            <div className="h5 card-title align-self-center">{props.name}</div>
          </div>
          <div className="h6 card-text mt-2">Umur : {props.age} Tahun</div>
          <div className="h6 card-text mt-2">Alamat : {props.alamat}</div>
          <div className="h6 card-text mt-2">Kampus : {props.kampus}</div>
        </div>
      </div>
    </div>
  );
};

export default CardTentang;
