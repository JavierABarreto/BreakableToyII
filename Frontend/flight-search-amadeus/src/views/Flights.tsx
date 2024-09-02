import { Link } from "react-router-dom"
import { FlightCard } from "../components/FlightCards/FlightCard"
import { RoundFlightCard } from "../components/FlightCards/RoundFlightCard"
import useSearchParams from "../Hooks/useSearchParams"
import { getFlights } from "../js/API"
import { useEffect, useState } from "react"
import { Pagination } from "../components/Pagination"

export const Flights = () => {
  const { params }: any = useSearchParams();
  const { returnDate } = params

  const [ orderPrice, setOrderPrice ] = useState("none")
  const [ btnPriceText, setBtnPriceText ] = useState("Ascendant")
  
  const [ orderDate, setOrderDate ] = useState("none")
  const [ btnDateText, setBtnDateText ] = useState("Ascendant")

  const [ data, setData] = useState([]);
  const { flights, nPages, currentPage }: any = data

  const btnText = (btnClicked: string) => {
    switch(btnClicked) {
      case "price":
        if (orderPrice == "none") {
          setOrderPrice("asc")
          setBtnPriceText("Descendant")
          params.sortByPrice = true
          params.orderPrice = "asc"
        } else if(orderPrice == "asc") {
          setOrderPrice("dsc")
          setBtnPriceText("none")
          params.sortByPrice = true
          params.orderPrice = "dsc"
        } else {
          setOrderPrice("none")
          setBtnPriceText("Ascendant")
          params.sortByPrice = false
          params.orderPrice = "none"
        }

        break;
        
      case "date":
        if (orderDate == "none") {
          setOrderDate("asc")
          setBtnDateText("Descendant")
          params.sortByDate = true
          params.orderDate = "asc"
        } else if(orderDate == "asc") {
          setOrderDate("dsc")
          setBtnDateText("none")
          params.sortByDate = true
          params.orderDate = "dsc"
        } else {
          setOrderDate("none")
          setBtnDateText("Ascendant")
          params.sortByDate = false
          params.orderDate = "none"
        }
        break;

      default:
        break;
    }

    flightsLoader()
  }
  
  const flightsLoader = async () => {
    await getFlights(params)
          .then((res) => setData(res));
  }

  useEffect(()=> {
    flightsLoader()
  }, [])

  return (
    <div className="container-md mt-5">
      <h1>Flights</h1>

      <Link className="btn btn-dark mb-3" to={"/"}>{"< Go Back"}</Link>

      <div className="row mb-5">
        <div className="col-3 me-3">
          <p className="m-0">Sort by price: <span className="fw-bold">{orderPrice}</span></p>
          <button className="btn btn-dark" onClick={() => btnText("price")}>{btnPriceText}</button>
        </div>

        <div className="col-3">
          <p className="m-0">Sort by date: <span className="fw-bold">{orderDate}</span></p>
          <button className="btn btn-dark" onClick={() => btnText("date")}>{btnDateText}</button>
        </div>
      </div>

      <div className="border overflow-scroll py-2 px-4 position-relative mb-2" style={{ height: 550 }}>
        {
          flights?.length > 0 ?
            <>
              {
                flights?.map((flight: any) => {
                  const { id } = flight
                  
                  return (
                    returnDate == "" ?
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

      <Pagination nPages={nPages} currentPage={currentPage} />
    </div>
  )
}
