type ListOfOptions = String[]

interface props {
  label: String;
  type: String;
  options?: ListOfOptions;
  date?: String;
}

export const SelectComponent = ({ label, type, options, date}: props) => {
  return (
    <div className="row mb-3">
      <div className="col-1"/>

      <label htmlFor="colFormLabel" className="col-4 col-form-label text-end">{label}</label>

      <div className="col-6">
        {
          type == "select" ?
            <select className="form-select" aria-label="Default select example">
              {
                options?.map(option => {
                  return(
                    <option value={option.toString()}>{option}</option>
                  )
                })
              }
            </select>
          :
            <input className="form-control" id="colFormLabel" type="date" min={date?.toString()} />
        }
      </div>

      <div className="col-1"/>
    </div>
  )
}