// import { useState } from 'react'
// import { Link } from 'react-router-dom'

//! Bootstrap import
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo2 from '../images/logo2.png';
// import NavDropdown from 'react-bootstrap/NavDropdown';


export default function NavBar() {

  // ! State
  // const [show, setShow] = useState(false)

  return (
    // <>
    // <header>
    //   <nav>
    //     <Link>Home </Link>
    //     <Link to={"/shows"}>Index </Link>
    //   </nav>
    // </header>
    // </>

    <>
      <Navbar className='navBar' data-bs-theme="dark">
        < Container >
          <Navbar.Brand>
            <img
              alt=""
              src={logo2}
              width="60"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href={"/"}>Home</Nav.Link>
              <Nav.Link href={"/shows"}>Index</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container >
      </Navbar>
    </>

  )
}
