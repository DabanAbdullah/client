import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  DashboardLayout,
  Landing,
  Register,
  Login,
  Error,
} from "./pages";

const route = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    errorElement: <Error />,
    children: [
      { index: true, element: <Landing /> },
      { path: "register", element: <Register /> },
      { path: "login", Component: Login },
      { path: "dashboard", Component: DashboardLayout },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={route}></RouterProvider>;
};

export default App;
