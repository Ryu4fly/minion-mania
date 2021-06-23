import React from "react";

const MinionContext = React.createContext({
  data: [],
  items: [],
  totalCost: 0,
  onAdd: () => {},
  onSubtract: () => {},
});

export default MinionContext;
