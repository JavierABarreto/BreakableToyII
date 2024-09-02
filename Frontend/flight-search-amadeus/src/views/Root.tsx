import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { DetailsProvider } from '../Context/DetailsContext';
import { SearchParamsProvider } from '../Context/SearchContext';

export const Root = () => {
  return (
    <div>
      <Navbar />

      <SearchParamsProvider>
        <DetailsProvider>
          <div id="detail">
            <Outlet />
          </div>
        </DetailsProvider>
      </SearchParamsProvider>
    </div>
  )
}
