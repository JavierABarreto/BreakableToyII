import dayjs from "dayjs"

export const Segments = (data: any) => {
  console.log(data)
  const { aircraft, arrival, departure, id, number } = data?.data
  const { at: arrivalAt, iataCode: arrivalIATA } = arrival
  const { at: departureAt, iataCode: departureIATA } = departure

  const arrivalDate = dayjs(arrivalAt).format("YYYY-MM-DD HH:mm")
  const departureDate = dayjs(departureAt).format("YYYY-MM-DD HH:mm")

  return (
    <div className="container-sm border my-3 p-3">
      <div className="row">
        <div className="col-8">
          <div className="d-flex">
            <h5 className="col-4">Segment {id}</h5>
            <p className="col text-end">No. {number}</p>
          </div>

          <p>{departureDate} - {arrivalDate}</p>
          <p>{"CITY (CODE) - CITY (CODE)"}</p>
          <p>{`AIRLINE (XX) ${aircraft.code}`}</p>
        </div>

        <div className="col border" style={{ height: 170 }}>
          <p>Travelers fare details</p>
        </div>
      </div>
    </div>
  )
}
