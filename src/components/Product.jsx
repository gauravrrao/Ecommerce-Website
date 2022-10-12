import React, { useContext } from 'react'
import { reactor } from './Kevin'
import './product.css'


const Product = () => {

  const {item,taken,settaken} = useContext(reactor)

  let harry=(cur)=>{
    settaken([cur,...taken])
  }

  return (
    <>
    <div className="productcontainer">
    {
       !item ? (
        <h2 className='error'>Loading</h2>
        ) : ( 
        item.map((cur, ind)=>{
        return <div className="card">
        <p className="c-name">{cur.title} </p>
        <img src={cur.image} alt="" srcset="" className='c-image' />
        <p className="price">Price = {cur.price}</p>
        <button className='btn' onClick={()=>harry(cur)}>Add</button>
        </div>
      }) )           
    }
    </div>
    </>
  )
}

export default Product
