import { Link, useLoaderData, useNavigate } from "react-router-dom"
import { SelectComponent } from "./SearchComponents/SelectComponent"
import dayjs from "dayjs"
import { InputDateComponent } from "./SearchComponents/InputDateComponent"
import { InputSelectComponent } from "./SearchComponents/InputSelectComponent"
import { InputTextComponent } from "./SearchComponents/InputTextComponent"
import { currenciesMock } from "../js/mockData"
import { getFlights } from "../js/API"

export const Search = () => {
  const navigate = useNavigate()
  const date = dayjs().format("YYYY-MM-DD")
  let currencies: any = useLoaderData();

  currencies == undefined ? currenciesMock : currencies

  const sendParams = () => {
    const dCode = document.getElementById("dLabelAirportInput").value
    const rCode = document.getElementById("rLabelAirportInput").value
    const nAdults = document.getElementById("noAdults").value
    const dDate = document.getElementById("dDateInput").value
    const rDate = document.getElementById("rDateInput").value
    const currency = document.getElementById("selectCurrency").value
    const nonStop = document.getElementById("nonStop").checked

    const params = {
      departureAirportCode: dCode,
      arrivalAirportCode: rCode,
      departureDate: dDate,
      returnDate: rDate,
      numberAdults: nAdults,
      currency: currency,
      stops: nonStop,
      max: 20
    }

    getFlights(params)
    navigate('flights')
  }

  return (
    <div className="container mt-5">
      <div className="row">

        <div className="col-2"></div>

        <div className="col">
          <div className="row my-4 text-center">
            <h2>Flight Search</h2>
          </div>

          <form className="row border p-5" onSubmit={(e) => {
            e.preventDefault()
            sendParams()
          }}>
            <div className="row">
                <InputSelectComponent label={"Departure Airport"} />
                <InputSelectComponent label={"Return Airport"} />
                <InputTextComponent label={"No. Adultos"} />
                <InputDateComponent label={"Departure Date"} date={date} />
                <InputDateComponent label={"Return Date"} date={date} />
                <SelectComponent label={"Currency"} options={currencies} />
            </div>

            <div className="row">
              <div className="col-5"/>
              <div className="col-7">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="nonStop" />
                  <label className="form-check-label" htmlFor="nonStop">Non-stop</label>
                </div>
              </div>
            </div>

            <div className="row d-flex justify-content-end mt-2">
              <button className="col-2 btn btn-primary" type="submit" >Search</button>
            </div>
          </form>

        </div>

        <div className="col-2"></div>
      </div>
    </div>
  )
}
