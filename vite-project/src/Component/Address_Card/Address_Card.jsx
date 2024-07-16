import React from 'react'
import './style.css'

const Address_Card = () => {
  return (

    <div className="stack">
      <div className="left_side">
        <div className="fullname">
          <label htmlFor="">firstname</label>
          <input type="text" placeholder='FristName' id='FristName' required />
        </div>
        <div className="lastname">
          <label htmlFor="">lastname</label>
          <input type="text" placeholder='LastName' id='LastName' required/>
        </div>
        <div className="address">
          <div className="add">
            <label htmlFor="">Address</label>
            <input type="text" placeholder='Address' id='Address' required /></div>
        </div>
        <div className="city_state">
          <div className="city">
            <label htmlFor="">City</label>
            <input type="text" placeholder='City' id='City'  required/></div>
          <div className="state">
            <label htmlFor="">State</label>
            <input type="text" placeholder='State' id='State' required/></div></div>
        <div className="zip_num">
          <div className="zipcode">
            <label htmlFor="">zipcode</label>
            <input type="text" placeholder='zipcode' id='zipcode'  required/></div>
          <div className="Number">
            <label htmlFor="">Number</label>
            <input type="text" placeholder='Number' id='Number'  required /></div></div>
        <div className="Email">
          <div className="mail">
            <label htmlFor="">Email</label>
            <input type="text" placeholder='Email' id='Email'  required /></div>
        </div>
        <div className="submit">
        
           
            <button>Submit</button>        
             </div>

      </div>
    </div>


    
  )
}

export default Address_Card