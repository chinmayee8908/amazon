import React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
const SubHeader = ({setShowAll}) => {

  return (
    <div >
        <ButtonGroup style={{backgroundColor:'black', height:40}}>
      <Button variant="black"style={{color:'white',fontSize:13}} onClick={()=> setShowAll(true)}>All</Button>
      <Button variant="black"style={{color:'white',fontSize:13}}>Amazon miniTv</Button>
      <Button variant="black"style={{color:'white',fontSize:13}}>Sell</Button>
      <Button variant="black"style={{color:'white',fontSize:13}}>Best Seller</Button>
      <Button variant="black"style={{color:'white',fontSize:13}}>Mobiles</Button>
      <Button variant="black"style={{color:'white',fontSize:13}}>Today's Deal</Button>
      <Button variant="black"style={{color:'white',fontSize:13}}>customer Services</Button>
      <Button variant="black"style={{color:'white',fontSize:13}}>New Release</Button>
      <Button variant="black"style={{color:'white',fontSize:13}}>Electronics</Button>
      <Button variant="black"style={{color:'white',fontSize:13}}>Prime</Button>
      <Button variant="black"style={{color:'white',fontSize:13}}>Home&Kitchen</Button>
      <Button variant="black"style={{color:'white',fontSize:13}}>Fashion</Button>
      <Button variant="black"style={{color:'white',fontSize:13}}>Amazon Pay</Button>
      <Button variant="black"style={{color:'white',fontSize:13}}>Computers</Button>
      <Button variant="black"style={{color:'white',fontSize:13}}>Gift Ideas</Button>
      <Button variant="black"style={{color:'white',fontSize:13}}>Beauty And personal Care </Button>
      <Button variant="black"style={{color:'white',fontSize:13}}>prime</Button>
      <Button variant="black"style={{color:'white',fontSize:13}}>Hair</Button>
    </ButtonGroup>
    </div>
  )
}

export default SubHeader