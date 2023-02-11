import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../../context/AuthContex';
import LeftSideNav from '../LeftSideNav/LeftSideNav';


const Header = () => {
  const {user, logOut} = useContext(AuthProvider)
  const handleLogOut = () =>{
    logOut()
    .then(()=>{})
    .catch(error => console.error(error))
  }
    return (
        <div >
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href=""><Link to='/'>Dragon News</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              {
                user?.email ?
                <>
                <span>{user?.displayName}</span>
                <Button onClick={handleLogOut}>Log Out</Button>
                </>
                :
                <>
                <Link className='me-3' to='/login'>Log In</Link>
                <Link className='me-3' to='/register'>Register</Link>
                </>
              }
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
          <div className='d-block d-lg-none'>
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;