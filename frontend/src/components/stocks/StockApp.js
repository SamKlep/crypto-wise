import React, { useState, useEffect } from 'react'
import {
  Form,
  FormControl,
  Button,
  Table,
  Jumbotron,
  Row,
  Col,
} from 'react-bootstrap'
import axios from 'axios'
import StockListItem from './StockListItem'

const StockApp = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState([])

  useEffect(() => {
    setLoading(true)
    axios
      .get(`/stocks`)
      .then((response) => {
        setData(response.data)
        console.log(response.data)
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
    <div className='container m-5 mx-auto'>
      <Row>
        <Col>
          <Jumbotron className='text-center' fluid>
            <h1 className='text-info text-center'>Stocks</h1>
            <p className='lead text-success'>Top Gainers</p>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form className='mb-5'>
            <FormControl
              className='mb-3'
              type='text'
              placeholder='Search Stocks'
            />
            <Button variant='outline-success btn-lg btn-block'>Search</Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Name</th>
                <th>Exchange</th>
                <th>High</th>
                <th>Low</th>
                <th>Latest Price</th>
                <th>Change</th>
                <th>Yr High</th>
                <th>Yr Low</th>
                <th>Mkt Cap</th>
              </tr>
            </thead>
            {data.map((p) => (
              <StockListItem p={p} />
            ))}
          </Table>
        </Col>
      </Row>
    </div>
  )
}

export default StockApp
