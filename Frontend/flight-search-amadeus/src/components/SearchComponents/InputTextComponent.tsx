interface props {
  label: String
}

export const InputTextComponent = ({ label }: props) => {
  return (
    <div className="row mb-3">
      <div className="col-1"/>

      <label htmlFor="noAdults" className="col-4 col-form-label text-end">{label}</label>

      <div className="col-6">
        <input className="form-control" id="noAdults" type="number" defaultValue={1} required />
      </div>

      <div className="col-1"/>
    </div>
  )
}
