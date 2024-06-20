"use client";
import { createContext, useState } from "react";

export const GlobalContext = createContext({});

export const GlobalContextProvider = ({ children }: any) => {
  const [peoples, setPeoples] = useState([]);
  const [selectPeoples, setSelectedPeoples] = useState([]);

  const ContextValue = {
    peoples: peoples,
    setPeoples: (val: any) => setPeoples(val),
    selectPeoples: selectPeoples,
    setSelectedPeoples: (val: any) => setSelectedPeoples(val),
  };

  return (
    <GlobalContext.Provider value={ContextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
