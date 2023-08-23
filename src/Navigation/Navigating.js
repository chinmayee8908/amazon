import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Layout from './Layout';
import LoginPage from '../Header/LoginPage'; 
import Home from '../HomePage/Home';
import Profile from '../Header/Profile';
import AddressPage from '../Header/AddressPage';
import AddAddress from '../Header/AddAddress';
const Navigating = () => {
  return (
    <div>
  <Router>
<Routes>
<Route path="/" element={<Layout/>} >
<Route index element={<Home/>}/>
<Route path="profile" element={<Profile/>}/>
<Route path='Address' element={<AddressPage/>}/>
<Route path='/add' element={<AddAddress/>}/>
</Route>
<Route path="/loginpage" element={<LoginPage/>} />

</Routes>
</Router>
    </div>
  )
}

export default Navigating