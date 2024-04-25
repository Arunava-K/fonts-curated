import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Main/Home.tsx'; // Import Home component
import FontDetail from './Components/fontdetail.tsx'; // Import FontDetail component (replace path with actual location)
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/fonts/:fontName", // Use a parameter here for the font name
    element: <FontDetail />, // Use the imported FontDetail component
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
