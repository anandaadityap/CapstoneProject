import React from 'react';

const CardHome = (props) => {
  return (
    <div className="container my-5">
      <div className="card m-auto" style={{ width: '200px', height: '225px' }}>
        <img
          src={props.img}
          className="card-img-top m-auto"
          style={{ height: '75px', width: '75px' }}
          alt="Pelatihan Directed"
        />
        <div className="card-body">
          <div className="h5 fw-bold">{props.tittle}</div>
          <p className="card-text" style={{ fontSize: 'small' }}>
            {props.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardHome;
