import { createBrowserRouter } from "react-router-dom";
import { App } from "../views/App";
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
        element: <App />,
      },
      {
        path: "/flights",
        element: <Flights />
      },
      {
        path: "/flights/:flightDetails",
        element: <Details />
      }
    ]
  }
]);