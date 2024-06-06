
import React from "react";
import Navbar from "../component/header";
import Footer from "../component/footer";
import Home from "../component/home";

export default function Landingpage(){
    return (
        <div className="landing-container">
          <Navbar/>
          <Home/>
          <Footer/>
        </div>
    )
}