import React from 'react'
import { Navbar,Container,Nav  } from 'react-bootstrap'

function Header() {
  return (
   

    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Restaurant</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
    </Navbar>

  )
}

export default Header