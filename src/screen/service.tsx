
import React from "react";
import Navbar from "../component/header";
import "../style/page/service.css"
import Subscrib from "../component/subscrib";
import Footer from "../component/footer";
import Bookappointment from "../component/bookappointment";

export default function Service(){
    return(
        <>
        <Navbar/>
         <div className="service-container">
            <div className="welcome">
               <div className="welcom-content">
               <div className="text">
               <h1>Meet the Best Hospital </h1>
                <p>We know how large objects will act, but things on a small scale.</p>
                <div className="div">
                    <button className="first">Get Quote Now</button>
                    <span>Learn More</span>
                </div>
               </div>
               <Bookappointment/>
               </div>
            </div>
            <div className="home">
          <div className="subscrib">
          <Subscrib/>
          </div>
          </div>
         </div>
         <Footer/>
        </>
    )
}