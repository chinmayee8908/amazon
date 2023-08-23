import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Header from '../Header/Header';
import SubHeader from '../SubHeader/SubHeader';
import Footer from '../Footer/Footer';
import All from '../Header/All';
import { useState } from 'react';
const Layout = () => {
const[showAll,setShowAll]=useState(false);
  return (
<>
{showAll &&<All setShowAll={setShowAll}/>}
<Header/>
<SubHeader setShowAll={setShowAll}/>
<Outlet/>
<Footer/>
    </>
  )
}

export default Layout