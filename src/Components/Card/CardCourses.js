import React from "react";
import CardCourses from "../Card/CardCourses.html";
import profil from "../../assets/home_kit/profil.jpg";
import Frontend from "../../assets/home_kit/Frontend.jpg";
import Backend from "../../assets/home_kit/Backend.png";
import dataanalyst from "../../assets/home_kit/dataanalyst.jpg";
import uiux from "../../assets/home_kit/uiux.jpg";
import ITTrainer from "../../assets/home_kit/ITTrainer.jpg";
import Fullstackdevelop from "../../assets/home_kit/Fullstackdevelop.png";

const CardCourses = () => {
  return (
    <div class="p-3">
    <h2>Popular and Latest Courses</h2>
    <div class="row">
      <div class="col-6">
        <div class="card">
          <div class="card-body">
             <div class="row">
            <div class="col-4 m-0 p-0 pl-2">
                  <img src={Frontend} class="img-fluid" />
                  </div>
                  <div class="col-8">
                    <div class="row">
                        <div class="col-12">
              <img width="32" style="border-radius: 50%;" src={profil} /> <span class="ml-1 font-weight-bold">Novita Lia</span>                         
                          </div>
                          <div class="col-12 ml-3 my-2 p-0">
              <span class="font-weight-bold mb-0" style="font-size:18px">Front End Developer</span>           
                          </div>
                      </div>
                    Price : Rp 100.000
                  </div>
              </div>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="card">
          <div class="card-body">
             <div class="row">
            <div class="col-4 m-0 p-0 pl-2">
                  <img src={Backend} class="img-fluid" />
                  </div>
                  <div class="col-8">
                    <div class="row">
                        <div class="col-12">
              <img width="32" style="border-radius: 50%;" src={profil} /> <span class="ml-1 font-weight-bold">Nizar</span>                         
                          </div>
                          <div class="col-12 ml-3 my-2 p-0">
              <span class="font-weight-bold mb-0" style="font-size:18px">Back End Developer</span>           
                          </div>
                      </div>
                    Rp 100.000
                  </div>
              </div>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="card">
          <div class="card-body">
             <div class="row">
            <div class="col-4 m-0 p-0 pl-2">
                  <img src={dataanalyst} class="img-fluid" />
                  </div>
                  <div class="col-8">
                    <div class="row">
                        <div class="col-12">
              <img width="32" style="border-radius: 50%;" src={profil} /> <span class="ml-1 font-weight-bold">Khairunisa</span>                         
                          </div>
                          <div class="col-12 ml-3 my-2 p-0">
              <span class="font-weight-bold mb-0" style="font-size:18px">Data Analyst</span>           
                          </div>
                      </div>
                    Rp 100.000
                  </div>
              </div>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="card">
          <div class="card-body">
             <div class="row">
            <div class="col-4 m-0 p-0 pl-2">
                  <img src={uiux} class="img-fluid" />
                  </div>
                  <div class="col-8">
                    <div class="row">
                        <div class="col-12">
              <img width="32" style="border-radius: 50%;" src={profil} /> <span class="ml-1 font-weight-bold">Joseph</span>                         
                          </div>
                          <div class="col-12 ml-3 my-2 p-0">
              <span class="font-weight-bold mb-0" style="font-size:18px">UI/UX Designer</span>           
                          </div>
                      </div>
                    Rp 100.000
                  </div>
              </div>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="card">
          <div class="card-body">
             <div class="row">
            <div class="col-4 m-0 p-0 pl-2">
                  <img src={ITTrainer} class="img-fluid" />
                  </div>
                  <div class="col-8">
                    <div class="row">
                        <div class="col-12">
              <img width="32" style="border-radius: 50%;" src={profil} /> <span class="ml-1 font-weight-bold">Ananda Aditya</span>                         
                          </div>
                          <div class="col-12 ml-3 my-2 p-0">
              <span class="font-weight-bold mb-0" style="font-size:18px">IT Trainer</span>           
                          </div>
                      </div>
                    Rp 100.000
                  </div>
              </div>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="card">
          <div class="card-body">
             <div class="row">
            <div class="col-4 m-0 p-0 pl-2">
                  <img src={Fullstackdevelop} class="img-fluid" />
                  </div>
                  <div class="col-8">
                    <div class="row">
                        <div class="col-12">
              <img width="32" style="border-radius: 50%;" src={profil} /> <span class="ml-1 font-weight-bold">Novita Lia</span>                         
                          </div>
                          <div class="col-12 ml-3 my-2 p-0">
              <span class="font-weight-bold mb-0" style="font-size:18px">Full STack Developer</span>           
                          </div>
                      </div>
                    Rp 200.000
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default CardCourses;