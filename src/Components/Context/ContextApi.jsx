/* eslint-disable react/prop-types */
import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const ContextData = createContext();

const ContextApi = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [newArrivalProducts, setNewArrivalProducts] = useState([]);
  const [loader, setLoader] = useState(false);

  const fetchProducts = async () => {
    setLoader(true);
    try {
      const productResponse = await axios.get(
        "https://fakestoreapi.com/products"
      );
      const newArrivalResponse = await axios.get(
        "https://api.escuelajs.co/api/v1/products"
      );

      setProducts(productResponse.data);
      setNewArrivalProducts(newArrivalResponse.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
    setLoader(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ContextData.Provider value={{ products, newArrivalProducts, loader }}>
      {children}
    </ContextData.Provider>
  );
};

export default ContextApi;
