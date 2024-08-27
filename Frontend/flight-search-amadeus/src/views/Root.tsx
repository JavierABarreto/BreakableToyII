import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { FlightContext } from '../js/Context'
import { useState } from 'react';

export const Root = () => {
  const [flight, setFlight] = useState({});

  return (
    <div>
      <Navbar />
      <div id="detail">
        <Outlet />
      </div>
    </div>
  )
}
