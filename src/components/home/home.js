import React from "react";
import { Alert, Container, Row, Col, Card, CardTitle, CardHeader, CardBody, CardImg , Button, Modal, ModalBody, ModalHeader} from "shards-react";
import { Form, FormInput, FormGroup } from "shards-react";
import { FaSkype, FaSlackHash, FaWhatsapp, FaSms, FaMailBulk, FaSlack, FaPhone, FaArrowRight } from 'react-icons/fa';
import { ListGroup, ListGroupItem, ListGroupItemHeading } from "shards-react";

import { useState, useEffect } from "react";
import { appConfig } from "../config"
import axios from 'axios';




class Home extends React.Component
{
  

  state = {
    articles: []
  }
 
  // Authenticate the request
 
  componentDidMount() 
  {
    const API = appConfig.graphQLHost+"/"+appConfig.space_id+"/"
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+appConfig.access_token
    }
    axios.post(API, 
      {
        query : `{
          articleCollection(limit: 10) {
            items
            {
              title
              body
              image {fileName url}
        
                
            }
          }
        }`

    }
    , {  headers : headers  })
      .then(res => {
        
        this.setState({ articles: res.data.data.articleCollection.items })
        console.log("RES --> ",res.data.data.articleCollection.items )
       
      }).catch((error) => {
        console.error(error)
      })
  }

 

  render() 
  {
   
   

    
    let columns=[];
    this.state.articles.forEach((item,idx) => {

      
        
        columns.push(
          <Col style={{ paddingTop: "10px" }}>
          <Card style={{ maxWidth: "300px" }}>
          <CardHeader>Article</CardHeader>
          <CardImg src={item.image.url} />
          <CardBody>
            <CardTitle>{item.title}</CardTitle>
            <p className="text-truncate">{item.body}</p>
            <Button className="btn btn-outline-warning btn-sm">Read more &rarr;</Button>
          </CardBody>
        
        </Card>
        </Col>
        )
       
        // force wrap to next row every 4 columns
        if ((idx+1)%2===0) {columns.push( <Row style={{ paddingTop: "20px" }}></Row>)}
    })


    return (
        <Container style={{ paddingTop: "10px" }}>
     
     <div className="jumbotron " style={{ 
      backgroundImage: `url("https://cdn.pixabay.com/photo/2015/05/31/10/51/acer-791027__340.jpg")`, backgroundSize:"100%"
    }}>
    <h1 className="display-4 text-info">Hello Spark</h1>
    <p className="lead text-info">This is a simple demo built on Contentful Headless CMS and React JS.</p>
    
    <p className="lead text-info">For all the CSS and HTML elements we are using Bootstrap.</p>
    <p className="lead">
    <a className="btn btn-warning btn-sm" href="#" role="button">Learn more</a>
   </p>
   </div>
           <Row style={{ paddingTop: "30px" }}>
          
          {columns}
        </Row>
      
        </Container>
        
    )       
    
    
    
    
    
  }
}

export default Home;