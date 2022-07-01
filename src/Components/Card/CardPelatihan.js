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
        <div class="col m-2">
            <div class="row flex-row border">
                <div class="col-md-4 m-auto">
                    <img src={Word} class="w-100" alt="Microsoft Word" />
                </div>
                <div class="col-md-8">
                    <div class="card h-100">
                    <div class="card-body">
                        <p class="card-text" style={{ fontSize: "Medium" }}>Microsoft Word</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">26 Peserta telah mengikuti</small>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col m-2">
            <div class="row flex-row border">
                <div class="col-md-4 m-auto ">
                    <img src={Excel} class="w-100" alt="Microsoft Excel" />
                </div>
                <div class="col-md-8">
                    <div class="card h-100">
                    <div class="card-body">
                        <p class="card-text" style={{ fontSize: "Medium" }}>Microsoft Excel</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">90 Peserta telah mengikuti</small>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col m-2">
            <div class="row flex-row border">
                <div class="col-md-4 m-auto">
                    <img src={Point} class="w-100" alt="Microsoft Power Point" />
                </div>
                <div class="col-md-8">
                    <div class="card h-100">
                    <div class="card-body">
                        <p class="card-text" style={{ fontSize: "Medium" }}>Microsoft Power Point</p>
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
        <div class="col m-2">
            <div class="row flex-row border">
                <div class="col-md-4 m-auto ">
                    <img src={Html} class="w-100" alt="HTML" />
                </div>
                <div class="col-md-8">
                    <div class="card h-100">
                    <div class="card-body">
                        <p class="card-text" style={{ fontSize: "Medium" }}>HTML</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">90 Peserta telah mengikuti</small>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col m-2">
            <div class="row flex-row border">
                <div class="col-md-4 m-auto ">
                    <img src={Css} class="w-100" alt="CSS" />
                </div>
                <div class="col-md-8">
                    <div class="card h-100">
                    <div class="card-body">
                        <p class="card-text" style={{ fontSize: "Medium" }}>CSS</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">29 Peserta telah mengikuti</small>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col m-2">
            <div class="row flex-row border">
                <div class="col-md-4 m-auto ">
                    <img src={Js} class="w-100" alt="Js" />
                </div>
                <div class="col-md-8">
                    <div class="card h-100">
                    <div class="card-body">
                        <p class="card-text" style={{ fontSize: "Medium" }}>Java Script</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">29 Peserta telah mengikuti</small>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    
    <div class="h4">Pelatihan Back End Developer</div>
    <div class="row">
        <div class="col m-2">
            <div class="row border row-cols-1 row-cols-md-3">
                <div class="col-md-4 m-auto">
                    <img src={Sql} class="col-md-4 m-auto w-100" alt="SQL" />
                </div>
                <div class="col-md-8">
                    <div class="card h-100">
                    <div class="card-body">
                        <p class="card-text" style={{ fontSize: "Medium" }}>SQL</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">60 Peserta telah mengikuti</small>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col m-2">
            <div class="row flex-row border">
                <div class="col-md-4 m-auto ">
                    <img src={Php} class="w-100" alt="PHP" />
                </div>
                <div class="col-md-8">
                    <div class="card h-100">
                    <div class="card-body">
                        <p class="card-text" style={{ fontSize: "Medium" }}>PHP</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">33 Peserta telah mengikuti</small>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col m-2">
            <div class="row flex-row border">
                <div class="col-md-4 m-auto">
                    <img src={Java} class="w-100" alt="Java" />
                </div>
                <div class="col-md-8">
                    <div class="card h-100">
                    <div class="card-body">
                        <p class="card-text" style={{ fontSize: "Medium" }}>Java</p>
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