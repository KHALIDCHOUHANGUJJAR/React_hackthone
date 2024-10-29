import { Button, Card, Col, Row } from "react-bootstrap";
import ModalCom from "./Modal";
import { useContext, useState } from "react";
import { ContextData } from "./Context/ContextApi";

const Product1data = () => {
  const { newArrivalProducts, loader } = useContext(ContextData);
  const [modal, setModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  const viewModal = (product) => {
    setSelectedProduct(product);
    setModal(true);
  };

  return (
    <div>
      {loader ? (
        <div className="loader"></div>
      ) : (
        <>
          <Row gutter={[16, 16]} className="flex items-center justify-center">
            {newArrivalProducts?.map((item, index) => (
              <Col xs={24} sm={12} md={8} lg={6} key={index}>
                <Card style={{ width: "100%" }} onClick={() => viewModal(item)}>
                  <Card.Img
                    variant="top"
                    src={
                      item.image
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
            ))}
          </Row>

          <ModalCom
            modal={modal}
            setModal={setModal}
            Productchose={selectedProduct}
          />
        </>
      )}
    </div>
  );
};

export default Product1data;
