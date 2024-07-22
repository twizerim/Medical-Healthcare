
import React from "react";
import "../style/page/panel.css"


export default function Adminpanel(){
    return (
        <div className="panel-container">
            <div className="left-nav">
                <li><img src={require("../assets/Group 18.png")} alt="" /></li>
                <li><img src={require("../assets/Group 17.png")} alt="" /></li>
                <li><img src={require("../assets/Frame.png")} alt="" /></li>
                <li><img src={require("../assets/Group 15.png")} alt="" /></li>
                <li><img src={require("../assets/Group 19.png")} alt="" /></li>
                <li><img src={require("../assets/Group 26.png")} alt="" /></li>
            </div>
            <div className="admin-panel">
                 <div className="navigation">
                     <div className="search">
                        <form action="">
                            <input type="text" placeholder="Search"/>
                            <img src={require("../assets/Extra Icons.png")} alt="" />
                        </form>
                     </div>
                     <div className="notification">
                        <img src={require("../assets/Icons-2.png")} alt="" />
                        <img src={require("../assets/Frame 58.png")} alt="" />
                        <img src="" alt="doctor" />
                     </div>
                 </div>
                 <div className="activity">
                     <div className="act-left">
                      <h1>Patient list</h1>
                        <div className="admin-card">
                            <h6>Visits for today</h6>
                            <h1>104</h1>
                            <div className="patients">
                                <div className="patient">
                                    <p>New Patients</p>
                                    <h2>40</h2>
                                </div>
                                <div className="patient">
                                    <p>New Patients</p>
                                    <h2>40</h2>
                                </div>
                            </div>
                        </div>
                     </div>
                     <div className="act-right">
                        <h1>Calendar</h1>
                     </div>
                 </div>
            </div>
        </div>
    )
}