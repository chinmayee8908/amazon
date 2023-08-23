import React from 'react'
import logo from "../logo.png"
const Footer = () => {
  return (
    <>
    <div style={{backgroundColor:"grey",color:'white',display:'flex',justifyContent:'center',alignContent:'center',height:35,fontSize:25}}>Back to Top</div>
    <div style={{ height:450,backgroundColor:'black'}}>
    <div style={{ height:300,backgroundColor:'black', display:'flex',alignContent:'center',justifyContent:'center',flexDirection:'row',}}>
         <div style={{color:'white',fontSize:20,height:200,width: 300,marginTop:20}}>
    <h4> Get to Know Us</h4>
     <p>About us </p>
     <p>About us </p>
     <p>Press Release </p>
    </div>
    <div style={{color:'white',fontSize:20,height:200,width: 300,marginTop:20}}>
     <h4>Make money with us</h4>
     <p>Sell on Amazon</p>
     <p> Protect and Buikd Your Brand</p>
     <p>Amazon Global Selling</p>
     <p> Fulfilmet By Amazon</p>
     <p>Advertise Your Product</p>  
  </div>
    <div style={{color:'white',fontSize:20,height:200,width: 300,marginTop:20}}>
    <h4>connect with Us</h4>
     <p>Facebook </p>
     <p>Twitter </p>
     <p>Instagram </p>
    </div>
    </div>
<img src={logo} alt='no image' style={{ height: 50, width: 150, marginLeft:"40%" }} />
<div style={{color:'white',display:'flex',justifyContent:'center',textAlign:'center'}}>
    <span style={{margin:20}}>Australia</span>
<span style={{margin:20}}>Spain</span>
<span style={{margin:20}}>Canada</span>
<span style={{margin:20}}>China</span>
<span style={{margin:20}}>Germany</span>
<span style={{margin:20}}>France</span>
<span style={{margin:20}}>Italy</span>
<span style={{margin:20}}>Netherland</span>
<span style={{margin:20}}>Poland</span></div>
</div>
    </>
  )
}

export default Footer