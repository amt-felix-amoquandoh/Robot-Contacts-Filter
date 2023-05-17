import React from "react";

import Card from "./Card";

const CardList = ({ contacts }) => {
  return (
    <div className="cardSection">
      {contacts.map((user, i) => {
        return (
          <Card
            key={i}
            id={contacts[i].id}
            name={contacts[i].name}
            email={contacts[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
