import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './routes/root.jsx'
import ErrorPage from "./error-page";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Lab from './components/Lab';
import Read from './components/Read';

import PlayArea from './components/PlayArea.jsx';
import Sign from './components/Sign.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: 'labs/',
        element: <Lab />
      },
      {
        path: 'play/',
        element: <PlayArea />
      },
      {
        path: 'sign/',
        element: <Sign />
      },
      {
        path: 'read',
        element: <Read />,

      },
    ],
  },
  {
    path: "labs/",
    element: <Lab />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
