import { createContext, useState } from "react"

export const ShowModalContext = createContext(false);

export const ShowModalContextProvider = ({ children }) => {
  const [showModal, setShowModal ] = useState(false);
  const [modalType, setModalType ] = useState(null);

  return (
    <ShowModalContext.Provider value={{showModal, setShowModal, modalType, setModalType}}>{children}</ShowModalContext.Provider>
  )
}
