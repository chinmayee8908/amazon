import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState ,useEffect} from 'react'
const AddAddress = () => {
  const editAdd=useLocation()?.state?.add;
  let[address,setAddress]=useState([]);
  const [name, setName] = useState(editAdd? editAdd?.name: '');
  const [num,setNum]= useState(editAdd? editAdd?.num: '');
  const [landmark,setLandmark] = useState(editAdd? editAdd?.landmark: '');
  const [state, setState] = useState(editAdd? editAdd?.state: '');
  const [flat, setFlat] = useState(editAdd? editAdd?.flat: '');
  const [city, setCity] = useState(editAdd? editAdd?.city: '');
  const [pin, setPin] = useState(editAdd? editAdd?.pin: '');
  const [area, setArea] = useState(editAdd? editAdd?.area: '');

   const handleSubmit=()=>{
      const Newaddress={
      name:name,
      num:num,
      landmark:landmark,
      state:state,
      flat:flat,
      city:city,
      pin:pin,
      area:area,
      id : new Date()+ Math.random()
          }
    
      alert("form data submmited")
      setName('');
      setNum('');
      setLandmark('');
      setState('');
      setFlat('');
      setArea('');
      setPin('');
      setCity('');
      let savedAddress=JSON.parse(localStorage.getItem("address"))
            if(savedAddress){
              if(editAdd){
                savedAddress= savedAddress.filter(item=> item.id!= editAdd.id);
              }
              savedAddress.push(Newaddress)
              setAddress(savedAddress)
            }
      else{
        savedAddress=[Newaddress]
        setAddress(savedAddress)
      }
        localStorage.setItem('address', JSON.stringify(savedAddress))
        // // address.forEach(element => {
        // //   console.log(element)
        // });
  }
       // useEffect(()=>{ localStorage.setItem('address', JSON. stringify(address));},[address]);
 return (
    <div style={{display:'flex',justifyContent:'center',marginTop:20}}>
       <div style={{height:600,width:600}}>
      <h2>
      Add a Address
      <h5>or find a amazon collection location near you</h5>
      </h2>
      <div style={{backgroundColor:'skyblue',textAlign:'center',borderRadius:8,height:35}}>
        Save time ,Autofill your Current Location <button style={{marginLeft:70,marginTop:3}}>Autofill</button>
      </div>
      <div style={{display:'flex',flexDirection:"column"}}>Full name(First and Last Name)
        <input type='text'value={name}onChange={(e)=>setName(e.target.value)}/>
      </div>
      <div style={{display:'flex',flexDirection:"column"}}>Mobile Number
        <input type='text'  value={num} onChange={(e)=>setNum(e.target.value)}/>
      </div>
      <div style={{display:'flex',flexDirection:"column"}}>Flat ,House No.,Building,Company
        <input type='text' value={flat}
        onChange={(e)=>setFlat(e.target.value)}/>
      </div>
      <div style={{display:'flex',flexDirection:"column"}}>Pincode
        <input type='text'value={pin} onChange={(e)=>setPin(e.target.value)}/>
      </div>
      <div style={{display:'flex',flexDirection:"column"}}>Area street ,sector,village
        <input type='text' value={area}onChange={(e)=>setArea(e.target.value)}/>
      </div>
      <div style={{display:'flex',flexDirection:"column"}}>Landmark
        <input type='text'value={landmark}  onChange={(e)=>setLandmark(e.target.value)}/>
      </div>
      <div style={{display:'flex'}}>
      <div style={{display:'flex',flexDirection:"column"}}>Town/city
        <input type='text'value={city} onChange={(e)=>setCity(e.target.value)}/>
      </div>
      <div style={{display:'flex',flexDirection:"column",marginLeft:93}}>State
      <select style={{width:300}} value={state} onChange={(e)=>setState(e.target.value)}>
<option >Andhra pradesh</option>
<option> Punjab </option>
<option > Bihar</option>
<option > Goa</option>
<option > Odisha</option>
<option > Rajasthan</option>
</select>
      </div>
          </div>
          <div>Delivery Instruction(optional)</div>
          <div><input type='checkbox'/>Make this my default Address</div>
          <div style={{display:'flex',justifyContent:'center'}}>
            <button onClick={handleSubmit}>Submit</button></div>
      </div>
    </div>
  )
}

export default AddAddress