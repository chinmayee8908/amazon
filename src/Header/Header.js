import React from 'react'
import './Header.css'
import logo from "../logo.png"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlagIcon from '@mui/icons-material/Flag';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate= useNavigate();
  const handlegotologin =()=>{
    navigate("/loginpage")
  }
  return (
    <div style={{height:70}}>
      <nav className='Headerbody'>
        <img src={logo} alt='no image' style={{ height: 40, width: 150, marginLeft:5}} />
        <div className='searchBar'>
          <div className='Header_address' style={{ display: 'flex', flexDirection: 'column', color: 'white',marginLeft:30 }}>
            <LocationOnIcon />
            <span>Hello</span>
            <span style={{ fontWeight: 'bold', color: 'white',fontSize:10}}>Select your address</span>
          </div>
          <div style={{display: 'flex', marginLeft: "30px" }}>
            <select className="Header-select" id="" required>
              <option selected disabled value="choose">All</option>
            </select>
            <input type='text' className='Header_SearchBar' placeholder='Search in amazon page' />
            <SearchIcon fontSize='large' className='Header_SearchIcon' />
          </div>
          </div>
              <div style={{ display:"flex",flexDirection: 'row' }}>
            <FlagIcon style={{ color: 'white' }} />
            <select style={{height:30}}>
              <option selected disabled value="choose">EN</option>
            </select>
          </div>

          <div onClick={ handlegotologin} className='Header_signin' style={{ display: 'flex', flexDirection: 'column', marginLeft:30 }}>
            <span style={{ color: 'white' }}>Hello signin &</span>
            <span style={{ fontWeight: 'bold', color: 'white' }}>Account</span>
          </div>
          <div className='Header_returns_refund' style={{ display: 'flex', flexDirection: 'column', marginLeft: 30 }}>
            <span style={{ color: 'white' }}>Returns and</span>
            <span style={{ fontWeight: 'bold', color: 'white' }}>orders</span>
          </div>
          <div className='basket' style={{ display: 'flex', flexDirection: 'row', marginLeft: 25, color: 'white' }}>
            <ShoppingCartIcon />cart
        
          </div>   
      </nav>
    </div>
  )
}
export default Header