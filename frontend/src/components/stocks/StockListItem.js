import React from 'react'

const StockListItem = ({ p }) => {
  return (
    <>
      <tbody>
        <tr>
          <td>{p.symbol}</td>
          <td>{p.companyName}</td>
          <td>{p.primaryExchange}</td>
          <td>$ {p.latestPrice}</td>
          <td>{p.change}%</td>

          {/* <td>
            ${' '}
            {p.RAW.USD.MKTCAP.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </td> */}
        </tr>
      </tbody>
    </>
  )
}

export default StockListItem
