import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { useState } from 'react';
import { DetailsProvider } from '../Context/DetailsContext';

export const Root = () => {
  return (
    <div>
      <Navbar />

      <DetailsProvider>
        <div id="detail">
          <Outlet />
        </div>
      </DetailsProvider>
    </div>
  )
}
