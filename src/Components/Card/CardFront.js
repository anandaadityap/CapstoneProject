import React from "react";
import Html from '../../assets/home_kit/Html.png';
import Css from '../../assets/home_kit/Css.png';
import Js from '../../assets/home_kit/Js.png';
import Rea from '../../assets/home_kit/Rea.png';


const CardFront = () => {
  return (
<div class="row row-cols-2 row-cols-md-4 g-4">
  <div class="col">
    <div class="card h-100">
      <img src={Html} className="card-img-top" alt="HTML"/>
      <div class="card-body">
        <h5>HTML</h5>
        <p class="card-text" style={{ fontSize: "Small" }}>HTML atau HyperText Markup Language adalah markup yang digunakan untuk mendefinisikan struktur halaman web.</p></div>
      <div class="card-footer">
        <h7 class="text-muted">⭐4.5  |||  <button type="submit" value="Send" class="btn btn-success">FREE</button></h7>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={Css} class="card-img-top" alt="CSS" />
      <div class="card-body">
        <h5>Cassading Style Sheet</h5>
        <p class="card-text" style={{ fontSize: "Small" }}>Css dapat memberikan warna background, border, mengatur posisi elemen, dll.</p>
      </div>
      <div class="card-footer">
      <h7 class="text-muted">⭐4.5  |||  <button type="submit" value="Send" class="btn btn-success">FREE</button></h7>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={Js} class="card-img-top" alt="Java Script" />
      <div class="card-body">
        <h5>Java Script</h5>
        <p class="card-text" style={{ fontSize: "Small" }}>Java Script yaitu bahasa pemrograman yang digunakan untuk membuat halaman web yang lebih interaktif.</p>
      </div>
      <div class="card-footer">
        <h7 class="text-muted">⭐4.5  |||  <button type="submit" value="Send" class="btn btn-success">FREE</button></h7>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={Rea} class="card-img-top" alt="React" />
      <div class="card-body">
        <h5>React</h5>
        <p class="card-text" style={{ fontSize: "Small" }}>React adalah sebuah library JavaScript yang sering digunakan untuk membangun user interface yang interaktif.</p>
      </div>
      <div class="card-footer">
        <h7 class="text-muted">⭐4.5  |||  <button type="submit" value="Send" class="btn btn-success">RP. 90.000</button></h7>
      </div>
    </div>
  </div>
</div>
  );
};

export default CardFront;
