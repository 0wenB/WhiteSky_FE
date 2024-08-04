import { createBrowserRouter } from "react-router-dom";
import Login from "../views/login";
import SignUp from "../views/register";
import Main from "../views/main";
import News from "../views/news";
import Parent from "../views/parent";
import Profile from "../views/profile";
import Airlines from "../views/airlines";
import Airports from "../views/airports";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
  {
    element: <Parent />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/airlines",
        element: <Airlines />,
      },
      {
        path: "/airports",
        element: <Airports />,
      },
      {
        path: "/berita/:newsId",
        element: <News />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

export default router;
