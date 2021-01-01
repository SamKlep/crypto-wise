import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col, Table } from 'react-bootstrap'
import PriceListItem from './PriceListItem'

const HomeApp = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState([])

  useEffect(() => {
    setLoading(true)
    axios
      .get(`/prices`)
      .then((response) => {
        setData(response.data)
        // console.log(response.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  if (loading) {
    return <p>Loading prices...</p>
  }

  return (
    <div className='container mt-3'>
      <Row>
        <Col className='text-center m-5'>
          <h1 className='display-4'>Top Performers</h1>
        </Col>
      </Row>
      <Row>
        <br />
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Name</th>
                <th>Price</th>
                <th>24HR High</th>
                <th>24HR Low</th>
              </tr>
            </thead>
            {data.Data.map((p, id) => (
              <PriceListItem key={id} p={p} />
            ))}
          </Table>
        </Col>
      </Row>
    </div>
  )
}

export default HomeApp
