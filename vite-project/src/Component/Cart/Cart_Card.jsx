import React, { useState } from 'react'
import './style.css'

const Cart_Card = () => {
  const [count,setCount]=useState(0)
  const addCount=()=>{
    setCount(count+1)
  }
 const removeCount=()=>{
  if(count>0)
   setCount(count-1)
 }
 
 
  return (
    <div className='main_container'>
    <div className="containers">
        
        <div className="main_div">
          <div className="images">
            <img src="https://rukminim2.flixcart.com/image/612/612/kr0ynbk0/kurta/k/t/i/xl-anpink-s-chalwal-threads-original-imag4wy7shrenrae.jpeg?q=70" alt="" />
            <div className="cart_btns">
            <button onClick={addCount}>+</button>
            <p>{count}</p>
            <button onClick={removeCount}>-</button>
           </div>
           
           </div>
          
          <div className="detail">
             <div className="brn">CHALWAL THREADS</div>
             <div className="tit">Women Solid Viscose Rayon Flared Kurta  (Blue)</div> 
             <div className="siz">Size: XXL,Blue</div>  
             <div className="seller">Seller:CHALWALTHREADS</div>
            {/* <div className="img_rev">
              <div className="img_rating">4.3</div>
              <div className="img_review">221 ratings and 7 reviews</div>
            </div> */}
            <div className="img_priceinfo">
              
              <div className="ori_price">₹1,999</div>
              <div className="mn_price">₹800</div>
              <div className="dis">50% off</div>
            </div>
              <div className="save_remove">
          <div className="save">SAVE FOR LATER</div>
          <div className="remove">REMOVE</div>
          </div>
      </div>
      <div className="delivery">Delivery by Thurs June 27 |<span>Free</span>
      </div>
    </div>
    </div>
   
  </div>
  )
}

export default Cart_Card
