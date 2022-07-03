import React from "react";
import "./App.css";
import Kursus from "./Page/Kursus";
import Home from "./Page/Home.js"
import Login from "./Page/Login.js"
import SignUp from "./Page/SignUp.js"
import Pelatihan from "./Page/Pelatihan"
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import {useState} from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";


function App() {

  const [islogin, setisLogin] = useState(false)

  return (
  <div className="App">
    <Navbar />
      <Router>
        <Switch>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/SignUp">
            <SignUp />
          </Route>
          <Route exact path="/Kursus">
            <Kursus />
          </Route>
          <Route exact path="/Pelatihan">
            <Pelatihan />
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    <Footer />
  </div>
  );
}

export default App;
