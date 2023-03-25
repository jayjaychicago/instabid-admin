import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { LandingPage } from './pages/LandingPage';
import MyProducts from './pages/MyProducts';
import { useAuth0 } from "@auth0/auth0-react";


import './assets/styles/App.scss';

function App() {
  const { logout } = useAuth0();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/products",
      element: <MyProducts />
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
