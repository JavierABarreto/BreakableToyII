import dayjs from "dayjs"
import { useEffect, useState } from "react"
import { getAirlineData, getAirportData } from "../../js/API"

export const Segments = ({segment, travelerPricings, index }: any) => {
  const { aircraft, arrival, departure, id, number } = segment
  const { at: arrivalAt, iataCode: arrivalIATA } = arrival
  const { at: departureAt, iataCode: departureIATA } = departure

  const arrivalDate = dayjs(arrivalAt).format("YYYY-MM-DD HH:mm a")
  const departureDate = dayjs(departureAt).format("YYYY-MM-DD HH:mm a")

  const [airportInfo1, setAirportInfo1]: any = useState({})
  const [airportInfo2, setAirportInfo2]: any = useState({})
  const [airlineData, setAirlineData]: any = useState({})

  const getAirportsData = async () => {
    setAirportInfo1(await getAirportData(departureIATA))
    setAirportInfo2(await getAirportData(arrivalIATA))
    setAirlineData(await getAirlineData(departureIATA))
  }

  useEffect(() => {
    getAirportsData();
  }, [])

  return (
    <div className="container-sm border my-3 p-3" key={"segment-"+id}>
      <div className="row">
        <div className="col-8">
          <div className="d-flex">
            <h5 className="col-4">Segment {index + 1}</h5>
            <p className="col text-end">No. {number}</p>
          </div>

          <p>{departureDate} - {arrivalDate}</p>
          <p>{`${airportInfo1[0]?.address?.cityName} (${airportInfo1[0]?.address?.cityCode}) - ${airportInfo2[0]?.address?.cityName} (${airportInfo2[0]?.address?.cityCode})`}</p>
          <p>{`${airlineData?.businessName != undefined ? airlineData?.businessName : "Airline"} (${airlineData?.businessName != undefined ? airlineData?.iataCode : "XX"}) ${aircraft.code}`}</p>
        </div>

        <div className="col border overflow-scroll" style={{ height: 170 }}>
          <p className="my-2">Travelers fare details</p>
          <div className="fareDetailsContainer">
            {
              travelerPricings?.map((traveler: any, index: any) => {
                const { travelerId, fareDetailsBySegment } = traveler
                const travelerData = fareDetailsBySegment[0]

                return (
                  <div className="border-top border-bottom my-2 p-2" key={"travelerFare-"+index}>
                    <p className="m-0">Traveler {travelerId}</p>
                    
                    <p className="m-0">Cabin: {travelerData.cabin}</p>
                    
                    <p className="m-0">Class: {travelerData.class}</p>
                    
                    <p className="m-0">Amenities:</p>

                    <div className="px-2 py-1">
                      <div className="d-flex" key={"amenitiesTitle"}>
                        {
                          travelerData?.amenities != undefined ? 
                            <>
                              <p className="col">Amenities</p>
                              <p>|</p>
                              <p className="col text-end">hasCost</p>
                            </>
                          :
                            <>
                              <p>No amenities</p>
                            </>
                        }
                      </div>

                      {
                        travelerData?.amenities?.map((amenity: any, index: any) => {
                          return (
                            <div className="d-flex" key={"amenity-"+id+"-"+index}>
                              <p className="col-4">{amenity.description}</p>
                              <p className="col text-end">{amenity.isChargeable ? "YES" : "NO"}</p>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}
