import React from 'react';

const CardLatest = (props) => {
    return (
      <div className="last-container">
      <div className="row d-flex mx-auto">
      <div className="col-md-5 mx-5 mb-1 h-100">
          <div className="row flex-row border">
              <div className="col-md-4 m-auto">
              <img
                  src={props.img}
                  className="card-img m-auto w-100"
                  alt="Pelatihan Directed"
              />
              </div>
              <div className="col-md-8 text-start">
                  <div className="card h-100">
                      <div className="card-body">
                          <p className="card-text" style={{ fontSize: "Medium" }}>{props.title}</p>
                          <small className="text-muted">{props.desc}</small>
                      </div>
                      <div className="card-footer">
                        <div className="h7 text-muted"><span role="img" aria-label="star">⭐</span> {props.star}  |||  <button type="submit" value="Send" className="btn btn-success">{props.price}</button></div>
                      </div>
                  </div>
              </div>
              </div>
          </div>
 
          <div className="col-md-5 mb-1 h-100 ms-5">
          <div className="row flex-row border">
              <div className="col-md-4 m-auto">
              <img
                  src={props.imgl}
                  className="card-img m-auto w-100"
                  alt="Pelatihan Directed"
              />
              </div>
              <div className="col-md-8 text-start">
                  <div className="card h-100">
                      <div className="card-body">
                          <p className="card-text" style={{ fontSize: "Medium" }}>{props.titlel}</p>
                          <small className="text-muted">{props.descl}</small>
                      </div>
                      <div className="card-footer">
                        <div className="h7 text-muted"><span role="img" aria-label="star">⭐</span> {props.starl}  |||  <button type="submit" value="Send" className="btn btn-success">{props.pricel}</button></div>
                      </div>
                  </div>
              </div>
              </div>
          </div>
      </div>
  </div>
    );
  };

export default CardLatest;