import React,{useState} from "react"
import SignupWithdocto from "../component/signupUser"
import SignupWithdoctor from "../component/signupdoctor"
import "../style/coponent/signup.css"
import Navbar from "../component/header"


export default function Signup(){
    const [tabs,seTabs]=useState(true)
    const [doctor,setDoctor]=useState(false)
    const [patient,setPatient]=useState(false)

    const Handlepatient=()=>{
        seTabs(false)
        setDoctor(false)
        setPatient(true)
    }
    const Handledoctor=()=>{
        seTabs(false)
        setDoctor(true)
        setPatient(false)
    }
    return (
       <>
        <Navbar/>
        <div className="signup">
        {tabs && (<h6 onClick={Handlepatient}>Signup with a patient</h6>)} {tabs && (<h6 onClick={Handledoctor}>Signup with a doctor</h6>)}
        {patient && (<SignupWithdocto/>)}
        {doctor && (<SignupWithdoctor/>)}
       </div>
       </>
    )
}