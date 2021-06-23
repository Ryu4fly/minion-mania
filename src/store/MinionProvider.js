import React, { useReducer } from "react";

import MinionContext from "./minion-context";

const defaultMinionDataState = {
  items: [],
  totalCost: 0,
};

const minionReducer = (state, action) => {
  let selectedMinion;
  if (action.type === "selectedAvatar") {
    selectedMinion = state.data.filter((minion) => minion.id === action.id);
  }
  return selectedMinion[0];
};

const MinionProvider = (props) => {
  const [minionsState, dispatchMinionsAction] = useReducer(
    minionReducer,
    defaultMinionDataState
  );

  const minionContext = {
    // cartItems: minionsState.cartItems,
    // totalCost: minionsState.totalCost,
    onAdd: () => {},
    onSubtract: () => {},
    // onSelectedAvatar: selectedAvatarHandler,
  };

  return (
    <MinionContext.Provider value={minionContext}>
      {props.children}
    </MinionContext.Provider>
  );
};

export default MinionProvider;
