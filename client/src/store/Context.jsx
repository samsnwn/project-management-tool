import { createContext, useState, useEffect } from "react";

const Context = createContext();

const ContextProvider = ({children}) => {
  // user states
  const [user, setUser] = useState()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <Context.Provider value={{user, setUser, isLoggedIn, setIsLoggedIn}}>
        {children}
    </Context.Provider>
  )
}

export {Context, ContextProvider}