import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouterLayout from "./Components/RouterLayout/RouterLayout";
import LandingScreen from "./Components/Screen/LandingScreen";
import Login from "./Components/Authorization/Login";
import SignUp from "./Components/Authorization/SignUp";
import HomeScreen from "./Components/Content/Home";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RouterLayout />,
      children: [
        { path: "/", element: <LandingScreen /> },
        { path: "/home", element: <HomeScreen /> },
        { path: "/login", element: <Login /> },
        { path: "/signup", element: <SignUp /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
