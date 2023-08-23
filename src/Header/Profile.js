import React from 'react'
import "./Profile.css"
import order from "./../assets/homePagePhotos/amazonbox.jpg"
import security from "./../assets/homePagePhotos/security.jpg"
import prime from "./../assets/homePagePhotos/prime.png"
import Address from "./../assets/homePagePhotos/location.png"
import payment from "./../assets/homePagePhotos/payment.jpg"
import amazonpay from "./../assets/homePagePhotos/amazonpay.jpg"
import contact from "./../assets/homePagePhotos/contact.png"
import { useNavigate } from 'react-router-dom'
const Profile = () => {
  const navigate= useNavigate()
   const handleNavigateAddress=()=>{
  navigate("/Address/")
  }
  return (
    <div className='container'>
      <h1>Your Account</h1>
      <div style={{ width:1200,display:'flex',justifyContent:'space-between'}}>
        <div style={{height:100,width:350,backgroundColor:'white',borderRadius:10,display:'flex',borderStyle:'solid',borderColor:'whitesmoke'}}>
          <img src={order}/>
          <div>
          <h5>Your Orders</h5>
        <h6>Track,Return or Buy things Again</h6>
        </div>
        </div>
        <div style={{height:100,width:350,backgroundColor:'white',borderRadius:10,display:'flex',borderStyle:'solid',borderColor:'whitesmoke'}}>
        <img src={security}/>
        <div>
          <h5>Login & Security</h5>
        <h6>Edit login,name,And Mobile Number</h6>
        </div>
        </div>
        <div style={{height:100,width:350,backgroundColor:'white',borderRadius:10,display:'flex',borderStyle:'solid',borderColor:'whitesmoke'}}>
        <img src={prime}/>
        <div>
          <h5>Prime</h5>
        <h6>view Benefits and Payment settings</h6>
        </div>
        </div>
      </div>
      <div style={{ width:1200,display:'flex',justifyContent:'space-between',marginTop:20}}>
        <div style={{height:100,width:350,backgroundColor:'white',borderRadius:10,display:'flex',borderStyle:'solid',borderColor:'whitesmoke'}}>
        <img src={Address}/>
        <div onClick={handleNavigateAddress}>
          <h5 >Your Address</h5>
        <h6>Edit Address for orders and gifts </h6>
        </div>
        </div>
        <div style={{height:100,width:350,backgroundColor:'white',borderRadius:10,display:'flex',borderStyle:'solid',borderColor:'whitesmoke'}}>
        <img src={payment}/>
        <div>
          <h5>Payment options</h5>
        <h6>Edit or Add Payment methods</h6>
        </div>
        </div>
        <div style={{height:100,width:350,backgroundColor:'white',borderRadius:10,display:'flex',borderStyle:'solid',borderColor:'whitesmoke'}}>
        <img src={amazonpay}/>
        <div>
          <h5>Amazon Pay balance</h5>
        <h6>Add money to your balance</h6>
        </div>  
        </div>
      </div>
      <div style={{ width:1200,display:'flex',justifyContent:'space-between',marginTop:20}}>
        <div style={{height:100,width:350,backgroundColor:'white',borderRadius:10,display:'flex',borderStyle:'solid',borderColor:'whitesmoke'}}>
        <img src={contact}/>
        <div>
          <h5>contact Us</h5>
            </div>
            </div>
        </div> 
        <hr style={{width:1200}}/> 
        <div style={{ width:1200,display:'flex',justifyContent:'space-between'}}>
        <div style={{height:200,width:400,backgroundColor:'white',borderRadius:10,borderStyle:'solid',borderColor:'whitesmoke'}}>
          <h5> More ways to pay</h5>
        <h6>Default purchase settings Amazonpay Bank accounts for refunds coupons </h6>
        </div> 
        <div style={{height:200,width:350,backgroundColor:'white',borderRadius:10,borderStyle:'solid',borderColor:'whitesmoke'}}>
          <h5>Emails alerts, message,and ads</h5>
        <h6> Advertising preferences communication preferences sms alert preferences message center ,allow shopping notifications and deals notification</h6>
        </div>  
        <div style={{height:200,width:400,backgroundColor:'white',borderRadius:10,borderStyle:'solid',borderColor:'whitesmoke'}}>
          <h5>Digital Content and Devies</h5>
        <h6>Apps and more contents and devices digital gifts you've received</h6>
        </div> 
        </div>
      </div>
  )
}

export default Profile