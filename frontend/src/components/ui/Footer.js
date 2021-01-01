import React from 'react'
import { Nav } from 'react-bootstrap'

const Footer = () => {
  return (
    <>
      <Nav className='bg-light flex-column text-center mt-5' activeKey='/home'>
        <Nav.Item>
          <Nav.Link href='/'>
            <h6 className='mt-3 logo'>Crypto-Wise</h6>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <a
            href='mailto:samklepdev@gmail.com'
            target='_blank'
            rel='noreferrer'>
            samklepdev@gmail.com
          </a>{' '}
          © - 2021
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/prices'>Crypto / Prices</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/news'>Crypto / News</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/stock-prices'>Stock / Prices</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/stock/news'>Stock / News</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  )
}

export default Footer
