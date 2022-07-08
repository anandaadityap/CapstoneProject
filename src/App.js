import React from "react";
import "./App.css";
import Kursus from "./Page/Kursus";
import Home from "./Page/Home";
import Pelatihan from "./Page/Pelatihan";
import Job from "./Page/Job";
import Tentang from "./Page/Tentang";
import Login from "./Page/Login";
import SignUp from "./Page/SignUp";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import {useState} from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";


function App() {

  const [islogin, setisLogin] = useState(false)

  return (
  <div className="App">
      <Router>
      <Navbar />
        <Switch>

          <Route  path="/Login">
            <Login />
          </Route>
          
          <Route  path="/SignUp">
            <SignUp />
          </Route>
          
          <Route  path="/Kursus">
            <Kursus />
          </Route>
          
          <Route  path="/Pelatihan">
            <Pelatihan />
          </Route>
          
          <Route  path="/Job">
            <Job />
          </Route>

          <Route path="/Tentang">
            <Tentang />
          </Route>

          <Route path="/">
            <Home/>
          </Route>

        </Switch>
        <Footer />
      </Router>
  </div>
  );
}

export default App;
