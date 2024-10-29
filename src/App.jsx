import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import { Routes1 } from "./Routers/Routes";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ContextApi from "./Components/Context/ContextApi";
const App = () => {
 
  return (
    <div>
      <ContextApi>
      <Header />
    
      <Routes>
        {Routes1.map((item, index) => {
          return <Route key={index} path={item.path} element={item.element} />;
        })}
           
      </Routes>
      <Footer />
      </ContextApi>
    </div>
  );
};

export default App;
