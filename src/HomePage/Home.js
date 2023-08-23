import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./Home.css";
import home1 from "../assets/homePagePhotos/home3.jpg"
import home2 from "../assets/homePagePhotos/hom.jpg"
import home3 from "../assets/homePagePhotos/home.jpg"
import product from "../assets/homePagePhotos/electronic.jpg"
import grocery from "../assets/homePagePhotos/grocery.jpg";
import mobile from "../assets/homePagePhotos/mobile.jpg";
import mobiles from "../assets/homePagePhotos/mobiles.jpg"
import mobile2 from "../assets/homePagePhotos/mobile2.jpg";
import mobile3 from "../assets/homePagePhotos/mobile3.jpg"
import tv from '../assets/homePagePhotos/tv.jpg'
import { grey } from '@mui/material/colors';
const Home = () => {
  return (
    <div>
      
      <Carousel  >
        <Carousel.Item>
          <img
            className="d-block w-100" style={{ height: 400 }}
            src={home3}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" style={{ height: 400 }}
            src={home2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" style={{ height: 400 }}
            src={home1}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
            <div className='products'>
        <div className='container-1'>
          <h3 style={{ color: 'black', fontWeight: 'bold' }}>Electronics From Top Brand</h3>
          <img src={product} />
          <h5 style={{ color: 'black', fontWeight: 'bold' }}>Electronics From Top Brand</h5>
        </div>
        <div className='container-2'>
          <h3 style={{ color: 'black', fontWeight: 'bold' }}>Groceries</h3>
          <img src={grocery} />
          <h5 style={{ color: 'black', fontWeight: 'bold' }}>SUMMER SPECIALS</h5>
          <h6 style={{color: 'black', fontWeight: 'bold'}}>Beat the heat  this summer  with fresh veggies </h6>
        </div>
        <div className='container-3'>
          <h3 style={{ color: 'black', fontWeight: 'bold' }}>Mobiles from top brands</h3>
          <img src={mobile} />
          <h5 style={{ color: 'black', fontWeight: 'bold' }}>Price drop Alert!upto30% OFF</h5>
        </div>
        </div>
        
        <div className='container-4'>
       <img src={mobiles} style={{ height: 280, width:400,marginLeft: 20,marginTop: 20}}/>
          <h3 style={{ color: 'black', fontWeight: 'bold',display:'flex',justifyContent:'center',alignItems:'center' ,}}>Upto 70 off on top brands |Top selection from here</h3>
          <img src={mobile2} style={{ height: 280, width:300,marginLeft: 20,marginTop: 20}}/>
        </div>
        <div className='container-5' style={{display:"flex",alignItems:"center"}}>
        <h1  style={{color: 'black', fontWeight: 'bold',marginLeft:20}}>iphone 13 from 57999/-|craziest Price on iphone </h1>
        <img src={mobile3 }style={{marginLeft:100,height:300,width:400}}/>
      </div>
      <div className='container-6' style={{display:"flex",alignItems:"center"}}>        <img src={tv}style={{marginLeft:20,height:300,width:400}}/>
      <h1  style={{color: 'black', fontWeight: 'bold',marginLeft:100}}>APPLIANCES FOR YOUR HOME |UPTO 55% OFF  </h1>
      </div>
      </div>
  
  )
}

export default Home