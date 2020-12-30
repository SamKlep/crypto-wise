import React from 'react'
import axios from 'axios'
import { Table, Container, Row, Col } from 'react-bootstrap'

class HomeApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      prices: [],
    }
  }

  componentDidMount() {
    axios
      .get('/prices')
      .then((response) => {
        this.setState({ prices: response.data })
      })
      .catch((err) => {
        console.log('Error fetching data from server', err)
      })
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col className='text-center m-5'>
              <h1 className='display-4'>Top Performers</h1>
              <p className='lead'>
                Here are the top performing coins for today.
              </p>
            </Col>
          </Row>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {this.state.prices.map((p) => (
                <tr key={p.currency}>
                  <td>{p.currency}</td>
                  <td>$ {parseFloat(p.price).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </React.Fragment>
    )
  }
}

export default HomeApp
