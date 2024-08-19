import { Link } from "react-router-dom"

export const Flights = () => {
  return (
    <div>
      <h1>Flights</h1>
      <Link to={"/flights/aflight"}>Go</Link>
    </div>
  )
}
