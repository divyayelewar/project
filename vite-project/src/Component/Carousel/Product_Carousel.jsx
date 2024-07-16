import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
import './style.css'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const Product_Carousel = ({ products, Heading }) => {

  return (
    <div className="main">
      <h1>{Heading}</h1>
      <Carousel responsive={responsive} className='carousel'>
        {
          products.map((products, index) => {
            return (
              <Link to={`/product/${products.id}`} className='carousel_card'>
                <div className="image"><img src={products.imageUrl} alt="" /></div>
                <div className="carousel_details">
                  <div className="brand">{products.brand}</div>
                  <div className="title">{products.title}</div>
                  <div className="main_price">
                    <div className="discountedPrice">₹{products.discountedPrice}</div>
                    <div className="price">₹{products.price}</div>
                    <div className="discouned_prasent"> {products.discountPersent}% off</div>
                  </div>
                  <div className="quantity">Stock:{products.quantity}</div>

                </div>
              </Link>


            )
          })
        }

      </Carousel>
    </div>
  )
}

export default Product_Carousel