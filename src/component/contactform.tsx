
import React from "react";
import "../style/coponent/contactform.css"

export default function Contactform(){
    return(
        <div className="form-container">
             <form action="">
                <div className="flex-devision">
                    <div className="twinns">
                    <div className="division">
                         <label htmlFor="firstname">First name
                            <input type="text" name="firstname" placeholder="Type your first name"/>
                         </label>
                    </div>
                    <div className="division">
                         <label htmlFor="lastname">Last name
                            <input type="text" name="lastname" placeholder="Type your last name"/>
                         </label>
                    </div>
                    </div>
                    <div className="twinns">
                    <div className="division">
                         <label htmlFor="email">Email
                            <input type="email" name="email" placeholder="Type you email"/>
                         </label>
                    </div>
                    <div className="division">
                         <label htmlFor="phone">Phone number
                            <input type="text" name="phone" placeholder="Type your phone number" />
                         </label>
                    </div>
                    </div>
                </div>
                <div className="division">
                    <label htmlFor="">Choose a topic
                         <input type="text" />
                    </label>
                </div>
                <div className="division">
                    <label htmlFor="message">Message
                         <textarea name="message" id="" placeholder="Type your message"></textarea>
                    </label>
                </div>
               <div className="buto">
               <button type="submit"><i>Submit</i></button>
               </div>
             </form>
        </div>
    )
}