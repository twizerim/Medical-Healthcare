
import React from "react";
import "../style/coponent/firstcard.css"
import "../style/coponent/home.css"

export default function Subscrib(){
    return (
        <div className="subscrib">
            <h1>Subscribe to our newsletter</h1>
            <form action="">
                <label htmlFor="">
                    <input type="text" placeholder="Enter your email"/>
                </label>
                <button className="get">Subscribe</button>
            </form>
        </div>
    )
}