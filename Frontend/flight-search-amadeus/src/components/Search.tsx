import { Link } from "react-router-dom"
import { SelectComponent } from "./SearchComponents/SelectComponent"
import dayjs from "dayjs"

const temp = [
  "SFA",
  "SFA",
  "SFA"
]

const date = dayjs().format("YYYY-MM-DD")

export const Search = () => {
  return (
    <div className="container mt-5">
      <div className="row">

        <div className="col-2"></div>

        <div className="col">
          <div className="row my-4 text-center">
            <h2>Flight Search</h2>
          </div>

          <div className="row border p-5">
            <div className="row">
              <SelectComponent label={"Departure Airport"} type="select" options={temp} />
              <SelectComponent label={"Arrival Airport"} type="select" options={temp} />
              <SelectComponent label={"Departure Date"} type="date" date={date} />
              <SelectComponent label={"Return Date"} type="date" date={date} />
              <SelectComponent label={"Currency"} type="select" options={temp} />
            </div>

            <div className="row">
              <div className="col-5"/>
              <div className="col-7">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">Non-stop</label>
                </div>
              </div>
            </div>

            <div className="row d-flex justify-content-end mt-2">
              <Link className="col-2 btn btn-primary" to={"/flights"}>Search</Link>
            </div>
          </div>

        </div>

        <div className="col-2"></div>
      </div>
    </div>
  )
}
