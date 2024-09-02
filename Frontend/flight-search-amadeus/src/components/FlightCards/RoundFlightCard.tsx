import { useNavigate } from "react-router-dom"
import useDetail from "../../Hooks/useDetail";
import dayjs from "dayjs";
import { priceString } from "../../js/price";
import moment from "moment";

export const RoundFlightCard = ({ data }: any) => {
  const navigate = useNavigate()
  const { setFlight }: any = useDetail();
  const { price, travelerPricings, itineraries } = data
  const { currency, total } = price

  const info1 = itineraries[0];
  const info2 = itineraries[1];

  const departureDate1 = dayjs(info1?.segments[0].departure.at).format("YYYY-MM-DD HH:mm")
  const arriveDate1 = dayjs(info1?.segments[info2?.segments.length-1].arrival.at).format("YYYY-MM-DD HH:mm")

  const departureDate2 = dayjs(info2?.segments[0].departure.at).format("YYYY-MM-DD HH:mm")
  const arriveDate2 = dayjs(info2?.segments[info2?.segments.length-1].arrival.at).format("YYYY-MM-DD HH:mm")

  const nStops1 = 0
  const nStops2 = 0
  
  const setFlightData = () => {
    setFlight(data)
    navigate("/flights/details")
  }


  const time = (segments: any) => {
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

  return (
    <a onClick={() => setFlightData()}>
      <div className="container-md my-4">
        <div className="row">
          <div className="col-10 border border-3 border-end-0">
            <div className="row border border-3 border-start-0 border-end-0 border-top-0 p-3">
              <div className="col-9">
                <div className="row">
                  <span>{departureDate1} - {arriveDate1}</span>
                </div>
                <div className="row">
                  <div className="col-7">
                    <>city</>
                  </div>
                  <div className="col-5">
                    <span>{time(info1?.segments)} ({nStops1 == 0 ? "Nonstops" : `${nStops1} Stops`})</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-2 p-3">
              <div className="col-9">
                  <div className="row">
                    <span>{departureDate2} - {arriveDate2}</span>
                  </div>
                  <div className="row">
                    <div className="col-7">
                      <>city</>
                    </div>
                    <div className="col-5">
                      <span>{time(info2?.segments)} ({nStops2 == 0 ? "Nonstops" : `${nStops2} Stops`})</span>
                    </div>
                  </div>
                </div>
            </div>
          </div>

          <div className="col-2 border border-3 p-3">
            <div className="row text-end">
              <span>{priceString(currency, total)}</span>
              <span>total</span>
            </div>

            <div className="row text-end mt-2">
              <span>{priceString(currency, (total / travelerPricings.length))}</span>
              <span>per traveler</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}
