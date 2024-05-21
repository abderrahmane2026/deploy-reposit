
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaHeart,   FaShoppingCart, FaUser } from "react-icons/fa";
import { MdMenu } from 'react-icons/md';
import Dropdown from 'react-bootstrap/Dropdown';
import "./Navbar.css";


function Searchbar() {
  return (
    <Navbar expand="lg" className="search-bar">
      <Container fluid>
        <Navbar.Brand href="#">
            <NavDropdown title={<i><MdMenu/></i>} id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Login </NavDropdown.Item>
              <NavDropdown.Item href="#action4">Singup</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown> 
        </Navbar.Brand>

        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <MdMenu/>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Login </NavDropdown.Item>
              <NavDropdown.Item href="#action4">Singup</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>

             {/*44444444 Search *******/}

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
           
          </Form>
          <Nav.Link href="#action1"><FaShoppingCart/></Nav.Link>
          <Nav.Link href="#action1"><FaHeart/></Nav.Link>
          <NavDropdown title={<FaUser/>} id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Login </NavDropdown.Item>
          <NavDropdown.Item href="#action3">Singup </NavDropdown.Item>

          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Searchbar;