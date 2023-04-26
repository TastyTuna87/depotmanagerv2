import React from "react";
import { Card } from "./Card.jsx";

export const CardList = ({ cards, setCards, deleteNote, editNote }) => {
  return (
    <div className="card-container">
      {cards.length === 0 && "No Notes"}
      {cards.map((card) => {
        return <Card key={card.id} {...card} deleteNote={deleteNote} />;
      })}
    </div>
  );
};
