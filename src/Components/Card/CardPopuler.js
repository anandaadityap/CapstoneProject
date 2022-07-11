import React from 'react';
import Why from '../../assets/home_kit/Why.jpg';

const CardPopuler = () => {
  return (
    <div className="container-populer mb-5 mx-3">
      <div className="d-flex">
        <div className="me-5">
          <img
            src={Why}
            className="img-fluid rounded-start w-100 my-auto"
            alt="Why Choose Directed?"
          />
        </div>
        <div className="card-text mb-5">
          <div
            className="card-body text-start mb-3"
            style={{
              backgroundColor: '#8DACCC',
              borderRadius: '25px',
              height: '100%',
              color: '#ffffff',
            }}
          >
            <div className="h5 card-text mt-3">
              1. Soft Skill dan Career Readiness
            </div>
            <p className="card-text">
              Peserta Program Kartu Prakerja dapat memilih sendiri materi kelas
              yang diinginkan. Hal ini dapat menyesualkan dengan minat serta
              kebutuhan dari tiap peserta program.
            </p>
            <div className="h5 card-text">2. Materi</div>
            <p className="card-text">
              Materi yang ada sesuai dengan setiap bidang yang diajarkan.
              Sehingga materi yang disampaikan akan lebih relevan dengan
              perkembangan bidang tersebut.
            </p>
            <div className="h5 card-text">3. Peluang Kerja</div>
            <p className="card-text">
              Setelah mengikuti pelatihan kamu bisa mencari lowongan pekerjaan
              yang sesuai dengan bakat dan pelatihan yang telah kamu ikuti.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPopuler;
