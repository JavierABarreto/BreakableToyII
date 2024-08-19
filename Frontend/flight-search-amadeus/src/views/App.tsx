import { Link } from "react-router-dom"

export const App = () => {
  return (
    <div>
      <h1>App</h1>
      <Link to={"/flights"}>Go</Link>
    </div>
  )
}
