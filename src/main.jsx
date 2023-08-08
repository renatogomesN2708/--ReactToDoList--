import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeComponent from './components/section/Home/HomeComponent.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeComponent/>,
   },
    /*{
        path: "team",
        element: </>,
      },
    {
        path: "team",
        element: <Team />,
      },
    {
        path: "team",
        element: <Team />,
      },*/
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
