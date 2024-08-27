import { useState } from "react";

interface props {
  label: String;
}

export const InputSelectComponent = ({ label }: props) => {
  const labelTag = label == "Departure Airport" ? "dLabelAirport" : "rLabelAirport";
  const [btnText, setBtnText] = useState("↓")

  const changeBtnText = () => {
    btnText == "↓" ? setBtnText("↑") : setBtnText("↓")
  }

  return (
    <div className="row input-group mb-3">
      <div className="col-1"/>

      <label htmlFor={labelTag} className="col-4 col-form-label text-end">{label}</label>

      <div className="col-6">
        <div className="row">
          <div className="col-9 pe-0">
            <input type="text" className="form-control" aria-label="Text input with dropdown button" />

            <ul className="overflow-auto list-group " style={{ height: 100}}>
              <li className="list-group-item">
                <p className="m-0 fw-bold">EWR</p>
              </li>
            </ul>
          </div>

          <div className="col-3 ps-0">
            <button className="btn btn-outline-secondary" onClick={() => changeBtnText()}>{btnText}</button>
          </div>
        </div>
      </div>

      <div className="col-1"/>
    </div>
  )
}
