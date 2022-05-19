import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "../App.css";
const Header = () => {
  return (
    <Navbar id='nav-bar-container' expand='lg'>
      <Container>
        <Navbar.Brand href='/'>Commerce Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-4'>
            <Nav.Link href='/cart'>Cart</Nav.Link>
            <Nav.Link href='/fav'>Favorites</Nav.Link>
            <NavDropdown title='Menu' id='basic-nav-dropdown'>
              <NavDropdown.Item href='/crafts'>Crafts</NavDropdown.Item>
              <NavDropdown.Item href='/naturals'>Naturals</NavDropdown.Item>
              <NavDropdown.Item href='/orders'>Orders</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
