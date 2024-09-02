const URL = "http://localhost:8080/"

export const getAirportData =  async (name: string) => {
  const airportRequest = URL + "airportData?name="+name

  try {
    const response = await fetch(airportRequest);

    if (!response.ok) {
      throw new Error(`There's been an error: ${response.text}`);
    }
    
    return await response.json();
  } catch (error) {
    throw new Error(`There's been an error: ${error}`);
  }
}


export const getAirlineData =  async (code: string) => {
  const airlineRequest = URL + "airlineData?IATACode="+code

  try {
    const response = await fetch(airlineRequest);

    if (!response.ok) {
      throw new Error(`There's been an error: ${response.text}`);
    }
    
    return await response.json();
  } catch (error) {
    throw new Error(`There's been an error: ${error}`);
  }
}


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

export const getFlights = async (params: any) => {
  let flightsRequest = URL + "flights?"
  const {departureAirportCode, arrivalAirportCode, departureDate, returnDate, numberAdults, currency, stops, max, sortByDate, sortByPrice, orderDate, orderPrice } = params;
  
  if(departureAirportCode != "") {
    flightsRequest += `departureAirportCode=${departureAirportCode}&`
  }

  if(arrivalAirportCode != "") {
    flightsRequest += `arrivalAirportCode=${arrivalAirportCode}&`
  }

  if(departureDate != "") {
    flightsRequest += `departureDate=${departureDate}&`
  }

  if(returnDate != "") {
    flightsRequest += `returnDate=${returnDate}&`
  }

  if(numberAdults != 0) {
    flightsRequest += `numberAdults=${numberAdults}&`
  }

  if(currency != "") {
    flightsRequest += `currency=${currency}&`
  }

  if(stops) {
    flightsRequest += `sortByDate=${stops}&`
  }

  if(sortByPrice) {
    flightsRequest += `sortByPrice=${sortByPrice}&`
  }

  if(sortByDate) {
    flightsRequest += `sortByDate=${sortByDate}&`
  }

  if(orderPrice != "") {
    flightsRequest += `orderPrice=${orderPrice}&`
  }

  if(orderDate != "") {
    flightsRequest += `orderDate=${orderDate}&`
  }

  flightsRequest += `max=${max}&`

  try {
    const response = await fetch(flightsRequest);

    if (!response.ok) {
      throw new Error(`There's been an error: ${response.text}`);
    }
    
    return await response.json();
  } catch (error) {
    throw new Error(`There's been an error: ${error}`);
  }
}