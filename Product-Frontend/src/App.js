
import './App.css';
import Header  from './Header';
import AddItem  from './AddItem';
import Display  from './Display';
import Details  from './Details';
import { useEffect, useState } from 'react';
import apiRequest from './apiRequest';

function App() {

  const[name,setName]=useState('');
  const[page,setPage]=useState('');
  const[price,setPrice]=useState();
  const[desc,setDesc]=useState('');
  const[items,setItems]=useState([]);
//function will be called when add button is clicked
  const handleClick=(e)=>
  {
   e.preventDefault();
   console.log("button clicked");
   setPage("Details")
 
  }
  //function will load when product form is submitted
  const handleSubmit=(e)=>{
    e.preventDefault();
    addTask(name,price,desc);
    setDesc("");
    setPrice("");
    setName("");
    window.alert("Product Added Sucessfully!!")
  }
  //function will be called when display button is clicked
  const handleDisplay=async(e)=>{
    e.preventDefault();
    console.log("display clicked");
    setPage("Display");
   
    
  }
//inside useeffect the datas are fetched from database and use state will load data only when display function is called
 useEffect(()=>{
  const getUserdata=async()=>  {
      const reqData=await fetch("http://localhost:8080/product")
      const resData=await reqData.json();
      setItems(resData);
      console.log(resData);
      
  }
  getUserdata();
 },[Display])


   
// from handle submit this addTask is invoked where apiRequest method is invoked 
// to communicate to database to insert the product details
 const addTask=async (name,price,desc)=>{
  const id=items.length>0?items[items.length-1].id+1:1;
  const addNewItem={id:id,name:name,price:price,category:desc}
  const addOptions={
    method:'POST',
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify(addNewItem),
  };
  const response=await apiRequest("http://localhost:8080/product",addOptions);

 }
 
  return (
    <div className="App">
     
      <Header/>
      <AddItem handleClick={handleClick} page={page} setPage={setPage} handleDisplay={handleDisplay}/>
      {page==="Details" && <Details title="Enter the Details" handleSubmit={handleSubmit} name={name} setName={setName} price={price}
    setPrice={setPrice} desc={desc} setDesc={setDesc}  />}
      {page==="Display" && <Display items={items} index={1}/>}
    
      
    </div>
  );
}

export default App;
