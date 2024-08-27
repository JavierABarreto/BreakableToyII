import { createContext, useState } from "react"

const DetailsContext = createContext({});

export const DetailsProvider = ({ children }: any) => {

  const [flight, setFlight] = useState()

  return (
    <DetailsContext.Provider value={{ flight, setFlight}}>
        {children}
    </DetailsContext.Provider>
  )
}

export default DetailsContext