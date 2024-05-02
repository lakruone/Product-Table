import { createContext, useState } from "react"

export const ShowProductModalContext = createContext(false);

export const ShowProductModalContextProvider = ({ children }) => {
  const [showModal, setShowModal ] = useState(false);

  return (
    <ShowProductModalContext.Provider value={{showModal, setShowModal}}>{children}</ShowProductModalContext.Provider>
  )
}
