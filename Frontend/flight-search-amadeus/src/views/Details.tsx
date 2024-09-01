import { Link } from "react-router-dom"
import { Segments } from "../components/Details/Segments"
import useDetail from "../Hooks/useDetail"
import { priceString } from "../js/price";

export const Details = () => {
  const { flight }: any = useDetail();
  const { itineraries, price, travelerPricings } = flight
  const { base, currency, fees, total } = price

  return (
    <div className="container-lg mt-5">
      <h1>Details</h1>

      <Link className="btn btn-dark my-4" to={"/flights"}>{"< Go Back"}</Link>

      <div className="row p-4" >
        <div className="col-8 m-1 overflow-scroll" style={{ height: 800 }}>
          {
            itineraries?.map((itinerary: any, index: any) => {
              const { segments } = itinerary
              
              return (
                segments?.map((segment: any, index: any) => (
                  <>
                    <Segments segment={segment} travelerPricings={travelerPricings} index={index} />
                  </>
                ))
              )
            })
          }
        </div>

        <div className="col border m-1 p-4 overflow-scroll" style={{ height: 600 }}>
          <div className="row">
            <h4>Price Breakdown</h4>
            <div className="border"></div>
          </div>
          
          <div className="row">
            <div className="d-flex">
              <p className="col-4">Base:</p>
              <p className="col text-end">{priceString(currency, base)}</p>
            </div>

            <div className="d-flex">
              <p className="col-4">Fees:</p>
              <p className="col text-end"></p>
            </div>

            <div className="fees-section">
              {
                fees.map((fee: any, index: any) => (
                  <div className="d-flex px-2" key={"Fee"+index}>
                    <p className="col-4">{fee.type}</p>
                    <p className="col text-end">{priceString(currency, fee.amount)}</p>
                  </div>
                ))
              }
            </div>

            <div className="border"></div>
            
            <div className="d-flex">
              <p className="col-4">Total:</p>
              <p className="col text-end">{priceString(currency, total)}</p>
            </div>
          </div>

          <div className="row mt-4">
            <h4>Per traveler</h4>
            <div className="border mt-1 mb-3"></div>

            <div className="overflow-scroll" style={{ height: 200 }}>
              {
                travelerPricings?.map((traveler: any, index: any) => (
                  <div className="d-flex">
                    <p className="col-4">{`Traveler ${index+1}`}</p>
                    <p className="col text-end">{priceString(currency, traveler.price.total)}</p>
                  </div>
                ))
              }
            </div>

          </div> 
        </div>
      </div>
    </div>
  )
}
