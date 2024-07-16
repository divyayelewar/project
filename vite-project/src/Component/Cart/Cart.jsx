
import React from 'react'
import Cart_Card from './Cart_Card'



const Cart = () => {

  return (
    <div className="cart_section">
      <div className="cart_ietms">
      <div className="left">
        <div className="addres">From Saved Address</div>
        <div className="pin_code">
          <button>Enter delivery pincode</button>
        </div>
</div>

        {[1,1,1,1].map((item,index)=><Cart_Card/>)}
        
        <div class="place_order">
          <button>place order</button>
        </div>
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

export default Cart