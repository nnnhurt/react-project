import { createRoot } from "react-dom/client";
import "./index.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "./pages/main-page/Main.jsx";
import DefaultLayout from "./layouts/default/DefaultLayout.jsx";
import SignIn from "./pages/sign-in/Sign.jsx";
import PageNotFound from "./pages/not-found/PageNotFound.jsx";
import Services from "./pages/services/Services.jsx";
import ServiceDetail from "./pages/service/Service.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/sign_in",
    element: <SignIn />
  }, 
  {
    path: "*",
    element: <PageNotFound/>
  },
  {
    path: "/services",
    element: <Services />,
  },      
  {
    path: "/services/:id",
    element: <ServiceDetail/>
  }

])

createRoot(document.getElementById("root")).render(
  <DefaultLayout>
    <RouterProvider router={router} />
    </DefaultLayout>

)
