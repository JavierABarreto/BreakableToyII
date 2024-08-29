interface props {
  label: String;
  date?: String;
}

export const InputDateComponent = ({ label, date}: props) => {
  const labelTag = label == "Departure Date" ? "dDate" : "rDate";

  return (
    <div className="row mb-3">
      <div className="col-1"/>

      <label htmlFor={labelTag+"Input"} className="col-4 col-form-label text-end">{label}</label>

      <div className="col-6">
        <input className="form-control" id={labelTag+"Input"} type="date" min={date?.toString()} required={label == "Departure Date" ? true : false} />
      </div>

      <div className="col-1"/>
    </div>
  )
}
