import React from "react";
import "../style/coponent/home.css"
import radio from "../assets/radio.png"
import doctor from "../assets/doctor.png"
import vector from "../assets/Vector.png"
import SingleSwitch from "./switchbutton";

export default function Home(){
    return (
       < div className="home">
         <div className="home-container">
            <div className="left">
                <div className="div">
                <h3>Providing Quality <h4>Healthcare</h4>For A</h3>
                <div className="head-home">
                <h5>Brighter <h3>And</h3>Healthy</h5><h3>Future</h3>
                </div>
                </div>
                <p>At Our Hospital, We are Dedicated To Providing Exceptional Medical Care To Our Patients And Their Famillies.
                  Our Experienced Team Of Medical Professional,Cutting-Edge Technology, And Compassionate Approach
                  Make Us A Leader In The Healthcare Industry
                </p>
                <div className="bottom">
                    <button className="nav-link btn btn-green">Appointments</button>
                    <div className="radio">
                       <img src={radio} alt="" />
                       <p>Watch Video</p>
                    </div>
                </div>
            </div>
            <div className="right">
                <img className="vector" src={vector} alt="" /> 
                <img className="doctor" src={doctor} alt="" />
            </div>
        </div>
         <form action="" className="search-form">
            <h1>Find A Doctor</h1>
             <div className="division">
                <label htmlFor="">
                    <input type="text" placeholder="Name" />
                </label>
                <label htmlFor="">
                    <input type="text" placeholder="Speciality"/>
                </label>
                <div className="switch">
                <span>Available</span>
                <SingleSwitch/>
                </div>
                <button className="nav-link btn btn-green" type="submit">Search</button>
             </div>
         </form>
       </div>
    )
}