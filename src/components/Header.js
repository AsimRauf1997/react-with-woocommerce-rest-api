import { Badge, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import "../App.css";
const Header = () => {
  const { cartItem } = useSelector((state) => state.cart);
  return (
    <Navbar id='nav-bar-container' expand='lg'>
      <Container>
        <Navbar.Brand href='/'>Commerce Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-4'>
            <div
              style={{
                display: "flex",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <Nav.Link href='/cart'>
                Cart {""}
                {cartItem.length > 0 && (
                  <Badge pill bg='light' text='dark'>
                    {cartItem.length}
                  </Badge>
                )}
              </Nav.Link>
            </div>
            <Nav.Link href='/fav'>Favorites</Nav.Link>
            <NavDropdown title='Menu' id='basic-nav-dropdown'>
              <NavDropdown.Item href='/crafts'>Crafts</NavDropdown.Item>
              <NavDropdown.Item href='/naturals'>Naturals</NavDropdown.Item>
              <NavDropdown.Item href='/crafts'>Gifting</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='/orders'>Orders</Nav.Link>
            <NavDropdown title='Join Us' id='basic-nav-dropdown'>
              <NavDropdown.Item href='/login'>Login</NavDropdown.Item>
              <NavDropdown.Item href='/signup'>Sign-Up</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
