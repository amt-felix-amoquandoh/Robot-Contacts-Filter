import React from "react";
import { contacts } from "./contacts";
import CardList from "./CardList";


const App = () => {
    return(
        <div>
            <h1 className="tc">My Robot Contacts</h1>
            <CardList contacts={contacts}/>
        </div>
    )
}


export default App;