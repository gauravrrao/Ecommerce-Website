import React, { useContext } from 'react'
import { reactor } from './Kevin'
import './cart.css'

const Cart = () => {

  const { taken ,settaken} = useContext(reactor)
 
  let reject=(id)=>{
      let newarr = taken.filter((val)=>{
        return val.id != id
      })
      settaken(newarr)
      console.log(newarr)
  }

  return (
    <>
    <div className="box2">
       <div className="productcontainer2">
    {
      !taken ? (
        <h2 className='error'>Loading</h2>
        ) : ( 
        taken.map((cur)=>{
        return <div className="card">
        <p className="c-name">{cur.title}</p>
        <img src={cur.image} alt="" srcset="" className='c-image' />
        <p className="price">Price = {cur.price}</p>
        <button className='btn' onClick={()=>reject(cur.id)}>Remove</button>
        </div>
      }) )     
    }
    </div>
    
    <div className="totalprice">
      <h2>Total Items</h2>
      <p>
        {
          taken.map((cur)=>{
            return <p>Item {cur.id} = {cur.price}</p>
          })
        }
      </p>

      <h3>Total Amount</h3>
      <p>
        {
          taken.map(cur => cur.price).reduce((total,value) => total + value,0)
        }
      </p>
    </div>
    </div>
    </>
  )
}

export default Cart