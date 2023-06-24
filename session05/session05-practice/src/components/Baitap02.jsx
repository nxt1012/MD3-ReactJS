import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Baitap02.css";
import { Button, Card, Row, Col } from "react-bootstrap";
import logo from "../logo.svg";

function Baitap02() {
  return (
    <>
      <Navbar expand="lg" className="bg-primary text-white">
        <Container>
          <Navbar.Brand href="#home">Example Site</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container style={{ marginTop: "3rem" }}>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={logo} className="bg-black" />
              <Card.Body>
                <Card.Title>Example Card</Card.Title>
                <Card.Text>This is an example React card.</Card.Text>
                <Button variant="primary">Example Button</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={logo} className="bg-black" />
              <Card.Body>
                <Card.Title>Example Card</Card.Title>
                <Card.Text>This is an example React card.</Card.Text>
                <Button variant="primary">Example Button</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={logo} className="bg-black" />
              <Card.Body>
                <Card.Title>Example Card</Card.Title>
                <Card.Text>This is an example React card.</Card.Text>
                <Button variant="primary">Example Button</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container
        style={{ height: "150px", backgroundColor: "#262c3c" }}
      ></Container>
    </>
  );
}

export default Baitap02;
