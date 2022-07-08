import React from 'react';

const CardFront = (props) => {
    return (
    <div className="container my-5">
    <div class="row">
      <div class="col">
        <div class="card h-100" style={{ height: "100px" }}>
          <img
          src={props.img}
          className="card-img"
          class="w-50 m-auto"
          />
        <div class="card-body">
          <h5>{props.title}</h5>
          <p class="card-text" style={{ fontSize: "Small" }}>{props.desc}</p>
        </div>
        <div class="card-footer">
          <h7 class="text-muted">⭐ {props.star}  |||  <button type="submit" value="Send" class="btn btn-success">{props.price}</button></h7>
        </div>
        </div>
      </div>
    </div>
  </div>
    );
  };

export default CardFront;