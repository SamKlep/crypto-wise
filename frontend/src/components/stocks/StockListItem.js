import React from 'react'

const StockListItem = ({ p }) => {
  return (
    <>
      <tbody>
        <tr>
          <td>{p.symbol}</td>
          <td>{p.sector}</td>
          <td>$ {p.lastSalePrice}</td>
          <td>{p.volume}</td>
        </tr>
      </tbody>
    </>
  )
}

export default StockListItem
