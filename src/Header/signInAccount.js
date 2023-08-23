// import React from 'react'
// import "./signInAccount.css";
// import CloseIcon from '@mui/icons-material/Close';
// const signInAccount = ({setShowLogin,setCreate}) => {
//   const handlesignin=()=>{
//     setShowLogin(false);
//   }
//   const handleSignUP=()=>{
//     setShowLogin(false);
//     setCreate(true);
//   }
//   return (
//     <div  style={{display:'flex',flexDirection:'row', position:"absolute", top:"30%",marginLeft:700}}>
//       <div className='signIn-container' > 
//       <div className='signIn-subcontainer'style={{marginLeft:20}}>
//       <div onClick={handlesignin}>
//        < CloseIcon/>
//        </div> 
//       <p>Enter Mobile Or Email Address</p>
//       <input type="text" style={{marginLeft:5,width:250}}/>
//       <button style={{marginTop:40,width:180,marginLeft:30}} >Continue</button>
//       <p>Need Help?</p>
//       </div>
//       <h5>_______New To Amazon_______</h5>
//       <button style={{backgroundColor:'yellow'}} onClick={handleSignUP}>Create Account</button>
//       <div style={{marginLeft:20}}>condition of use  |  privacy</div>
//       </div>
//       <div>
//       </div>
//             </div>
//   )
// }
// export default signInAccount;