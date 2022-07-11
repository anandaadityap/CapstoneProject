import React from 'react';

const CardFront = (props) => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col">
          <div className="card h-100" style={{ height: '100px' }}>
            <img
              src={props.img}
              className="card-img w-50 m-auto"
              alt="Pelatihan Directed"
            />
            <div className="card-body">
              <h5>{props.title}</h5>
              <p className="card-text" style={{ fontSize: 'Small' }}>
                {props.desc}
              </p>
            </div>
            <div className="card-footer">
              <div className="h7 text-muted">
                <span role="img" aria-label="star">
                  ⭐
                </span>{' '}
                {props.star} |||{' '}
                <button type="submit" value="Send" className="btn btn-success">
                  {props.price}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFront;
