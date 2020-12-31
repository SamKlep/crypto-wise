import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col, Card, Form, FormControl, Button } from 'react-bootstrap'

const PriceApp = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState([])

  useEffect(() => {
    setLoading(true)
    axios
      .get(`/price`)
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
    <div className='container mt-3'>
      <Row>
        <Col className='text-center m-5'>
          <h1 className='display-4'>Price Check</h1>
          <p className='lead'>Enter the name of a coin in question.</p>
        </Col>
      </Row>
      <Row>
        <Col className='text-center m-5'>
          <Form className='mb-3'>
            <FormControl
              className='mb-3'
              type='text'
              placeholder='Search Assets'
            />
            <Button variant='outline-success btn-lg btn-block'>Search</Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <br />
        <Col>
          <Card>
            <Card.Body>
              <p className='display-4 text-center'>
                $
                {parseFloat(data.USD)
                  .toFixed(2)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default PriceApp
