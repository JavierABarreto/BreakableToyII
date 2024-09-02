import { useNavigate } from "react-router-dom"
import useDetail from "../../Hooks/useDetail";
import { priceString } from "../../js/price";
import dayjs from "dayjs";
import moment from "moment";
import { getAirlineData, getAirportData } from "../../js/API";
import { useEffect, useState } from "react";

export const FlightCard = ({ data }: any) => {
  const navigate = useNavigate()
  const { setFlight }: any = useDetail();
  const { price, travelerPricings, itineraries } = data
  const { currency, total } = price
  const { segments } = itineraries[0]

  const [airportInfo1, setAirportInfo1]: any = useState({})
  const [airportInfo2, setAirportInfo2]: any = useState({})
  const [airlineData, setAirlineData]: any = useState({})

  const departureDate = dayjs(segments[0].departure.at).format("YYYY-MM-DD HH:mm")
  const arriveDate = dayjs(segments[segments.length-1].arrival.at).format("YYYY-MM-DD HH:mm")
  const nStops = 0;

  const getData = async () => {
    setAirportInfo1(await getAirportData(segments[0].departure.iataCode))
    setAirportInfo2(await getAirportData(segments[segments.length-1].arrival.iataCode))
    setAirlineData(await getAirlineData(segments[0].departure.iataCode))
  }

  const time = () => {
    let time = 0

    segments.forEach((element: any) => {
      const departureDate = dayjs(element.departure.at).format("YYYY-MM-DD HH:mm")
      const departureInSecs = dayjs(departureDate).unix()
      
      const arriveDate = dayjs(element.arrival.at).format("YYYY-MM-DD HH:mm")
      const arriveInSecs = dayjs(arriveDate).unix()

      time += arriveInSecs - departureInSecs
    });

    const timeData = moment.duration(time, "seconds")
    const hours = timeData.hours()
    let mins = timeData.minutes()

    return `${hours}h ${mins < 10 ? `0${mins}` : mins }m`
  }

  const timeString = time()

  const setFlightData = () => {
    setFlight(data)
    navigate("/flights/details")
  }

  useEffect(() => {
    getData()
  }, [data])

  return (
    <a onClick={() => setFlightData()}>
      <div className="container-md border border-3 p-3 my-4">
        <div className="row">
          <div className="col-9">
            <div className="row">
              <span>{departureDate} - {arriveDate}</span>
            </div>
            <div className="row">
              <div className="col-7">
                <span>{`${airportInfo1[0]?.address?.cityName} (${airportInfo1[0]?.address?.cityCode}) to ${airportInfo2[0]?.address?.cityName} (${airportInfo2[0]?.address?.cityCode})`}</span>
              </div>
              <div className="col-5">
                <span>{timeString} ({nStops == 0 ? "Nonstops" : `${nStops} Stops`})</span>
              </div>
            </div>
          </div>

          <div className="col-3 text-end">
            <div className="row">
              <span>{priceString(currency, total)}</span>
            </div>
            <div className="row">
              <span>total</span>
            </div>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-9">
            <div className="row h-100">
              <div className="col-7 d-flex align-items-end">
                <span>{airlineData?.businessName != undefined ? airlineData?.businessName : "Airline"} ({airlineData?.businessName != undefined ? airlineData?.iataCode : "XX"})</span>
              </div>

              <div className="col-5">
                {
                  nStops > 0 ?
                    <div>
                      <span>FIRST STOP TIME AND PLACE</span>
                    </div>
                  :
                    <></>
                }
              </div>
            </div>
          </div>

          <div className="col-3 text-end">
            <div className="row">
              <span>{priceString(currency, total / travelerPricings.length)}</span>
            </div>

            <div className="row">
              <span>per Traveler</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}
