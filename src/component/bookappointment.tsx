
import React from "react";


export default function Bookappointment(){
    return (
        <div className="book-container">
            <h6>Book Appointment</h6>
           <form action="">
              <div className="division">
                <label htmlFor="">Name
                    <input type="text" placeholder="Full names"/>
                </label>
              </div>
              <div className="division">
                <label htmlFor="">Email address
                    <input type="text" placeholder="example@gmail.com"/>
                </label>
              </div>
              <div className="division">
                <label htmlFor="">Departement
                    <input type="text" />
                </label>
              </div>
              <div className="division">
                <label htmlFor="">Time
                    <input type="text" />
                </label>
              </div>
              <div className="buto">
               <button type="submit"><i>Book Appointment</i></button>
               </div>
           </form>
        </div>
    )
}