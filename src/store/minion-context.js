import React from "react";

const MinionContext = React.createContext({
  cartItems: [],
  totalCost: 0,
  onAdd: () => {},
  onSubtract: () => {},
  onSelectedAvatar: () => {},
});

export default MinionContext;
