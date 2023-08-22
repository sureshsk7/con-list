import React from "react";

function Card(props){
    return <div>
        
        <div className="mainblock">
                <div className="block1">
                <h1>{props.name}</h1>
                <h2>{props.place} <br></br>{props.tel}</h2>
                </div>
                <div className="block2">
                <img src={props.image} alt=""></img>
                </div>
            </div> 
    </div>
}

export {Card};