import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

const Header = () => {
  return (
    <div>
      <Navbar className='header' bg='info' variant='dark' expand='lg'>
        <Navbar.Brand href='/'>
          <h1 className='logo'>Crypto-Wise</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <NavDropdown title='Crypto' id='basic-nav-dropdown'>
              <NavDropdown.Item href='/prices'>Prices</NavDropdown.Item>
              <NavDropdown.Item href='/news'>News</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='Stocks' id='basic-nav-dropdown'>
              <NavDropdown.Item href='/stock-prices'>Prices</NavDropdown.Item>
              <NavDropdown.Item href='/stock-news'>News</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header
