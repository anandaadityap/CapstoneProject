import React from "react";
import "./App.css";
import CardHome from "./Components/Card/CardHome";
import jam from "./assets/home_kit/jam.png";
import Login from "./Page/Login";
import Home from "./Page/Home";
import SignUp from "./Page/SignUp";
import CardMateri from "./Components/Card/CardMateri";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Login /> */}
      {/* <SignUp /> */}
      <CardMateri />
    </div>
  );
}

export default App;
