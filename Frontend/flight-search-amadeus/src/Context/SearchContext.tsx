import { createContext, useState } from "react";

const SearchParamsContext = createContext({});

export const SearchParamsProvider = ({ children }: any) => {
  const [params, setParams] = useState({
    departureAirportCode: "",
    arrivalAirportCode: "",
    departureDate: "",
    returnDate: "",
    numberAdults: 0,
    currency: "",
    stops: false,
    max: 20,
    sortByPrice: false,
    orderPrice: "",
    sortByDate:false,
    orderDate: ""
  })

  return (
    <SearchParamsContext.Provider value={{ params, setParams}}>
        {children}
    </SearchParamsContext.Provider>
  )
}
export default SearchParamsContext
