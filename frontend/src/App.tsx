import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouterLayout from "./Components/RouterLayout/RouterLayout";
import LandingScreen from "./Components/Screen/LandingScreen";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RouterLayout />,
      children: [{ path: "/", element: <LandingScreen /> }],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
