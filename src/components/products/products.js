import React from "react";
import { Alert, Container, Row, Col, Button} from "shards-react";
import { appConfig } from "../config"
import axios from 'axios';
import { truncateString } from "../util"

import ReactTimeAgo from 'react-time-ago'

class Products extends React.Component
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
          productCollection(limit: 10) {
            items
            {
              name
              
              path

              description

              image {fileName url}
              sys {id publishedAt}
              
        
                
            }
          }
        }`

    }
    , {  headers : headers  })
      .then(res => {
        
        this.setState({ articles: res.data.data.productCollection.items })
       
       
      }).catch((error) => {
        console.error(error)
      })
  }

  handleClick(path)
{
 

  window.location.href= "../"+path;
 
}

  render() {
   
    
    let columns=[];
    this.state.articles.forEach((item,idx) => {

      
        
        columns.push(
         
         <section>
         <Row  style={{ paddingTop: "20px" }}>
             
          <Col sm="12" lg="2">
           <img src={item.image.url} className="img-thumbnail img-fluid"></img>
          </Col>
          <Col sm="12" lg="10">
           <h5>{item.name}</h5>
           <p><small>Published  <ReactTimeAgo date={item.sys.publishedAt} locale="en-US"  /> </small></p>
          <p>{truncateString(item.description,250)}</p>
        
           <p className="text-right"> <Button className="btn btn-outline-primary btn-sm" onClick={() => this.handleClick(item.path)}>Demo &rarr;</Button></p>
           
          </Col>
        
        </Row>
        <Row>
          <Col><hr></hr></Col>
        </Row>
        </section>
        )
       
     
    })


    return (
    <Container>
       
          {columns}
   
        </Container>
    )       
    
    
    
    
    
  }
}

export default Products;