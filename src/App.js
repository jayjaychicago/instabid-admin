import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { MyProducts } from './pages/MyProducts';

import './assets/styles/App.scss';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MyProducts />,
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
