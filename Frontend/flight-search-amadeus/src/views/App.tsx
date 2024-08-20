import { Link } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { Search } from "../components/Search"

export const App = () => {
  return (
    <div>
      <Search />
      {/* <Link to={"/flights"}>Go</Link> */}
    </div>
  )
}
