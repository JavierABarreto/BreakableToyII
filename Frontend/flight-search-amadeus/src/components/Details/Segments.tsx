import dayjs from "dayjs"
import { AirportInfo } from "../../js/mockData"

export const Segments = ({segment, travelerPricings}: any) => {
  const { aircraft, arrival, departure, id, number } = segment
  const { at: arrivalAt, iataCode: arrivalIATA } = arrival
  const { at: departureAt, iataCode: departureIATA } = departure

  const arrivalDate = dayjs(arrivalAt).format("YYYY-MM-DD HH:mm")
  const departureDate = dayjs(departureAt).format("YYYY-MM-DD HH:mm")

  const BOSAirport = AirportInfo[0];
  const EWRAirport = AirportInfo[1];

  return (
    <div className="container-sm border my-3 p-3" key={"segment-"+id}>
      <div className="row">
        <div className="col-8">
          <div className="d-flex">
            <h5 className="col-4">Segment {id}</h5>
            <p className="col text-end">No. {number}</p>
          </div>

          <p>{departureDate} - {arrivalDate}</p>
          <p>{`${BOSAirport.address.cityName} (${BOSAirport.address.cityCode}) - ${EWRAirport.address.cityName} (${EWRAirport.address.cityCode})`}</p>
          <p>{`AIRLINE (XX) ${aircraft.code}`}</p>
        </div>

        <div className="col border overflow-scroll" style={{ height: 170 }}>
          <p className="my-2">Travelers fare details</p>
          <div className="fareDetailsContainer">
            {
              travelerPricings.map((traveler: any, index: any) => {
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
                        <p className="col">Amenities</p>
                        <p className="col text-end">hasCost</p>
                      </div>

                      {
                        travelerData.amenities.map((amenity: any, index: any) => {
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
