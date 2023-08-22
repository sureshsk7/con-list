import React from "react";
import { Card } from "./Contacts";
import contacts from "../contact";

function App(){
    return (
        <div>

<Card
        name = {contacts[0].name}
        place = {contacts[0].place} 
        tel = {contacts[0].tel}
        image ={contacts[0].image}>
</Card>
        
<Card
        name = {contacts[1].name}
        place = {contacts[1].place} 
        tel = {contacts[1].tel}
        image ={contacts[1].image}>
</Card>

<Card
        name = {contacts[2].name}
        place = {contacts[2].place} 
        tel = {contacts[2].tel}
        image ={contacts[2].image}>
</Card>
    
    </div>
    )
}



export {App };