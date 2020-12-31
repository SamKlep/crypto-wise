import React, { useState, useEffect } from 'react'
import { Form, FormControl, Button, Table } from 'react-bootstrap'
import axios from 'axios'
import StockListItem from './StockListItem'

const StockApp = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState([])

  useEffect(() => {
    setLoading(true)
    axios
      .get(`/stock`)
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
    <div className='container m-5 p-2'>
      <Form className='mb-5'>
        <FormControl className='mb-3' type='text' placeholder='Search Stocks' />
        <Button variant='outline-success btn-lg btn-block'>Search</Button>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Sector</th>

            <th>Price</th>
            <th>Volume</th>
          </tr>
        </thead>
        {data.map((p) => (
          <StockListItem p={p} />
        ))}
      </Table>
    </div>
  )
}

export default StockApp
