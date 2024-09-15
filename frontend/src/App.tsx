import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouterLayout from "./Components/RouterLayout/RouterLayout";
import LandingScreen from "./Components/Screen/LandingScreen";
import Login from "./Components/Authorization/Login";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RouterLayout />,
      children: [
        { path: "/", element: <LandingScreen /> },
        { path: "/login", element: <Login /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
