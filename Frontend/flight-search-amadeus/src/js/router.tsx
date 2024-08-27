import { createBrowserRouter } from "react-router-dom";
import { SearchPage } from "../views/SearchPage";
import {Flights} from "../views/Flights";
import { Details } from "../views/Details";
import { Root } from "../views/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <SearchPage />,
      },
      {
        path: "/flights",
        element: <Flights />
      },
      {
        path: "/flights/Details/:flightDetails",
        element: <Details />
      }
    ]
  }
]);