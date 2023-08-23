import { BorderAllRounded, Margin } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const AddressPage = () => {
  const navigate= useNavigate()
   const handleAdd=()=>{
  navigate("/add")
  }
  // const getMyAddress=()=>{
  // const MyAddress=(localStorage.getItem("address"))
  // if (MyAddress){
  //   return JSON.parse(MyAddress)
  // }
  // }
  const [allAdd, setAllAdd]= useState([]);
  useEffect(()=>{
    let allAddress=(JSON.parse(localStorage.getItem("address")))
    debugger
    setAllAdd(allAddress)
  },[])

  console.log("this is all address--->",allAdd);
  //delet
  const handleDelet=(id)=>{
    // alert("hello",id);
    const delAddress=allAdd?.filter((e)=>e.id !==id);
    setAllAdd([...delAddress])
    localStorage.setItem('address', JSON.stringify(delAddress))
   }
   //Edit
   const handleEdit=(address)=>{
      console.log("editing .....", address)
      navigate("/add", {state: {add:address}});
      // const editedAddress = (id) => {
      
      //   if (id === address.id) {
        
      //     return { ...address };
      //   }
      //   return address;
      
      // setAllAdd(editedAddress);
    
      // let editData = JSON.parse(localStorage.getItem('data'));
      // if(editData){
      //   editData.push(address)
      //   }
      // else{
      //   editData=[]
      // }
      //   localStorage.setItem('address', JSON.stringify(editData))
  }

   
  return (
    <div style={{height:800}}>
      <div style={{display:'flex',alignItems:'center',flexDirection:'column',fontWeight:'bold',fontSize:25}}>Your Addresses
      <h3>click here to add new addresses 
        <div>
        <button  style={{height:100,width:200}} onClick={handleAdd}>+</button>
        </div>
      </h3>
      </div>
     <div style={{display:"flex",justifyContent:'center'}}>
    {allAdd?.length == 0 ? <h1>No Addresses added yet.</h1> : allAdd?.map(show=>{
                      return (
                      <div key={show.key} style={{height:250,backgroundColor:"whitesmoke",borderRadius:10,margin:10}}>
                        <div style={{margin:10}}>
                      <div>your name is:{show.name}</div>
                      <div>your mobile number is:{show.num}</div>
                      <div>your  flat no. is:{show.flat}</div>
                      <div>your pincode is:{show.pin}</div>
                      <div>your  area is:{show.area}</div>
                      <div>your landmark is:{show.landmark}</div>
                      <div>your state is:{show.state}</div>
                      <div>your city is:{show.city}</div>
                      </div>
                      <div style={{display:"flex",justifyContent:'center'}}>
                      <button style={{margin:5}} onClick={()=>handleEdit(show)}>Edit</button>
                      <button style={{margin:5}} onClick={()=>handleDelet(show.id)}>Delet</button>
                      </div>
                    </div>
                  )}            
               )}
                </div>
      </div>
    
  )
}


export default AddressPage