import React from "react";
import "../style/coponent/home.css"
import radio from "../assets/radio.png"
import doctor from "../assets/doctor.png"
import vector from "../assets/Vector.png"
import SingleSwitch from "./switchbutton";
// import image from "../assets/image.png"
import Firstcard from "./firstcard";
import Secondcard from "./secondcard";
import Subscrib from "./subscrib";

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
         <div className="statistic">
             <h1>Our results in numbers</h1>
             <div className="numbers">
                <div className="number">
                    <div className="percet">
                        <h2>99</h2><h2>%</h2>
                    </div>
                    <p>Customer satisfaction</p>
                </div>
                <div className="number">
                    <div className="percet">
                        <h2>15</h2><h2 className="kilo">K</h2>
                    </div>
                    <p>Online Patients</p>
                </div>
                <div className="number">
                    <div className="percet">
                        <h2>12</h2><h2>K</h2>
                    </div>
                    <p>Patients Recovered</p>
                </div>
                <div className="number">
                    <div className="percet">
                        <h2>240</h2><h2>%</h2>
                    </div>
                    <p>Company growth</p>
                </div>
             </div>
         </div>
         {/* <div className="content">
             <div className="text">
                <h1>You have lots of reasons to choose us</h1>
                <p>Your welcome to our medica and view consultation  and 
                    sechedule appointment to doctor with your reasons</p>
                    <div className="deeferbuto">
                        <button className="get" >Get started</button>
                        <button >Talk to sales</button>
                    </div>
             </div>
             <div className="picture">
                <img src={image} alt="" />
             </div>
         </div> */}
         <div className="team">
            <h1 className="membertitle">Meet our team member</h1>
            <p className="teamhed">Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat gravida malesuada quam commodo id integer nam.</p>
             <div className="cards">
                <Firstcard
                 container="cardmember"
                />
             </div>
         </div>
         <div className="team">
            <h1 className="membertitle">Testimonial</h1>
            <p className="teamhed">Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan. </p>
             <div className="cards">
                <Secondcard
                 container="cardtestmon"
                />
             </div>
             <Subscrib/>
         </div>
       </div>
    )
}