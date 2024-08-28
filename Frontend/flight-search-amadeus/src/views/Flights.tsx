import { Link } from "react-router-dom"
import { FlightCard } from "../components/FlightCards/FlightCard"
import { RoundFlightCard } from "../components/FlightCards/RoundFlightCard"
import { flights } from "../js/mockData"

export const Flights = () => {
  return (
    <div className="container-md mt-5">
      <h1>Flights</h1>

      <Link className="btn btn-dark mb-5" to={"/"}>{"< Go Back"}</Link>

      <div className="border overflow-scroll py-2 px-4 position-relative" style={{ height: 600 }}>
          {
            flights.length > 0 ?
              <>
                {
                  flights.map((flight, index) => {
                    const { id, oneWay } = flight
                    
                    return (
                      !oneWay ?
                        <FlightCard data={flight} key={id} />
                      :
                        <RoundFlightCard data={flight} key={id} />
                    )
                  })
                }
              </>
            :
              <h2 className="position-absolute top-50 start-50 translate-middle text-secondary">No flights available</h2>
          }
      </div>
    </div>
  )
}
