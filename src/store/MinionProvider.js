import React, { useReducer } from "react";

import MinionContext from "./minion-context";
import { MINIONS_DATA } from "./minion-data";

const defaultCartState = {
  items: [],
  totalCost: 0,
};

const minionReducer = (state, action) => {
  if (action.type === "selectedAvatar") {
    const filteredMinon = state.data.filter(
      (minion) => minion.id === action.id
    );
    console.log(filteredMinon);
  }
};

const MinionProvider = (props) => {
  const [minionsState, dispatchMinionsAction] = useReducer(
    minionReducer,
    defaultCartState
  );

  const selectedAvatarHandler = (id) => {
    dispatchMinionsAction({ type: "selectedAvatar", id: id });
  };

  const minionContext = {
    data: MINIONS_DATA,
    cartItems: minionsState.cartItems,
    totalCost: minionsState.totalCost,
    onAdd: () => {},
    onSubtract: () => {},
    onSelectedAvatar: selectedAvatarHandler,
  };

  return (
    <MinionContext.Provider value={minionContext}>
      {props.children}
    </MinionContext.Provider>
  );
};

export default MinionProvider;
