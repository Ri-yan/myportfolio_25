import  { createContext, useState } from "react";

export const MouseContext:any = createContext({
  cursorType: "",
  cursorChangeHandler: () => {},
});

const MouseContextProvider = (props:any) => {
  const [cursorType, setCursorType] = useState("");

  const cursorChangeHandler = (cursorType:any) => {
    setCursorType(cursorType);
  };

  return (
    <MouseContext.Provider
      value={{
        cursorType: cursorType,
        cursorChangeHandler: cursorChangeHandler,
      }}
    >
      {props.children}
    </MouseContext.Provider>
  );
};

export default MouseContextProvider;