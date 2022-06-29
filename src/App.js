
import React from 'react';


import "./App.css";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";


function App() {
  return (
    <div className="App">


      
      <div class="row">
        <div class="col-md-8">.col-md-8</div>
        <div class="col-6 col-md-4">.col-6 .col-md-4</div>
      </div>
      
      <div class="row">
        <div class="col-6">.col-6</div>
        <div class="col-6">.col-6</div>
      </div>
      
      <div class="container">
      <div class="row row-cols-4">
        <div class="col">Column</div>
        <div class="col">Column</div>
        <div class="col">Column</div>
        <div class="col">Column</div>
      </div>
    </div>


      <Navbar />


    </div>
  );
}

export default App;
