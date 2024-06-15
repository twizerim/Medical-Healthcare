import React from "react";
import Member from "../assets/member.json";
import "../style/coponent/firstcard.css"

export default function Firstcard(props:any){
    return (
        <>
            {Member.map((team,index) => (
                <div className={props.container} key={index}>
                    <div className="image">
                    {team.profile && <img src={require(`../assets/${team.profile}`)} alt="" />}
                    </div>
                    <h1 className="name">{team.name}</h1>
                    <h1 className="position">{team.position}</h1>
                    <p className="explain">{team.desciption}</p>
                </div>
            ))}
        </>
    );
}
