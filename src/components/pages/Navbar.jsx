import { Navbar, Nav } from 'react-bootstrap';

import logo from '../../img/logo.jpg'

function JustifiedExample() {
  return (
    <Navbar bg="warning" variant="tabs" expand="lg" fixed="top">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto justify-content-around" style={{ width: "80%" }}>
        <Nav.Item>
            <Nav.Link  to="/"><img src={logo} className="img-nav" alt='logo navbar'/></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-black" to="/contact">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-black" href="#about">Sobre nós</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-black" href="#redesocial">Rede Social</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-black" href="#contato">Contato</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default JustifiedExample;
