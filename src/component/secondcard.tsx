
import React from "react";
import Member from "../assets/testmon.json";
import "../style/coponent/firstcard.css"

export default function Secondcard(props:any){
    return (
        <>
            {Member.map((team,index) => (
                <div className={props.container} key={index}>
                    <div className="image">
                    {team.profile && <img src={require(`../assets/${team.profile}`)} alt="" />}
                    </div>
                    <h1 className="name">{team.service}</h1>
                    <p className="pragrap">{team.pragraph}</p>
                    <div className="add">
                    <span className="names">{team.names}</span>
                    <span>{team.address}</span>
                    </div>
                </div>
            ))}
        </>
    );
}
