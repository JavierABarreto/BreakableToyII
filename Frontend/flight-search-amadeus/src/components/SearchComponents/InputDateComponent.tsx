interface props {
  label: String;
  date?: String;
}

export const InputDateComponent = ({ label, date}: props) => {
  return (
    <div className="row mb-3">
      <div className="col-1"/>

      <label htmlFor="colFormLabel" className="col-4 col-form-label text-end">{label}</label>

      <div className="col-6">
        <input className="form-control" id="colFormLabel" type="date" min={date?.toString()} required={label == "Departure Date" ? true : false} />
      </div>

      <div className="col-1"/>
    </div>
  )
}
