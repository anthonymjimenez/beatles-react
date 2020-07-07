import React, { createContext, useReducer } from "react";
import CardReducer from "./CardReducer";
import ImageData from "./ImageData";

const initialState = {
  cardData: ImageData,
  gameOver: false,
  flipName: null,
  flipID: null,
  flips: 0,
  matches: 0,
};

// two more
const matchedCards = [];

export const CardContext = createContext(initialState);

export const CardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CardReducer, initialState);
  const cards = state.cardData;
  const flipCard = (id, cardName) => {
    if (state.flipID === id || matchedCards.includes(cardName)) return;

    dispatch({
      type: "FLIP_CARD",
      payload: id,
    });

    state.flipID
      ? checkMatch(cardName)
      : dispatch({ type: "SET_FIRSTID", payload: { name: cardName, id: id } });
  };

  const checkMatch = (cardName) => {
    if (state.flipName === cardName) {
      matchedCards.push(cardName);
      dispatch({ type: "CHECK_MATCH", payload: true });
    } else dispatch({ type: "CHECK_MATCH", payload: false });
  };

  return (
    <CardContext.Provider
      value={{
        cards,
        flipCard,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
