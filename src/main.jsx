import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import router from './route/router';
import ShopContextProvider from './context/ShopContext';
  import { ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ShopContextProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </ShopContextProvider>
  </StrictMode>
);
