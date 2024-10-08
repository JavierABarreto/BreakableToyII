import { createBrowserRouter } from "react-router-dom";
import { SearchPage } from "../views/SearchPage";
import {Flights} from "../views/Flights";
import { Details } from "../views/Details";
import { Root } from "../views/Root";
import { currenciesLoader } from "./loaders";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <SearchPage />,
        loader: currenciesLoader
      },
      {
        path: "/flights",
        element: <Flights />
      },
      {
        path: "/flights/details",
        element: <Details />
      }
    ]
  }
]);