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
   
  const query = `query {
    articleCollection(limit: 10) {
      items
      {
        title
        body
        image {fileName url}
  
          
      }
    }
  }`

   //const API = appConfig.host+appConfig.space_id+"/environments/"+appConfig.environment+"/entries?content_type=article&access_token="+appConfig.access_token+"&include=3";
    const API = appConfig.graphQLHost+appConfig.space_id+"/"

    axios.post(API, query, {headers : {Authentication : 'Bearer '+appConfig.access_token} , "Content-Type": "application/json"})
      .then(res => {
       
       this.setState({ articles: res.data.items })
      console.log(res.data.items )
       
      }).catch((error) => {
        console.error(error)
      })
  }



  render() {
   
    return(
        <Container>

     

      <Row style={{ paddingTop: "20px" }}>

        
          <Col>
          <Card>
            <CardImg top src="https://images.unsplash.com/photo-1542736667-069246bdbc6d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8aGVhbHRofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
            <CardBody>
              <p>Our team and skills. </p>
            </CardBody>
          </Card>
        </Col>
          
        
        <Col>
          <Card>
            <CardImg top src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjZ8fGhlYWx0aHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
            <CardBody>
              <p>Natural products and medicines.</p>
            </CardBody>
          </Card>
        </Col>

        <Col>
          <Card>
            <CardImg top src="https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDB8fGhlYWx0aHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
            <CardBody>
            <p>Research and Development.</p>
            </CardBody>
          </Card>
        </Col>
        
     
      </Row>
          
      {this.state.articles.map((arctile, index) => (
        <p key={index}>Hello, {arctile.fields.title} !</p>
    ))}
          
          
    </Container>

    )
  }
}

export default Home;