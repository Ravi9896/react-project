import React from "react";
import Name from "./Name";
import { useState } from "react";

const NameProvider = ({ children }) => {
  const [mode, setMode] = useState();

  return <Name.Provider value={{ mode, setMode }}>{children}</Name.Provider>;
};
export default NameProvider;
