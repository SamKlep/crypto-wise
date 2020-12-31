import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Row, Col, Form, FormControl } from 'react-bootstrap'
import Coin from './Coin'

const PriceApp = () => {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then((res) => {
        setCoins(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLocaleLowerCase())
  })

  return (
    <Container className='mt-5'>
      <Row>
        <Col className='justify-content-lg-center'>
          <h1 className='text-center'>Search a currency</h1>
          <Form>
            <FormControl
              type='text'
              placeholder='Search'
              className='m-5'
              onChange={handleChange}
            />
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          {filteredCoins.map((coin) => {
            return (
              <Coin
                key={coin.id}
                name={coin.name}
                price={coin.current_price}
                symbol={coin.symbol}
                image={coin.image}
                marketcap={coin.market_cap}
                priceChange={coin.price_change_percentage_24h}
                volume={coin.total_volume}
              />
            )
          })}
        </Col>
      </Row>
    </Container>
  )
}

export default PriceApp
