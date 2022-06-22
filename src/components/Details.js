import React from 'react'
import { useState,useEffect } from 'react'
import {useParams,Link} from 'react-router-dom'
import { Row,Col,Image,ListGroup } from 'react-bootstrap'
const Details = () => {

    const { id }=useParams()
    const [item, setItem]=useState([])   
    useEffect(() => {
    const fetchData= async ()=>{
    await fetch('/restaurants.json')
    .then((res)=>res.json())
    .then((data)=>setItem(data.restaurants))
} 
    fetchData();
        
}, [])

const getItem=item.find((output)=>output.id == id)
console.log(getItem);

 return(
    <div>
        <Link className='btn btn-outline-dark my-2 rounded btn-sm' to="/" >Back</Link>
        {getItem? (

          <Row>
         
           <Col md={3} >
             <Image className="img" src={getItem.photograph} alt={getItem.name} fluid />
           </Col>
           <Col md={4}>
           <ListGroup.Item>
            <h2>{getItem.name}</h2>
            <p>{getItem.neighborhood}</p>
           </ListGroup.Item>

           <ListGroup.Item>
           
            <p>Cuisine:{getItem.cuisine_type}</p>
           </ListGroup.Item>


          
           <ListGroup.Item>
           
            <p>Address:{getItem.address}</p>
           </ListGroup.Item>
           </Col>
           <Col md={4}>
           <ListGroup.Item>
           
            <p>Operating Hours:</p>
            <h5>monday:{getItem.operating_hours.Monday}</h5>
            <h5>tuesday:{getItem.operating_hours.Thusday}</h5>
            <h5>wendsday:{getItem.operating_hours.Wendsday}</h5>
            <h5>thursday:{getItem.operating_hours.Thursday}</h5>
            <h5>friday:{getItem.operating_hours.Friday}</h5>
            <h5>saturday:{getItem.operating_hours.Saturday}</h5>
            <h5>sunday:{getItem.operating_hours.Sunday}</h5>
           </ListGroup.Item>

           </Col>

          </Row>

        ) : "null" }
        
    </div>
  )
}

export default Details