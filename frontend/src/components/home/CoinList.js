import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col, Table } from 'react-bootstrap'
import PriceListItem from './PriceListItem'

const CoinList = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState([])

  useEffect(() => {
    setLoading(true)
    axios
      .get(
        `https://min-api.cryptocompare.com/data/blockchain/latest?fsym=BTC&api_key=407ce028abe941a672ad85f05150bc2b5794946edb2240e32d61e2e64f57d21e`
      )
      .then((response) => {
        setData(response.data)
        // console.log(response.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return <div></div>
}

export default CoinList
