import "./App.css";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Error from "./components/Error/Error";
import ProductPage from "./components/ProductPage/ProductPage";
import { lazy, Suspense } from "react";

const Grocery = lazy(() => import("./components/GroceryPage/Grocery"));

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
      {
        path: "/productpage/:productId",
        element: <ProductPage />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1 className="p-10 text-2xl">Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

export default App;
