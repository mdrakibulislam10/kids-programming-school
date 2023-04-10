import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Layouts/Root/Root';
import Home from './components/Layouts/Home/Home';
import Events from './components/Layouts/Events/Events';
import Students from './components/Layouts/Students/Students';
import Profile from './components/Layouts/Profile/Profile';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        loader: async () => fetch("subjects.json"),
        element: <Home />
      },
      {
        path: "/events",
        element: <Events />
      },
      {
        path: "/students",
        element: <Students />,
        loader: async () => fetch("students.json"),
      },
      {
        path: "/profile/:stuId",
        element: <Profile />,
        // loader: ({ params }) => fetch(`students.json`),
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
