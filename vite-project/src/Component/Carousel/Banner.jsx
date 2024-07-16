import React from 'react'
import Carousel from 'react-material-ui-carousel'
import './style.css'
const variable=[
    {
        "id":101,
        "img":"https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/04b867a83134dd0f.jpg?q=20"
    },
    {
        "id":101,
        "img":"https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/0e4fae4d5fcab33b.jpg?q=20"
    },
    {
        "id":101,
        "img":"https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/0b258b0085c395ee.jpg?q=20"
    },
    {
        "id":101,
        "img":"https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/a4967bcc3d7e2c25.jpeg?q=20"
    },
    {
        "id":101,
        "img":"https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/f888f8f443a8a927.jpg?q=20"
    },
]
const Banner = () => {
  return (
    
    <Carousel className="carousel" >
       {
        variable.map((item,index)=>
        <img src={item.img} alt=""/>
    )
       }
    </Carousel>
  )
}

export default Banner