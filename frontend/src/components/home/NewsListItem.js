import React from 'react'
import { Card, Container } from 'react-bootstrap'

const NewsListItem = ({ n }) => {
  return (
    <Container className='justify-content-md-center'>
      <Card className=' mb-5' style={{ width: '24em' }}>
        <a href={n.url} target='_blank' without rel='noreferrer'>
          <Card.Img
            className='card-img-top'
            src={n.imageurl}
            alt='news'
            fluid
          />
        </a>
        <Card.Body>
          <a href={n.url} target='_blank' without rel='noreferrer'>
            <Card.Title as='div'>
              <strong>
                <h4>{n.title}</h4>
              </strong>
            </Card.Title>
          </a>
          {n.body}
        </Card.Body>
      </Card>
    </Container>
  )
}

export default NewsListItem
