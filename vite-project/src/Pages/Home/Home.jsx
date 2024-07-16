import React, { useState } from 'react'
import Banner from '../../Component/Carousel/Banner'
import Products from '../../Component/products/Products'
import { mens_kurta } from '../../Component/Data/Mens_Kurta (1)'
import Home_productes from '../../Component/products/Home_products'
import Product_Carousel from '../../Component/Carousel/Product_Carousel'
import { Womens } from '../../Component/Data/women_dress.'
import { womens_top } from '../../Component/Data/women_top (1)'
import Address_Card from '../../Component/Address_Card/Address_Card'
import Order_summery from '../../Component/Checkout/Order_summery'
import Card from '../../Component/products/Card'
import '../../Component/products/style.css'
import Search from '../../Component/Search/Search'

const Home = () => {
  const [searchTerm, setsearchTerm] = useState('')
  console.log(searchTerm)
  return (


    <div>
      <Banner />

      <Search setsearchTerm={setsearchTerm} />
      <div className="products_grid">
        {
          mens_kurta.filter((val) => {
            if (searchTerm == "") {
              return val;


            } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
              return val;
            }
            return false;
          })
            .map((item, index) => {
              return (<Card products={item} key={index} />)
            })
        }
      </div>


      <Product_Carousel Heading={"Men's Kurtas"} products={mens_kurta} />
      <Product_Carousel Heading={"Women's Kurtas"} products={Womens} />
      <Product_Carousel Heading={"Womens Top"} products={womens_top} />
      {/* <Order_summery/> */}
      {/* <Address_Card/> */}
    </div>

  )
}

export default Home