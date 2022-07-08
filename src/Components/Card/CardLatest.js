import React from 'react';

const CardLatest = (props) => {
    return (
      <div className="last-container">
      <div class="row d-flex mx-auto">
      <div class="col-md-5 mx-5 mb-1 h-100">
          <div class="row flex-row border">
              <div class="col-md-4 m-auto">
              <img
                  src={props.img}
                  className="card-img m-auto"
                  class="w-100"
              />
              </div>
              <div class="col-md-8 text-start">
                  <div class="card h-100">
                      <div class="card-body">
                          <p class="card-text" style={{ fontSize: "Medium" }}>{props.title}</p>
                          <small class="text-muted">{props.desc}</small>
                      </div>
                      <div class="card-footer">
                        <h7 class="text-muted">⭐ {props.star}  |||  <button type="submit" value="Send" class="btn btn-success">{props.price}</button></h7>
                      </div>
                  </div>
              </div>
              </div>
          </div>
 
          <div class="col-md-5 mb-1 h-100 ms-5">
          <div class="row flex-row border">
              <div class="col-md-4 m-auto">
              <img
                  src={props.imgl}
                  className="card-img m-auto"
                  class="w-100"
              />
              </div>
              <div class="col-md-8 text-start">
                  <div class="card h-100">
                      <div class="card-body">
                          <p class="card-text" style={{ fontSize: "Medium" }}>{props.titlel}</p>
                          <small class="text-muted">{props.descl}</small>
                      </div>
                      <div class="card-footer">
                        <h7 class="text-muted">⭐ {props.starl}  |||  <button type="submit" value="Send" class="btn btn-success">{props.pricel}</button></h7>
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