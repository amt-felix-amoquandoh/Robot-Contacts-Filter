import React from "react";

import Card from "./Card"

const CardList = ({contacts}) =>{
   const contactCard = contacts.map((user, i) => {
       return  <Card id={contacts[i].id} name={contacts[i].name} email={contacts[i].email} />
   })
   return(
    <div>
      {contactCard}
    </div>
   );
}

  


export default CardList; 