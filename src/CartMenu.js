import React from 'react'

const CartMenu = ({ setData }) => {
  return (
    <>
    
    <div className="container"> 
    {
        setData.map((element)=>{
          
            const {id, name, category, price, image,description }=  element;
            return(
                <>
                <div className="box" key={id}>
                  <h6 className='one'>{id}</h6>
                  <p>{category}</p>
                  <h1>{name}</h1>
                  <p>{description}</p>
                  <p className='read'>...READ</p>
                 <br />
                  <img src={image} alt="Loading" />
                 <h2>{price}</h2>
                 <div className="order">
                   <span className='right'>
                    Order Now 
                   </span>   
                 </div>
                </div>
                </>
            )
        })
    }         
            </div>
    </>
  )
}

export { CartMenu };

