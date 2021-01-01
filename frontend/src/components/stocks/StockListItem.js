import React from 'react'

const StockListItem = ({ p }) => {
  return (
    <>
      <tbody>
        <tr>
          <td>{p.symbol}</td>
          <td>{p.companyName}</td>
          <td>{p.primaryExchange}</td>
          <td>$ {p.high}</td>
          <td>$ {p.low}</td>
          <td>$ {p.latestPrice}</td>
          <td>{p.change} %</td>
          <td>$ {p.week52High}</td>
          <td>$ {p.week52Low}</td>
          <td>$ {p.marketCap}</td>
        </tr>
      </tbody>
    </>
  )
}

export default StockListItem
