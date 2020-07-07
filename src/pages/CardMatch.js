import React from "react";
import { CardList } from "../components/CardComponents/CardList";

import { CardProvider } from "../pageData/cardMatch/CardContext";
export const CardMatch = () => {
  return (
    <>
      <CardProvider>
        <CardList />
      </CardProvider>
    </>
  );
};
