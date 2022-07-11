import React from 'react';
import './App.css';
import Kursus from './Page/Kursus';
import Home from './Page/Home';
import Pelatihan from './Page/Pelatihan';
import Job from './Page/Job';
import Tentang from './Page/Tentang';
import Login from './Page/Login';
import SignUp from './Page/SignUp';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
      <Router>
        <Navbar />
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>

          <Route path="/SignUp">
            <SignUp />
          </Route>

          <Route path="/Kursus">
            <Kursus />
          </Route>

          <Route path="/Pelatihan">
            <Pelatihan />
          </Route>

          <Route path="/Job">
            <Job />
          </Route>

          <Route path="/Tentang">
            <Tentang />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
