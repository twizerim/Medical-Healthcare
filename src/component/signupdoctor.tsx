import React,{useState} from "react"
import "../style/coponent/signup.css"
export default function SignupWithdoctor(){
    const [documa,setdocuma]=useState(false)
    const [nondocuma,setnondocuma]=useState(true)

    const HandleNext=()=>{
        setdocuma(true)
        setnondocuma(false)
    }
    return (
        <>
         <fieldset className="fieldset-doctor">
            <legend>Create doctor account!!!</legend>
            
                 <form action="" className="doctor-container">
                     <div className="doctor-left">
                         <div className="group">
                             <label htmlFor="">
                               <input type="text" placeholder="Full names"/>
                               <span></span>
                            </label>
                         </div>
                         <div className="group">
                             <label htmlFor="">
                               <input type="email" id="email" placeholder="Yourname@gmail.com"/>
                               <span>Required</span>
                            </label>
                         </div>
                         <div className="group">
                             <label htmlFor="">
                               <input type="text" placeholder="Gender"/>
                               <span></span>
                            </label>
                         </div>
                         <div className="group">
                             <label htmlFor="">
                               <input type="string" placeholder="Specialisted in"/>
                               <span></span>
                            </label>
                         </div>
                         <div className="group">
                             <label htmlFor="">
                               <input type="password" placeholder="Password"/>
                               <span></span>
                            </label>
                         </div>
                         <p onClick={HandleNext}><i>Next</i></p>
                     </div>
                     <div className="doctor-right">
                        {nondocuma && (
                           <div className="words">
                              <h5>Have any account?</h5>
                              <p>Login to access premium tools and services. We provides all things which is needed for you</p>
                               <span><i>Login</i></span>
                           </div>
                        )}
                         {documa && (
                           <div className="documment">
                           <h6>Upload requirement document</h6>
                        <div className="group">
                            <label htmlFor="">
                              <input type="file" placeholder="cv"/>
                              <span></span>
                           </label>
                        </div>
                        <div className="group">
                            <label htmlFor="">
                              <input type="file" placeholder="profile"/>
                              <span></span>
                           </label>
                        </div>
                        <div className="group">
                            <label htmlFor="">
                              <input type="file" placeholder="Lisence"/>
                              <span></span>
                           </label>
                        </div>
                        <div className="button">
                            <button type="submit"><i>Submit</i></button>
                        </div>
                        </div>
                         )}
                     </div>
                 </form>
         </fieldset>
        </>
    )
}