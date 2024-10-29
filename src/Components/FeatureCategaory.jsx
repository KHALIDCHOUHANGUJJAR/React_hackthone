import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "./Header.css";
const Feature = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const [products, setProducts] = useState([]);

  const getData = async () => {
    try {
      const prodata = await axios.get(
        "https://api.escuelajs.co/api/v1/categories"
      );
      const response = prodata.data;
      console.log(response);
      setProducts(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="sliderimage">
      <h2 className="font-bold text-3xl text-red-700">Feature Category</h2>
      <div className="slider-container">
        <Slider {...settings} className="flex items-center justify-center">
          {products.slice(0, 12).map((item, index) => (
            <div key={index} className="cardfeature">
              <img
                src={
                  item.image
                    ? item.image
                    : "/public/Assets/Images/istockphoto-969564218-612x612.jpg"
                }
                alt={item.title}
              />
              <h3>{item.name}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Feature;
