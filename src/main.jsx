import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './MainLayout';
import MainHomePage from './Component/Home/MainHomePage';
import ShoppingCartPage from './Component/ShoppingCartPage/ShoppingCartPage';
import UserProfile from './Component/UserProfile/UserProfile';
import ProductDetailPage from './Component/ProductDetailPage/ProductDetailPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        path: "/",
        element: <MainHomePage/>
      },
      {
        path:"shoppingCart",
        element:<ShoppingCartPage/>
      },
      {
        path:"userProfile",
        element:<UserProfile/>
      },
      {
        path:"productDetail",
        element:<ProductDetailPage/>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
