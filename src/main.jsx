import { createRoot } from "react-dom/client";
import "./index.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "./pages/main-page/Main.jsx";
import DefaultLayout from "./layouts/default/DefaultLayout.jsx";
import SignIn from "./pages/sign-in/Sign.jsx";
import PageNotFound from "./pages/not-found/PageNotFound.jsx";
import Services from "./pages/services/Services.jsx";
import ServiceDetail from "./pages/service/Service.jsx";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import AuthRoute from "./components/private-auth/Auth.jsx";
import UserProfile from "./pages/profile/Profile.jsx";

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
    element: <AuthRoute>
      <Services />
    </AuthRoute>
  },      
  {
    path: "/services/:id",
    element: <AuthRoute>
    <ServiceDetail/>
    </AuthRoute>
  },
  {
    path: "/profile",
    element: <AuthRoute>
    <UserProfile/>
    </AuthRoute>
  }

])

createRoot(document.getElementById("root")).render(
  <DefaultLayout>
    <Provider store={store}>
    <RouterProvider router={router} />
      </Provider>
    </DefaultLayout>

)
