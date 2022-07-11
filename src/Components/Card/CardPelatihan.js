import React from 'react';

const CardPelatihan = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col m-2">
          <div className="row flex-row border">
            <div className="col-md-4 m-auto">
              <img
                src={props.img}
                className="card-img m-auto w-100"
                alt="Pelatihan Directed"
              />
            </div>
            <div className="col-md-8">
              <div className="card h-100 text-start">
                <div className="card-body">
                  <div className="h5 card-text" style={{ fontSize: 'Medium' }}>
                    {props.title} {props.star}{' '}
                  </div>
                  <p className="text-muted" style={{ fontSize: 'Small' }}>
                    Waktu: {props.hour}
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">{props.desc}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPelatihan;
