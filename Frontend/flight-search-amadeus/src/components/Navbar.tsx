import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">Flight checker</Link>
      </div>
    </nav>
  )
}
