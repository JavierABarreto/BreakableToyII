import { getCurrencies } from "./API"

export const currenciesLoader = async () => {
  const data = await getCurrencies()
  
  return data;
}