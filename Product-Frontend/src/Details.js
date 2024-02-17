import React from 'react'
//product details are get from user using this components using value and onchange attributes
const Details = ({handleSubmit,name,setName,price,setPrice,desc,setDesc}) => {
     
  return (
    <main>
       <div className='container'>
        <form className='addForm' onSubmit={handleSubmit}>
        
        <div className="row">
      <div className="col-25">
            <label htmlFor='pname'>Product Name</label>
            </div>
    <div className="col-75">
            <input type="text" 
            id="pname"
            value={name}
            onChange={(e)=>setName(e.target.value)}></input>
            </div>
            </div>
            <div className="row">
      <div className="col-25">
            <label htmlFor='pprice'>Price</label>
            </div>
    <div className="col-75">
            <input type="text"
            id="pprice"
            value={price}
            onChange={(e)=>setPrice(e.target.value)}></input>
            </div>
            </div>
            <div className="row">
      <div className="col-25">
            <label htmlFor='pdescription'>Description</label>
            </div>
    <div className="col-75">            
            <input type="text"
            id="pdescription"
            value={desc}
            onChange={(e)=>setDesc(e.target.value)}></input>
            </div>
            </div>
            <div className="row">
            <button type='submit' className='button'>Add</button>
            </div>
        </form>
        </div>  
        </main>
  )
}

export default Details