import React from "react";
import { contacts } from "./contacts";
import CardList from "./CardList";


const App = () => {
    return(
        <CardList contacts={contacts}/>
    )
}


export default App;