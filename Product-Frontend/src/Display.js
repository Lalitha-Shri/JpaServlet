
import React from 'react'
//created table to display the product details fetched from database
const Display = ({items,index}) => {
  return (
    <div className='table'>
      <tbody className='tbody'>
        <tr className='row'>
          <th className='th'>Name</th>
          <th className='th'>Price</th>
          <th className='th'>Category</th>
          
        </tr>
        {items.map((item, id) => (
          <tr key={item.id} className='row'>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td className='cat'>{item.category}</td>
           
          </tr>
        ))}
      </tbody>
    </div>
  )
}

export default Display