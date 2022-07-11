import React from 'react';
import './CardStart.css';
import { Link } from 'react-router-dom';

const CardStart = (props) => {
  const { src, page } = props;
  return (
    <div className="card text-center">
      <img src={src} className="card-img" alt="gambar"></img>
      <div className="card-img-overlay position-absolute top-50 start-50 translate-middle ">
        <div className="tengah">
          <div className="h5 card-titlee ">Mencari</div>
          <a href={page} className="btn btn-warning">
            <Link to={page}>Start Now</Link>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardStart;
