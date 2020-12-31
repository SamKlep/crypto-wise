import React, { useState } from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'

const SearchBar = ({ getQuery }) => {
  const [setText] = useState('')

  const onChange = (q) => {
    setText(q)
    getQuery(q)
  }

  return (
    <>
      <Form inline>
        <FormControl type='text' placeholder='Search' className='mr-sm-2' />
        <Button
          variant='outline-info'
          onChange={(e) => onChange(e.target.value)}>
          Search
        </Button>
      </Form>
    </>
  )
}

export default SearchBar
