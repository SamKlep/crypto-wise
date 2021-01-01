import React from 'react'

const StockListItem = ({ p }) => {
  return (
    <>
      <tbody>
        <tr>
          <td>{p.symbol}</td>
          <td>{p.companyName}</td>
          <td>{p.changePercent} %</td>
          <td>$ {p.iexClose}</td>
          <td>$ {p.iexClose}</td>
          <td>$ {p.marketCap}</td>
        </tr>
      </tbody>
    </>
  )
}

export default StockListItem
