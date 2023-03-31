import { createContext } from "react";
import { useState } from "react";

export const graphContext = createContext<any>(null);

export function graphProvider({ children }: any) {
  const [graphObject, setGraphObject] = useState({ msg: "" });
  return (
    <graphContext.Provider value={{ graphObject, setGraphObject }}>
      {children}
    </graphContext.Provider>
  );
}
