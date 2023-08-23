import React from 'react'
import "./All.css";
import { display } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
const All = ({setShowAll}) => {

  return (
    <div>
    <div className='All-container'style={{display:'flex',flexDirection:'row', position:"absolute", top:"20%", zIndex:100,}} >
        {/* <div style={{backgroundColor:'black',height:50,color:'white',fontWeight:'bold' ,display:"flex",alignItems:'center',justifyContent:'center'}}>Hello, SignIn */}
        <div onClick={()=>{setShowAll(false);}}>
    <CloseIcon/>
    </div>
    {/* </div> */}
    <div style={{textAlign:'center'}} >
       <h5 style={{fontWeight:'bold'}}>Trending</h5> 
       <h5>Best Seller</h5> 
       <h5>New Release</h5> 
       <h5>Movers and Shakers</h5>
       <hr></hr>
       <h5 style={{fontWeight:'bold'}}>Digital Content And Device </h5> 
       <h5>Echo & Alexa</h5> 
       <h5> Kindle </h5> 
       <h5>Amazon prime Video</h5>
       <h5>Amazon prime music</h5>
       <h5>Audible Audiobooks</h5> 
       <hr></hr>
       <h5 style={{fontWeight:'bold'}}>Shop By Category</h5> 
       <h5>Echo & Alexa</h5> 
       <h5> Kindle </h5> 
       <h5>Amazon prime Video</h5>
       <h5>Amazon prime music</h5>
       <h5>Audible Audiobooks</h5> 
      </div> 
    </div>
    </div>
  )
}

export default All