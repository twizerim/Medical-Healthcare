
import React from "react";
import logo from "../assets/logo.png"
import "../style/coponent/header.css"

export default function Navbar(){
    return (
        <div className="nav">
            <div className="logo">
                <img src={logo} alt="" />
                <div className="logo-text">
                <h1>Health</h1><h2 className="heade">care</h2>
                </div>
            </div>
            <ul className="links">
                <li><a href="/" className="nav-link">Home</a></li>
                <li><a href="/service" className="nav-link">Services</a></li>
                <li><a href="/contact" className="nav-link">Contact us</a></li>
                <li><a href="/panel" className="nav-link">Helps</a></li>
                <li><a href="/signup" className="nav-link">Sign up</a></li>
                <li><a href="/" className="nav-link btn btn-green">Login</a></li>
            </ul>

        </div>    
    )
}