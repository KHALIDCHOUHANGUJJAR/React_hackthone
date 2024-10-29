import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/reset.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContextApi from "./Components/Context/ContextApi.jsx";

createRoot(document.getElementById("root")).render(
  <ContextApi>
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
  </ContextApi>
);
