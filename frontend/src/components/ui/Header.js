import React from 'react'
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap'

const Header = () => {
  return (
    <div>
      <Navbar className='header' bg='info' variant='dark' expand='lg'>
        <Navbar.Brand href='/'>
          <h1 className='logo'>Crypto-Wise</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <NavDropdown title='Crypto' id='basic-nav-dropdown'>
              <NavDropdown.Item href='/cprice'>Prices</NavDropdown.Item>
              <NavDropdown.Item href='/cnews'>News</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='Stocks' id='basic-nav-dropdown'>
              <NavDropdown.Item href='/sprice'>Prices</NavDropdown.Item>
              <NavDropdown.Item href='/snews'>News</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type='text' placeholder='Search' className='mr-sm-2' />
            <Button variant='outline-success'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header
