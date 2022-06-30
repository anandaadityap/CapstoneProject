import React from 'react';
import "./CardStart.css"

const CardStart = (props) =>{
    const {src} = props
    return(
        <div class="card text-center">
        <img src={src} class="card-img" alt="gambar"></img>
        <div class="card-img-overlay position-absolute top-50 start-50 translate-middle ">
            <div className="tengah">
                <h5 class="card-title ">Mencari</h5>
                <a href="#" class="btn btn-secondary">Start Now</a>
            </div>
        </div>
        </div>
    );
};

export default CardStart;