import React from 'react';

const CardPelatihan = (props) => {
    return (
    <div className="container">
        <div class="row">
        <div class="col m-2">
            <div class="row flex-row border">
                <div class="col-md-4 m-auto">
                <img
                    src={props.img}
                    className="card-img m-auto"
                    class="w-100"
                />
                </div>
                <div class="col-md-8">
                    <div class="card h-100">
                        <div class="card-body">
                            <p class="card-text" style={{ fontSize: "Medium" }}>{props.title}</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">{props.desc}</small>
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