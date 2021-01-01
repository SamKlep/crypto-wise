import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

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
            <Nav.Link href='/news'>News</Nav.Link>
            <Nav.Link href='/stock'>Stocks</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header
