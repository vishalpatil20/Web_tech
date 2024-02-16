import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
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
import Module2 from './components/Module2';
import Module1 from './components/Module1';
import Module3 from './components/Module3.jsx';
import Module4 from './components/Module4.jsx';
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
        children: [
          {
            path: 'module1',
            element: <Module1/>
          },
          {
            path: 'module2',
            element: <Module2 />
          },
          {
            path: 'module3',
            element: <Module3 />
          },
          {
            path: 'module4',
            element: <Module4/>
          }
        ]
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
