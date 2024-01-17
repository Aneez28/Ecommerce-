import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Rootlayout from "./Routes/Rootlayout";
import ErrorPage from "./Errorpage";
import Homepage from "./Routes/Homepage";
import About from "./Routes/About";
import Categories from "./Routes/Categories";

import{
   createBrowserRouter,
   RouterProvider,
}from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/Home",
        element: <Homepage/>,
      },
      {
        path: "/About",
        element: <About/>,
      },
      {
        path: "/Categories",
        element: <Categories/>,
      }
  ]
 }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
