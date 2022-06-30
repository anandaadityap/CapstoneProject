import React from 'react';
import Word from '../../assets/home_kit/Word.png';
import Excel from '../../assets/home_kit/Excel.png';
import Point from '../../assets/home_kit/Point.png';
import Html from '../../assets/home_kit/Html.png';
import Css from '../../assets/home_kit/Css.png';
import Js from '../../assets/home_kit/Js.png';
import Sql from '../../assets/home_kit/Sql.png';
import Php from '../../assets/home_kit/Php.png';
import Java from '../../assets/home_kit/Java.png';

const CardPelatihan = () => {
    return (
    <div class="container"> 
        <div class="h4">Pelatihan Microsoft</div>
    <div class="row">
        <div class="col m-3">
            <div class="row border row-cols-1 row-cols-md-3">
                <div class="col-md-4 m-auto">
                    <img src={Word} class="col-md-4 m-auto w-100" alt="Microsoft Word" />
                </div>
                <div class="col-md-8">
                    <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Microsoft Word</h5>
                        <p class="card-text" style={{ fontSize: "small" }}>Microsoft Word dapat menunjang kebutuhan pengguna untuk melengkapi berbagai dokumen.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">26 Peserta telah mengikuti</small>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col m-3">
            <div class="row flex-row border">
                <div class="col-md-4 m-auto ">
                    <img src={Excel} class="w-100" alt="Microsoft Excel" />
                </div>
                <div class="col-md-8">
                    <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Microsoft Excel</h5>
                        <p class="card-text" style={{ fontSize: "small" }}>Excel digunakan untuk mengelola data sederhana hingga rumit, membuat diagram maupun grafik.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">90 Peserta telah mengikuti</small>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col m-3">
            <div class="row flex-row border">
                <div class="col-md-4 m-auto">
                    <img src={Point} class="w-100" alt="Microsoft Power Point" />
                </div>
                <div class="col-md-8">
                    <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Power Point</h5>
                        <p class="card-text" style={{ fontSize: "small" }}>Microsoft Power Point dipakai untuk membuat file presentasi dalam bentuk slide.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">10 Peserta telah mengikuti</small>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="h4">Pelatihan Front End Developer</div>
    <div class="row">
        <div class="col m-3">
            <div class="row flex-row border">
                <div class="col-md-4 m-auto ">
                    <img src={Html} class="w-100" alt="HTML" />
                </div>
                <div class="col-md-8">
                    <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">HyperText Markup Language</h5>
                        <p class="card-text" style={{ fontSize: "small" }}>HTML adalah markup yang digunakan untuk mendefinisikan struktur halaman web.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">90 Peserta telah mengikuti</small>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col m-3">
            <div class="row flex-row border">
                <div class="col-md-4 m-auto ">
                    <img src={Css} class="w-100" alt="CSS" />
                </div>
                <div class="col-md-8">
                    <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Cascading Style Sheet</h5>
                        <p class="card-text" style={{ fontSize: "small" }}>Css dapat memberikan warna background, border, mengatur posisi elemen, ukuran font DLL.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">29 Peserta telah mengikuti</small>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col m-3">
            <div class="row flex-row border">
                <div class="col-md-4 m-auto">
                    <img src={Js} class="w-100" alt="Java Script" />
                </div>
                <div class="col-md-8">
                    <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Java Script</h5>
                        <p class="card-text" style={{ fontSize: "small" }}>Java Script yaitu bahasa pemrograman yang digunakan untuk membuat halaman web yang lebih interaktif.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">23 Peserta telah mengikuti</small>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="h4">Pelatihan Back End Developer</div>
    <div class="row">
        <div class="col m-3">
            <div class="row border row-cols-1 row-cols-md-3">
                <div class="col-md-4 m-auto">
                    <img src={Sql} class="col-md-4 m-auto w-100" alt="SQL" />
                </div>
                <div class="col-md-8">
                    <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">SQL</h5>
                        <p class="card-text" style={{ fontSize: "small" }}>SQL dapat memungkinkan kamu untuk mengakses maupun mengubah database.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">60 Peserta telah mengikuti</small>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col m-3">
            <div class="row flex-row border">
                <div class="col-md-4 m-auto ">
                    <img src={Php} class="w-100" alt="PHP" />
                </div>
                <div class="col-md-8">
                    <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">PHP</h5>
                        <p class="card-text" style={{ fontSize: "small" }}>untuk mengakses layanan Web dan mengubah halaman HTML statis menjadi halaman dinamis.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">33 Peserta telah mengikuti</small>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col m-3">
            <div class="row flex-row border">
                <div class="col-md-4 m-auto">
                    <img src={Java} class="w-100" alt="Java" />
                </div>
                <div class="col-md-8">
                    <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Java</h5>
                        <p class="card-text" style={{ fontSize: "small" }}>Java mampu dijalankan di berbagai platform tanpa perlu disusun ulang menyesuaikan platformnya.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">70 Peserta telah mengikuti</small>
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