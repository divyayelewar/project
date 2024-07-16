import React from 'react'
import Navigation from '../Component/Navigation/Navigation'
import { Route,Routes } from 'react-router-dom'
import Footer from '../Component/Footer/Footer'
import Home from '../Pages/Home/Home'
import Cart from '../Component/Cart/Cart'
import Products from '../Component/products/Products'
import Checkout from '../Component/Checkout/Checkout'
import Orders from '../Component/Orders/Orders'
import Orders_Details from '../Component/Orders/Orders_Details'
import Product_Details from '../Component/Product_Details/Product_Details'
import Order_summery from '../Component/Checkout/Order_summery'
import Address_Card from '../Component/Address_Card/Address_Card'


const Customer_Routes = () => {
  return (
    <div>
        <Navigation/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cart" element={<Cart/>} />
            
            <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Products/>} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/account/orders" element={<Orders/>} />
            <Route path="/account/orders/:orderId" element={<Orders_Details/>} />
            <Route path="/product/:productId" element={<Product_Details/>} />
            <Route path="/Ordersummery" element={<Order_summery/>}/>
            <Route path="/Address_cart" element={<Address_Card/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default Customer_Routes