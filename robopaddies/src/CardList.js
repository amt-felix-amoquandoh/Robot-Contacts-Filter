import React from "react";

import Card from "./Card"

const CardList = ({contacts}) =>{
   return(
    <div>
        <Card id={contacts[0].id} name={contacts[0].name} email={contacts[0].email} />
        <Card id={contacts[1].id} name={contacts[1].name} email={contacts[1].email} />
        <Card id={contacts[2].id} name={contacts[2].name} email={contacts[2].email} />
    </div>
   )
}

  


export default CardList; 