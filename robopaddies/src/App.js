import React from "react";
import { contacts } from "./contacts";
import CardList from "./CardList";
import SearchArea from "./Search"


const App = () => {
    return(
        <div>
            <h1 className="tc">My Robot Contacts</h1>
            <SearchArea/>
            <CardList contacts={contacts}/>
        </div>
    )
}


export default App;