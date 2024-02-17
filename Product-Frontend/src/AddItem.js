import React from 'react'
import Details  from './Details';

const AddItem = ({handleClick,page,setPage,handleDisplay}) => {
  
  return (
    <div>
        <form className='addForm'>
            <button onClick={(e)=>handleClick(e)}>Add Product</button>
            <button onClick={(e)=>handleDisplay(e)}>Display Product Details</button>
        </form>
    </div>
  )
}

export default AddItem