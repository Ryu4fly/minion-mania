import React from "react";

const MinionContext = React.createContext({
  data: [],
  cartItems: [],
  totalCost: 0,
  onAdd: () => {},
  onSubtract: () => {},
  onSelectedAvatar: () => {},
});

export default MinionContext;
