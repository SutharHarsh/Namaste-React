import "./App.css";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Error from "./components/Error/Error";
import ProductPage from "./components/ProductPage/ProductPage";
import { lazy, Suspense, useState } from "react";
import UserContext from "./utils/context/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store/store";
import CartPage from "./components/CartPage/CartPage";

const Grocery = lazy(() => import("./components/GroceryPage/Grocery"));
const About = lazy(() => import("./components/About/About"));

function App() {
  const [userName, setUserName] = useState("Harsh Suthar");

  return (
    <>
      <Provider store={store}>
        <UserContext.Provider value={{ userName: userName, setUserName }}>
          <Header />
          <Outlet />
        </UserContext.Provider>
      </Provider>
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
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1 className="p-10 text-2xl">Loading...</h1>}>
            <About />
          </Suspense>
        ),
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
