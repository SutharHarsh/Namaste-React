import "./App.css";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Error from "./components/Error/Error";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default App;
