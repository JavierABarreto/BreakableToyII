import { Link } from "react-router-dom"
import { Segments } from "../components/Details/Segments"
import { useContext } from "react"
import { FlightContext } from "../js/Context"

export const Details = () => {
  const data = useContext(FlightContext);
  
  return (
    <div className="container-lg mt-5">
      <h1>Details</h1>

      <Link className="btn btn-dark my-4" to={"/flights"}>{"< Go Back"}</Link>

      <div className="row border p-4" style={{ height: 600 }}>
        <div className="col-8 m-1 overflow-scroll" style={{ height: 500 }}>
          <Segments />
          <Segments />
          <Segments />
          <Segments />
          <Segments />
          <Segments />
        </div>

        <div className="col border m-1 p-4">
          <div className="row">
            <p>Price Breakdown</p>
          </div>
          
          <div className="row">
            <p>Base</p>
            <p>Feeds</p>
            <p>Total</p>
          </div>

          <div className="row">
            <p>Per Transfer</p>
          </div> 
        </div>
      </div>
  </div>
  )
}
