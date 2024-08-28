const URL = "http://localhost:8080/"

export const getCurrencies = async () => {
  const currenciesRequest = URL + "currencies"
  try {
    const response = await fetch(currenciesRequest);
    if (!response.ok) {
      throw new Error(`There's been an error: ${response.text}`);
    }

    return await response.json();  
  } catch (error) {
    throw new Error(`There's been an error: ${error}`);
  }
}