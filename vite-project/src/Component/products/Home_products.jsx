import React, { useState } from 'react'
import Card from './Card'
import './style.css'
const Home_products = ({products}) => {
  const [searchterm,usesearchterm]=useState("")
    return (
      

      <div className='products_grid'>
        {
          products.map((item,index) =><Card products={item}/>)
        }
      </div>
    )
  }
  

export default Home_products
