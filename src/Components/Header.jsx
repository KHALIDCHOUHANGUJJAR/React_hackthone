import { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
  Row,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ModalCom from "./Modal";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [allCardsData, setAllCardsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [modal, setModal] = useState(false);
  const [SelectedProducts, setSelectedProducts] = useState(false);

  const getData = async () => {
    try {
      const prodata = await axios.get("https://fakestoreapi.com/products");
      const products3 = await axios.get(
        "https://api.escuelajs.co/api/v1/products"
      );

      const fakeStoreCategories = prodata.data.map((item) => item.category);
      const escuelajsCategories = products3.data.map(
        (item) => item.category.name
      );

      const allCategories = [
        ...new Set([...fakeStoreCategories, ...escuelajsCategories]),
      ];

      const allProducts = [...prodata.data, ...products3.data];

      setCategories(allCategories);
      setAllCardsData(allProducts);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCategory = (category) => {
    setSelectedCategory(category);
    setSearchTerm("");
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setSelectedCategory(null);
  };

  const filteredCards = allCardsData.filter((card) => {
    const matchesCategory = selectedCategory
      ? card.category === selectedCategory
      : false;
    const matchesSearch = searchTerm
      ? card.title.toLowerCase().includes(searchTerm.toLowerCase())
      : false;
    return matchesCategory || matchesSearch;
  });

  useEffect(() => {
    getData();
  }, []);

  const viewModal = (pro) => {
    setSelectedProducts(pro);
    setModal(true);
  };
  return (
    <div className="sticky top-0 left-0 w-full z-10 shadow-md">
      {["sm"].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="/" className=" text-2xl font-bold text-red-500">
              ChawkBazar
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 font-bold pe-3">
                  <NavLink to="/" className="nav-link">
                    Home
                  </NavLink>
                  <NavLink to="/Products" className="nav-link">
                    Products
                  </NavLink>
                  <NavLink to="/Contact" className="nav-link">
                    Contact Us
                  </NavLink>
                  <NavDropdown
                    title="Categories"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    {categories.length > 0 ? (
                      categories.map((category, index) => (
                        <NavDropdown.Item
                          href="#"
                          key={index}
                          onClick={() => handleCategory(category)}
                        >
                          {category}
                        </NavDropdown.Item>
                      ))
                    ) : (
                      <NavDropdown.Item>No Categories</NavDropdown.Item>
                    )}
                  </NavDropdown>
                </Nav>
                <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                  <Button variant="secondary">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

      <Container>
        <Row className="g-4">
          {filteredCards.length > 0 ? (
            filteredCards.map((product, index) => (
              <Col xs={12} sm={6} md={4} lg={3} key={index}>
                <Card
                  style={{ width: "100%" }}
                  onClick={() => viewModal(product)}
                >
                  <Card.Img
                    variant="top"
                    src={product.image}
                    style={{ height: "250px", objectFit: "contain" }}
                    alt={product.title}
                  />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Button variant="secondary">${product.price}</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p>
              No products found. Please select a category or search for a
              product.
            </p>
          )}
        </Row>
      </Container>
      <ModalCom
        modal={modal}
        setModal={setModal}
        Productchose={SelectedProducts}
      />
    </div>
  );
};

export default Header;
