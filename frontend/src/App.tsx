import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouterLayout from "./Components/RouterLayout/RouterLayout";
import LandingScreen from "./Components/Screen/LandingScreen";
import Login from "./Components/Authorization/Login";
import SignUp from "./Components/Authorization/SignUp";
import HomeScreen from "./Components/Content/Home";
import AllInternships from "./Components/Content/Home/Internship/All Internship/All_Internship";
import InternshipDetails from "./Components/Content/Home/Internship/InternshipDetail/InternshipDetail";
import SearchResult from "./Components/Content/Home/Serach/SearchResult";
import RecommendedScreen from "./Components/Content/Menu/RecommendJob";
import MyJobsScreen from "./Components/Content/Menu/MyJobScreen";
import EventsScreen from "./Components/Content/Menu/Event/Event";
import SettingsScreen from "./Components/Content/Profile/ProfileTab/Setting/Setting";
import PortfolioScreen from "./Components/Content/Profile/ProfileTab/Portfolio";
import MembershipScreen from "./Components/Content/Profile/ProfileTab/Membership/Membership";
import PaymentScreen from "./Components/Content/Profile/ProfileTab/Membership/Payment";
import ServicesScreen from "./Components/Content/Profile/ProfileTab/Service/Service";
import AboutUsScreen from "./Components/Content/Profile/ProfileTab/AboutUs/AboutUs";
import ContactScreen from "./Components/Content/Profile/ProfileTab/Contact/ContactUs";
import HelpScreen from "./Components/Content/Profile/ProfileTab/Help/Help";

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
        { path: "/recommended-job", element: <RecommendedScreen /> },
        { path: "/my-jobs", element: <MyJobsScreen /> },
        { path: "/events", element: <EventsScreen /> },
        { path: "/settings", element: <SettingsScreen /> },
        { path: "/portfolio-build", element: <PortfolioScreen /> },
        { path: "/membership", element: <MembershipScreen /> },
        { path: "/membership", element: <MembershipScreen /> },
        { path: "/payment-screen", element: <PaymentScreen /> },
        { path: "/services", element: <ServicesScreen /> },
        { path: "/about-us", element: <AboutUsScreen /> },
        { path: "/contact-us", element: <ContactScreen /> },
        { path: "/help-&-support", element: <HelpScreen /> },
        { path: "/log-out", element: <Login /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
