
import React from "react";
import Navbar from "../component/header";
import Footer from "../component/footer";
import Subscrib from "../component/subscrib";
import Contactform from "../component/contactform";

export default function Contactus(){
    return(
        <>
        <Navbar/>
        <div >
          <div className="welcome"></div>
          <div className="home">
            <div className="cotheading">
               <h1>Get In Touch</h1>
               <h2>Contact Us</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            <Contactform/>
          <div className="subscrib">
          <Subscrib/>
          </div>
          </div>
          
        </div>
        <Footer/>
        </>
    )
}