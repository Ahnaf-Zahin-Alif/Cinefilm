import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";


import Homepage from "./Pages/Homepage";
import MainLayout from "./Layouts/MainLayout";
import Moviespage from "./Pages/Moviespage";

const router = createBrowserRouter([
  {
    path: "/",
    Component : MainLayout,
    children : [
      {
        index : true,
        element : <Homepage/>
      },
      {
        path : "movies",
        element : <Moviespage/>,
      },

    ]
  },
]);


function Router() {
 

  return (
   <RouterProvider router={router} />
  )
}

export default Router
