
import React from "react";
import "../style/coponent/firstcard.css"
import "../style/coponent/home.css"

export default function Subscrib(){
    return (
        <div className="subscrib">
            <fieldset>
            <legend>Subscribe to our newsletter</legend>
                <form action="">
                    <label htmlFor="">
                       <input type="text" placeholder="Enter your email"/>
                    </label>
                   <button className="get">Subscribe</button>
                </form>
            </fieldset>
            
        </div>
    )
}