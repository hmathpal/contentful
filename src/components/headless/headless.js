import React from "react";
import { Alert, Container, Row, Col, Card, CardTitle, CardHeader, CardBody, CardImg , Button, Modal, ModalBody, ModalHeader} from "shards-react";
import { ListGroup, ListGroupItem, ListGroupItemHeading } from "shards-react";





class Headless extends React.Component
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
      <Container>
      <Row style={{ paddingTop: "30px" }}>
<Col>

<h5>Contentful Headless CMS</h5>
<hr className="hr-2"></hr>

</Col>

 </Row>

 <Row style={{ paddingTop: "30px" }}>
 <Col sm="12" lg="8">


 <img src="https://cdn.pixabay.com/photo/2015/10/17/20/44/work-993331_960_720.jpg" className="img-fluid" alt="Responsive image" />


<Card>
      <CardBody>
    
        <CardTitle>You are on a live demo </CardTitle>
      
      
      
        
        <p>This demo portal is built on Contentful Headless CMS end-to-end. </p>
        
        </CardBody>
    </Card>
    </Col>

    <Col sm="12" lg="4"> 

      <ListGroup>
      <ListGroupItem className="active" >Components</ListGroupItem>
      <ListGroupItem>Contentful CMS - GraphQL API</ListGroupItem>
      <ListGroupItem>React JS</ListGroupItem>
      <ListGroupItem>Bootstrap 4</ListGroupItem>
      <ListGroupItem>Shards React  </ListGroupItem>

     
    </ListGroup>
    

</Col>

 </Row>
         
  
       </Container>
    )       
    
    
    
    
    
  }
}

export default Headless;