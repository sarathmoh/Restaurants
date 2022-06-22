import React from 'react'
import { useState, useEffect } from 'react'
import { Row,Col } from 'react-bootstrap'
import Cards from './Cards'


function Home() {

const [hotels,setHotels]=useState([]) 

useEffect(() => {
const fetchData= async ()=>{
await fetch('/restaurants.json')
.then((res)=>res.json())
.then((data)=>setHotels(data.restaurants))  
}  

fetchData()
 
}, [])
console.log(hotels);
return (
  <Row>
  {hotels.map((item)=>(

   <Col sm={12}  lg={6} xl={3} >
    <Cards  data={item} />
    </Col>
  ))}
  </Row>
) 
 }

export default Home