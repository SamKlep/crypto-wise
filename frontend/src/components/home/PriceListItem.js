import React from 'react'

const PriceListItem = ({ p }) => {
  return (
    <>
      <tbody>
        <tr key={p.CoinInfo.Id}>
          <td>{p.CoinInfo.Name}</td>
          <td>{p.CoinInfo.FullName}</td>
          <td>$ {p.RAW.USD.PRICE}</td>
          <td>$ {p.RAW.USD.HIGH24HOUR}</td>
          <td>$ {p.RAW.USD.LOW24HOUR}</td>
          <td>$ {p.RAW.USD.MKTCAP}</td>
        </tr>
      </tbody>
    </>
  )
}

export default PriceListItem
