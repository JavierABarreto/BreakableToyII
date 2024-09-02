import { useLoaderData, useNavigate } from "react-router-dom"
import { SelectComponent } from "./SearchComponents/SelectComponent"
import dayjs from "dayjs"
import { InputDateComponent } from "./SearchComponents/InputDateComponent"
import { InputSelectComponent } from "./SearchComponents/InputSelectComponent"
import { InputTextComponent } from "./SearchComponents/InputTextComponent"
import { currenciesMock } from "../js/mockData"
import useSearchParams from "../Hooks/useSearchParams"
import moment from "moment"

export const Search = () => {
  const navigate = useNavigate()
  const date = dayjs().format("YYYY-MM-DD")
  let currencies: any = useLoaderData();
  const { setParams }: any = useSearchParams();

  currencies == undefined ? currenciesMock : currencies

  const sendParams = () => {
    const dCode: any = document.getElementById("dLabelAirportInput")
    const rCode: any = document.getElementById("rLabelAirportInput")
    const nAdults: any = document.getElementById("noAdults")
    const dDate: any = document.getElementById("dDateInput")
    const rDate: any = document.getElementById("rDateInput")
    const currency: any = document.getElementById("selectCurrency")
    const nonStop: any = document.getElementById("nonStop")

    const params = {
      departureAirportCode: dCode.value,
      arrivalAirportCode: rCode.value,
      departureDate: dDate.value,
      returnDate: rDate.value,
      numberAdults: nAdults.value,
      currency: currency.value,
      stops: nonStop.checked,
      max: 20,
      sortByPrice: false,
      orderPrice: "",
      sortByDate:false,
      orderDate: ""
    }
    
    if (rDate != "") {
  
      if (moment(rDate).unix() < moment(dDate).unix()) {
        alert("Return date cannot be less than departure date");
      } else {
        setParams(params)
        navigate('flights')
      }
    } else {
      setParams(params)
      navigate('flights')
    }
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
