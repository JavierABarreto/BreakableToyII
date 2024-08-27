import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { FlightContext } from '../js/Context'

export const Root = () => {
  return (
    <div>
      <Navbar />
      <FlightContext.Provider value={{}}>
        <div id="detail">
          <Outlet />
        </div>
      </FlightContext.Provider>
    </div>
  )
}
