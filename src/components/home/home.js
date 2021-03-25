import React from "react";
import { Alert, Container, Row, Col, Card, CardTitle, CardHeader, CardBody, CardImg , Button, Modal, ModalBody, ModalHeader} from "shards-react";
import { Form, FormInput, FormGroup } from "shards-react";
import { FaSkype, FaSlackHash, FaWhatsapp, FaSms, FaMailBulk, FaSlack, FaPhone, FaArrowRight } from 'react-icons/fa';
import { ListGroup, ListGroupItem, ListGroupItemHeading } from "shards-react";

import { useState, useEffect } from "react";
import { appConfig } from "../config"
import axios from 'axios'
import ReactTimeAgo from 'react-time-ago'
import Services from '../services/services'
import Articles from '../articles/articles'
import Products from '../products/products'







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
              sys {id publishedAt}
        
                
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
         
         <section>
          <Row  style={{ paddingTop: "20px" }}>
             
          <Col sm="12" lg="2">
           <img src={item.image.url} className="img-thumbnail img-fluid"></img>
          </Col>
          <Col sm="12" lg="10">
           <h5>{item.title}</h5>
           <p><small>Published  <ReactTimeAgo date={item.sys.publishedAt} locale="en-US"  /> </small></p>
           <p>{item.body}</p>
           <p className="text-right"> <Button className="btn btn-outline-primary btn-sm">Read more &rarr;</Button></p>
           
          </Col>
        
        </Row>
         <Row>
         <Col><hr></hr></Col>
       </Row>
       </section>
        )
       
        // force wrap to next row every 4 columns
       
    })


    return (
        <Container style={{ paddingTop: "10px" }}>


     
   <section className="bgimage" >
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 bgimage-text-h ">
      <div className ="container-banner">
     
          <p className="text-center"> Demo Portal</p> 
          <p className="text-center  bgimage-text-p">Technology, Demos and Proof of Concepts</p> 

      
  
     </div>
    
     
      </div>

    </div>
  </div>
</section>





  <Row style={{ paddingTop: "10px" }}>
<Col>
<hr className="hr-1"></hr>

</Col>

  </Row>
  <Row style={{ paddingTop: "10px" }}>
  <Col sm="12" lg="6">
  <div className="mycontent-left">
  <h3>Articles</h3>
  <Articles></Articles>
  </div>
  </Col>  
  <Col sm="12" lg="6">
  <h3>Demos</h3>
  <Products></Products>
  </Col>  
  </Row> 
          
      
      
      
        </Container>
        
    )       
    
    
    
    
    
  }
}

export default Home;