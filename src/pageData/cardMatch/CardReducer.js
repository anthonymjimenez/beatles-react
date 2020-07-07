export default (state, action) => {
  if (action.type === "FLIP_CARD") {
    return {
      ...state,
      cardData: state.cardData.map((card) => {
        return card.flipID === action.payload
          ? { ...card, flipped: true }
          : card;
      }),
    };
  } else if (action.type === "SET_FIRSTID") {
    return {
      ...state,
      flipName: action.payload.name,
      flipID: action.payload.id,
    };
  } else if (action.type === "CHECK_MATCH") {
    return {
      ...state,
      flipName: null,
      flipID: null,
      cardData: state.cardData.map((card) => {
        return card.flipped
          ? { ...card, flipped: false, matched: action.payload }
          : card;
      }),
    };
  }
};
