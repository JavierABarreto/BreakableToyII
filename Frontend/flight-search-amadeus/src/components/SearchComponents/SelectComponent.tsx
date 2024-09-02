type ListOfOptions = String[]

interface props {
  label: String;
  options?: ListOfOptions;
}

export const SelectComponent = ({ label, options}: props) => {
  
  return (
    <div className="row mb-3">
      <div className="col-1"/>

      <label htmlFor="selectCurrency" className="col-4 col-form-label text-end">{label}</label>

      <div className="col-6">
        <select className="form-select" id="selectCurrency">
          {
            options?.map((option, index) => {
              return(
                <option value={option.toString()} key={index}>{option}</option>
              )
            })
          }
        </select>
      </div>

      <div className="col-1"/>
    </div>
  )
}