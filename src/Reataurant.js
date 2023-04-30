import React from 'react'
import './style.css'
import { Menu } from './Menu'
import { useState } from 'react'
import { CartMenu } from './CartMenu'
import { Navbar } from './Navbar'


const data =   [...new Set(Menu.map((element)=>{
  return element.category
  
})),"All"]
console.log(data);


const Restaurant = () => {

const  [setData, updatesetData] = useState(Menu)
const  [newData , setNewData] = useState(data)
  
const filterItem = (category) =>{
  if(category === "All"){
    return(
     updatesetData(Menu)
    )
  }
  const updateData = Menu.filter((element)=>{
    return element.category === category;
  })
  updatesetData(updateData);
}




    return (
        <> 
           <Navbar  filterItem ={ filterItem } newData = { newData } />
           <CartMenu setData = { setData }/>
        </>
    )
}

export { Restaurant }
