import React from "react";
import logo from "../assets/logo.png"
import "../style/coponent/footer.css"

export default function Footer(){
    return (
        <div className="footer-container">
            <div className="one-div">
                <div className="foo-logo">
                    <img src={logo} alt="" />
                     <h1>Healthcare</h1>
                </div>
                <p>Copyright @ 2023 BRIX Templetes I All Right Reserved</p>
            </div>
            <div className="second-div">
                <h2>Product</h2>
                <li>Features</li>
                <li>Pricing</li>
                <li>Case studies</li>
                <li>Review</li>
                <li>Updates</li>
            </div>
            <div className="second-div">
                <h2>Company</h2>
                <li>About</li>
                <li>Contact us</li>
                <li>Carrers</li>
                <li>Culture</li>
                <li>Blog</li>
            </div>
            <div className="second-div">
                <h2>Support</h2>
                <li>Getting started</li>
                <li>Help center</li>
                <li>Server status</li>
                <li>Report a bug</li>
                <li>Chat support</li>
            </div>
            <div className="second-div">
                <h2>Follow us</h2>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Linkdin</li>
                <li>YouTube</li>
            </div>
        </div>
    )
}