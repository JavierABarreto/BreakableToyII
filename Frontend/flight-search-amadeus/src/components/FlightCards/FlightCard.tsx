import { useNavigate } from "react-router-dom"
import useDetail from "../../Hooks/useDetail";
import { priceString } from "../../js/price";
import dayjs from "dayjs";
import moment from "moment";
import { AirportInfo } from "../../js/mockData";

export const FlightCard = ({ data }: any) => {
  const navigate = useNavigate()
  const { setFlight }: any = useDetail();
  const { price, travelerPricings, itineraries } = data
  const { currency, total } = price
  const { segments } = itineraries[0]

  const departureDate = dayjs(segments[0].departure.at).format("YYYY-MM-DD HH:mm")
  const arriveDate = dayjs(segments[segments.length-1].arrival.at).format("YYYY-MM-DD HH:mm")
  const nStops = 0;

  const BOSAirport = AirportInfo[0];
  const EWRAirport = AirportInfo[1];

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
    navigate("/flights/Details")
  }


  return (
    <a onClick={() => setFlightData()}>
      <div className="container-md border border-3 p-3 my-4">
        <div className="row">
          <div className="col-10">
            <div className="row">
              <span>{departureDate} - {arriveDate}</span>
            </div>
            <div className="row">
              <div className="col-6">
                <span>{`${BOSAirport.address.cityName} (${BOSAirport.address.cityCode}) to ${EWRAirport.address.cityName} (${EWRAirport.address.cityCode})`}</span>
              </div>
              <div className="col-6">
                <span>{timeString} ({nStops == 0 ? "Nonstops" : `${nStops} Stops`})</span>
              </div>
            </div>
          </div>

          <div className="col-2 text-end">
            <div className="row">
              <span>{priceString(currency, total)}</span>
            </div>
            <div className="row">
              <span>total</span>
            </div>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-10">
            <div className="row">
              <div className="col-6">
                <span>Airline</span>
              </div>

              <div className="col-6">
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

          <div className="col-2 text-end">
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
