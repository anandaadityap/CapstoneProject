import React from "react";
import Why from '../../assets/home_kit/Why.png';


const CardPopuler = () => {
  return (
    <div class="card mb-5 mx-3" >
    <div class="row" style={{ backgroundColor: "#003060", borderRadius: "25px", height: "100%" }}>
        <div class="col-md-4">
            <img src={Why} class="img-fluid rounded-start h-100 m-auto" alt="Why Choose Directed?" />
        </div>
        <div class="col-md-8">
            <div class="card-body text-start" style={{ color: "#ffffff" }} >
                <p> </p> 
                <p> </p>
                <h5 class="card-text">1. Soft Skill dan Career Readiness</h5>
                <p class="card-text">Peserta Program Kartu Prakerja dapat memilih sendiri materi kelas yang diinginkan. Hal ini dapat menyesualkan dengan minat serta kebutuhan dari tiap peserta program.</p>
                <h5 class="card-text">2. Materi</h5>
                <p class="card-text">Materi yang ada sesuai dengan setiap bidang yang diajarkan. Sehingga materi yang disampaikan akan lebih relevan dengan perkembangan bidang tersebut.</p>
                <h5 class="card-text">3. Peluang Kerja</h5>
                <p class="card-text">Setelah mengikuti pelatihan kamu bisa mencari lowongan pekerjaan yang sesuai dengan bakat dan pelatihan yang telah kamu ikuti.</p>
                <p> </p>
                <p> </p>
            </div>
        </div>
    </div>
    </div>
  );
};

export default CardPopuler;
