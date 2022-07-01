import React from "react";
import Navbar from "../Components/Navbar";
import FormLogin from "../Components/Form/FormLogin";
import Footer from "../Components/Footer";
import CardHome from "../Components/Card/CardHome";
import BackLogin from "../assets/login.png";

function Login() {
  return (
    <>
      <Navbar />
      <FormLogin src={BackLogin}/>
      <Footer />
    </>
  );
}

export default Login;
