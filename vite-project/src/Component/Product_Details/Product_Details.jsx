import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import './style.css'
import { FaStar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { BsLightningFill } from "react-icons/bs";

const Product_Details = () => {
  const navigate = useNavigate()
  const handleCart =()=>{
    navigate("/cart")
    
  }
  const handlecheckout =()=>{
    navigate("/checkout")
}


  
  return (
    <div className='product_details'>
      <div className="bread_crumbs">
        <Link>Home</Link>
        <p> <IoIosArrowForward/></p>
        <Link>product</Link>
        <p> <IoIosArrowForward/></p>
        <Link>category</Link>
        <p> <IoIosArrowForward/></p>
        <Link>Clothing And Accessories</Link>
        <p> <IoIosArrowForward/></p>
        <Link>  Women's Kurtas</Link>
      </div>
      <div className="product_section">
        <div className="images"> 
          <div className="main_image">
            <img src="https://rukminim2.flixcart.com/image/612/612/kr0ynbk0/kurta/k/t/i/xl-anpink-s-chalwal-threads-original-imag4wy7shrenrae.jpeg?q=70" alt="" />
            </div>
          
          <div className="sub_images">
            <div className="img"><img src="https://rukminim1.flixcart.com/image/3072/3686/kr0ynbk0/kurta/k/m/z/xl-anpink-s-chalwal-threads-original-imag4wy7neghpskm.jpeg?q=60&crop=false" alt="" /></div>
            <div className="img"><img src="https://rukminim1.flixcart.com/image/850/1000/kr0ynbk0/kurta/k/e/g/xl-anpink-s-chalwal-threads-original-imag4wy7me3chu8w.jpeg?q=20&crop=false" alt="" /></div>
            <div className="img"><img src="https://rukminim1.flixcart.com/image/850/1000/kr0ynbk0/kurta/o/p/u/xl-anpink-s-chalwal-threads-original-imag4wy7ur7krbtu.jpeg?q=20&crop=false" alt="" /></div>
            <div className="img"><img src="https://rukminim1.flixcart.com/image/1550/1850/kr0ynbk0/kurta/2/3/m/xl-anpink-s-chalwal-threads-original-imag4wy7y4qffc7g.jpeg?q=20&crop=false" alt="" /></div>
             <div className="img"><img src="https://rukminim1.flixcart.com/image/1636/1963/kr0ynbk0/kurta/u/u/m/xl-anpink-s-chalwal-threads-original-imag4wy7hgztbzc3.jpeg?q=60&crop=false" alt="" /></div>  
      
        </div>
        <div className="buttons">
        <div className="btn_one"><button onClick ={handleCart}><p><FaShoppingCart size={25}/></p>ADD TO CART</button></div>
        <div className="btn_tow"><button onClick={handlecheckout}><p><BsLightningFill size={25}/></p>BUY NOW</button></div>
      </div>
        </div>
        <div className="product_info">
          <div className="brands">CHALWAL THREADS </div>
          <div className="titles">Women Solid Viscose Rayon Flared Kurta  (Blue)</div>
          <div className="rate_review">
            <div className="rating">4.3<FaStar size={11}/></div>
            <div className="review">221 ratings and 7 reviews</div>
          </div>
          <div className="price_info">
            
            <div className="mai_price">₹1,700</div>
            <div className="org_prics">₹2,999</div>
            <div className="discount">50% off</div>

          </div>
            
          <div className="colors">
            <div className="color bg-yellow-600 "></div>
            <div className="color bg-pink-600"></div>
            <div className="color bg-black"></div>
            <div className="color  bg-green-600"> </div>
          </div>

        <div className="sizes">
          <div className="size">M</div>
          <div className="size">S</div>
          <div className="size">XL</div>
          <div className="size">X</div>
        </div>

         <div className="Availablel_off">
          <h2>Available offers </h2>
          <p>Bank OfferGet ₹50 Instant Discount on first Flipkart UPI transaction on order of ₹200 and above<span> T&C</span>  </p>
          <p>Bank Offer5% Cashback on Flipkart Axis Bank CardT<span> T&C</span></p>
          <p>Special PriceGet extra 27% off (price inclusive of cashback/coupon)<span> T&C</span>
          </p>
          <p>Partner OfferSign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹20,000*<span> Know More</span> </p>
        <p>Partner OfferMake a purchase and enjoy a surprise cashback/ coupon that you can redeem later!<span> Know More</span>
        </p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Product_Details