import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { LandingPage } from './pages/LandingPage';
import { MyProducts } from './pages/MyProducts';

import './assets/styles/App.scss';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    // {
    //   path: "/",
    //   element: <MyProducts />,
    // },
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
