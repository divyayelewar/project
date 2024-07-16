import React from 'react'
import {Link}  from 'react-router-dom'
import { FaStar } from "react-icons/fa";

const Card = ({products}) => {
  console.log(products)
  return (
    <Link to={`/product/${products.id}`}className='card'>
      <div className="img"><img src={products.imageUrl} alt="" /></div>
      <div className="productes_detailes">
       <div className="brand">{products.brand}</div>
      <div className="title">{products.title}</div>
      
        <div className="rate">{products.rating}< FaStar size={10}/> </div>
        
      
      <div className="main_price">
      <div className="discountedPrice">₹{products.discountedPrice}</div>
      <div className="price">₹{products.price}</div>
      <div className="discouned_prasent"> {products.discountPersent}% off</div>
      </div>
      <div className="quantity">Stock:{products.quantity}</div>

    </div>
    </Link>
  )
}

export default Card