import React, { useState } from 'react'
import Header from './Header/Header';
import Home from './HomePage/Home';
import SubHeader from './SubHeader/SubHeader';
import SignInAccount from './Header/signInAccount';
import All from './Header/All';
import Footer from './Footer/Footer';
import CreateAccount from './Header/CreateAccount';
import LoginPage from './Header/LoginPage';
import Navigating from './Navigation/Navigating';
const App = () => {
  // const [showLogin, setShowLogin]= useState(false);
  // const[showAll,setShowAll]=useState(false);
  // const[showCreate,setCreate]=useState(false);
  return (
    <div>
      {/* <Header setShowLogin={setShowLogin}/>
      <SubHeader setShowAll={setShowAll}/>
      <Home/>
      {showLogin && <SignInAccount setShowLogin={setShowLogin} setCreate={setCreate}/>}
      {showAll &&<All setShowAll={setShowAll}/>}
       {showCreate && <CreateAccount setCreate={setCreate}/>}
      <Footer/>
      <LoginPage/> */}
      <Navigating/>
    </div>

  )
  
}

export default App;