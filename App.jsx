// App.jsx (o App.js)
import React, { useState } from 'react';
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Carousel,
  Card,
  Button,
  Form,
  Row,
  Col,
  Modal,
  Toast,
  ToastContainer,
  Tab,
  Tabs,
  Alert
} from 'react-bootstrap';
import './App.css';

// Importación de imágenes para el Carousel
import granosCafe from './assets/granosCafee.png';
import barista from './assets/barista.webp';
import ambiente from './assets/cafeteria.avif';

// Importación de imágenes para los productos
import cappuchinoImg from './assets/cappuchino.jpg';
import espressoImg from './assets/espresso.jpg';
import latteImg from './assets/latte.jpg'; 
import mochaImg from './assets/mocha.jpg';

function App() {
  // Estados para Modal, Toast, Alert y Tabs
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showAlert, setShowAlert] = useState(true);
  const [activeTab, setActiveTab] = useState("menu");

  // Funciones para abrir/cerrar Modal y Toast
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleShowToast = () => setShowToast(true);
  const handleCloseToast = () => setShowToast(false);

  // Datos de ejemplo para las Cards de café usando imágenes locales
  const coffeeItems = [
    {
      title: "Espresso",
      text: "Intenso y puro, el corazón de todo café.",
      img: espressoImg
    },
    {
      title: "Cappuccino",
      text: "Leche y espuma que suavizan el sabor del espresso.",
      img: cappuchinoImg
    },
    {
      title: "Latte",
      text: "Café con leche al estilo italiano, suave y cremoso.",
      img: latteImg
    },
    {
      title: "Mocha",
      text: "Combina espresso, chocolate y leche en un sabor único.",
      img: mochaImg
    }
  ];

  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">CoffeeWorld</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarCoffee" />
          <Navbar.Collapse id="navbarCoffee">
            <Nav className="me-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#about">Nosotros</Nav.Link>
              <NavDropdown title="Servicios" id="navbar-dropdown">
                <NavDropdown.Item href="#serv/1">Café para llevar</NavDropdown.Item>
                <NavDropdown.Item href="#serv/2">Degustaciones</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#serv/3">Barista en casa</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="my-4">
        <h1 className="title-center">Bienvenido a CoffeeWorld</h1>

        {/* Alert de bienvenida */}
        {showAlert && (
          <Alert variant="success" dismissible onClose={() => setShowAlert(false)}>
            ¡Disfruta de nuestro café recién hecho!
          </Alert>
        )}

        {/* Carousel con imágenes locales */}
        <Carousel className="mb-4">
          <Carousel.Item>
            <img className="d-block w-100" src={granosCafe} alt="Granos de café" />
            <Carousel.Caption>
              <h3>Granos de Café</h3>
              <p>Seleccionamos solo los mejores granos.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={barista} alt="Barista preparando café" />
            <Carousel.Caption>
              <h3>Baristas Expertos</h3>
              <p>Crean bebidas irresistibles.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={ambiente} alt="Ambiente acogedor" />
            <Carousel.Caption>
              <h3>Ambiente Acogedor</h3>
              <p>Siéntete en casa con nuestro café.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {/* Tabs */}
        <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k)} className="mb-4">
          <Tab eventKey="menu" title="Menú">
            <p className="mt-3">Nuestro menú incluye una variedad de cafés y snacks.</p>
          </Tab>
          <Tab eventKey="promo" title="Promociones">
            <p className="mt-3">Descubre nuestras ofertas y descuentos especiales.</p>
          </Tab>
          <Tab eventKey="contact" title="Contacto" disabled>
            <p className="mt-3">Esta sección está deshabilitada.</p>
          </Tab>
        </Tabs>

        {/* Cards con productos */}
        <Row className="gy-4 mb-4">
          {coffeeItems.map((coffee, i) => (
            <Col key={i} xs={12} sm={6} md={3}>
              <Card>
                <Card.Img variant="top" src={coffee.img} />
                <Card.Body>
                  <Card.Title>{coffee.title}</Card.Title>
                  <Card.Text>{coffee.text}</Card.Text>
                  <Button className="btn-coffee" onClick={handleShowToast}>
                    Añadir al carrito
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Formulario de reservación */}
        <h1 className="mb-3">Reserva tu mesa</h1>
        <Form className="mb-4">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Tu nombre" />
            </Form.Group>
            <Form.Group as={Col} controlId="formTelefono">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control type="tel" placeholder="Número de contacto" />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control type="email" placeholder="tuemail@ejemplo.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPersonas">
            <Form.Label>Número de personas</Form.Label>
            <Form.Control type="number" placeholder="Ej. 2" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCheck">
            <Form.Check type="checkbox" label="Deseo recibir notificaciones de CoffeeWorld" />
          </Form.Group>
          <Button className="btn-coffee" type="submit">
            Reservar
          </Button>
        </Form>

        {/* Botón para abrir el Modal */}
        <Button className="btn-coffee" onClick={handleOpenModal}>
          Ver detalles de la Cafetería
        </Button>

        {/* Modal */}
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Sobre CoffeeWorld</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Somos una cafetería dedicada a brindar la mejor experiencia de sabor y
              hospitalidad. Nuestros baristas preparan cada taza con pasión y dedicación.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cerrar
            </Button>
            <Button className="btn-coffee" onClick={handleCloseModal}>
              ¡Gracias!
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Toast para notificación */}
        <ToastContainer position="top-end" className="p-3">
          <Toast bg="warning" show={showToast} onClose={handleCloseToast} delay={3000} autohide>
            <Toast.Header>
              <strong className="me-auto">CoffeeWorld</strong>
              <small>Justo ahora</small>
            </Toast.Header>
            <Toast.Body>¡Producto añadido al carrito!</Toast.Body>
          </Toast>
        </ToastContainer>
      </Container>

      {/* Footer */}
      <footer className="text-center p-4" style={{ backgroundColor: '#d7ccc8', color: '#3e2723' }}>
        <p>© {new Date().getFullYear()} - CoffeeWorld</p>
      </footer>
    </>
  );
}

export default App;
