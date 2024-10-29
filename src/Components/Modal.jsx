/* eslint-disable react/prop-types */
import { Modal, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const ModalCom = ({ modal, setModal, Productchose }) => {
  const handleClose = () => setModal(false);

  return (
    <Modal show={modal} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="text-lg md:text-xl font-semibold">
          {Productchose.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="flex flex-col items-center">
        <img
          src={Productchose.image || Productchose.images?.[0]}
          alt={Productchose.title}
          className="w-full h-48 md:h-64 lg:h-80 object-contain"
        />
        <p className="mt-4 text-sm md:text-base text-center">
          {Productchose.description}
        </p>
        <h4 className="mt-2 text-lg font-bold">Price: ${Productchose.price}</h4>
      </Modal.Body>
      <Modal.Footer className="flex gap-32 justify-between w-full">
        <Button variant="success">
          <NavLink
            to="#"
            onClick={() => window.open("https://wa.me/923485020076", "_blank")}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            WhatsApp
          </NavLink>
        </Button>{" "}
        <div className="flex gap-6">
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Buy Now
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalCom;
