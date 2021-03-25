import React from "react";
import { Alert, Container, Row, Col, Card, CardTitle, CardHeader, CardBody, CardImg , Button, Modal, ModalBody, ModalHeader, Navbar, NavbarBrand} from "shards-react";
import { Form, FormInput, FormGroup } from "shards-react";
import { FaSkype, FaSlackHash, FaWhatsapp, FaSms, FaMailBulk, FaSlack, FaPhone, FaArrowRight, FaTools } from 'react-icons/fa';
import { ListGroup, ListGroupItem, ListGroupItemHeading } from "shards-react";

import { useState, useEffect } from "react";
import { appConfig } from "../config"
import axios from 'axios';




class Footer extends React.Component
{
  

  state = {
    services: []
  }
 
  // Authenticate the request
 
  componentDidMount() 
  {
    
  }



  render() {
   
    
    


    return (
      <section>
      <Row style={{ paddingTop: "30px" }}>
        <Col>
       
        </Col>
      </Row>
      
      </section>
    )       
    
    
    
    
    
  }
}

export default Footer;