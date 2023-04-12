import React from "react";
import { contacts } from "./contacts";
import CardList from "./CardList";


const App = () => {
    return(
        <div>
            <hi>My Robot Contacts</hi>
            <CardList contacts={contacts}/>
        </div>
    )
}


export default App;