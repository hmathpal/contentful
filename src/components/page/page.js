import React from "react";
import { Alert, Container, Row, Col, Card, CardTitle, CardHeader, CardBody, CardImg , Button, Modal, ModalBody, ModalHeader} from "shards-react";
import { ListGroup, ListGroupItem, ListGroupItemHeading } from "shards-react";
import { PAGES } from "../config"

import Services from '../services/services'
import Articles from '../articles/articles'
import Products from '../products/products'



class Page extends React.Component
{
  





  render() {
   
  
    const id = this.props.match.params.id;
    let page, pageComponent
    console.log("id",id)
    

    switch(id)
    {
     
     
      case "articles":
       
      page= PAGES.articles;
      pageComponent=<Articles></Articles>;
        
      break;
     
      case "products":
        default:
      page= PAGES.products;
      pageComponent=<Products></Products>;
        
      break;

    
     
    
    }
    
  
  
  
  
  
  

    return (
      <Container>
      <Row style={{ paddingTop: "30px" }}>
<Col>

<h5>{page.title}</h5>
<hr className="hr-2"></hr>


</Col>

{pageComponent}

 </Row>
         
  
       </Container>
    )       
    
    
    
    
    
  }
}

export default Page;