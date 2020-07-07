import React, { useContext } from "react";
import { CardContext } from "../../pageData/cardMatch/CardContext";
//   key = {id.next()}

export const Card = ({ card }) => {
  const { flipCard } = useContext(CardContext);

  var classNameString = "card " + card.name;

  return (
    <>
      {card.flipped ? <p> Flipped </p> : <p>Not Flipped</p>}
      {card.matched ? <p> Matched</p> : <p>Not matched</p>}
      {card.name}
      <button onClick={() => flipCard(card.flipID, card.name)}>
        <div className={classNameString} />
      </button>
    </>
  );
};
