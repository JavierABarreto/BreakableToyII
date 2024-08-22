export const Segments = () => {
  return (
    <div className="container-sm border my-3 p-3">
      <div className="row">
        <div className="col-8">
          <p>Segment title</p>
          <p>YYYY-MM-DD HH:mm - YYYY-MM-DD HH:mm</p>
          <p>{"CITY (CODE) - CITY (CODE)"}</p>
          <p>AIRLINE XX</p>
        </div>

        <div className="col border" style={{ height: 170 }}>
          <p>Travelers fare details</p>
        </div>
      </div>
    </div>
  )
}
