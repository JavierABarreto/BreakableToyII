import { useNavigate } from "react-router-dom"
import useDetail from "../../Hooks/useDetail";

export const FlightCard = ({ data }: any) => {
  const navigate = useNavigate()

  const { setFlight }: any = useDetail();

  const temp = () => {
    setFlight(data)
    navigate("/flights/Details")
  }

  return (
    <a onClick={() => temp()}>
      <div className="container-md border border-3 p-3 my-4">
        <div className="row">
          <div className="col-10">
            <div className="row">
              <span>1:40am - 8:30 pm</span>
            </div>
            <div className="row">
              <div className="col-6">
                <span>San Francisco (SFO) to New York (JFK)</span>
              </div>
              <div className="col-6">
                <span>TOTAL HOURS (STOPS)</span>
              </div>
            </div>
          </div>

          <div className="col-2 text-end">
            <div className="row">
              <span>$1500 MXN</span>
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
                <span>FIRST STOP TIME AND PLACE</span>
              </div>
            </div>
          </div>

          <div className="col-2 text-end">
            <div className="row">
              <span>$1500 MXN</span>
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
