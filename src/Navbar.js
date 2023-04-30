import React from 'react'

const Navbar = ({ filterItem, newData }) => {
  return (
    <>
       <div className="button">
              <div className="btn-group">
              {
                newData.map((element)=>{
                    return(
                    <button className='btn-group_item' onClick={()=>filterItem(element)}>{element}</button>
                )})
              }
              </div>
           </div>
    </>
  )
}

export { Navbar }
