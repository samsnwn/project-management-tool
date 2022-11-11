import { createContext, useState, useEffect } from "react";

const Context = createContext();

const ContextProvider = ({children}) => {
  const {user, setUser} = useState()

  return (
    <Context.Provider value={{user, setUser}}>
        {children}
    </Context.Provider>
  )
}

export {Context, ContextProvider}