import { useNavigate } from "react-router-dom"
import useDetail from "../../Hooks/useDetail";

export const RoundFlightCard = () => {
  const navigate = useNavigate()

  const data = { name: "1" };
  const { setFlight }: any = useDetail();

  const temp = () => {
    setFlight(data)
    navigate("/flights/Details")
  }


  return (
    <a onClick={() => temp()}>
      <div className="container-md my-4">
        <div className="row">
          <div className="col-10 border border-3 border-end-0">
            <div className="row border border-3 border-start-0 border-end-0 border-top-0 p-3">
              <div className="col-8">
                <div className="row">
                  <span>TIMEE</span>
                </div>
                <div className="row">
                  <span>FROM TO DEST</span>
                </div>
              </div>

              <div className="col-4">
                <div className="row">
                  ASD
                </div>
                
                <div className="row">
                  <span>ASD</span>
                </div>
              </div>
            </div>

            <div className="row mt-2 p-3">
              <div className="col-8">
                <span className="">Aeroline</span>
              </div>
              <div className="col-4">
                ASD
              </div>
            </div>
          </div>

          <div className="col-2 border border-3 p-3">
            <div className="row text-end">
              <span>$1500 MXN</span>
              <span>total</span>
            </div>

            <div className="row text-end mt-2">
              <span>$300 MXN</span>
              <span>per traveler</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}
