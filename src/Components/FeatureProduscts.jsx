/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { Button, Card } from "react-bootstrap";
import "./Header.css";
import { Row, Col } from "antd";
import ModalCom from "./Modal";
import { Link } from "react-router-dom";
import { ContextData } from "./Context/ContextApi";

const FeatureProducts = ({ isdiplay, nondispaly, imagedispaly }) => {
  const { products, newArrivalProducts, loader } = useContext(ContextData);
  const [modal, setModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  const viewModal = (product) => {
    setSelectedProduct(product);
    setModal(true);
  };

  const renderProducts = (items, useImagesField) => (
    <Row gutter={[16, 16]} className="flex items-center justify-center">
      {imagedispaly === "dispaly"
        ? products.slice(0, 4).map((item, index) => (
            <Col id="col" xs={24} sm={12} md={8} lg={6} key={index}>
              <Card style={{ width: "100%" }} onClick={() => viewModal(item)}>
                <Card.Img
                  variant="top"
                  src={
                    useImagesField
                      ? item.images
                        ? item.images
                        : "/Assets/Images/istockphoto-969564218-612x612.jpg"
                      : item.image
                      ? item.image
                      : "/Assets/Images/istockphoto-969564218-612x612.jpg"
                  }
                  style={{ width: "250px", height: "50vh", margin: "0 auto" }}
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Button variant="secondary">${item.price}</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        : products.map((item, index) => (
            <Col id="col" xs={24} sm={12} md={8} lg={6} key={index}>
              <Card style={{ width: "100%" }} onClick={() => viewModal(item)}>
                <Card.Img
                  variant="top"
                  src={useImagesField ? item.images : item.image}
                  style={{ width: "250px", height: "50vh", margin: "0 auto" }}
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Button variant="secondary">${item.price}</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      :
    </Row>
  );

  return (
    <div className="flex flex-col items-center justify-center">
      {loader ? (
        <div className="loader"></div>
      ) : (
        <>
          {nondispaly === "dispaly" && (
            <>
              {imagedispaly === "dispaly" && (
                <img
                  src="/Assets/Images/banner-7.webp"
                  className="img4"
                  alt="Banner"
                />
              )}{" "}
              <div className="container4 flex items-center">
                <h1 className="font-bold text-3xl text-red-700">New Arrival</h1>
                {renderProducts(newArrivalProducts, true)}
                {imagedispaly === "dispaly" && (
                  <Button
                    variant="secondary"
                    as={Link}
                    to="/Product1data"
                    className="mt-9 "
                  >
                    View All New Arrival Products
                  </Button>
                )}
              </div>
            </>
          )}
          {isdiplay === "dispaly" && (
            <div className="flex flex-col items-center mt-20">
              <h1 className="font-bold text-3xl text-red-700">
                Feature Products
              </h1>
              {renderProducts(products, false)}
              {imagedispaly === "dispaly" && (
                <Button variant="secondary" as={Link} to="/products2data">
                  View All Feature Products
                </Button>
              )}
            </div>
          )}
        </>
      )}
      <ModalCom
        modal={modal}
        setModal={setModal}
        Productchose={selectedProduct}
      />
    </div>
  );
};

export default FeatureProducts;
