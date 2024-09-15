import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouterLayout from "./Components/RouterLayout/RouterLayout";
import LandingScreen from "./Components/Screen/LandingScreen";
import Login from "./Components/Authorization/Login";
import SignUp from "./Components/Authorization/SignUp";
import HomeScreen from "./Components/Content/Home";
import AllInternships from "./Components/Content/Home/Internship/All Internship/All_Internship";
import InternshipDetails from "./Components/Content/Home/Internship/InternshipDetail/InternshipDetail";
import SearchResult from "./Components/Content/Home/Serach/SearchResult";

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
        { path: "/all-internships", element: <AllInternships /> },
        { path: "/internship-details/", element: <InternshipDetails /> },
        { path: "/search-results", element: <SearchResult /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
