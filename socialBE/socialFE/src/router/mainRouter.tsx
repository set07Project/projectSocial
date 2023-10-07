import { createBrowserRouter } from "react-router-dom";
import FirstLayout from "../components/common/FirstLayout";
import LandingScreen from "../pages/auth/LandinScreen";
// import Error from "../error/Error"
import Layout from "../components/common/Layout";
import MainScreen from "../pages/screen/MainScreen";
import Profile from "../pages/screen/Profile";
import Notification from "../pages/screen/Notification";
import Reels from "../pages/screen/Reels";
import Messages from "../pages/screen/Messages";
import Store from "../pages/screen/Store";
import Ads from "../pages/screen/Ads";
import RegisterScreen from "../pages/auth/RegisterScreen";
import SigninScreen from "../pages/auth/SigninScreen";
import PrivateRouter from "./PrivateRouter";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <FirstLayout />,
    children: [
      {
        index: true,
        element: <LandingScreen />,
      },
    ],
  },
  {
    path: "/chat",
    element: (
      <PrivateRouter>
        <Layout />
    //   </PrivateRouter>
    ),
    children: [
      {
        index: true,
        element: <MainScreen />,
      },
      {
        path: "/chat/profile",
        element: <Profile />,
      },
      {
        path: "/chat/notifications",
        element: <Notification />,
      },
      {
        path: "/chat/reels",
        element: <Reels />,
      },
      {
        path: "/chat/ads",
        element: <Ads />,
      },
      {
        path: "/chat/messages",
        element: <Messages />,
      },
      {
        path: "/chat/store",
        element: <Store />,
      },
    ],
  },
  {
    path: "/sign-up",
    element: <RegisterScreen />,
  },
  {
    path: "/sign-in",
    element: <SigninScreen />,
  },
]);
