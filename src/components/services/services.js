import React from "react";
import { Alert, Container, Row, Col, Card, CardTitle, CardHeader, CardBody, CardImg , Button, Modal, ModalBody, ModalHeader} from "shards-react";

import { appConfig } from "../config"
import axios from 'axios';




class Services extends React.Component
{
  

  state = {
    services: []
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
          servicesCollection(limit: 10) {
            items
            {
              name
              
              detail
              
              appicon {fileName url}

                
            }
          }
        }`

    }
    , {  headers : headers  })
      .then(res => {
        
        this.setState({ services: res.data.data.servicesCollection.items })
        console.log("RES --> ",res.data.data.servicesCollection.items )
       
      }).catch((error) => {
        console.error(error)
      })
  }



  render() {
   
    
    let columns=[];
    this.state.services.forEach((item,idx) => {

      
        
        columns.push(
          <Col style={{ paddingTop: "10px" }}>
          <Card style={{ maxWidth: "300px" }}>
          <CardHeader>Services</CardHeader>
          
          <CardBody>
            <CardTitle>{item.name}</CardTitle>
            <CardImg src={item.appicon.url} style={{ width: "100px" }}/>
            <p className="text-truncate">{item.detail}</p>
            <Button>Read more &rarr;</Button>
          </CardBody>
        
        </Card>
        </Col>
        )
       
       
    })


    return (
        <Container>
           <Row style={{ paddingTop: "30px" }}>
          {columns}
        </Row>
        </Container>
    )       
    
    
    
    
    
  }
}

export default Services;