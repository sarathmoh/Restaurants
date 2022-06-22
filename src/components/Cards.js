import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'



const Cards=({data})=> {
  return (
  
  <Link to={`information/${data.id}`}> 
  <Card className="my-3 p-3 rounded">
  <Card.Img variant="top" src={data.photograph} className="p-3" />
    <Card.Body>
    <Card.Title as="div" >{data.name}</Card.Title>
    <Card.Text as="div" >{data.neighborhood}</Card.Text>
    <Card.Text as="div" >{data.cuisine_type}</Card.Text>
    </Card.Body>
  </Card>
  </Link>
  

  )
}

export default Cards