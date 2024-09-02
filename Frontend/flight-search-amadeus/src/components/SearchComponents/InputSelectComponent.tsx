import { useEffect, useState } from "react";
import { getAirportData } from "../../js/API";

interface props {
  label: String;
}

export const InputSelectComponent = ({ label }: props) => {
  const labelTag = label == "Departure Airport" ? "dLabelAirport" : "rLabelAirport";

  const [arrowUp, setArrowUp] = useState(true)
  const [dClass, setDClass] = useState("")
  const [airportName, setAirportName] = useState("")
  const [iataCodes, setIataCodes]: any[] = useState([])

  const displayBtn = () => {
    setArrowUp(!arrowUp)
    dClass == "d-none" ? setDClass("d-block") : setDClass("d-none")
  }


  const setInputValue = (value: String) => {
    const input: any = document.getElementById(labelTag+"Input")

    input.value = value;
  }

  const setNewValues = async () => {
    setIataCodes(await getAirportData(airportName));
  }

  useEffect(() => {
    if(airportName.length > 0){
      setArrowUp(true)
      setDClass("d-block")
      setNewValues()
    } else {
      setArrowUp(false)
      setDClass("d-none")
      setIataCodes([])
    }
  }, [airportName])



  return (
    <div className="row input-group mb-3" key={label+"Key"}>
      <div className="col-1"/>

      <label htmlFor={labelTag} className="col-4 col-form-label text-end">{label}</label>

      <div className="col-6">
        <div className="row">
          <div className="col-10 pe-0">
            <input type="text" className="form-control" id={labelTag+"Input"} onChange={(text)=> setAirportName(text.target.value)} required />

            <ul className={"overflow-auto list-group mh-100 "+dClass} style={{ height: 100}}>
              {
                <>
                  {
                    iataCodes.length > 0 ?
                      iataCodes.map((IATA: any, index: any) => {
                        return(
                          <a onClick={() => {
                              setInputValue(IATA.iataCode)
                              displayBtn()
                            }} key={"I"+index}>
                            <li className="list-group-item">
                              <p className="m-0 fw-bold">{IATA.iataCode}</p>
                              <span>{IATA.name.toLowerCase()}</span>
                            </li>
                          </a>
                        )
                      })
                    :
                      <p>Write the aiport name to look up for its IATA code.</p>
                  }
                </>
              }
            </ul>
          </div>

          <div className="col-2 ps-0">
            <button className="btn btn-outline-secondary" onClick={() => displayBtn()}>{arrowUp ?  "↑" : "↓"}</button>
          </div>
        </div>
      </div>

      <div className="col-1"/>
    </div>
  )
}
