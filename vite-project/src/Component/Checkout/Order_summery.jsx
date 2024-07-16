import React from 'react'
import Cart_Card from '../Cart/Cart_Card'
import './style.css'
const Order_summery = () => {
  return (
    <div className="cart_section">
      <div className="cart_ietms">
    {[1,1,1,1].map((item,index)=><Cart_Card/>)}
   
    </div>
    <div className="price_datails">
      <div className="right">
      <div className="heading">PRICE DETAILS
      </div>
      <div className="price_item">
        <div className="item">Price (2 items)</div>
        <div className="range">₹4,097 </div>
      </div>
      <div className="discount_rate">
        <div className="count">Discount  </div>
        <div className="rate">− ₹2,917  </div>
      </div>
      <div className="Delivery_Charges">
        <div className="Delivery">Delivery Charges  </div>
        <div className="Charges">Free</div>
      </div>
      <div className="Total_Amount">
        <div className="amount">Total Amount</div>
        <div className="amo_rate">₹1,180</div>
      </div>
    <div className="texts">
        <button>Checkout</button>
      </div>
      </div>

        </div>
       </div>
    
  )
}

export default Order_summery