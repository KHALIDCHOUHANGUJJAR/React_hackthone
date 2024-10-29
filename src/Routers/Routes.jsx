import CardPage from "../Components/CardPage";
import Contact from "../Pages/Contact";
import Footer from "../Components/Footer";
import Landing from "../Pages/Landing";
import Products from "../Pages/Products";
import Products2Data from "../Components/Products2Data";
import Product1data from "../Components/Prouduct1data"
export const Routes1 = [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/Footer",
    element: <Footer />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/CardPage",
    element: <CardPage />,
  },
  {
    path: "/Products2Data",
    element: <Products2Data />,
  },
  {
    path: "/Product1data",
    element: <Product1data />,
  },
  {
    path: "/Products",
    element: <Products />,
  },
];
