import React, { useContext } from "react";
import { CardContext } from "../../pageData/cardMatch/CardContext";
import { Card } from "./Card";
import Ids from "ids";
import "./Card.css";
// setTurns

export const CardList = () => {
  const { cards } = useContext(CardContext);
  console.log(cards);
  return (
    <>
      {cards.map((cardEvent) => (
        <Card
          //.flip
          //.done
          card={cardEvent}
        />
      ))}
    </>
  );
};
