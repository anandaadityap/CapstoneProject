import React from 'react'
import Navbar from '../Components/Navbar';
import FormSignUp from '../Components/Form/FormSignUp.js';
import Footer from '../Components/Footer';
import BackSignup from '../assets/SignUp.png'

function SignUp(){
    return(
        <>
            <Navbar />
            <FormSignUp src={BackSignup}/>
            <Footer />           
        </>
    )
}

export default SignUp;