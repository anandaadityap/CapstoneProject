import React from "react";
import Why from '../../assets/home_kit/Why.jpg';


const CardPopuler = () => {
  return (
    <div class="container-populer mb-5 mx-3" >
    <div class="d-flex">
        <div class="me-5">
            <img src={Why} class="img-fluid rounded-start w-100 my-auto" alt="Why Choose Directed?" />
        </div>
        <div class="card-text mb-5">
            <div class="card-body text-start mb-3" style={{ backgroundColor: "#8DACCC",  borderRadius: "25px", height: "100%", color: "#ffffff" }} >
                <h5 class="card-text mt-3">1. Soft Skill dan Career Readiness</h5>
                <p class="card-text">Peserta Program Kartu Prakerja dapat memilih sendiri materi kelas yang diinginkan. Hal ini dapat menyesualkan dengan minat serta kebutuhan dari tiap peserta program.</p>
                <h5 class="card-text">2. Materi</h5>
                <p class="card-text">Materi yang ada sesuai dengan setiap bidang yang diajarkan. Sehingga materi yang disampaikan akan lebih relevan dengan perkembangan bidang tersebut.</p>
                <h5 class="card-text">3. Peluang Kerja</h5>
                <p class="card-text">Setelah mengikuti pelatihan kamu bisa mencari lowongan pekerjaan yang sesuai dengan bakat dan pelatihan yang telah kamu ikuti.</p>
            </div>
        </div>
    </div>
    </div>
  );
};

export default CardPopuler;
